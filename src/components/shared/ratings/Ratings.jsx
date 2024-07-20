import React from 'react'

const Ratings = ({rating, reviews}) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex items-center">
      <span className="text-yellow-400 text-xl">★</span>
      <span className="text-yellow-400 text-xl">★</span>
      <span className="text-yellow-400 text-xl">★</span>
      <span className="text-yellow-400 text-xl">★</span>
      <span className="text-yellow-400 text-xl">★</span>
      </div>
      {rating && <h3>({rating*20})</h3>}
      {reviews && <h3 className="text-gray-500/80">({reviews} Reviews)</h3>}
    </div>
  )
}

export default Ratings