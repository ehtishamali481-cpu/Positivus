import React from 'react'
import { Link } from 'react-router'
import { icon } from './images'

const Footer = () => {
    return (
        <>
            <div className="px-8 max-[780px]:hidden footer-container">
                <div className="px-8 bg-[#191A23] text-[#FFFFFF] rounded-tl-[45px] rounded-tr-[45px] mt-15">
                    <div className="flex items-center justify-between py-10 max-[1024px]:flex-wrap">
                        <div className='max-[1024px]:mb-3'>
                            <img src={icon.bwLogo} alt="" />
                        </div>
                        <ul className="flex items-center gap-10 max-[1024px]:gap-3">
                            <Link to="/about"><li className='text-[#F3F3F3] underline'>About</li></Link>
                            <Link to="/services"><li className='text-[#F3F3F3] underline'>Services</li></Link>
                            <Link to="/useCase"><li className='text-[#F3F3F3] underline'>Use Cases</li></Link>
                            <Link to="/pricing"><li className='text-[#F3F3F3] underline'>Pricing</li></Link>
                            <Link to="/blog"><li className='text-[#F3F3F3] underline'>Blog</li></Link>

                        </ul>
                        <div className="flex items-center gap-4 max-[1024px]:gap-2 ">
                            <a href=""><img src={icon.linkdin} alt="" /></a>
                            <a href=""> <img src={icon.facebook} alt="" /></a>
                            <a href=""><img src={icon.twitter} alt="" /></a>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <div className="footer-row-2-col-1">
                            <h4 className='bg-[#B9FF66] inline text-black p-2 rounded-[7px] mb-4'>Conatct Us</h4>
                            <p className='my-3'>Email: info@positivus.com</p>
                            <p className='max-w-[332px]'>Address: 1234 Main St
                                Moonstone City, Stardust State 12345</p>
                        </div>
                        <div className="px-10 py-15 bg-[#292A32] flex max-[900px]:flex-wrap justify-center items-center gap-3 rounded-[14px] ">
                            <input className='bg-transparent text-white border-2 py-5 px-9 rounded-2xl placeholder-white' type="email" id='email' placeholder='Email' />
                            <button className="text-black bg-[#B9FF66] ]">Subscribe to News</button>
                        </div>
                    </div>
                    <div className="border-t-2 mt-8 py-6 flex gap-5 items-center justify-start">
                        <p>© 2023 Positivus. All Rights Reserved.</p><a href=""> <span className='text-[#F3F3F3] border-b-2'>Privacy Policy</span></a>
                    </div>
                </div>
            </div>









            <div className=" footer-container mob">
                <div className="px-8 bg-[#191A23] text-[#FFFFFF]  mt-15">
                    <div className="flex flex-col items-center justify-between py-10">
                        <div>
                            <img src={icon.bwLogo} alt="" className='w-40 my-6' />
                        </div>
                        <ul className="flex flex-col items-center gap-3">
                            <Link to="/about"><li className='text-[#F3F3F3] '>About</li></Link>
                            <Link to="/services"><li className='text-[#F3F3F3] '>Services</li></Link>
                            <Link to="/useCase"><li className='text-[#F3F3F3] '>Use Cases</li></Link>
                            <Link to="/pricing"><li className='text-[#F3F3F3] '>Pricing</li></Link>

                        </ul>

                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <div className="text-center">
                            <h4 className='bg-[#B9FF66] inline text-black px-2 rounded-[7px] '>Conatct Us</h4>
                            <p className='my-6'>Email: info@positivus.com</p>
                            <p className='max-w-[332px]'>Address: 1234 Main St <br />
                                Moonstone City, Stardust State 12345</p>
                        </div>
                        <div className="p-3 bg-[#292A32] flex flex-col items-center gap-3 rounded-[14px] my-6">
                            <input className='bg-transparent text-white border-2 py-5 px-12 rounded-2xl placeholder-white max-[768px]:w-[290px] max-[768px]:px-3' type="email" id='email' placeholder='Email' />
                            <button className="text-black bg-[#B9FF66] w-[290px] h-15 max-[768]:w-[298px]"><b>Subscribe to News</b></button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <a href=""><img src={icon.linkdin} alt="Linkdin Icon" /></a>
                        <a href=""> <img src={icon.facebook} alt="FaceBook Icon" /></a>
                        <a href=""><img src={icon.twitter} alt="Twitter Icon" /></a>
                    </div>
                    <div className="border-t-2 mt-8 py-6 flex flex-wrap gap-5 items-center justify-center">
                        <p className='whitespace-nowrap'>© 2023 Positivus. All Rights Reserved.</p><a href=""> <p className='text-[#F3F3F3]'>Privacy Policy</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
