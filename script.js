function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector)
    if(elements.length > instance){
        elements[instance].scrollIntoView({bahavior: 'smooth'})
    }
}

const link1 = document.getElementById("link1");