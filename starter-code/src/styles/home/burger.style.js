const close_btn = document.querySelector('.close-btn img');
const burger_btn = document.querySelector('.burger-btn');
const menu = document.querySelector('.burger-wrap');

burger_btn.onclick = (e) => {
    e.preventDefault()
    menu.style.width = '70%' 
}

close_btn.onclick = (e) => {
    e.preventDefault()
    menu.style.width = '0px'
}




