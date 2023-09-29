import React from 'react'
import { IoArrowRedoCircle } from "react-icons/io5";
import StripeCheckout from 'react-stripe-checkout';

const PaymentPage = () => {

    const cardStyle = {
        width: '300px',
        height: '400px',
        marginTop: '32px',
        boxShadow: 'inset 0px 30px 60px -12px rgba(50, 50, 93, 0.25), inset 0px 18px 36px -18px rgba(0, 0, 0, 0.3)'
    };


    const onToken = (token) => {
        console.log(token)
    }









    return (
        <div className='h-[92.9vh] bg-blue-600 flex justify-center '>



            <div className="card w-[300px] h-[400px] mt-32 flex " style={cardStyle}>

                <h1 className='text-center text-2xl pt-4 '>Premium Account</h1>
                <h1 className='text-center pt-3 text-2xl'>Price BDT 200</h1>

                <ul className='pl-10 pt-10'>
                    <li className='flex text-sm pt-3'><IoArrowRedoCircle className='mt-1 mr-3' />Unlimited Blogs</li>
                    <li className='flex text-sm pt-3'><IoArrowRedoCircle className='mt-1 mr-3' />10+ Pictures for Per Blog</li>
                    <li className='flex text-sm pt-3'><IoArrowRedoCircle className='mt-1 mr-3' />More Suggestions for Travels</li>
                    <li className='flex text-sm pt-3'><IoArrowRedoCircle className='mt-1 mr-3' />And Many More....</li>


                </ul>



                <StripeCheckout
                    token={onToken}
                    stripeKey="pk_test_51NmGJKLGhlQCJ0D8JmLSw1uyu1bYfKWKIVMyyoXet9u9RJ8E3MGuKC0ibPJEjexm2M5BeozO4Q8RvgFPEqRn0quU00BZtARRN0"
                    className='mt-4 bg-blue-600 w-40 ml-16 text-white'
                    currency='BDT'
                    amount="200"
                    name='TravelSnap Premium'
                />




            </div>



        </div>
    )
}

export default PaymentPage