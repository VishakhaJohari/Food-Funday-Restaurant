const menuitems = [
    {
        id:1,
        name:"Garlic Bread",
        price:8.5,
        image:"images/garlicbread.jpg",
        qty:1
    },
    {
        id:2,
        name:"Mixed Salad",
        price:25,
        image:"images/salad.jpg",
        qty:1
    },
    {
        id:3,
        name:"BBQ Chicken Wings",
        price:10,
        image:"images/bbqchicken.jpg",
        qty:1
    },
    {
        id:4,
        name:"Meat Feast Pizza",
        price:5,
        image:"images/pizza.jpg",
        qty:1
    },
    {
        id:5,
        name:"Chicken Tikka Masala",
        price:15,
        image:"images/chickentikka.jpg",
        qty:1
    },
    {
        id:6,
        name:"Spicy MeatBalls",
        price:6.5,
        image:"images/meatballs.jpg",
        qty:1
    },
    {
        id:7,
        name:"Baklawa",
        price:6.5,
        image:"images/baklawa.jpg",
        qty:1
    },

    {
        id:8,
        name:"Apple Pie",
        price:12,
        image:"images/applepie.jpg",
        qty:1
    },

    {
        id:9,
        name:"Rasmalai",
        price:5,
        image:"images/rasmalai.jpg",
        qty:1
    },

    {
        id:10,
        name:"Pina Colada",
        price:14,
        image:"images/pina.jpg",
        qty:1
    },

    {
        id:11,
        name:"Hot Chocolate",
        price:8,
        image:"images/hotcho.jpg",
        qty:1
    },

    {
        id:12,
        name:"Blackberry Mojito",
        price:12.3,
        image:"images/mojito.jpg",
        qty:1
    }
]

let menulist=document.querySelector(".menus")
console.log(menulist)
function displaymenu()
{
    menuitems.map((menu)=>{
        menulist.innerHTML+=`
        <div class="col">
          <div class="card h-100 shadow">
            <img src=${menu.image} class="card-img-top h-75" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">${menu.name}</h5>
              <p class="card-text">$${menu.price}</p>
              <button type="button" class="btn btn-success" onclick="addtocart(${menu.id})">Add to Cart</button>
            </div>
          </div>
        </div>
        `
    })
}
displaymenu()
let cart=[] 
function addtocart(id)
{
    menuitems.forEach((item)=>{
        if(item.id==id)
        {
            cart.push(item)
            localStorage.setItem("Cart",JSON.stringify(cart))
        }
    })
  
}
const cartitems = JSON.parse(localStorage.getItem("Cart"))
console.log(cartitems)
const cartitemno = document.querySelector(".cartno") 
cartitemno.innerHTML = cartitems.length
function displaycartitems()
{
        
    cartitems.map((c,index)=>{
        document.getElementById("cartlist").innerHTML+=`
        <table style="width:100%">
        <tr>
        <td><img src=${c.image} height=80 width=80></td>
        <td>${c.name}</td>
        <td>$${c.price}</td>
        <td><i class="fa-solid fa-trash text-danger fs-2 onclick="removeitem(${c.index})"></i></td>
        </tr>
        </table>
        `    })
}
displaycartitems()

function gettotal()
{
    let total = 0
    cartitems.map((ci)=>{
        total = total+ci.price
       console.log(total)
       return total
    })
    document.querySelector(".subtotal").innerHTML+=
    "Total Amount is : $" + total
}
gettotal()

function removeitem(index)
{
    console.log(index)
    cartitems.splice(index,1)
    console.log(cartitems)
    localStorage.setItem("Cart",JSON.stringify(cartitems))     
}
removeitem()

