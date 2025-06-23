'use client'
import React, { useEffect, useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { useTheme } from 'next-themes'

const SwitchMode = () => {
  const { theme, setTheme } = useTheme()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(theme === 'dark')
  }, [theme])

  const handleToggle = () => {
    const newTheme = enabled ? 'light' : 'dark'
    setTheme(newTheme)
    setEnabled(!enabled)
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch 
        id="theme-switch"
        checked={enabled}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-gray-300 data-[state=unchecked]:bg-blue-400"
      />
    </div>
  )
}

export default SwitchMode
