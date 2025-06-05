import { RegistrationFormData } from '@/types/form-data'
import { RaceCategoryOptionsProps } from '@/types/race-category-options'

export const calculateSubtotal = (
  formData: RegistrationFormData,
  raceCategoryOptions: RaceCategoryOptionsProps[]
): number => {
  const racePrice =
    raceCategoryOptions.find((option) => option.id === formData.raceCategory)?.price || 0

  const merchandiseTotal = Object.values(formData.merchandise).reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  )

  const donationAmount = Number(formData.customDonation) || formData.donationAmount || 0

  return racePrice + merchandiseTotal + donationAmount
}

export const calculateTaxes = (
  subtotal: number,
  taxRate: number = 0.08
): number => {
  return +(subtotal * taxRate).toFixed(2)
}

export const calculateTotal = (
  subtotal: number,
  taxes: number
): number => {
  return +(subtotal + taxes).toFixed(2)
}