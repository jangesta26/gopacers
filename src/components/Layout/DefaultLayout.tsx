import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import BrandLogo from '@/svg/BrandLogo';

const DefaultLayout = ({children}:{children : React.ReactNode;}) => {
  return (
   <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      {children}
      <Footer 
      brandLogo={<BrandLogo/>}
      title='GoPacers'
      description='The ultimate platform for runners to discover, register, and share their race experiences.'
      />
    </div>
  )
}

export default DefaultLayout
