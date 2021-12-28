const close_btn = document.querySelector('.close-btn img');
const burger_btn = document.querySelector('.burger-btn');
const menu = document.querySelector('.burger-wrap');
const body = document.querySelector('body')

burger_btn.onclick = (e) => {
    const height = body.scrollHeight
    e.preventDefault()
    menu.style.height = height + 'px'
    menu.style.width = '70%' 
}

close_btn.onclick = (e) => {
    e.preventDefault()
    menu.style.width = '0px'
}




