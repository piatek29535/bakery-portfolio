// items to scroll to

const welcomeSection = document.querySelector(".welcomeSection");
const offer = document.querySelector(".offer");
const products = document.querySelector(".products");
const contact = document.querySelector(".contact");

// method 
const scrollToElement = (scrollSection) => {
    
    switch(scrollSection){
        case "welcomeSection":
            window.scrollTo(
                {
                    top:welcomeSection.offsetTop,
                    left:0,
                    behavior:'smooth'
                }
            )
            break;
        case "offer":
            window.scrollTo(
                {
                    top:offer.offsetTop,
                    left:0,
                    behavior:'smooth'
                }
            )
            break;
        case "products":
            window.scrollTo(
                {
                    top:products.offsetTop,
                    left:0,
                    behavior:'smooth'
                }
            )
            break;
        case "contact":
            window.scrollTo(
                {
                    top:contact.offsetTop,
                    left:0,
                    behavior:'smooth'
                }
            )
            break;
        default:
            
    }
}