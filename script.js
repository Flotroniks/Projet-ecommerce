//import footer from './footer.js';
import {footer} from './js/module/footer.js';
import { navbar } from './js/module/navbar.js';
//write hello world to the body
let body = document.querySelector('body');
//add a black nav bar to the top of the page with the text "Hello World" and a height of 100px

body.appendChild(navbar());
//add a footer to the bottom of the page
body.appendChild(footer());

//fetch the data from the data.json file
fetch('data.json')
.then(function(response) {
 
    return response.json();
}
)
.then(function(data) {
    const str = JSON.stringify(data);
    const array = JSON.parse(str).articles;
    //loop through the data$
    for (let i = 0; i < array.length; i++) {
        const item = array[i].article;
   
        //get the url 
        let url = window.location.href;
    
        //create a div for each article
        let article = document.createElement('div');
        article.style.width = '300px';
        article.style.height = '380px';
        article.style.border = '1px solid black';
        article.style.margin = '10px';
        article.style.float = 'left';
        article.style.padding = '10px';
        //make the article clickable
        article.style.cursor = 'pointer';
        //add the article to the body

        //add the image to the article
        let image = document.createElement('img');
        image.src = item.link;
        image.style.width = '100%';
        image.style.height = '200px';
        article.appendChild(image);
        //add the title to the article
        let title = document.createElement('h3');
        title.innerHTML = item.name;
        //make the title make one line
        title.style.overflow = 'hidden';
        title.style.textOverflow = 'ellipsis';
        title.style.whiteSpace = 'nowrap';
        
        article.appendChild(title);
        //add the description to the article
        let description = document.createElement('p');

        description.innerHTML = item.description;

        //make the description make 3 line
        description.style.overflow = 'hidden';  
        description.style.textOverflow = 'ellipsis';
        description.style.display = '-webkit-box';
        description.style.webkitLineClamp = '3';
        description.style.webkitBoxOrient = 'vertical';


        article.appendChild(description);
        //add the price to the article
        let price = document.createElement('p');
        price.innerHTML = item.price + '€'	;
       
        //add the note to the article
        let note = document.createElement('p');
        note.innerHTML = item.note;
     //make the note and the price in the same line
        let div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.appendChild(price);
        div.appendChild(note);
        article.appendChild(div);
        //make the article clickable
        article.addEventListener('click', function() {
            //go to the article page
            window.location.href = '/article.html?id=' + item.id;
        }
);


        //add the article to the body
        body.appendChild(article);

    }

    

});






