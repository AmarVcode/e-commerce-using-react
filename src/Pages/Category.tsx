import React, { useState } from 'react'
import data from '../Database/products.json'




const Category = () => {
  const catdata=localStorage.getItem("catdata");
  const [productdata,changedata]=useState("");
  let newdata:any=[];

const mapeddata=()=>{
  return newdata.map((elem:any)=>{
    return <div>
      
    </div>

    
  })
}

  
for(let i=0;i<data.length;i++){
if(data[i].categoryId === catdata){
newdata.push(data[i])
}
}
console.log(newdata)
  return (
    <div>Category</div>
  )
}

export default Category