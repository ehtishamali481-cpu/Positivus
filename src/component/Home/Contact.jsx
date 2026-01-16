import React from 'react'
import styled from "styled-components";
import { teamImges } from './images';

const Contact = () => {
    return (
        <>
            <div className="flex items-center gap-8 my-10 flex-wrap justify-start max-[500px]:gap-4 max-[576px]:justify-center">
                <h2 className="bg-[#B9FF66] px-4 py-2 rounded-[14px] whitespace-nowrap  max-[500px]:text-sm">Contact Us</h2>
                <p className='max-w-[323px] text-center max-[500px]:text-sm'>
                    Connect with Us: Let's Discuss Your Digital Marketing Needs
                </p>
            </div>
            <div className="flex  items-center justify-between py-14 px-10 bg-[#F3F3F3] rounded-[45px] gap-8 max-[1024px]:px-6 max-[768px]:justify-center relative">
                <div className="flex flex-col gap-6 w-full max-w-[500px] ">
                    <Input>
                        <label className='items-center flex gap-2'>
                            <input type="radio" name="check" /> <span>Say Hi</span>
                        </label>
                        <label className='items-center flex gap-2'>
                            <input type="radio" name="check" /> <span>Get A Quote</span>
                        </label>
                    </Input>

                    <label>Name
                        <input className='w-full input-border rounded-[14px] p-3 mt-2 bg-white' type="text" placeholder='Name' />
                    </label>
                    <label>Email*
                        <input className='w-full input-border rounded-[14px] p-3 mt-2 bg-white' type="email" placeholder='Email' />
                    </label>
                    <label>Message
                        <textarea className='w-full input-border rounded-[14px] p-3 mt-2 bg-white h-40 resize-none' placeholder='Message'></textarea>
                    </label>
                    <button className="bg-[#191A23] text-white py-3 rounded-[14px] hover:opacity-90 transition-all">
                        Send a Message
                    </button>
                </div>

                <div className='hidden md:block'>
                    <img
                        className='max-w-[650px] w-full max-[992px]:w-[500px] absolute -right-70 top-0 max-[992px]:hidden'
                        src={teamImges.contentImg}
                        alt="Team"
                    />
                </div>

            </div>
        </>
    )
}

export default Contact

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid black;
    cursor: pointer;
    position: relative;
    background: white;
  }

  input[type="radio"]:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    background: #B9FF66;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    margin-right: 10px;
  }
`;
