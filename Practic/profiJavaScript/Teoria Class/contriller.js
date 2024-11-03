class Controller {
    constructor() {
        //контролер знает про Model
        this.model = new Model({
            onPostsChange: this.handleModelPostChange
        });
        
        //контролер знает про View
        this.view = new View({
            onNewPost: this.handleViewNewPost
        });

        this.api = new API()
    }

    init() {
        this.api.fetchPosts()
            .then(posts => {
                this.model.setPost(posts)
            })
    }

    //при добавлении поста(логика метода)
    handleModelPostChange = (posts, isError) => {
        this.view.renderPost(posts, isError) //происходит отрисовка
    }

    //отображение
    handleViewNewPost = (title, body) => {
        this.model.addPost(title, body) //обновяется модель
    }
}