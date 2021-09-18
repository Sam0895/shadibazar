
        let totalAmount = 0;
        const itemInCart = localStorage.getItem("cartItems") ?
            JSON.parse(localStorage.getItem("cartItems"))
            : [];
        console.log(itemInCart);

        function createcartItem(item) {
            return `<img  width="80px" height="80px"   src=${item.img} />
                <a href="#">${item.name}</a>
                <span> &#8377; ${item.price} X ${item.selectedQty} </span>
                <button id=${item._id} onclick="deleteItem(this)">Delete</button> `;
        }
        for (i = 0; i < itemInCart.length; i++) {
            const cartItemHolder = document.createElement('div');
            cartItemHolder.className = ('cartitem');
            cartItemHolder.innerHTML = createcartItem(itemInCart[i]);
            const col2 = document.querySelector(".col2");
            col2.appendChild(cartItemHolder);
        }
        function deleteItem(e) {
            const filtercartItem = itemInCart.filter(function (item) {
                if (item._id != e.id) {
                    return item;
                }
            })
            localStorage.setItem("cartItems", JSON.stringify(filtercartItem));   //update 
            location.reload();   //reload page

        }
        if (itemInCart.length == 0) {
            const msgBox = document.querySelector('.msgBox');
            msgBox.innerHTML = `
           <p style="color:red";>Your Cart is Empty 
            <a href="/products">Go Shopping</a>
            </p>
           `;
        }
        if (itemInCart.length != 0) {
            itemInCart.forEach(function (item) {
                totalAmount = totalAmount + (Number(item.selectedQty) * item.price);
            });
            const user = localStorage.getItem("userInfo") ?     // condition 
            JSON.parse(localStorage.getItem("userInfo"))
            : null;

            const action = document.querySelector('.action');
            action.innerHTML = `
            <div class="actionsty">
                <p> ${itemInCart.length} items &#8377; ${totalAmount}</p>
                ${user?
                    `<a href="/shipping/${user.token}">
                        <button> Proceed to checkout </button>
                     </a>`
                    :
                    `<a href="/signin?redirect=shipping">
                        <button> Proceed to checkout </button>
                     </a>`

                }
               
            </div>
             `
        }

    
