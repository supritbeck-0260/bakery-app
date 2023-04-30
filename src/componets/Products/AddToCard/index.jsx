import React, { useContext } from 'react'
import {BakeryItemsContext} from '../../../App'
import "./addToCart.css"
const AddToCart = ({id}) => {
const {quantity,increaseHandler,decreaseHandler} = useContext(BakeryItemsContext)
  return (
      <>
    {!quantity[id] && <button className="btn btn-light align-bottom text-info font-weight-bold" onClick={()=>increaseHandler(id)}>Add to Cart</button>}
   {quantity[id] > 0 &&
    <div className="input-group">
        <span className="input-group-btn">
            <button type="button" className="btn btn-default btn-number" data-type="minus" onClick={()=>decreaseHandler(id)} data-field="quantity">
            -
            </button>
        </span>
        <input type="text" name="quantity" disabled className="form-control input-number" value={quantity[id]}/>
        <span className="input-group-btn">
            <button type="button" className="btn btn-default btn-number" onClick={()=>increaseHandler(id)} data-type="plus" data-field="quantity">
            +
            </button>
        </span>
    </div>}
    </>
  )
}

export default AddToCart