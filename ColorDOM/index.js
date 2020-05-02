document.addEventListener ("click", e =>{ 
    var color = document.defaultView.getComputedStyle(document.querySelector(`.${e.target.className}`),null)['backgroundColor'];
    document.querySelector('.element').style.backgroundColor = color;
});