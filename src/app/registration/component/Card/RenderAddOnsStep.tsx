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
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { RegistrationFormData } from '@/types/form-data'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight, FaHeart, FaMinus, FaPlus } from 'react-icons/fa'
import { AddOnsProps, MerchandiseType } from '@/types/add-ons'

interface Props {
  formData: RegistrationFormData
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>
  nextStep: () => void
  prevStep?: () => void
  addOnsData: AddOnsProps[]
}

const RenderAddOnsStep = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  addOnsData,
}: Props) => {
const handleMerchandiseChange = (item: MerchandiseType, value: number) => {
  setFormData((prev) => ({
    ...prev,
    merchandise: {
      ...prev.merchandise,
      [item]: {
        ...prev.merchandise[item],
        quantity: value,
      },
    },
  }));
};

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleDonationChange = (amount: number | string) => {
    if (typeof amount === 'number') {
      setFormData({ ...formData, donationAmount: amount, customDonation: '' })
    } else {
      setFormData({ ...formData, customDonation: amount, donationAmount: 0 })
    }
  }

  const donationOptions = [10, 25, 50, 100]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Optional Add-ons</CardTitle>
        <CardDescription>
          Enhance your race experience with merchandise and donations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Event Merchandise</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {addOnsData.map((item: AddOnsProps) => {
              const quantity = formData.merchandise[item.type]?.quantity || 0

              return (
                <div key={item.id} className="border rounded-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-500 mb-3">{item.quality}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">${item.price}</span>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full !rounded-button whitespace-nowrap"
                          onClick={() =>
                            handleMerchandiseChange(
                              item.type,
                              Math.max(0, quantity - 1)
                            )
                          }
                        >
                          <FaMinus className="text-sm" />
                        </Button>
                        <span className="mx-3 w-6 text-center">{quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full !rounded-button whitespace-nowrap"
                          onClick={() =>
                            handleMerchandiseChange(item.type, quantity + 1)
                          }
                        >
                          <FaPlus className="text-sm" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Separator className="my-4" />

        <div>
          <h3 className="text-lg font-medium mb-4">Charity Donation</h3>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-green-600">
                <FaHeart className='text-xl'/>
              </div>
              <div>
                <h4 className="font-medium text-green-800 dark:text-green-300">
                  Support Youth Running Programs
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Your donation helps provide running opportunities to
                  underprivileged youth in our community. 100% of donations go
                  directly to program costs.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {donationOptions.map((amount) => (
                <Button
                  key={amount}
                  variant={
                    formData.donationAmount === amount ? 'default' : 'outline'
                  }
                  onClick={() => handleDonationChange(amount)}
                  className="!rounded-button whitespace-nowrap"
                >
                  ${amount}
                </Button>
              ))}
              <Button
                variant={
                  formData.donationAmount === 0 && formData.customDonation
                    ? 'default'
                    : 'outline'
                }
                onClick={() =>
                  handleDonationChange(formData.customDonation || '')
                }
                className="!rounded-button whitespace-nowrap"
              >
                Custom
              </Button>
            </div>

            {(formData.donationAmount === 0 || formData.customDonation) && (
              <div className="flex items-center">
                <span className="mr-2 text-lg">$</span>
                <Input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={formData.customDonation}
                  onChange={(e) => handleDonationChange(e.target.value)}
                  className="max-w-[200px]"
                />
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          className="whitespace-nowrap"
        >
          <FaArrowLeft className='mr-2'/>
          Previous
        </Button>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="saveProgress"
              checked={formData.saveProgress}
              onCheckedChange={(checked) =>
                handleCheckboxChange('saveProgress', checked)
              }
            />
            <Label htmlFor="saveProgress" className="text-sm">
              Save my progress
            </Label>
          </div>
          <Button
            onClick={nextStep}
            className="whitespace-nowrap"
          >
            Continue
            <FaArrowRight className='ml-2'/>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RenderAddOnsStep
