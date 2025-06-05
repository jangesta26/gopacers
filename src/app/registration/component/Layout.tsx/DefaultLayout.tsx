import React from 'react'
import NavBar from '../Header/NavBar';
import RegistrationFooter from '../Footer';

const RegistrationDefaultLayout = ({children}:{children : React.ReactNode;}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar 
        eventTitle='SANTE BARLEY TRILOGY RUN ASIA 2025'
      />
      {children}
      <RegistrationFooter 
      eventTitle="SANTE BARLEY TRILOGY RUN ASIA 2025 LEG 3"
      createdAt="August 31, 2025"
      location='Azuela Cove, Davao City'
      />
    </div>
  )
}

export default RegistrationDefaultLayout
