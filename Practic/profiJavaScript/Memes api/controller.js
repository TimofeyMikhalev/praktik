// class Controller {
//     constructor() {
//         //контролер знает про Model
//         this.model = new Model({
//             onMemesChange: this.handleModelMemesChange,
//             onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange
//         });
        
//         //контролер знает про View
//         this.view = new View({
//             onMemeChange: this.handlViewMemeChange
//         });
        
//         //контролер знает про API
//         this.api = new API()
//     }

//     init() {
//         //получить мемы
//         const memes = this.api.getMemes();

//         this.model.setCurrentMemId(memes[0].id)
//         this.model.setMemes(memes);

//     }

//     handlViewMemeChange(id) {
//         this.model.setCurrentMemId(id);
//     }

//     handleModelMemesChange = () => {
//         this.view.renderMemesSelect(this.model.getMemes(), this.model.setCurrentMemId())
//     }

//     //когда я setCurrentMemId запускай render и будет запуск onCurrentMemeIdChange функции
//     handleModelCurrentMemeIdChange = () => {
//         const preview = {
//             ...this.model.getPreview(),
//             url: this.model.getCurrentMeme().url
//         }  

//         this.view.renderPreview(preview)
//     } 
  





//     // init() {
//     //     this.api.fetchPosts()
//     //         .then(posts => {
//     //             this.model.setPost(posts)
//     //         })
//     // }

//     // //при добавлении поста(логика метода)
//     // handleModelPostChange = (posts, isError) => {
//     //     this.view.renderPost(posts, isError) //происходит отрисовка
//     // }

//     // //отображение
//     // handleViewNewPost = (title, body) => {
//     //     this.model.addPost(title, body) //обновяется модель
//     // }
// }

class Controller {
    constructor() {
        this.model = new Model({
            onMemesChange: this.handleModleMemesChange,
            onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
            onTextTopChange: this.handleModelTextTopChange,
            onTextBottomChange: this.handleModelTextBottomChange
        });

        this.view = new View({
            onMemeChange: this.handleViewMemeChange,
            onTextTopChange: this.handleViewTextTopChange,
            onTextBottomChange: this.handleViewTextBottomChange
        });

        this.api = new API();
    }

    init() {
        this.api.getMemes()
            .then(data => {
                const memes = data.data.memes;
                this.model.setMemes(memes);
            });
    }

    handleModleMemesChange = () => {
        this.view.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());
    } 

    handleModelCurrentMemeIdChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handleModelTextTopChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handleModelTextBottomChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handleViewMemeChange = (id) => {
        this.model.setCurrentMemeId(id);
    }

    handleViewTextTopChange = (text) => {
        // проверка на количество символов
        
        this.model.setTextTop(text);
    }

    handleViewTextBottomChange = (text) => {
        // проверка на количество символов
        
        this.model.setTextBottom(text);
    }
}