//1
// async function response() {
//     let request = await fetch('https://dog.ceo/api/breeds/image/random');

//     console.log(request)
// }

// response()

//2
//обьект на случайную картинку
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => console.log(response)) 

// //получить элемент который искали
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(res => console.log(res.message))

// //выведет все данные обьекта
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then((request) => {
//        return request.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })


//Задание - вариант 1(Рандомные картинки с Api)
// let images = document.querySelector('.images')


// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(weat => console.log(images.src = weat.message))


//Задание - вариант 2(Рандомные картинки с Api)
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then((weat) => {
//         if(weat.status !== 'success') {
//             return
//         }

//         document.querySelector('.img').innerHTML = `<img src="${weat.message}" alt="">`
//     })




//Самостоятельная работа
//Взятие с Api данных и вывод на сайт
// let btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     fetch('https://api.genderize.io/?name=vadim')
//     .then((response) => response.json())
//     .then((rest) => {
//         document.querySelector('.title').innerHTML = rest.name
//         document.querySelector('.text').innerHTML = rest.gender
//         document.querySelector('.container').classList.add('active')
//     })
  
// })

//
let btn = document.querySelector('.btnTwo')

function dogImg() {
    fetch('https://random.dog/woof.json')
        .then((reponse) => reponse.json())
        .then((result) => {
            document.querySelector('.img').src = result.url
        }) 
}


btn.addEventListener('click', dogImg)



//теория
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'Новая задача',
//         completed: false
//     }),
//     headers: {
//         'name': 'Tima'
//     }
// })
//     .then(request => request.json())
//     .then(result => console.log(result))



//query(get) - запросы 

// const params = new URLSearchParams(location.search)

// const id = params.get('id')

// console.log(id)

// fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8e055477`)
//     .then(response => response.json())
//     .then(json => console.log(json))