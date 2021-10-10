let Qty = 1;
function wishlist(e){ 
  
const id=e.value;
  const origin = document.location.origin;
const url = `${origin}/api/product/${id}`;

fetch(url)
  .then(function(response){
  let promiseOfDb=response.json();// gives  the promise of db
  if(response.ok){
           promiseOfDb.then(function(data){
              const olderwishListArray=localStorage.getItem("wishList")?
                   JSON.parse(localStorage.getItem("wishList"))
                   :[];

              const filterwishList=olderwishListArray.filter(function(item){
                  if(item._id!=data._id){
                        return item
                  }
              })

            localStorage.setItem("wishList",
            JSON.stringify([...filterwishList,{...data,selectedQty:Qty}]));
            
            location.href="/wishlist";
       })
  }
  else{
          const msgBox=document.querySelector("#msgBox");
          promiseOfDb.then(function(err){
          msgBox.innerText=err.errMsg;
       })
  }
})}