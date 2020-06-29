import React from 'react'
import Star from './Star'

const StarRating = ({starsSelected=0, totalStars=5, onRate= f=>f}) =>
   <div className="star-rating">
      {[...Array(totalStars)].map((n,i) => //n:인자, i:오류방지를 위한 key값
         <Star key={i} selected={i<starsSelected} onClick={() => onRate(i+1)} />
      )}
      <p>별점: {starsSelected} / {totalStars}</p>
   </div>
   
export default StarRating