const { Post, User, users, posts, addUser } = require('./main');

describe('User and Post functionality', () => {
    beforeEach(() => {
        users.length = 0;
        posts.length = 0;
    });

    test('Add a user', () => {
        const user = addUser('Igor', 24);
        expect(users).toHaveLength(1);
        expect(user.name).toBe('Igor');
        expect(user.age).toBe(24);
    });

    test('Add a post', () => {
        const user = addUser('Igor', 24);
        const post = user.addPost('Test Post', 'This is a test.');
        expect(user.posts).toHaveLength(1);
        expect(posts).toHaveLength(1);
        expect(post.title).toBe('Test Post');
        expect(post.text).toBe('This is a test.');
    });

    test('Delete a post', () => {
        const user = addUser('Igor', 24);
        user.addPost('Test Post', 'This is a test.');
        user.addPost('Another Post', 'This is another test.');
        user.delPost(1);
        expect(user.posts).toHaveLength(1);
        expect(posts).toHaveLength(1);
        expect(posts[0].title).toBe('Another Post');
    });

    test('Change a post', () => {
        const user = addUser('Igor', 24);
        user.addPost('Test Post', 'This is a test.');
        const updatedPost = user.changePost(1, 'Updated Title', 'Updated text');
        expect(updatedPost.title).toBe('Updated Title');
        expect(updatedPost.text).toBe('Updated text');
    });

    test('Get all posts', () => {
        const user = addUser('Igor', 24);
        user.addPost('Post 1', 'Content 1');
        user.addPost('Post 2', 'Content 2');
        expect(user.allPosts()).toHaveLength(2);
    });

});
