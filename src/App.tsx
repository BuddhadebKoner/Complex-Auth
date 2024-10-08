import { Route, Routes } from 'react-router-dom'
import './globals.css'
// routes components
import SigninForm from './_auth/forms/SignInForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

import { Toaster } from "@/components/ui/toaster"


function App() {
   return (
      <main className='flex h-screen'>
         <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />} >
               <Route path="/sign-in" element={<SigninForm />} />
               <Route path="/sign-up" element={<SignupForm />} />
            </Route>
            {/* private routes */}
            <Route element={<RootLayout />}>
               <Route index element={<Home />} />
            </Route>
         </Routes>
         <Toaster />
      </main>
   )
}

export default App