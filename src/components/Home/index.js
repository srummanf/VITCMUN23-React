import React from 'react'
import Navbar from '../Navbar'
import Styles from './styles/Style.module.css'
import Heading from './1'
import WhatMUN from './2'
import AboutVITCMUN from './3'
import Letter from './4'

function Index() {
    return (
        <div>
            <>
                <div className={`${Styles.bg_photo} bg-cover bg-center h-screen flex justify-center items-center`}
                >
                    <Navbar />

                    <div className='flex items-center justify-center flex-col absolute top-0'>
                        <Heading />
                        <WhatMUN />
                        <AboutVITCMUN />
                        <Letter />
                    </div>


                </div>
            </>
        </div>
    )
}

export default Index;