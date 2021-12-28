const link1 = document.querySelector('.link1 .nav-link-text')
const link2 = document.querySelector('.link2 .nav-link-text')
const link3 = document.querySelector('.link3 .nav-link-text')
const link4 = document.querySelector('.link4 .nav-link-text')

const name = document.querySelector('.main-article-title')
const image = document.querySelector('#img')
const role = document.querySelector('main-article-pre-title')
const bio = document.querySelector('main-article-content')

const links = [link1, link2, link3, link4]

links.forEach((el, index) => {
    el.onclick = (e) => {
        e.preventDefault()
        
        fetch('data.json').then((res) => {
            data = res.json()
            name.innerHTML = data['crew'][i]['name']
            bio.innerHTML = data['crew'][i]['bio']
            role.innerHTML = data['crew'][i]['role']
            image.src = data['crew'][i]['images']['png']
        })
    }
})