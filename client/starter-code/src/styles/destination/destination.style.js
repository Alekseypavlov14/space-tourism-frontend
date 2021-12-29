const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')

const circles = document.querySelectorAll('.nav-link')

const img = document.querySelector('#img')
const title = document.querySelector('.main-article-title')
const describes = document.querySelector('.main-article-content')
const distance = document.querySelector('.distance-value')
const time = document.querySelector('.travel-time-value')

const links = [link1, link2, link3, link4]

links.forEach((el, i) => {
    el.onclick = (e) => {
        e.preventDefault()

        fetch('http://127.0.0.1:5500/client/starter-code/data.json').then((res) => {
            return Promise.resolve(res)
        }).then(response => {
            return response.json()
        }).then(data => {
            return data.destinations
        }).then(data => {
            img.src = data[i].images.png
            title.innerText = data[i].name
            describes.innerText = data[i].description
            distance.innerText = data[i].distance
            time.innerText = data[i].travel

            circles.forEach(element => {
                element.classList.remove('link-active')
            })

            circles[i].classList.add('link-active')
        })
    }
})