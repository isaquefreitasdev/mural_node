module.exports = {
    posts: [
        {
            id: "iifen9otp",
            title: "irirg",
            description: "ietieptignei"
        },],
    getall() {
        return this.posts
    },
    newPost(title, description) {
        this.posts.push({ id: generatorID(), title, description })
    },
    deletePost() {
        this.posts.id.pop("")
    }
}
function generatorID() {
    return Math.random().toString(36).substring(2, 9)
}