import COLORS from './colors.js';
import {footer} from './js/module/footer.js';
import { navbar } from './js/module/navbar.js';
//write hello world to the body
let body = document.querySelector('body');
//add a black nav bar to the top of the page with the text "Hello World" and a height of 100px

body.appendChild(navbar(COLORS));
//add a footer to the bottom of the page
body.appendChild(footer());

//get the article from local storage

let cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
if (cartLocalStorage == null) {
    cartLocalStorage = [];
}
let cart = []
for (let i = 0; i < cartLocalStorage.length; i++) {

    let article = cartLocalStorage[i];
    let articleInCart = false;
    for (let j = 0; j < cart.length; j++) {
        if (cart[j].id == article.id) {
            cart[j].quantityCart++;
            articleInCart = true;
        }
    }
    if (articleInCart == false) {
        if (article.quantityCart == undefined || article.quantityCart == null) {
            article.quantityCart = 1;
        }
            
        
        
        cart.push(article);
    }
}
console.log('cart', cart);


//je souhaite afficher les articles du panier
const cartContainer = document.createElement('div');
cartContainer.style.width = '70%';
cartContainer.style.height = '100%';
cartContainer.style.display = 'flex';
cartContainer.style.flexDirection = 'column';
cartContainer.style.alignItems = 'center';
cartContainer.style.justifyContent = 'center';


//display the cartContainer at the left of the page
cartContainer.style.float = 'left';
//body.appendChild(cartContainer);

const PriceContainer = document.createElement('div');
PriceContainer.style.width = '30%';
PriceContainer.style.height = '100%';
PriceContainer.style.display = 'flex';


PriceContainer.style.justifyContent = 'center';

//display the cartContainer at the left of the page
PriceContainer.style.float = 'right';
//body.appendChild(PriceContainer);

//make a container for the cart and the price
const container = document.createElement('div');
container.style.width = '100%';
container.style.height = '100%';
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';

body.appendChild(container);
container.appendChild(cartContainer);
container.appendChild(PriceContainer);



//je souhaite afficher le prix total du panier
const priceBox = document.createElement('div');
priceBox.style.border = '1px solid black';
priceBox.style.alignItems = 'center';
priceBox.style.width = '80%';
priceBox.style.height = '200px';
priceBox.style.display = 'flex';
priceBox.style.flexDirection = 'column';
priceBox.style.margin = '10px';

const price = document.createElement('h3');
price.innerHTML = 'Prix total :';
price.style.padding = '10px';
price.style.textAlign = 'center';
priceBox.appendChild(price);



const pricer = document.createElement('h3');
pricer.innerHTML = getTotalPrice();
pricer.style.padding = '10px';
pricer.style.textAlign = 'center';
priceBox.appendChild(pricer);

const purchaseButton = document.createElement('div');
purchaseButton.style.width = '80%';
purchaseButton.style.height = '50px';
purchaseButton.style.backgroundColor = "white";
purchaseButton.style.color = COLORS.text;
//add a border to the button
purchaseButton.style.border = '2px solid ' + COLORS.primary;

//invers the color of the button when the mouse is on it and when it is not reset the color
purchaseButton.addEventListener('mouseover', function() {
    purchaseButton.style.backgroundColor = COLORS.primary;
    purchaseButton.style.color = COLORS.text    ;
});
purchaseButton.addEventListener('mouseout', function() {
    purchaseButton.style.backgroundColor = "white";
    purchaseButton.style.color = COLORS.text;
});
purchaseButton.style.textAlign = 'center';
purchaseButton.style.padding = '8px';
purchaseButton.style.margin = '10px';
purchaseButton.innerHTML = 'Acheter';
purchaseButton.style.display = 'flex';
purchaseButton.style.justifyContent = 'center';
purchaseButton.style.alignItems = 'center';
purchaseButton.style.cursor = 'pointer';
purchaseButton.addEventListener('click', function() {
    alert('Merci pour votre achat');
    localStorage.clear();
    window.location.href = 'index.html';
});
priceBox.appendChild(purchaseButton);













PriceContainer.appendChild(priceBox);


//je souhaite afficher les articles du panier
for (let i = 0; i < cart.length; i++) {
    //je souhaite afficher les articles du panier
    const cartItem = document.createElement('div');
    cartItem.style.width = '80%';
    cartItem.style.height = '200px';
    cartItem.style.border = '1px solid black';
    cartItem.style.display = 'flex';
    cartItem.style.flexDirection = 'row';
    cartItem.style.alignItems = 'center';
    cartItem.style.justifyContent = 'space-between';
    cartItem.style.margin = '10px';
    cartContainer.appendChild(cartItem);
    //je souhaite afficher les articles du panier
    const img = document.createElement('img');
    img.src = cart[i].link;

    img.style.height = '100%';
    img.style.objectFit = 'contain';
    cartItem.appendChild(img);
   
    
    //je souhaite afficher les articles du panier
    const name = document.createElement('h2');
    name.innerHTML = cart[i].name;
  
    
    //je souhaite afficher les articles du panier
    const quantity = document.createElement('p');
    quantity.innerHTML ="Quantité :" + cart[i].quantityCart;



    //je souhaite afficher les articles du panier
    const deleteButton = document.createElement('div');
    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>';
    deleteButton.style.backgroundColor = 'transparent';

    deleteButton.style.cursor = 'pointer';
    cartItem.appendChild(deleteButton);
    //je souhaite supprimer un article du panier
    deleteButton.addEventListener('click', function() {
       //if the quantity is 1, delete the item
         if (cart[i].quantityCart == 1) {
            cart.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.reload();
            }else{
                cart[i].quantityCart--;
                console.log('de', cart);
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.reload();
            }
    
        
        
       
        
    });
    //make a div to contain the quantity and delete button
    const quantityAndDelete = document.createElement('div');
    quantityAndDelete.style.display = 'flex';
    quantityAndDelete.style.flexDirection = 'row';
    quantityAndDelete.style.width = '200px';
    quantityAndDelete.style.justifyContent = 'space-between';
    
    //align vertically the quantity and delete button
    quantityAndDelete.appendChild(quantity);
    quantityAndDelete.appendChild(deleteButton);
    



    //make a div to contain the name and quantity
    const nameAndQuantity = document.createElement('div');
    nameAndQuantity.style.display = 'flex';
    nameAndQuantity.style.flexDirection = 'column';
    nameAndQuantity.style.width = '100%';
    nameAndQuantity.style.justifyContent = 'center';
    nameAndQuantity.style.paddingLeft = '30px';
    nameAndQuantity.appendChild(name);
    nameAndQuantity.appendChild(quantityAndDelete);
    cartItem.appendChild(nameAndQuantity);




    //je souhaite afficher les articles du panier
    const price = document.createElement('h1');
    price.style.width = '170px';
    price.innerHTML = cart[i].price + ' €';
    cartItem.appendChild(price);

    
}


function getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {

        totalPrice += cart[i].price * cart[i].quantityCart;
    }
    return totalPrice + ' €';

  
}









