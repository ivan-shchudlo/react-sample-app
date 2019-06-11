import delay from '../helpers/delay';

export default {
    fetchPosts: function() {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(result => delay(result, 2000));
    }
};