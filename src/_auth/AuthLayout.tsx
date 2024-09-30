import { Outlet, Navigate } from 'react-router-dom'


// const Spline = lazy(() => import('@splinetool/react-spline'));

const AuthLayout = () => {
  const isAuthenticated = false;


  return (
    <>
      {
        isAuthenticated ? (
          <Navigate to="/" />
        ) : (
          <>
            <section className='flex flex-1 justify-center items-center flex-col py-10'>
              <Outlet />
            </section>
              <div className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat bg-black'>
                <img src="/assets/images/bg.jpg" alt="bg-image" className='h-full w-full'/>
            </div>
          </>
        )
      }
    </>
  )
}

export default AuthLayout