
const shippingInfo={
    name:'',
    address:'',
    city:'',
    contact:'',
    postalCode:'',
    country:''
}

function validate(e){
  let name=e.name;
  let value=e.value;
  if(name=="name"){
    shippingInfo.name=value;
  }
  if(name=="address"){
     shippingInfo.address=value;
  }
  if(name=="city"){
    shippingInfo.city=value;
  }
  if(name=="contact"){
     
    //   let phone=value;
    //   if(phone.length!=10){
    //       phoneElement.innerHTML=`<p style="margin-top:-6px;colour:red">Phone Number is invalid</p>`
    //   }else{
    //     phoneElement.innerHTML=`<p style="margin-top:-6px;colour:green">Phone Number is invalid</p>`
    //   } 
     shippingInfo.contact=value;
  }
  if(name=="postalCode"){
    shippingInfo.postalCode=value;
  }
  if(name=="country"){
     shippingInfo.country=value;
  }
}

function handlesubmit(){
      localStorage.setItem("shippingInfo",JSON.stringify(shippingInfo));
      const user=JSON.parse(localStorage.getItem("userInfo"))
      location.href=`/orders/${user.token}`
      return false
}