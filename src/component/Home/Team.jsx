import React from 'react'
import { teamImges } from './images'
import styled from 'styled-components';

const Team = () => {

    const teamCard = [
        {
            name: "John Smith",
            position: "CEO and Director",
            icon: teamImges.socialIcon,
            img: teamImges.john,
            para: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        },
        {
            name: "Jane Doe",
            position: "Director of Operations",
            icon: teamImges.socialIcon,
            img: teamImges.jane,
            para: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        },
        {
            name: "Michael Brown",
            position: "Senior SEO Specialist",
            icon: teamImges.socialIcon,
            img: teamImges.michael,
            para: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        },
        {
            name: "Emily Johnson",
            position: "PPC Manager",
            icon: teamImges.socialIcon,
            img: teamImges.emliy,
            para: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        },
        {
            name: "Brian Williams",
            position: "Social Media Specialist",
            icon: teamImges.socialIcon,
            img: teamImges.brian,
            para: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        },
        {
            name: "Sarah Kim",
            position: "Content Creator",
            icon: teamImges.socialIcon,
            img: teamImges.sara,
            para: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
        }

    ]
    return (
        <>
            <div className="flex items-center gap-10 mb-18 max-sm:flex-col">
                <h2 className='bg-[#B9FF66] px-2 rounded-[7px]'>Team </h2>
                <p className='max-w-[473px] max-[600px]:text-center'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>
            <Cards>
                {
                    teamCard.map((cards, index) => (
                        <TeamCards key={index}>
                            <div className="col-1 mb-3.5">
                                <img src={cards.img} alt="Cards Image" />
                                <div className='flex flex-col justify-end'>
                                    <h4>{cards.name}</h4>
                                    <p>{cards.position}</p>
                                </div>
                                <div className="card-icon"> <img src={cards.icon} alt="Icon" /></div>

                            </div>
                            <p className='max-w-[317px] border-t pt-4 '>{cards.para}</p>
                        </TeamCards>
                    ))
                }
            </Cards>
            <div className=' flex justify-end mb-20'>
                <button className='bg-[#191A23] text-white w-[269px] max-sm:w-[400px]'>See all team</button></div>
        </>
    )
}

export default Team


const TeamCards = styled.div`
    
    border: 1px solid black;
    border-radius: 45px;
    padding: 40px 35px;
    box-shadow: 0px 5px 0px black;
    position: relative;

    @media only screen and (max-width:768px){
        width: 300px;
    }

.card-icon{
    position: absolute;
    top: 40px;
    right: 30px;
}

    .col-1{
display: flex;
gap: 7px;

    }

    @media only screen and (max-width:325px){
    .card-icon {
    position: absolute;
    top: 40px;
    right: 10px;
}
    }
`
const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 40px;

        @media only screen and (max-width:992px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
`
