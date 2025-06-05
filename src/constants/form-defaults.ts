import { RegistrationFormData } from "@/types/form-data";

export const initialRegistrationFormData: RegistrationFormData = {
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  emergencyContactName: "",
  emergencyContactRelationship: "",
  emergencyContactPhone: "",
  raceCategory: "",
  merchandise: {
    tshirt: { quantity: 0, price: 25 },
    cap: { quantity: 0, price: 20 },
    waterBottle: { quantity: 0, price: 15 },
  },
  donationAmount: 0,
  customDonation: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  billingAddress: "",
  termsAccepted: false,
  saveProgress: false,
};
