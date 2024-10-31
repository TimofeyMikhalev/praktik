//1
// async function response() {
//     let request = await fetch('https://dog.ceo/api/breeds/image/random');

//     console.log(request)
// }

// response()

//2
//обьект на случайную картинку
fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => console.log(response)) 

//получить элемент который искали
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(res => console.log(res.message))

//выведет все данные обьекта
fetch('https://dog.ceo/api/breeds/image/random')
    .then((request) => {
       return request.json()
    })
    .then((data) => {
        console.log(data)
    })


//Задание вариант 1
// let images = document.querySelector('.images')


// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(weat => console.log(images.src = weat.message))


//Задание вариант 2
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then((weat) => {
        if(weat.status !== 'success') {
            return
        }

        document.querySelector('.img').innerHTML = `<img src="${weat.message}" alt="">`
    })


