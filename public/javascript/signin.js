
const userInfo={
    email:'',
    password:''
}

function validate(e){
  let name=e.name;
  let value=e.value;
  if(name=="email"){
      userInfo.email=value;
  }
  if(name=="password"){
      userInfo.password=value;
  }
}
function insta(){
    alert("Coming Soon")
  }
function handlesubmit(){
    const redirect=location.search.split("=")[1];
   
  
    const url=`${location.origin}/signin`;
    const requestHeader={
        method:"POST",
        headers:new Headers({
            'Content-Type':'application/json'
        }),
        body:JSON.stringify({
           email:userInfo.email,
           password:userInfo.password
        })
    };
    fetch(url,requestHeader)
      .then(function(res){
           const promise=res.json();
                   if(res.ok){
                         promise.then(function(data){
                            localStorage.setItem("userInfo",JSON.stringify(data));
                            if(redirect=="shipping"){
                                location.href=`/shipping/${data.token}`;
                            }else{
                                location.href="/products";
                            }
                         })
                   }else{
                       promise.then(function(err){
                           console.log(err)
                           const msgBox=document.querySelector(".msg");
                           msgBox.innerHTML=err.errMsg;
                       })
                   }
      })
return false
}