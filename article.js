import {footer} from './js/module/footer.js';
import { navbar } from './js/module/navbar.js';
//write hello world to the body
let body = document.querySelector('body');
//add a black nav bar to the top of the page with the text "Hello World" and a height of 100px

body.appendChild(navbar());
//add a footer to the bottom of the page
body.appendChild(footer());

const idArticle = window.location.search.split('=')[1];

fetch('data.json')
.then(function(response) {
 
    return response.json();
}
)
.then(function(data) {
    const str = JSON.stringify(data);
    const article = JSON.parse(str).articles
   //find the article with the id   
    for (let i = 0; i < article.length; i++) {
  
        if (article[i].article.id == idArticle) {
            //get the article
            const item = article[i].article;
            console.log(item)
            //split the screen in two
            const left = document.createElement('div');
            left.style.width = '50%';
            left.style.float = 'left';
            left.style.height = '100%';
          
            left.style.padding = '10px';

            
            const right = document.createElement('div');
            right.style.width = '50%';
            right.style.float = 'right';
            right.style.height = '100%';
       
            right.style.padding = '10px';
            right.style.paddingRight = '30px';
            //add the article to the left side of the screen
            const img = document.createElement('img');
            img.src = item.link;
            img.style.width = '70%';
            img.style.height = '400px';
            img.style.objectFit = 'contain';
            //center the image
            img.style.display = 'block';
            img.style.marginLeft = 'auto';
            img.style.marginRight = 'auto';

            left.appendChild(img);
            //add the article to the right side of the screen
            const title = document.createElement('h1');
            title.innerHTML = item.name;
           
            const price = document.createElement('h2');
            price.innerHTML = item.price + '€';
            //make the price and the title of the article on the same line line
           const titlePrice = document.createElement('div');
              titlePrice.style.display = 'flex';
                titlePrice.style.flexDirection = 'row';
                titlePrice.style.justifyContent = 'space-between';
                titlePrice.style.width = '100%';
                titlePrice.appendChild(title);
                titlePrice.appendChild(price);
            right.appendChild(titlePrice);
            const description = document.createElement('p');
            description.innerHTML = item.description;
            //justify the text
            description.style.textAlign = 'justify';
            right.appendChild(description);
            //add the note
            const note = document.createElement('p');
            note.innerHTML = 'Note : ' + item.note;
          
            //add the quantity
            const quantity = document.createElement('p');
            quantity.innerHTML = 'Quantité : ' + item.quantity;
           //display the note and the quantity on the same line
            const noteQuantity = document.createElement('div');
            noteQuantity.style.display = 'flex';
            noteQuantity.style.flexDirection = 'row';
            noteQuantity.style.justifyContent = 'space-between';
            noteQuantity.style.width = '90%';
            //center the note and the quantity
            
            noteQuantity.appendChild(note);
            noteQuantity.appendChild(quantity);
            right.appendChild(noteQuantity);


    
            //add the button to add the article to the cart
            const button = document.createElement('button');
            button.innerHTML = 'Ajouter au panier';
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.padding = '10px';
            button.style.marginTop = '10px';
            button.style.width = '100%';
            button.style.cursor = 'pointer';
            button.style.fontSize = '20px';
            button.style.borderRadius = '5px';
            button.style.outline = 'none';
            button.style.transition = 'all 0.3s ease';
            button.addEventListener('mouseover', function() {
                button.style.backgroundColor = 'white';
                button.style.color = 'black';
            });
            button.addEventListener('mouseout', function() {
                button.style.backgroundColor = 'black';
                button.style.color = 'white';
            });
            button.addEventListener('click', function() {
                //add the article to the cart
                let cart = JSON.parse(localStorage.getItem('cart'));
                if (cart == null) {
                    cart = [];
                }
                cart.push(item);
                localStorage.setItem('cart', JSON.stringify(cart));
                //add a message to the user
                const message = document.createElement('p');
                message.innerHTML = 'Article ajouté au panier';
                message.style.color = 'green';
                message.style.fontSize = '20px';
                message.style.fontWeight = 'bold';
                message.style.marginTop = '10px';
                //center the message
              
                message.style.width = '100%';
                message.style.textAlign = 'center';
                right.appendChild(message);
                //make only one message appear at a time
            
                //remove the message after 3 seconds
                setTimeout(function() {
                    right.removeChild(message);
                }, 3000);
                //update the number of articles in the cart
                const number = document.querySelector('.number');
                number.innerHTML = cart.length;
                

                
            });

            right.appendChild(button);
            


        
            



   




            body.appendChild(left);
            body.appendChild(right);
        


            
            
        
           
        }
    }
});