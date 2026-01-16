import React from 'react'
import NavBar from '../Nav'
import Hero from '../../assets/Hero-img.png'
import { images } from './images'
import Card from './Card'
import frame from '../../assets/Frame19.svg'
import CaseStudy from './CaseStudy'
import Accordion from './Accordion'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import Testimonial from './Testimonial'

const Main = () => {
    return (
        <>
            <div className="container">
                <NavBar />
                <section className="flex flex-col md:flex-row items-center justify-between mb-14">
                    <div className="order-1 md:order-0">
                        <h1 className="max-w-[501px] mb-6  max-[768px]:text-[36px] md:text-[60px] max-[768px]:leading-11">
                            Navigating the digital landscape for success
                        </h1>

                        <img
                            src={Hero}
                            alt="Hero"
                            className="max-w-[300px] mx-auto mb-6 md:hidden"
                        />

                        <p className="max-w-[498px] leading-7 mb-6">
                            Our digital marketing agency helps businesses grow and succeed online
                            through SEO, PPC, social media marketing, and content creation.
                        </p>

                        <button className="bg-[#191A23] text-white px-6 py-3 w-full md:w-auto">
                            Book a Consultation
                        </button>
                    </div>
                    <img
                        src={Hero}
                        alt="Hero"
                        className="hidden md:block max-w-[450px] lg:max-w-[600px]"
                    />
                </section>
            </div>
            <div className="slider">
                <div className="slide-track">
                    {[...Object.values(images), ...Object.values(images), ...Object.values(images)]
                        .map((img, i) => (
                            <div className="slide2" key={i}>
                                <img src={img} alt="brand" />
                            </div>
                        ))}
                </div>
            </div>

            <div className="container">
                <Card />
                <article className="flex justify-between bg-[#F3F3F3] px-10 rounded-[45px] mb-20 py-3 max-[675px]:justify-center">
                    <div className="mt-10">
                        <h3 className="mb-5">Let’s make things happen</h3>
                        <p className="max-w-[500px] mb-10">
                            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                        </p>
                        <button className="bg-black text-white px-6 py-3">
                            Get your free proposal
                        </button>
                    </div>

                    <div className="hidden md:block">
                        <img src={frame} alt="Frame" className="w-[400px]" />
                    </div>
                </article>

                <CaseStudy />
                <Accordion />
                <Team />
                <Testimonial />
                <Contact />
            </div>

            <Footer />
        </>
    )
}

export default Main
