import React from 'react'
import Styles from '../styles/Style.module.css'

function Index() {
    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <div className={`${Styles.heading} flex items-center justify-center flex-col gap-6 text-center w-full h-full`}>
                    <h2 className="text-white text-5xl md:text-7xl font-bold">About Us</h2>
                </div>
            </div>
        </>
    )
}

export default Index