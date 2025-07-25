import React from 'react'
import ReviewCard from '../Layouts/ReviewCard'
import img1 from '../assets/Reviews-img-1.jpg'
import img2 from '../assets/reviews-img-2.jpg'
import img3 from '../assets/reviews-img-3.jpg'
import './Reviews.css'

function Reviews() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-10'>
        <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>
        <div className='review-con-1'>
            <ReviewCard img={img1} name="Sophia Azura"/>
            <ReviewCard img={img2} name="John Deo"/>
            <ReviewCard img={img3} name="Victoria"/>
        </div>
    </div>
  )
}

export default Reviews