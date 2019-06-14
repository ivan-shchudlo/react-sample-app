import delay from '../helpers/delay';
import data from 'json';
export default {
    fetchPosts: function() {
        return Promise.resolve(data)
            .then(result => delay(result, 2000));
    }
};