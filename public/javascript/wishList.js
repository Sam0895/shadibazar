
        let totalAmount = 0;
        const wishlist = localStorage.getItem("wishList") ?
            JSON.parse(localStorage.getItem("wishList"))
            : [];
        console.log(wishlist);

        function createwishList(item) {
            return `<div style="display:flex; flex-direction:column; align-item:center; padding:8px; justify-content:center;">
            <img  width="80px" height="80px"   src=${item.img} />
                <a href="/product/${item._id}">${item.name}</a>
                </div>
                <span > ${item.selectedQty} x ${item.price}  = &#8377;${item.price*item.selectedQty}  </span>
                <button id=${item._id} onclick="deleteItem(this)">Delete</button> `;
        }
        for (i = 0; i <wishlist.length; i++) {
            const wishListHolder = document.createElement('div');
            wishListHolder.className = ('wishList');
            wishListHolder.innerHTML = createwishList(wishlist[i]);
            const col2 = document.querySelector(".col2");
            col2.appendChild(wishListHolder);
        }
        function deleteItem(e) {
           if(wishlist.length==1){
            const filterwishList= wishlist.filter(function (item) {
                if (item._id != e.id) {
                    return item;
                }
            })
            localStorage.setItem("wishList", JSON.stringify(filterwishList));   //update 
               location.href='/products'
           }
        else{
            const filterwishList= wishlist.filter(function (item) {
                if (item._id != e.id) {
                    return item;
                }
            })
            localStorage.setItem("wishList", JSON.stringify(filterwishList));   //update 
            location.reload();   //reload page
        }

        }
        if (wishlist.length == 0) {
            const msgBox = document.querySelector('.msgBox');
            msgBox.innerHTML = `
          <div class="blankCart">
              <h2> Nothing in Wishlist</h2>
              <a href="/products"><button>Add Now </button></a>
            </div>
           `;
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
                 <div style="display:flex; justify-content:space-between;">
                   <p>Total Items </p>
                   <p>${wishlist.length}</p>
               </div>
                <div style="display:flex; justify-content:space-between;">
                     <p> Total Price</p>
                    <p> &#8377; ${totalAmount}</p>
                 </div>
                
             ${user?
                    `
                    ${shippingInfo?`<a href="/wishorders/${user.token}">
                    <button> Proceed to checkout </button>
                 </a>`:`<a href="/shipping/${user.token}">
                 <button> Proceed to checkout </button>
              </a>`}
                    `:
                    `<a href="/signin?redirect=shipping">
                        <button> Proceed to checkout </button>
                     </a>`

                }
               
            </div>
             `
        }

    
