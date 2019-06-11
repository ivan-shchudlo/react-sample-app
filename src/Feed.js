import React from 'react';
import Post from './Post';
import postService from './services/postsService';

export default class Feed extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { posts: [], isLoading: false };
        this.removePost = this.removePost.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        postService.fetchPosts().then(posts => {
            console.log(posts);
            this.setState({ posts, isLoading: false });
        });
    }

    removePost(post) {
        this.setState({
            posts: this.state.posts.filter(p => p !== post),
        });
    }

    render() {
        var posts = [];
        if (!this.state.isLoading) {
            for(var i = 0; i < this.state.posts.length; i++) {
                posts.push(<Post post={this.state.posts[i]} onRemovePost={this.removePost} />);
            }
        }
        
        return (
            <div>
                {this.state.isLoading && <h2>Loading ...</h2>}
                {posts}
            </div>
        )
    }
}