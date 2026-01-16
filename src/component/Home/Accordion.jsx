import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const contentRefs = useRef([])

    const AccordionData = [
        {
            number: "01",
            heading: "Consultation",
            para: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            number: "02",
            heading: "Research and Strategy Development",
            para: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            number: "03",
            heading: "Implementation",
            para: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            number: "04",
            heading: "Monitoring and Optimization",
            para: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            number: "05",
            heading: "Reporting and Communication",
            para: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            number: "06",
            heading: "Continual Improvement",
            para: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        }
    ]

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <>
            <div className="flex items-center gap-10 mb-10 max-sm:flex-col max-sm:text-center">
                <h2 className='bg-[#B9FF66] px-2 rounded-[7px] sm:whitespace-nowrap max-[576px]:leading-7 max-[576px]:max-w-[220px]'>
                    Our Working Process
                </h2>


                <p className='max-w-[292px]'>
                    Step-by-Step Guide to Achieving Your Business Goals
                </p>
            </div>
            <div className="Accordion mb-20">
                {AccordionData.map((item, index) => (
                    <AccordionStyle key={index}
                        isActive={activeIndex === index}>
                        <div className="header" onClick={() => toggleAccordion(index)}>
                            <div className="flex items-center gap-5">
                                <h1>{item.number}</h1>
                                <h3>{item.heading}</h3>
                            </div>
                            <div className="accordion-icon">{activeIndex === index ? <span>-</span> : <span>+</span>}</div>
                        </div>
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className={`content ${activeIndex === index ? "open" : ""}`}
                            style={{
                                maxHeight: activeIndex === index ? contentRefs.current[index]?.scrollHeight : 0
                            }}
                        >
                            <p>{item.para}</p>
                        </div>
                    </AccordionStyle>
                ))}
            </div>
        </>
    )
}

export default Accordion

const AccordionStyle = styled.div`
  padding: 40px 60px;
background-color: ${(props) => (props.isActive ? "#B9FF66" : "#F3F3F3")};;
  border-radius: 45px;
  border: 1px solid ;
  box-shadow: 0px 5px 0px black;
  margin-bottom: 20px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .accordion-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: #F3F3F3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bolder;
  }

  .content {
    overflow: hidden;
    transition: max-height 0.5s ease;
    max-height: 0;
    
  }

  .content p {
    border-top: 2px solid black;
    padding-top: 15px;
    margin-top: 15px;
  }

  @media only screen and (max-width:640px){
    padding: 30px 20px;

    .accordion-icon {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
    }

    h1, h3 {
      font-size: 18px;
    }
  } 
`
