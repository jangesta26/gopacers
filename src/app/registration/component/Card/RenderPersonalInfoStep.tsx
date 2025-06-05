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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { FaArrowRight } from 'react-icons/fa'
import { RegistrationFormData } from '@/types/form-data' // Adjust path as needed

interface Props {
  formData: RegistrationFormData
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>
  nextStep: () => void
}

const RenderPersonalInfoStep = ({ formData, setFormData, nextStep }: Props) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Please provide your details for race registration
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Phone & DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">
              Date of Birth <span className="text-red-500">*</span>
            </Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label>
            Gender <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={formData.gender}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, gender: value }))
            }
            className="flex flex-col md:flex-row gap-2 md:space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="prefer-not-to-say" id="prefer-not-to-say" />
              <Label htmlFor="prefer-not-to-say">Prefer not to say</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator className="my-4" />

        {/* Emergency Contact */}
        <div>
          <h3 className="text-lg font-medium mb-4">
            Emergency Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="emergencyContactName">
                Contact Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="emergencyContactName"
                name="emergencyContactName"
                placeholder="Jane Doe"
                value={formData.emergencyContactName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergencyContactRelationship">
                Relationship <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.emergencyContactRelationship}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    emergencyContactRelationship: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spouse">Spouse</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="sibling">Sibling</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="emergencyContactPhone">
              Contact Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="emergencyContactPhone"
              name="emergencyContactPhone"
              placeholder="+63 (09) 234-987-543"
              value={formData.emergencyContactPhone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row justify-end items-start md:items-end gap-4 md:gap-0">
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
          <Button onClick={nextStep} className="whitespace-nowrap">
            Continue
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RenderPersonalInfoStep
