import React from 'react'
import FuzzyText from '../components/ui/FuzzyText'

const ErrorPage = () => {
  return (
    <div className='h-100 w-screen flex items-center justify-center text-center'>
        <div>
  
         <div className="px-10 sm:px-2 flex  flex-col items-center lg:text-xl ">
           <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover
            className='px-10 lg:text-xl'
          >
            404
          </FuzzyText>
          <br />
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover
          >
            Not found
          </FuzzyText>
         </div>

          
        </div>
      
    </div>
  )
}

export default ErrorPage
