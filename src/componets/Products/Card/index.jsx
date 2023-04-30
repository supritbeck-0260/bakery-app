import React, { useState } from 'react'
import AddToCart from '../AddToCard'
import "./card.css"
const Card = ({image,name,price,currency,description,id}) => {
  return (
      <div className="card m-2">
        <img className="card-img-top zooming-effect" src={image} alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{currency+ " "+price}</p>
          <AddToCart id={id}/>
        </div>
      </div>
  )
}

export default Card