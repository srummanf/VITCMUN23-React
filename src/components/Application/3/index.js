import React from 'react'

function Index() {
    return (
        <>
            <div className='flex bg-[#daccf9] items-center justify-center pt-5 pb-20 md:pt-40 md:pb-40 px-10  md:px-20 w-full'>
                <div className='flex items-center justify-center flex-col gap-6'>
                    <h2 className='text-2xl md:text-4xl font-bold text-center'>
                        Guidelines
                    </h2>

                    <div className='max-w-4xl text-sm md:text-base text-justify flex items-center justify-center flex-col gap-2'>
                        <p className='text-justify'>
                            Welcome to the 6th edition of VITC Model United Nations 2023 set to take place on the 24th, 25th and 26th March 2023! Kindly go through the following instructions before filling this form.
                            <br /><br />
                            1. Delegates opting for the International Press do not fill this form.<br />
                            2. Delegates are requested to check the committee matrix given below before adding their committee and portfolio preferences .<br />
                            3. UNSC is a double delegation committee and hence, both delegates are requested to fill the form.<br />
                            <p className='font-bold'>4. The Registration fee for the conference is Rs 1800/- excluding the accommodation fee.</p>
                            <br />
                            For further queries, contact us at:<br />
                            <a href='vitcmun2023@gmail.com' className='font-bold text-blue-700 hover:underline'>vitcmun2023@gmail.com</a><br />
                            <br />
                            <p className='underline'>Contact numbers:</p>
                            <p className='italic'>Keerthana babu - Secretary General - 6382410002<br />
                            TCA Varshini - Under Secretary General (Delegate Affairs)- 9150356904<br />
                            Kushagra Dhingra - Under Secretary General (Delegate Affairs) - 8813079855</p><br />

                            <p className='underline'>Country matrix:</p>
                            <a href='https://tinyurl.com/Country-matrices' className='font-bold text-blue-700 hover:underline'>https://tinyurl.com/Country-matrices</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index