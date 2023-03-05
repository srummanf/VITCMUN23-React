import React from 'react'
import photo from '../../../assets/secretariat.png'
import Styles from '../styles/Style.module.css'

function Index() {

    const info = [

        {
            id: 1,
            role: "Delegate Affairs",
            details: [
                {
                    image: photo,
                    name: "TCA Varshini",
                },
                {
                    image: photo,
                    name: "Kushagra Dhingra",
                }
            ]
        },
        {
            id: 2,
            role: "EB Affairs",
            details: [
                {
                    image: photo,
                    name: "Prisha Anand",
                },
                {
                    image: photo,
                    name: "Siva Narayan S A",
                },
            ]
        },
        {
            id: 3,
            role: "Social Media & Marketing",
            details: [
                {
                    image: photo,
                    name: "Veenavarthini",
                },
                {
                    image: photo,
                    name: "Karthik Sabareesh",
                },
                {
                    image: photo,
                    name: "Ann Maria Thomson",
                },
            ]
        },
        {
            id: 4,
            role: "Sponsorship",
            details: [
                {
                    image: photo,
                    name: "Aasish Mahesh",
                },
                {
                    image: photo,
                    name: "Vasu Sumeet Seth",
                }
            ]
        },
        {
            id: 5,
            role: "Tech",
            details: [
                {
                    image: photo,
                    name: "Ojas Aklecha",
                },
                {
                    image: photo,
                    name: "Ronit Bokadia",
                }
            ]
        },
        {
            id: 6,
            role: "Finance",
            details: [
                {
                    image: photo,
                    name: "Nitish R",
                },
                {
                    image: photo,
                    name: "Kamal Raj N",
                }
            ]
        },
        {
            id: 7,
            role: "Internal Affairs",
            details: [
                {
                    image: photo,
                    name: "Narender Senthil",
                },
                {
                    image: photo,
                    name: "Shivangi Bhatawadekar",
                }
            ]
        },
        {
            id: 8,
            role: "Logistics",
            details: [
                {
                    image: photo,
                    name: "Krithik",
                },
                {
                    image: photo,
                    name: "Inban Azhagiri",
                },
                {
                    image: photo,
                    name: "Alan Immanuel",
                },
            ]
        },
        {
            id: 9,
            role: "Hospitality",
            details: [
                {
                    image: photo,
                    name: "Swetha B",
                },
                {
                    image: photo,
                    name: "Sushitha Ravisankar",
                }
            ]
        },
        {
            id: 10,
            role: "Content & Outreach",
            details: [
                {
                    image: photo,
                    name: "Rifat",
                },
                {
                    image: photo,
                    name: "Suseema Devi",
                },
                {
                    image: photo,
                    name: "Akash P Videsh",
                }
            ]
        },
        {
            id: 11,
            role: "Design",
            details: [
                {
                    image: photo,
                    name: "Trisha Vivek",
                },
                {
                    image: photo,
                    name: "Roshini Venkatesh",
                },
                {
                    image: photo,
                    name: "Harshadaavenkat",
                }
            ]
        },
        {
            id: 12,
            role: "Photography",
            details: [
                {
                    image: photo,
                    name: "Krishna T E",
                },
                {
                    image: photo,
                    name: "Jeffrey Simon M",
                },
                {
                    image: photo,
                    name: "Prabhu Shankar M",
                }
            ]
        },
        {
            id: 13,
            role: "Videography",
            details: [
                {
                    image: photo,
                    name: "Vignesh R",
                },
                {
                    image: photo,
                    name: "Aravindhan S",
                },
                {
                    image: photo,
                    name: "Fabin Prakash",
                }
            ]
        },

    ]

    return (
        <>
            <div className='flex bg-[#daccf9] items-center justify-center py-10 px-10 md:px-20 w-full flex-col gap-6'>
                <div className={`${Styles.generals} w-full py-5 text-center font-semibold`}>
                    UNDER-SECRETARY-GENERALS
                </div>

                <div className='flex items-center justify-center flex-col gap-20'>


                    {
                        info.map((roles) => (
                            <div className='flex items-center justify-center w-full flex-col gap-6'>
                                <h2 className='text-xl font-medium'>
                                    {roles.role}
                                </h2>
                                <div className='flex items-center justify-center gap-6 w-full flex-col md:flex-row'>
                                    {
                                        roles.details.map((person) => (
                                            <div className={`${Styles.general_card} flex items-start justify-center flex-col`}>
                                                <img src={`${person.image}`} alt='' className='mb-3 w-60 h-60' />
                                                <h3 className='font-bold text-lg'>
                                                    {`${person.name}`}
                                                </h3>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        ))
                    }
                </div>



            </div>
        </>
    )
}

export default Index