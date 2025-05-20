import React from 'react'
import './thankYou.css'

const ThankYou = ({rating}) => {
  return (
    <main>
        <div className="thankYou-card d-flex flex-column align-items-center">
            <div className="top mb-3">
                <img className='mb-4' src="/images/illustration-thank-you.svg" alt="" />
                <p className='rating-report py-2 px-4 rounded-5'>You selected {rating} out of 5</p>
            </div>

            <div className="bottom text-center">
                <h3>Thank you!</h3>
                <p>  We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>
            </div>
        </div>
    </main>
  )
}

export default ThankYou