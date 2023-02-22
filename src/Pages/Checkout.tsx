import React from 'react'
import { json } from 'react-router-dom';

const Checkout = () => {

let data:any = localStorage.getItem("cart") || "[]";
data=JSON.parse(data);
console.log(data)

let total=0


  for(let i=0;i<data.length;i++){
    total=total+data[i].price
  }


  return (
    <div>

<div className="checked">
  <div>
    Number Of Items {data.length}
  </div>
  <div>
      Total Cost is {total} {data[0].currency}
  </div>
<div className='mini-flex'>
  <input type="text" placeholder='Enter Coupen Code' /><button className='btn-apply'>
    Apply
  </button>
</div>
<div>
  <textarea placeholder='Enter Your Address'></textarea>
</div>
<div>
  <button className='btn-buy'>
    Buy
  </button>
</div>

</div>

    </div>
  )
}

export default Checkout