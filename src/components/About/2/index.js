import React from 'react'
import MUN from '../../../assets/MUN.png'

function Index() {
    return (
        <>
            <div className='flex bg-[#be64b5] items-center justify-center pt-5 pb-20 md:pb-0 px-10 md:py-40 md:px-20 w-screen'>
                <div className='grid md:grid-cols-2 grid-rows-2'>
                    <div className=' flex items-center justify-center '>
                        <img src={MUN} alt='' className='h-60 w-60' />
                    </div>
                    <div className=' flex items-start justify-center flex-col gap-4'>
                        <h3 className='text-2xl md:text-4xl font-bold text-center'>
                            What is Model United Nations
                        </h3>
                        <p className='max-w-4xl text-justify'>
                            At a Model UN conference, students work as the representatives of a country, an organization, or a person and aim to solve problems working with other delegates from around the world. MUN teaches skills like research, public speaking, debating and writing skills, in addition to critical thinking, teamwork, and leadership. Coming up with solutions that are acceptable to a majority of the representatives also inculcates skills of negotiation, conflict resolution, and cooperation.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index