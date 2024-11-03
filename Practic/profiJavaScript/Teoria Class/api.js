class API {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    }

    fetchPosts() {
        return fetch(`${this.baseUrl}`)
            .then(data => data.json())
    }
}