import React, { useState } from 'react'
import { json, Link } from 'react-router-dom';
import Checkout from './Checkout';

const Cart = () => {

const [refresh,letrefresh]=useState(true)

  let cartdata:any=localStorage.getItem("cart") || "[]"
  cartdata=JSON.parse(cartdata);


const removecart=(data:any,i:any)=>{
    let cdata:any=localStorage.getItem("cart") || "[]";
    cdata=JSON.parse(cdata);
    cdata.splice(i,1);
    cdata=JSON.stringify(cdata);
    localStorage.setItem("cart",cdata)

if(refresh===true){
  letrefresh(false)
}
else{
  letrefresh(true)
}

}

  let mapeddata=()=>{
    return cartdata.map((elem:any,i:any)=>{
      return <div key={elem.id} className='cart-box'>
        <div className='imgdiv-cart'><img src={elem.thumbnail} alt="" />
        </div>
        <div>
          {elem.name}
        </div>
        <div>
          Price:- {
            elem.price 
          } {
              elem.currency
          }
        </div>
        <div>
          <button onClick={()=>{removecart(elem,i)}}>
            Remove
          </button>
        </div>
      </div>
    })
  }


  return (
    <div>
      <h1>
        Cart
      </h1>
      <div className='main-cart'>
    {mapeddata()}
      </div>
      <Link to='/check'  className='check'>Go to Checkout</Link>
    </div>
  )
}

export default Cart