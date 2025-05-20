import React, {useState} from 'react'
import ThankYou from './thankYou';

const RatingCard = () => {

    const [submit, setSubmit] = useState(false)
    const [rate, setRate] = useState(0)

  return (
    <main>
        { submit? (<ThankYou rating={rate}/>) : 
        <div className="ratingCard">
            <article>
                <div className='star'>
                    <img src="/images/icon-star.svg" alt="star-icon" />
                </div>
                <h3 className="question">How did we do?</h3>
                <p className="rating-request">Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!</p>
            </article>
            <div className="ratings">
                <button className="rating-btn" onClick={() => setRate(1)}>1</button>
                <button className="rating-btn" onClick={() => setRate(2)}>2</button>
                <button className="rating-btn" onClick={() => setRate(3)}>3</button>
                <button className="rating-btn" onClick={() => setRate(4)}>4</button>
                <button className="rating-btn" onClick={() => setRate(5)}>5</button>
            </div>
            <div className="submit">
                <button onClick={(e) => {e.preventDefault(); 
                    if (rate > 0) {
                        setSubmit(true);
                    }
                }}>SUBMIT</button>
            </div>
        </div>}
        
    </main>
  )
}

export default RatingCard;