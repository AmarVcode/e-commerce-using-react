import React, { useState } from 'react'
import { json } from 'react-router-dom';
import data from '../Database/products.json'




const Category = () => {
  const catdata=localStorage.getItem("catdata");
  const [productdata,changedata]=useState("");
  let newdata:any=[];


const addcart=(local:any)=>{
  let bool:any=true
  let localdata:any=localStorage.getItem("cart")||"[]";
  localdata=JSON.parse(localdata);
  
      // console.log(localdata[i].id)
      if(localdata.length===0){
  bool=true
      }
  else{
      localdata.map((elem:any)=>{
          if(elem.id===local.id){
              bool=false
          }
      })
  }
  
  
  if(bool===true){
    localdata.push(local);  
  }
  else{
      alert("Item Already Exist")
  }
  
  localdata=JSON.stringify(localdata);
  localStorage.setItem("cart",localdata)
  
}


const mapeddata=()=>{
  return newdata.map((elem:any)=>{
    return <div key={elem.id}>
      <div className="imgdiv">
        <img src={elem.thumbnail} alt="" />
      </div>
      <div className="flex-c">

      <h2>
        {elem.name}
      </h2>
      <h3>
        Price {elem.price} {elem.currency}
      </h3>
      <h4>
        Delivery {
          elem.delivery===true?"40rs":"Free"
        }
      </h4>
      <button onClick={()=>{addcart(elem)}}>
        Add To Cart
      </button>
        </div>
    </div>

    
  })
}

  


const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = (event:any) => {
  setIsChecked(event.target.checked);
};

const [isChecked2, setIsChecked2] = useState(false);

const handleCheckboxChange2 = (event:any) => {
  setIsChecked2(event.target.checked);
};






for(let i=0;i<data.length;i++){

if(isChecked===true && isChecked2===true ){
if(data[i].inStock===true && data[i].delivery===false && data[i].categoryId === catdata){
  newdata.push(data[i])
}
}
else if(isChecked===true){
  if(data[i].inStock===true && data[i].categoryId === catdata){
    newdata.push(data[i])
  }
}
else if(isChecked2===true){
  if( data[i].delivery===false && data[i].categoryId === catdata){
    newdata.push(data[i])
  }
}
else{
  if(data[i].categoryId === catdata){
    newdata.push(data[i])
  }
}

}





  return (
    <div className='grid-cat'>
      <div>
        <div className='box'>
         <input type="checkbox" name="Instock" id="Instock" checked={isChecked}
          onChange={(e)=>handleCheckboxChange(e)} />
<label htmlFor="Instock">In Stock</label> 
        </div>
        <div className='box'>
         <input type="checkbox" name="delivery" id="delivery"  checked={isChecked2}
          onChange={(e)=>handleCheckboxChange2(e)} />
<label htmlFor="delivery">Free Delivery</label> 
        </div>

      </div>
      <div className='cat-data-map'>
        {mapeddata()}
      </div>
    </div>
  )
}

export default Category