'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RegistrationFormData } from '@/types/form-data' // Adjust path as needed
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RaceCategoryOptionsProps } from '@/types/race-category-options'
import { FaArrowLeft, FaArrowRight, FaCcAmex, FaCcMastercard, FaCcVisa, FaExclamationTriangle } from 'react-icons/fa'

interface Props {
  formData: RegistrationFormData
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>
  raceCategoryOptions:RaceCategoryOptionsProps[]
  prevStep?: () => void
  calculateSubtotal:() => number
  calculateTaxes:() => number
  calculateTotal:() => number
}


const RenderPaymentStep = ({
  formData,
  setFormData,
  prevStep,
  calculateSubtotal,
  calculateTaxes,
  calculateTotal,
  raceCategoryOptions
}: Props
) => {

    const selectedRace = raceCategoryOptions.find(
      (option) => option.id === formData.raceCategory,
    );

    const subtotal = calculateSubtotal();
    const taxes = calculateTaxes();
    const total = calculateTotal();

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

      const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };


    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Payment & Summary</CardTitle>
          <CardDescription>
            Review your selections and complete your registration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Order Summary</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                {selectedRace ? (
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Race Registration:</span>
                      <span>{selectedRace.name}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm">
                      <span>Start Time:</span>
                      <span>{selectedRace.startTime}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span></span>
                      <span className="font-medium">${selectedRace.price}</span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-amber-600 dark:text-amber-400">
                      <FaExclamationTriangle className='mr-2'/>
                      No race category selected
                    </div>
                  </div>
                )}

                {/* Merchandise summary */}
                {Object.entries(formData.merchandise).some(
                  ([,item]) => item.quantity > 0,
                ) && (
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="font-medium mb-2">Merchandise:</div>
                    {formData.merchandise.tshirt.quantity > 0 && (
                      <div className="flex justify-between mb-1 text-sm">
                        <span>
                          Official Race T-shirt x
                          {formData.merchandise.tshirt.quantity}
                        </span>
                        <span>
                          $
                          {formData.merchandise.tshirt.price *
                            formData.merchandise.tshirt.quantity}
                        </span>
                      </div>
                    )}
                    {formData.merchandise.cap.quantity > 0 && (
                      <div className="flex justify-between mb-1 text-sm">
                        <span>
                          Running Cap x{formData.merchandise.cap.quantity}
                        </span>
                        <span>
                          $
                          {formData.merchandise.cap.price *
                            formData.merchandise.cap.quantity}
                        </span>
                      </div>
                    )}
                    {formData.merchandise.waterBottle.quantity > 0 && (
                      <div className="flex justify-between mb-1 text-sm">
                        <span>
                          Water Bottle x
                          {formData.merchandise.waterBottle.quantity}
                        </span>
                        <span>
                          $
                          {formData.merchandise.waterBottle.price *
                            formData.merchandise.waterBottle.quantity}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Donation summary */}
                {(formData.donationAmount > 0 ||
                  (formData.customDonation &&
                    parseFloat(formData.customDonation) > 0)) && (
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Charity Donation:</span>
                      <span>
                        $
                        {formData.donationAmount ||
                          parseFloat(formData.customDonation)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees (8%):</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Payment Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">
                    Card Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                      <FaCcVisa className='text-blue-700'/>
                      <FaCcMastercard className='text-red-600'/>
                      <FaCcAmex className='text-blue-500'/>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">
                      Expiry Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">
                      CVV <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="billingAddress">
                    Billing Address <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="billingAddress"
                    name="billingAddress"
                    placeholder="Enter your billing address"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2 mt-4">
                  <Checkbox
                    id="termsAccepted"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange("termsAccepted", checked as boolean)
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="termsAccepted"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500">
                      By checking this box, you agree to our{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>
                      ,{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                      , and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Refund Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            className="!rounded-button whitespace-nowrap"
          >
            <FaArrowLeft className='mr-2'/>
            Previous
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700 !rounded-button whitespace-nowrap"
            disabled={!formData.termsAccepted}
          >
            Complete Registration
            <FaArrowRight className='ml-2'/>
          </Button>
        </CardFooter>
      </Card>
    );
}

export default RenderPaymentStep
