const POST_URL = `https://jsonplaceholder.typicode.com/posts/`;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments?postId=`;

function createPostElement(title, text, comments) {
    const postElement = document.createElement('div');
    postElement.id = 'post';
    postElement.className = 'post';

    const titlePost= document.createElement('h1');
    titlePost.className = 'post__title'
    titlePost.textContent = title;
    const textPost = document.createElement('p');
    textPost.className = 'post__text';
    textPost.textContent = text;

    const headerComment = document.createElement('b');
    headerComment.className = 'post__comments-text';
    headerComment.textContent = 'Комментарии';

    const commentsContainer = createCommentsElement(comments);

    postElement.append(titlePost, textPost, headerComment);
    postElement.append(commentsContainer);

    document.body.append(postElement);
    
}

function createCommentsElement(comments) {
    const commentsContainer = document.createElement('div');
    commentsContainer.className = 'post__comments';

    for (let comment of comments) {
        console.log(comment);
        const commentContainer = document.createElement('div');
        commentContainer.className = 'post-comment';

        const authorComment = document.createElement('span');
        authorComment.className = 'post-comment__author';
        authorComment.textContent = comment?.email;

        const textComment = document.createElement('span');
        textComment.className = 'post-comment__text';
        textComment.textContent = comment?.body;

        commentContainer.append(authorComment, textComment);
        commentsContainer.append(commentContainer);
    }
    return commentsContainer;
}

async function fetchingUrl(url) {
    try {
        const request = await fetch(url, {
            method: 'GET',
        })
        const response = await request.json();
        
        return response;
    } catch (error) {
        console.error(error);
    }
    
}

async function getPostWithComments(postId) {
    try {
        const post = await fetchingUrl(`${POST_URL}${postId}`);

        const comments = await fetchingUrl(`${COMMENTS_URL}${postId}`);
                
        return {post, comments};
    } catch (error) {
        console.error(error);
    }

    
}

async function renderPost(postId) {
    try {
        const {post, comments} = await getPostWithComments(postId);
        console.log('IN RENDER POST', post, comments);

        createPostElement(post.title, post.body, comments);
    } catch (error) {
        console.error(error);
    }
    
}

renderPost(1);