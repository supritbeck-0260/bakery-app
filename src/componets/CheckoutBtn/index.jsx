import React, { useContext } from 'react'
import {BakeryItemsContext} from '../../App'

const CheckOut = () => {
 const {quantity={}} = useContext(BakeryItemsContext) 
 const itemCounts = Object.values(quantity).reduce((total,current)=> isNaN(current)? 0 : total+current,0)
 const clickHandler = ()=>{
     console.log(quantity)
 }
  return (
    itemCounts > 0 ? 
    <div className="nav-link btn btn-warning" onClick={clickHandler}>
    Checkout (<span className="item-count">{itemCounts}</span>) 
    </div>
    : null
  )
}

export default CheckOut