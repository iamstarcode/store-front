import React, { useState } from "react"

const StarRating = () => {
  const [rating, setRating] = useState(0)

  const handleStarClick = (newRating: React.SetStateAction<number>) => {
    setRating(newRating)
  }

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <span
          key={starNumber}
          className={`star ${starNumber <= rating ? "active" : ""}`}
          onClick={() => handleStarClick(starNumber)}
        />
      ))}
    </div>
  )
}

export const StaticStarRating = ({ starAmount }: { starAmount: number }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= starAmount) {
      stars.push(
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400  focus:transform-none"
          checked={true}
          key={i}
        />
      )
    } else {
      stars.push(
        <input
          type="radio"
          name="rating-1"
          checked={false}
          className="mask mask-star focus:translate-y-0"
        />
      )
    }
  }

  return (
    <div className="rating rating-sm transform-none transition-none">
      {stars}
    </div>
  )
}
export default StarRating
