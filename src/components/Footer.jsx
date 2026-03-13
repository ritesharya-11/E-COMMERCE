import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
           <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quis cumque aliquid, 
                    accusamus ea magnam quos! Lorem, ipsum dolor sit 
                    amet consectetur adipisicing elit. Similique, voluptatibus?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam fugit laudantium dignissimos 
                    reprehenderit doloremque quae dicta in fuga. Ex officia porro rerum quo, aspernatur quidem explicabo iusto id dolore sed?
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Private Policy</li>
                    </ul>
                </div>

                {/* ✅ Wrapped in a div so it's ONE grid column */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'> {/* ✅ fixed typo felx-col → flex-col */}
                        <li>8651480201</li>
                        <li>ritesharya@gmail.com</li>
                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-centre'> copyright 2025@ forever.com All Right Rseverd.</p>
            </div>
        </div>
    )
}

export default Footer