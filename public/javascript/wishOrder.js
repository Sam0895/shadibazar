
        let totalAmount = 0;
        const wishlist = localStorage.getItem("wishList") ?
            JSON.parse(localStorage.getItem("wishList"))
            : [];
        console.log(wishlist);
        const shippingInfo = localStorage.getItem("shippingInfo") ?     // condition 
            JSON.parse(localStorage.getItem("shippingInfo"))
            : null;
           console.log(shippingInfo)
        const shippingAddressHolder=document.createElement('div');
        shippingAddressHolder.className=('shippingAdd');
        shippingAddressHolder.innerHTML=` <div style="display:flex; flex-direction:column; align-item:center; justify-content:center;">
        <h3>Shipping Address</h3>
        <p style="font-size:18p">${shippingInfo.name} , ${shippingInfo.address} ,${shippingInfo.city} <br> ${shippingInfo.postalCode}</p>
        </div>
            `
        const ShippingAdd=document.querySelector(".ShippingAdd");
        ShippingAdd.appendChild(shippingAddressHolder)
        function createwishList(item) {
           return `
            <img  width="50px" height="50px"   src=${item.img} />
                <a href="/product/${item._id}">${item.name}</a>
                 <span > ${item.selectedQty} x ${item.price}  = &#8377;${item.price*item.selectedQty}  </span>
               `;
        }
        for (i = 0; i < wishlist.length; i++) {
            const wishListHolder = document.createElement('div');
            wishListHolder.className = ('wishList');
            wishListHolder.innerHTML = createwishList(wishlist[i]);
          const orderHolder= document.querySelector(".orderHolder");
            orderHolder.appendChild(wishListHolder);
            
        }
        function fun(){
            alert("coming soon")
        }
        
       
        
        if (wishList.length != 0) {
            wishList.forEach(function (item) {
                totalAmount = totalAmount + (Number(item.selectedQty) * item.price);
            });
            const user = localStorage.getItem("userInfo") ?     // condition 
            JSON.parse(localStorage.getItem("userInfo"))
            : null;
            
            const shippingInfo = localStorage.getItem("shippingInfo") ?     // condition 
            JSON.parse(localStorage.getItem("shippingInfo"))
            : null;
           

            const action = document.querySelector('.action');
            action.innerHTML = `
            <div class="actionsty" >
            <h3> Order Summary </h3>
                 <div style="display:flex; justify-content:space-between; margin-top:-25px">
                   <p> Items </p>
                   <p>${wishlist.length}</p>
               </div>
               <div style="display:flex; justify-content:space-between;margin-top:-25px">
               <p> Shipping </p>
               <p>  &#8377;${totalAmount>500? 0:totalAmount+199}</p>
           </div>
           <div style="display:flex; justify-content:space-between;margin-top:-25px">
           <p> Tax </p>
           <p>  &#8377;${totalAmount>500? totalAmount*18/100 :0}</p> 
       </div>
           
                <div style="display:flex; justify-content:space-between;margin-top:-25px">
                    
                    <p><b> Total Price</b></p>
                    <p> <b>&#8377; ${totalAmount>500?totalAmount+(totalAmount*18/100):totalAmount+199}</b></p>
                 </div>
                
             ${user?
                    `
                    ${shippingInfo?`<a href="/wishorders/${user.token}">
                    <button onclick="fun()"> Place Order </button>
                 </a>`:`<a href="/shipping/${user.token}">
                 <button > Place Order </button>
              </a>`}
                    `:
                    `<a href="/signin?redirect=shipping">
                        <button > Place Order </button>
                     </a>`

                }
               
            </div>
             `
        }

    
