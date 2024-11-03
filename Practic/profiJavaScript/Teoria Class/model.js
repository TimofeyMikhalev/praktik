class Model {
    constructor({onPostsChange}) {
        this.posts = []
        this.isError = false //состояние ошибки
        this.onPostsChange = onPostsChange
    }

    addPost(title, body) {
        if(this._isPostValid(title)) {
            this.isError = false;

            this.posts.push({
                title,
                body,
                timestamp: Date.now()
            });

        } else {
            this.isError = true;
        }

        //при добавлении поста вызывается оповещение
        this.onPostsChange(this.posts, this.isError)
    }

    setPost(posts) {
        this.posts = posts

        this.onPostsChange(this.posts, this.isError)
    }

    getPost() {
        return this.posts 
    }

    _isPostValid(title) {
        return title.length < 100
    }


}

