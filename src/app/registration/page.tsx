'use client'
import React, { useEffect, useState } from 'react'
import RegistrationDefaultLayout from './component/Layout.tsx/DefaultLayout'
import RenderStepIndicator from './component/Card/RenderStepIndicator';
import RenderPersonalInfoStep from './component/Card/RenderPersonalInfoStep';
import RenderRaceCategoryStep from './component/Card/RenderRaceCategoryStep';
import { RaceCategoryOptionsProps } from '@/types/race-category-options';
import { fetchAddOnsItem, fetchRaceCategoryOptionsItem, fetchRegistrationTestimonialsItem } from '@/lib/api';
import { RegistrationFormData } from '@/types/form-data';
import { initialRegistrationFormData } from '@/constants/form-defaults';
import RenderAddOnsStep from './component/Card/RenderAddOnsStep';
import { AddOnsProps } from '@/types/add-ons';
import RenderPaymentStep from './component/Card/RenderPaymentStep';
import RegistrationBenefits from '@/blocks/Stats/RegistrationBenefits';
import { TestimonialsItemProps } from '@/types/testimonials';
import RegistrationTestimonials from '@/blocks/Testimonials/RegistrationTestimonials';


const RegistrationPage = () => {

  const [formData, setFormData] = useState<RegistrationFormData>(initialRegistrationFormData);
  const [raceCategoryOptions, setRaceCategoryOptions] = useState<RaceCategoryOptionsProps[]>([]);
  const [testimonialsData, setTestimonialsData] = useState<TestimonialsItemProps[]>([]);
  const [addOns, setAddOns] = useState<AddOnsProps[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
      const loadSlides = async () => {
      try {
          const raceCategoryOptionsData = await fetchRaceCategoryOptionsItem();
          const testimonials = await fetchRegistrationTestimonialsItem();
          const addOnsData = await fetchAddOnsItem();
          setRaceCategoryOptions(raceCategoryOptionsData)
          setTestimonialsData(testimonials);
          setAddOns(addOnsData);
      } catch (err) {
          console.error('Failed to fetch hero slides', err);
          setError('Failed to load slides');
      } finally {
          setIsLoading(false);
      }
      };

    loadSlides();
  }, []);


  if (isLoading) {
  return <div className="h-[600px] flex items-center justify-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="h-[600px] flex items-center justify-center text-red-600">{error}</div>;
  }


    const nextStep = () => {
        if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
        window.scrollTo(0, 0);
        }
    };
    
    const calculateSubtotal = () => {
      const racePrice =
        raceCategoryOptions.find((option) => option.id === formData.raceCategory)?.price || 0;

      const merchandiseTotal = Object.values(formData.merchandise).reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );

      const donationAmount = Number(formData.customDonation) || formData.donationAmount || 0;

      return racePrice + merchandiseTotal + donationAmount;
    };

    const calculateTaxes = () => {
      const subtotal = calculateSubtotal();
      return +(subtotal * 0.08).toFixed(2);
    };

    const calculateTotal = () => {
      const subtotal = calculateSubtotal();
      const taxes = calculateTaxes();
      return +(subtotal + taxes).toFixed(2);
    };

  return (
    <RegistrationDefaultLayout>
      <main className="container mx-auto px-4 py-8">
        <RenderStepIndicator
        getCurrentStep={currentStep}
        />
        <div className="max-w-4xl mx-auto">
              {currentStep === 1 && 
              <RenderPersonalInfoStep
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep} 
              />}
              {
              currentStep === 2 && 
              <RenderRaceCategoryStep 
              raceCategoryOptions={raceCategoryOptions}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
              />
              }

              {currentStep === 3 && 
              <RenderAddOnsStep 
              addOnsData={addOns}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
              />
              }
              {currentStep === 4 && 
              <RenderPaymentStep
              raceCategoryOptions={raceCategoryOptions}
              calculateSubtotal={calculateSubtotal}
              calculateTotal={calculateTotal}
              calculateTaxes={calculateTaxes}
              formData={formData}
              setFormData={setFormData}
              prevStep={prevStep}
              />
              }
              
        </div> 
        <RegistrationBenefits />
        <RegistrationTestimonials 
        title="What Past Participants Say"
        testimonials={testimonialsData}
        />
      </main>
    </RegistrationDefaultLayout>
  )
}

export default RegistrationPage
