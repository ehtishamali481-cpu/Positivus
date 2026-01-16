import React from 'react'
import icon from '../../assets/IconArrow.svg'
import { cardImages } from './images'
import styled from 'styled-components';

const Card = () => {
    const cardData = [
        {
            heading: "Search engine",
            heading2: "optimization",
            icon: icon,
            p: "Learn More",
            img: cardImages.search

        },
        {
            heading: "Pay-per-click",
            heading2: "advertising",
            icon: icon,
            p: "Learn More",
            img: cardImages.pay,
            headingbg: "#FFFFFF",
            cardbg: "#B9FF66"
        },
        {
            heading: "Social Media",
            heading2: "Marketing",
            icon: cardImages.arrowBlack,
            p: "Learn More",
            img: cardImages.social,
            cardbg: "#191A23",
            headingbg: "#FFFFFF",
            iconbg: "#FFFFFF"
        },
        {
            heading: "Email",
            heading2: "Marketing",
            icon: icon,
            p: "Learn More",
            img: cardImages.email
        },
        {
            heading: "Content",
            heading2: "Creation",
            icon: icon,
            p: "Learn More",
            img: cardImages.content,
            headingbg: "#FFFFFF",
            cardbg: "#B9FF66"
        },
        {
            heading: "Analytics and",
            heading2: "Tracking",
            icon: cardImages.arrowBlack,
            p: "Learn More",
            img: cardImages.analatic,
            cardbg: "#191A23",
            iconbg: "#FFFFFF"
        }

    ]
    return (
        <>
            <div className='flex items-center gap-10 mb-10 max-sm:flex-col max-[600px]:text-center max-[600px]:gap-6'>
                <h2 className='bg-[#B9FF66] px-2 rounded-[7px] '>Services</h2>
                <p className='max-w-[580px]'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>

            <CardStyled>
                {
                    cardData.map((data, index) => (
                        <CardsDetail key={index} headingbg={data.headingbg} cardbg={data.cardbg} iconbg={data.iconbg}>
                            <div className="col-1">
                                <h3 className='max-[1030px]:text-[27px]'>{data.heading}</h3>
                                <h3>{data.heading2}</h3>
                                <a href="">
                                    <div className="icon">

                                        <div className="img"><img src={data.icon} alt="Cards Icon" /></div>

                                        <p>{data.p}</p>
                                    </div>
                                </a>


                            </div>
                            <div className="col-2">
                                <img src={data.img} alt="Card Image" />
                            </div>
                        </CardsDetail>
                    ))
                }
            </CardStyled>
        </>
    )
}

export default Card







const CardStyled = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
align-items: center;
justify-content: space-between;
margin-bottom: 50px;

@media only screen and (max-width:1024px){
    justify-content: center;
    h3{
        font-size: 30px;
    }
}

`
const CardsDetail = styled.div`
display: flex;
align-items: center;
max-width: 550px;
padding: 50px;
background-color: ${(props) => props.cardbg || "#F3F3F3"};
border-radius: 45px;
box-shadow: 0px 5px 0px black;
gap: 50px;
width: 100%;      
   flex: 1 1 550px;


.col-1 h3{
    background-color: #B9FF66;
    border-radius: 7px;
    padding: 7px;
    display: inline-block;
    background-color:${(props) => props.headingbg || "#B9FF66"} ;
   
}
.col-1  .icon{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-top: 30px;
    }
    .col-1 .icon .img{
        width: 40px;
        height: 40px;
        background-color: ${(props) => props.iconbg || "#191A23"};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
      .col-1 .icon img{
        width: 25px;
    }
    .col-1 .icon p{
color: ${(props) => props.iconbg || "#191A23"};
    }
.col-2 img{
  width: 200px;
  height: auto;
}
    @media only screen and (max-width:640px) {
padding: 20px;
gap: 10px;
.col-1 h3{
font-size: 16px;
   
}
    .col-1 .icon p{
display: none;
    }

    }
`
