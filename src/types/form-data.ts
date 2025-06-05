import type { MerchandiseType } from './add-ons';

export type MerchandiseMap = {
  [key in MerchandiseType]: {
    quantity: number;
    price: number;
  };
};

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  emergencyContactName: string;
  emergencyContactRelationship: string;
  emergencyContactPhone: string;
  raceCategory: string;
  merchandise: MerchandiseMap;
  donationAmount: number;
  customDonation: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  billingAddress: string;
  termsAccepted: boolean;
  saveProgress: boolean;
}
