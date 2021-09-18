let userInfo={
    email:'',
    password:'',
    userName:'',
    confirmPassword:''

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
  if(name=="userName"){
    userInfo.userName=value;
  }
  if(name=="confirmPassword"){
      userInfo.confirmPassword=value;
  }
}

function handlesubmit(){
    if(userInfo.password!=userInfo.confirmPassword){
        alert("password and Confirm Password does  not match");
        return false
    }
    const url=`${location.origin}/signup`;
    const requestHeader={
        method:"POST",
        headers:new Headers({
            'Content-Type':'application/json'
        }),
        body:JSON.stringify({
            name:userInfo.userName,
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
                              console.log(data);
                              location.href="/shipping";
                         })
                   }else{
                       promise.then(function(err){
                          console.log(err); 
                           const msgBox=document.querySelector(".msg");
                           msgBox.innerHTML=err.errMsg;
                       })
                   }
      })
 return false
 }