// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function(){
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(linksContainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
    
});


// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navBarHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navBarHeight){
        navbar.classList.add("fixed-nav");
    } else{
        navbar.classList.remove("fixed-nav");
    }

    (scrollHeight > 500) ? topLink.classList.add("show-link") : topLink.classList.remove("show-link");
        
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click", scrollToPostion());
});


function scrollToPostion() {
    return function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heightts
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let elementPosition = element.offsetTop - navHeight;
        if(!fixedNav){
            elementPosition = elementPosition - navHeight;
        }
        if( navHeight > 82){
            elementPosition = elementPosition + containerHeight;
        }
        window.scrollTo({
            left : 0,
            top : elementPosition
        });
        linksContainer.style.height = 0;
    }
}