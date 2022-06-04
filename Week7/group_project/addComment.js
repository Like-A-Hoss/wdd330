function addComment(hikeName, Comment){
const newComment = {
    name: hikeName,
    date: new Date(),
    content: Comment,
    type: 'hike'
};
}