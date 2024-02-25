import { Button } from '@/components/ui/button'
import React from 'react'
import FormGenerator from './form-generator'
import Header from "@/components/ui/header";
import { SessionProvider } from 'next-auth/react';

const page = () => {
  return (
  <SessionProvider>
    <main className="flex min-h-screen flex-col items-center">
       <Header />
      <FormGenerator/>
    </main>
  </SessionProvider>
  )
}

export default page