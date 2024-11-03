class API {
    constructor() {
        this.baseUrl = 'https://api.imgflip.com/get_memes'
    }

    memPost() {
        return fetch(`${this.baseUrl}`)
            .then(data => data.json())
    }
}


let mem = document.querySelector('#mem');
let previe = document.querySelector('.previe');


function searchFilm() {
   
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(jsonData => {
            if(jsonData.success) {  
                jsonData.data.memes.forEach(meme => {
                    mem.innerHTML += `<option>${meme.name}</option>`
                });
            }
    
        })
}   
searchFilm()


mem.addEventListener('change', myFunction)

function myFunction() {
    var x = document.getElementById("mem").value;
    console.log(x)
}





