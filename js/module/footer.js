export function footer() {
    const footer = document.createElement('footer');
    footer.style.height = '50px';
    footer.style.backgroundColor = 'grey';
    footer.style.color = 'white';
    footer.style.textAlign = 'center';
    footer.style.padding = '8px';
    //set the footer to the bottom of the page
    footer.style.position = 'fixed';
    footer.style.left = '0';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    //div with "mention legales "
    let mention = document.createElement('div');
    mention.innerHTML = 'Mentions légales';
    
    footer.appendChild(mention);
    //div with "contact"
    let oblique  = document.createElement('div');
    oblique.innerHTML = '|';
    oblique.style.margin = '0 10px';
    
    footer.appendChild(oblique);
    let contact = document.createElement('div');
    contact.innerHTML = 'Contact';
    //center allthe divs in the footer
    footer.style.display = 'flex';
    footer.style.justifyContent = 'center';
    footer.appendChild(contact);
return footer;   
}