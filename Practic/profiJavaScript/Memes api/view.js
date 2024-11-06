// class View {
//     constructor({onMemeChange}) {
//         this.previewTopTextNode = document.querySelector('.js-top-text');
//         this.previewBottomTextNode = document.querySelector('.js-bottom-text');
//         this.previewImageNode = document.querySelector('.js-image');

//         this.settingsSelectNode = document.querySelector('.js-memes-select')

//         this.onMemeChange = onMemeChange;

//         this.settingsSelectNode.addEventListener('change', this._handleSelectChange)
//     }

//     //принимает previw из Model(this.preview = PREVIEW_MOCK;)
//     renderPreview(preview) {
//         //принимает обьект
//         const {
//             url,
//             textTop,
//             textBottom
//         } = preview;

//         //отрисовывает в интерфесе
//         this.previewTopTextNode.innerText = textTop;
//         this.previewBottomTextNode.innerText = textBottom;
//         this.previewImageNode.src = url;
//     } 

 
//     //передвать мемы и отрисовывать select чтобы отрисовавался нужно передать memes и id 
//     renderMemesSelect(memes, currentMemId) {
//         memes.forEach(meme => {

//             const {
//                 id, 
//                 name 
//             } = meme;

//             //создаю option
//             const optionNode = document.createElement('option')
//             //добавляю им value
//             optionNode.setAttribute('value', id)
//             //добавляю им имя
//             optionNode.innerText = name

//             //и если текущий мем совпадает с тем который выбран то мне нужно обозначить его как выбранный
//             if(id === currentMemId) {
//                 optionNode.setAttribute('selected', true)
//             }

//             //далее вставляю элементы 
//             this.settingsSelectNode.appendChild(optionNode)
//         });
//     }

//     _handleSelectChange = () => {
//         const id = this.settingsSelectNode.value;

//         //передавать id выбранного мема
//         this.onMemeChange(id)
//     }
    
// }


class View {
    constructor({
        onMemeChange,
        onTextTopChange,
        onTextBottomChange
    }) {
        this.previewTopTextNode = document.querySelector('.js-top-text');
        this.previewBottomTextNode = document.querySelector('.js-bottom-text');
        this.previewImageNode = document.querySelector('.js-image');
        
        this.settingsSelectNode = document.querySelector('.js-memes-select');
        this.textTopInputNode = document.querySelector('.js-text-top-input');
        this.textBottomInputNode = document.querySelector('.js-text-bottom-input');

        this.onMemeChange = onMemeChange;
        this.onTextTopChange = onTextTopChange;
        this.onTextBottomChange = onTextBottomChange;

        this.settingsSelectNode.addEventListener('change', this._handleSelectChange);
        this.textTopInputNode.addEventListener('input', this._handleTextTopChange);
        this.textBottomInputNode.addEventListener('input', this._handleTextBottomChange);
    }

    renderPreview(preview) {
        const {
            url,
            textTop,
            textBottom
        } = preview;

        this.previewTopTextNode.innerText = textTop;
        this.previewBottomTextNode.innerText = textBottom;
        this.previewImageNode.src = url;
    }

    renderMemesSelect(memes, currentMemeId) {
        memes.forEach(meme => {
            const {
                id,
                name
            } = meme;

            const optionNode = document.createElement('option');
            optionNode.setAttribute('value', id);
            optionNode.innerText = name;

            if (id === currentMemeId) {
                optionNode.setAttribute('selected', true);
            }

            this.settingsSelectNode.appendChild(optionNode);
        });
    }

    _handleSelectChange = () => {
        const id = this.settingsSelectNode.value;

        this.onMemeChange(id);
    }

    _handleTextTopChange = (event) => {
        this.onTextTopChange(event.target.value);
    }

    _handleTextBottomChange = (event) => {
        this.onTextBottomChange(event.target.value);
    }
}