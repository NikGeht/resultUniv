const POST_URL = `https://jsonplaceholder.typicode.com/posts/`;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments?postId=`;

function createPostElement(title, text, comments) {
    const postElement = document.createElement("div");
    postElement.id = "post";
    postElement.className = "post";

    const titlePost = document.createElement("h1");
    titlePost.className = "post__title";
    titlePost.textContent = title;
    const textPost = document.createElement("p");
    textPost.className = "post__text";
    textPost.textContent = text;

    const headerComment = document.createElement("b");
    headerComment.className = "post__comments-text";
    headerComment.textContent = "Комментарии";

    const commentsContainer = createCommentsElement(comments);
    if (!commentsContainer) {
        return null;
    }

    postElement.append(titlePost, textPost, headerComment, commentsContainer);

    return postElement;
}

function createCommentsElement(comments) {
    if (!Array.isArray(comments)) {
        return null;
    }
    const commentsContainer = document.createElement("div");
    commentsContainer.className = "post__comments";

    for (let comment of comments) {
        const commentContainer = document.createElement("div");
        commentContainer.className = "post-comment";

        const authorComment = document.createElement("span");
        authorComment.className = "post-comment__author";
        authorComment.textContent = comment?.email || "Empty email";

        const textComment = document.createElement("span");
        textComment.className = "post-comment__text";
        textComment.textContent = comment?.body || "Empty body";

        commentContainer.append(authorComment, textComment);
        commentsContainer.append(commentContainer);
    }
    return commentsContainer;
}

async function fetchingUrl(url) {
    try {
        const request = await fetch(url, {
            method: "GET",
        });
        const response = await request.json();

        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getPostWithComments(postId) {
    try {
        const post = await fetchingUrl(`${POST_URL}${postId}`);
        if (!post) {
            throw new Error("Пост не найден");
        }

        const comments = await fetchingUrl(`${COMMENTS_URL}${postId}`);
        if (!comments) {
            throw new Error("Комментарии не найдены");
        }
        return { post, comments };
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function renderPost(postId) {
    try {
        const { post, comments } = await getPostWithComments(postId);

        if (!post || !comments) {
            throw new Error("Не удалось получить пост или комментарии");
        }
        const { title, body } = post;
        if (!title || !body) {
            throw new Error("Не удалось получить данные поста");
        }
        const postElement = createPostElement(title, body, comments);
        if (!postElement) {
            throw new Error("Не удалось создать элемент поста");
        }
        document.body.append(postElement);
    } catch (error) {
        console.error(error);
        return null;
    }
}

renderPost(1);
