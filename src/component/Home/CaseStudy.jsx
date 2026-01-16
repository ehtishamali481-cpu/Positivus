import React from 'react'
import icon from '../../assets/IconArrow.svg'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'


const data = [
    {
        text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    },
    {
        text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    },
    {
        text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    },
]

const CaseStudy = () => {
    return (
        <>
            <div className="flex items-center gap-10 my-16 max-sm:flex-col max-sm:text-center">
                <h2 className="bg-[#B9FF66] px-2 rounded-[7px] whitespace-nowrap">
                    Case Studies
                </h2>
                <p className="max-w-[580px]">
                    Explore Real-Life Examples of Our Proven Digital Marketing Success
                    through Our Case Studies
                </p>
            </div>
            <Wrapper>
                <div className="desktop">
                    {data.map((item, i) => (
                        <React.Fragment key={i}>
                            <div className="card">
                                <p className='pl-2'>{item.text}</p>
                                <a href="#" className="link">
                                    <span>Learn More</span>
                                    <img src={icon} alt="" />
                                </a>
                            </div>
                            {i !== data.length - 1 && <div className="line" />}
                        </React.Fragment>
                    ))}
                </div>
                <div className="mobile">
                    <Swiper
                        slidesPerView="auto"
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i} className="caseStudySlide">
                                <p>{item.text}</p>
                                <a href="#" className="link">
                                    <span>Learn More</span>
                                    <img src={icon} alt="" />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Wrapper>
        </>
    )
}

export default CaseStudy



const Wrapper = styled.div`
  margin-bottom: 40px;
  .desktop {
    background: #000;
    display: flex;
    justify-content: space-between;
    padding: 60px;
    border-radius: 45px;
    color: #fff;
    margin-bottom: 80px;
  }

  .card {
    max-width: 286px;

  }
    .swiper-pagination-bullet{
        display: none;
    }
  .link {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
    color: #b9ff66;
  }

  .line {
    width: 1px;
    background: #333;
  }

  .mobile {
    display: none;
    
  }

  @media (max-width: 576px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
      display: flex;
    justify-content:center ;
    color: white;
    }

    .caseStudySlide {
      text-align: center;
      background-color: #000;
      padding: 30px 40px;
      border-radius: 40px;
      text-align: justify;
    }
  }
`
