import React from 'react'
import SettingPage from '@/features/settings/components/SettingPage'

export const metadata = {
  title: "Settings | Admin Panel",
  description: "Manage your account settings, email, and newsletter preferences.",
};

const page = () => {
  return (
    <SettingPage />
  )
}

export default page