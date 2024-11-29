class Post {
    constructor(title, text, id, userId) {
        this.title = title;
        this.text = text;
        this.id = id;
        this.userId = userId;
    }
}

class User {
    constructor(name, age, id, posts = []) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.posts = posts;
    }

    addPost(title, text) {
        let postId = this.posts.length + 1;
        let post = new Post(title, text, postId, this.id);
        this.posts.push(post);
        posts.push(post);
        return(post);
    }

    delPost(id) {
        this.posts = this.posts.filter(post => post.id !== id);
        posts.splice(posts.findIndex(post => post.id === id), 1);
        return(this.posts);
    }

    allPosts() {
        return(this.posts);
    }

    changePost(id, title, text) {
       
        if (title !== "") {
            posts[id - 1].title = title;
        }
        if (text !== "") {
            posts[id - 1].text = text;
        }
        return(posts[id - 1]);
    }

}

// Функция для добавления пользователя

function addUser(name, age) {
    const id = users.length + 1; 
    const newUser = new User(name, age, id);
    users.push(newUser);
    return newUser; 
}

module.exports = { Post, User, users, posts, addUser };