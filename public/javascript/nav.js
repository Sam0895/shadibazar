class NavBar {

    createNavBar(imgUrl, brandName, userInfo, length) {
        return `   <div class="nav">
        <div class="brand">
            <a href="/products">
                <img  src=${imgUrl}  />
            </a>
            <a href="/products">
                <h3>
                    ${brandName}
                </h3>
            </a>
        </div>
     
        <div class="menu-items">
        ${length == 0 ?
                ` <a href="/cart"><i style="height:16px;" class="fas fa-shopping-cart"></i></a>` :
                ` <a href="/cart"><i style="height:16px;" class="fas fa-shopping-cart"></i>
               <span class="banner">${length}</span>
              </a>`
            }
            
            ${userInfo ?
                ` <div class="dropdown">
               <button class="dropbtn"> ${userInfo.name}</button>
               <div class="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#">Orders</a>
                  <a href="#" onclick="logout()">Logout</a>
                </div>
            </div>`:
                ` <a href="/signin"><i class="fas fa-user"></i></a>`}
           
         </div>
    </div>`;

    }
}

const user = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo"))          //condition 
    : null;

const cartItems = localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem("cartItems"))
    : [];


const navBar = new NavBar();
const imgUrl = "/images/logo.jpg";
const brandName = "ShadiBazar";
const navHolder = document.createElement('div');
navHolder.innerHTML = navBar.createNavBar(imgUrl, brandName, user, cartItems.length);
document.body.appendChild(navHolder);

function logout() {
    localStorage.clear();
    location.href = "/signin";
    location.reload();
}





