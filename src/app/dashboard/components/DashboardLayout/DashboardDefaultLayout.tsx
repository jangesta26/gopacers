import React from 'react'
import DashboardNavbar from '../Header/DashboardNavbar'
import BrandLogo from '@/svg/BrandLogo'
import Footer from '@/components/Footer'

const DashboardDefaultLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <DashboardNavbar />
        {children}
      <Footer 
      brandLogo={<BrandLogo/>}
      title='GoPacers'
      description='The ultimate platform for runners to discover, register, and share their race experiences.'
      />  
    </div>
  )
}

export default DashboardDefaultLayout
