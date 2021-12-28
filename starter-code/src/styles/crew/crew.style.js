const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')
const circles = document.querySelectorAll('.nav-link')

const person = document.querySelector('.main-article-title')
const image = document.querySelector('#img')
const role = document.querySelector('.main-article-pre-title')
const bio = document.querySelector('.main-article-content')

const links = [link1, link2, link3, link4]

links.forEach((el, i) => {
    el.onclick = (event) => {
        event.preventDefault()
    
        fetch('http://127.0.0.1:5500/starter-code/data.json').then((res) => {
            return Promise.resolve(res)
        }).then(response => {
            return response.json()
        }).then(data => {
            return data.crew
        }).then(data => {
            person.innerText = data[i].name;
            bio.innerText = data[i].bio;
            role.innerText = data[i].role;
            image.src = data[i].images.png;

            circles.forEach(element => {
                element.classList.remove('link-active')
            })

            circles[i].classList.add('link-active')
        })
    }
})