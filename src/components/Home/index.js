import React from 'react'
import Navbar from '../Navbar'
import Styles from './styles/Style.module.css'
import Heading from './1'
import WhatMUN from './2'
import AboutVITCMUN from './3'
import Letter from './4'
import Footer from '../Footer'


function Index() {
    return (
        <>
            <div className=''>
                <div className={`${Styles.bg_photo} bg-cover bg-center h-screen flex justify-center items-center flex-col`}
                >
                    <Navbar />

                    <div className='flex items-center justify-center flex-col absolute top-0'>
                        <Heading />
                        <WhatMUN />
                        <AboutVITCMUN />
                        <Letter />
                        <Footer />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Index;