let options = {
    rootMargin:'0px',
    threshold:0.2
}

let callback = (entries, observer) => {
    entries.forEach(el => {
        if(el.isIntersecting)
            el.target.style.visibility = "visible"
    })
}

let observer = new IntersectionObserver(callback, options);

const target = document.querySelector(".offer")

observer.observe(target);
