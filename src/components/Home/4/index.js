import React from 'react'
import photo from '../../../assets/rectangle.png'

function Index() {
    return (
        <>
            <div className='flex items-center justify-center pt-5 pb-20 md:pb-0 px-10 md:py-40 md:px-20 w-screen'>
                <div className='flex md:items-start justify-center md:flex-row flex-col gap-6'>
                    <div className=' flex items-center justify-center md:w-1/2 pb-5'>
                        <img src={photo} alt='' className='' />
                    </div>
                    <div className=' flex items-center justify-start flex-col gap-4 md:w-1/2'>
                        <h3 className='text-2xl md:text-4xl font-bold text-left '>
                            LETTER FROM THE 2022 SECRETARY-GENERAL
                        </h3>
                        <p className='max-w-4xl text-justify italic'>
                            Dear Delegates and Faculty Advisors,
                            For the past 12 years, Harvard Model United Nations India has been the pinnacle of Model UN practice and debate in international conferences, and we are honoured to welcome you to join us for this impactful experience this year. HMUN India has been able to attract and bring together delegates from all around the world to participate in the highest level of debate and negotiation, simulating and solving the biggest challenges facing our world today.
                            Leading such a prestigious and impactful conference such as HMUN India is sure to be an immense undertaking, and I hope to do so with as much enthusiasm, wisdom, and support as I can while following in the great legacies left behind by former Secretary-Generals Delaney Hurley and Gaurang Goel, whom I had the pleasure of serving under and learning from. To all receiving this message, this conference is a unique and special opportunity to be involved at the highest level of Model UN practice while exploring new cultures and perspectives from our international reach of delegates and staff alike. HMUN India will continue to mentor delegates in leadership, diplomacy, and cooperation and serve as an opportunity for all to engage with our consequential educational mission. As in years past, HMUN India is not only a conference but an educational mission on its own. Included in conference participation will be access to beginner and advanced online MUN and Diplomacy training courses and a number of other pre-conference chances to interact with diplomacy and negotiation thinkers and scholars. Finally, our Impact Initiative to provide funding and support to students who submit proposals for social impact projects will be maintained and revamped.
                            The conference staff are excited and hard at work preparing to create this incredible experience for all delegates, and we hope you are all looking forward to seeing you all at HMUN India 2023!
                            Sincerely,
                            Oscar Berry
                            Secretary-General, HMUN India 2022
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index
