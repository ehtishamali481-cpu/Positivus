import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Custom.css'

const Testimonial = () => {

    return (
        <>
            <div className='flex items-center gap-10 mb-15 max-sm:flex-col'>
                <h2 className='bg-[#B9FF66] px-2 rounded-[7px]'>Testimonials</h2>
                <p className='max-w-[473px] max-[600px]:text-center'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </div>
            <div className="bg-black py-15 rounded-[45px] relative overflow-visible lg:block laptop mb-20">
                <Swiper
                    slidesPerView={2.2}
                    centeredSlides={true}
                    loop={true}
                    loopedSlides={7}
                    loopAdditionalSlides={3}
                    spaceBetween={30}
                    grabCursor={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                            centeredSlides: false,
                        },
                        640: {
                            slidesPerView: 1.2,
                            centeredSlides: true,
                        },
                        768: {
                            slidesPerView: 1.7,
                            centeredSlides: true,
                        },
                        1024: {
                            slidesPerView: 2,
                            centeredSlides: true,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide data-hash="slide1" className='max-[576px]:ml-3'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide2" className='max-[576px]:ml-1' >
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide3" className='max-[576px]:ml-2'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>

                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide4" className='max-[576px]:ml-1'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>

                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide5" className='max-[576px]:ml-1'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>

                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide6" className='max-[576px]:ml-1'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide7" className='max-[576px]:ml-1'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>

                </Swiper>
            </div>





















            <div className="bg-black py-15 rounded-[45px] relative overflow-visible mob mb-20 ">
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    loopedSlides={7}
                    loopAdditionalSlides={3}
                    spaceBetween={30}
                    grabCursor={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide data-hash="slide1" className='max-[576px]:ml-3'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide2" className='max-[576px]:ml-1' >
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide3" className='max-[576px]:ml-2'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>

                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide4" className='max-[576px]:ml-1'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>

                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide5" className='max-[576px]:ml-1'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>

                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide6" className='max-[576px]:ml-1'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18 mb-10 max-[768px]:ml-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide7" className='max-[576px]:ml-1'>
                        <p className='slide'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                        <h4 className='text-[#B9FF66] ml-18 max-[768px]:ml-10'>John Smith</h4>
                        <h4 className='text-white ml-18  max-[768px]:ml-10 mb-10'>Marketing Director at XYZ Corp</h4>
                    </SwiperSlide>

                </Swiper>
            </div>


        </>
    )
}

export default Testimonial
