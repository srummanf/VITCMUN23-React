import React from 'react'
import Navbar from '../Navbar'
import Styles from './styles/Style.module.css'
import Heading from './1'
import AppForum from './2'
import Guidelines from './3'
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
                        <AppForum />
                        <Guidelines />
                        <Footer />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Index;