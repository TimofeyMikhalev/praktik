// //Превью не с апи а просто пример локальный
// const PREVIEW_MOCK = {
//     textTop: 'Верхняя надпись',
//     textBottom: 'Нижняя надпись'
// }

// class Model {
//     constructor({ onCurrentMemeIdChange, onMemesChange }) {
//         //хранилка мемов
//         this.memes = [];
//         //хранение текущего id мема
//         this.currentMemId = null;
//         this.preview = PREVIEW_MOCK;

//         this.onCurrentMemeIdChange = onCurrentMemeIdChange;
//     }

//     //геттер для хранилки - чтобы можно было получить мемы
//     getMemes() {
//         return this.memes;
//     }

//     //сеттер для хранилки - чтобы можнло было достать мемы
//     setMemes(memes) {
//         this.memes = memes;
//         this.onMemesChange(this.memes)
//     }

//     setCurrentMemId(currentMemId) {
//         this.currentMemId = currentMemId

//         this.onCurrentMemeIdChange()
//     }

//     getCurrentMemId() {
//         return this.currentMemId
//     }

//     //чтобы что-то получить я не могу на прямую прочитать это нужно сделать методам
//     getPreview() {
//         return this.preview;
//     }

//     getCurrentMeme() {
//         let currentMeme = null;

//         this.memes.forEach(meme => {
//             if(meme.id === this.getCurrentMemId()) {
//                 currentMeme = meme
//             }
//         })   
//         return currentMeme
//     }
// }

class Model {
    constructor({
        onCurrentMemeIdChange,
        onMemesChange,
        onTextTopChange,
        onTextBottomChange
     }) {
        this.memes = [];
        this.currentMemeId = null;
        this.textTop = '';
        this.textBottom = '';

        this.onMemesChange = onMemesChange;
        this.onCurrentMemeIdChange = onCurrentMemeIdChange;
        this.onTextTopChange = onTextTopChange;
        this.onTextBottomChange = onTextBottomChange;
    }

    getMemes() {
        return this.memes;
    }

    setMemes(memes) {
        this.memes = memes;
        this.currentMemeId = memes[0].id;

        this.onMemesChange();
        this.onCurrentMemeIdChange();
    }

    setCurrentMemeId(currentMemeId) {
        this.currentMemeId = currentMemeId;

        this.onCurrentMemeIdChange();
    }

    getCurrentMemeId() {
        return this.currentMemeId;
    }

    setTextTop(text) {
        this.textTop = text;

        this.onTextTopChange();
    }

    setTextBottom(text) {
        this.textBottom = text;

        this.onTextBottomChange();
    }

    getPreview = () => {
        return {
            textTop: this.textTop,
            textBottom: this.textBottom,
            url: this.getCurrentMeme().url
        };
    }

    getCurrentMeme() {
        let currentMeme = null;

        this.memes.forEach(meme => {
            if (meme.id === this.getCurrentMemeId()) {
                currentMeme = meme;
            }
        })

        return currentMeme;
    }
}