import React from 'react'
import VITCMUN from '../../../assets/logo.png'

function Index() {
    return (
        <>
            <div className='flex bg-[#daccf9] items-center justify-center pt-5 pb-20 md:pt-40 md:pb-40 px-10  md:px-20 w-screen'>
                <div className='flex items-center justify-center flex-col gap-8 '>

                    <div className=' flex items-center justify-center flex-col'>
                        <h3 className='text-2xl md:text-4xl font-bold text-center'>
                            About VITC MUN
                        </h3>
                    </div>
                    <div className='w-screen h-full p-10'>
                        <iframe title='VIT Chennai Address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892962.8916285514!2d79.15285416032253!3d12.966588139071593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e1!3m2!1sen!2sin!4v1678038721384!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-96'></iframe>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index