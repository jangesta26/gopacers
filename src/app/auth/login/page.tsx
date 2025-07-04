import { LoginForm } from '@/components/Form/LoginForm'
import BrandLogo from '@/svg/BrandLogo'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <div className="bg-blue-400 text-white p-1 rounded-full">
                <BrandLogo />
            </div>
          </div>
          GoPacers
        </a>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
