'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { RaceCategoryOptionsProps } from '@/types/race-category-options'
import { RegistrationFormData } from '@/types/form-data'
import { FaArrowLeft, FaArrowRight, FaClock, FaInfoCircle } from 'react-icons/fa'

interface Props {
  raceCategoryOptions: RaceCategoryOptionsProps[]
  formData: RegistrationFormData
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>
  nextStep: () => void
  prevStep?: () => void
}

const RenderRaceCategoryStep = ({
  raceCategoryOptions,
  formData,
  setFormData,
  nextStep,
  prevStep,
}: Props) => {
  const handleRaceCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, raceCategory: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Race Category Selection</CardTitle>
        <CardDescription>
          Choose the race distance that suits your preference
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={formData.raceCategory}
          onValueChange={handleRaceCategoryChange}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {raceCategoryOptions.map((option) => (
            <div
              key={option.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                formData.raceCategory === option.id
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{option.name}</h3>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="mt-1"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-600">
                  <FaClock className='mr-2'/>
                  Start Time: {option.startTime}
                </div>
                <Badge className="bg-blue-600">${option.price}</Badge>
              </div>
            </div>
          ))}
        </RadioGroup>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <div className="flex items-start">
            <div className="mr-3 mt-1 text-blue-600">
              <FaInfoCircle className='text-xl' />
            </div>
            <div>
              <h4 className="font-medium text-blue-800 dark:text-blue-300">
                Race Day Information
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                All participants must arrive at least 1 hour before their race
                start time for bib pickup and preparation. The Summer Marathon
                2025 will take place at Central Park, New York on June 15,
                2025.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
       <CardFooter className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
        <Button
          variant="outline"
          onClick={prevStep}
          className="whitespace-nowrap"
        >
          <FaArrowLeft className='mr-2' />
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
            className="!rounded-button whitespace-nowrap"
          >
            Continue
            <FaArrowRight className='ml-2' />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RenderRaceCategoryStep
