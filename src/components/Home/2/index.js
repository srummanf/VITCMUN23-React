import React from 'react'
import MUN from '../../../assets/MUN.png'
import { motion } from "framer-motion";



function Index() {

    const MotionGrid = motion.div;

    return (
        <>

            <div className='flex bg-[#be64b5] items-center justify-center py-10 px-10 md:py-40 md:px-20 w-screen'>
                <motion.div
                    className='grid md:grid-cols-2 grid-cols-1 gap-4'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <MotionGrid
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='flex items-center justify-center'
                    >
                        <img src={MUN} alt='' className='w-[60%]' />
                    </MotionGrid>
                    <MotionGrid
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='flex items-start justify-center flex-col gap-4'
                    >
                        <h3 className='text-2xl md:text-4xl font-bold text-center'>
                            What is Model United Nations?
                        </h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='max-w-4xl text-justify'
                        >
                            At a Model UN conference, students work as the representatives of a country, an organization, or a person and aim to solve problems working with other delegates from around the world. MUN teaches skills like research, public speaking, debating and writing skills, in addition to critical thinking, teamwork, and leadership. Coming up with solutions that are acceptable to a majority of the representatives also inculcates skills of negotiation, conflict resolution, and cooperation.
                        </motion.p>
                    </MotionGrid>
                </motion.div>
            </div>

        </>
    )
}

export default Index