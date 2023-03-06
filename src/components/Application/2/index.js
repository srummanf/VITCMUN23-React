import React from 'react'
import MUN from '../../../assets/MUN.png'
import Styles from '../styles/Style.module.css'

function Index() {
    return (
        <>
            <div className={`flex ${Styles.bg} items-center justify-center py-20 px-10 w-screen`}>
                <div className=' flex items-center justify-center flex-col gap-6'>
                    <h3 className='text-2xl md:text-4xl font-bold text-center'>
                        Application Forum
                    </h3>
                    <p className='max-w-4xl text-sm md:text-base text-justify'>
                        At a Model UN conference, students work as the representatives of a country, an organization, or a person and aim to solve problems working with other delegates from around the world. MUN teaches skills like research, public speaking, debating and writing skills, in addition to critical thinking, teamwork, and leadership. Coming up with solutions that are acceptable to a majority of the representatives also inculcates skills of negotiation, conflict resolution, and cooperation.
                    </p>
                    <a href='https://docs.google.com/forms/d/1kF5a1tD5t_w_LbqP-_sxdoT2v23aa0b_rzXOD16LcCY/viewform?ts=63f8e490&edit_requested=true' className={`${Styles.button} px-20 py-5 rounded`} >
                        APPLY NOW
                    </a>
                </div>

            </div>
        </>
    )
}

export default Index