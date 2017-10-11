let ajaxRequest = new XMLHttpRequest();
let postsList = document.getElementById('posts-list');

ajaxRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');

ajaxRequest.onload = function () {
    let posts = JSON.parse(ajaxRequest.responseText);
    postsListHTML(posts);
};

ajaxRequest.send();

function postsListHTML(posts) {
    let post = "";

    for (i = 0; i < posts.length; i++) {
        post += "<li class='post col-md-6'>";
        post += "<h2 class='title'>"+posts[i].title+"</h2>";
        post += "<article>"+posts[i].body+"</article>";
    }

    postsList.insertAdjacentHTML('beforeend', post);
}