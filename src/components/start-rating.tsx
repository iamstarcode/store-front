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
  console.log(starAmount)
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= starAmount) {
      stars.push(
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          key={i}
        />
      )
    } else {
      stars.push(
        <input type="radio" name="rating-1" className="mask mask-star" />
      )
    }
  }

  return <div className="rating">{stars}</div>
}
export default StarRating
