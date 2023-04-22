
export function navbar() {
    const nav = document.createElement('nav');
    nav.style.height = '50px';
    nav.style.backgroundColor = 'black';
    nav.style.color = 'white';
    nav.style.textAlign = 'center';
    nav.style.padding = '8px';
    
    //add a logo to the left side of the nav bar
    const logo = document.createElement('img');
    logo.src = 'https://upload.wikimedia.org/wikipedia/fr/thumb/1/10/Stade_Rennais_%28logo_du_Centenaire%29.svg/464px-Stade_Rennais_%28logo_du_Centenaire%29.svg.png?20200829152128'
    logo.style.height = '30px';
    logo.style.width = '30px';
    //align the logo to the left
    logo.style.float = 'left';
    //make the logo clickable
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', function() {
        //go to the homepage
        window.location.href = '/';
    });
    nav.appendChild(logo);
    
    //add a search bar to the center of the nav bar
    const search = document.createElement('input');
    search.type = 'text';
    search.placeholder = 'Search';
    search.style.height = '30px';
    search.style.width = '300px';
    search.style.borderRadius = '5px';
    search.style.border = 'none';
    search.style.padding = '5px';
    search.style.margin = '5px';
    search.style.float = 'center';
    nav.appendChild(search);
    //make a div to the right
    const right = document.createElement('div');
    right.style.float = 'right';
    right.style.height = '100%';
    right.style.width = '200px';
    //make it blue
   

    //add div login
    const login = document.createElement('div');
    login.style.height = '100%';
    login.style.width = '50%';
    login.style.float = 'left';
    login.style.padding = '5px';
    login.style.cursor = 'pointer';
    login.innerHTML = 'Login';
    login.addEventListener('click', function() {
        //go to the login page
        window.location.href = '/login';
    });
    right.appendChild(login);
    //add div Panier
    const panier = document.createElement('div');
   
    panier.style.height = '100%';
    panier.style.width = '50%';
    panier.style.float = 'right';
    panier.style.padding = '5px';
    panier.style.cursor = 'pointer';
    panier.innerHTML = 'Panier';
    panier.addEventListener('click', function() {
        //go to the cart page
        window.location.href = '/cart.html';
    });
    //add the number of items in the cart at the top right of the cart icon
    const number = document.createElement('div');
    number.className = 'number';
    number.style.height = '20px';
    number.style.width = '20px';
    number.style.backgroundColor = 'white';
    number.style.borderRadius = '50%';
    number.style.color = 'black';
    number.style.textAlign = 'center';
    number.style.position = 'absolute';
    number.style.top = '7px';
    number.style.right = '14px';
    number.style.padding = '2px';
    number.style.fontSize = '12px';
    //bold the number
    number.style.fontWeight = 'bold';
    number.innerHTML = '0';
    //center the number
    number.style.display = 'flex';
    number.style.justifyContent = 'center';
    number.style.alignItems = 'center';

    panier.appendChild(number);
    right.appendChild(panier);
    //get the number of items in the cart from the local storage
    const cart = JSON.parse(localStorage.getItem('cart'));
    //if there are items in the cart
    if (cart) {
        //set the number of items in the cart
        number.innerHTML = cart.length;
    }
    //when the user adds an item to the cart
    window.addEventListener('storage', function() {
        //get the number of items in the cart from the local storage
        const cart = JSON.parse(localStorage.getItem('cart'));
        //if there are items in the cart
        if (cart) {
            //set the number of items in the cart
            number.innerHTML = cart.length;
        }
    });
    






    nav.appendChild(right);
    return nav;
}