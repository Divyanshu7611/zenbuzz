import { title } from 'process'
import React from 'react'

function Hero2() {

  const servicesData = [
    {
        title: "Online Reputation Management",
        description: "Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.",
        image: '/static/Rep1.png'
    },
    {
        title: "Online Reputation Management",
        description: "Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.",
        image: '/static/Rep2.png'
    },
    {
        title: "Online Reputation Management",
        description: "Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.",
        image: '/static/Rep3.png'
    }

  ]  
  return (
    <div className='bg-gray-50 py-20 flex justify-center items-center'>
           <div className='flex gap-10 lg:mx-auto lg:flex-row flex-col justify-center items-center mx-5'>
            {
                servicesData.map((service, index) => (
                    <div key={index} className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center max-w-[340px] text-center hover:shadow-7xl hover:shadow-slate-400 transition-all duration-500 hover:-translate-y-1 hover:drop-shadow-2xl'>
                        <img src={service.image} alt={service.title} className='w-60 h-60 object-cover rounded-t-lg mb-4 px-5 py-5' />
                        <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                        <p className='text-gray-600'>{service.description}</p>
                    </div>
                ))
            }
            </div>    
    </div>
  )
}

export default Hero2