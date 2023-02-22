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
      Total Cost {total}
  </div>
<div>
  <input type="text" placeholder='Enter Coupen Code' />
</div>
<div>
  <textarea placeholder='Enter Your Address'></textarea>
</div>
<div>
  <button>
    Buy
  </button>
</div>

</div>

    </div>
  )
}

export default Checkout