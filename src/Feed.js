import React from 'react';
import Post from './Post';
import postService from './services/postsService';
import {Route} from "react-router-dom";

export default class Feed extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { posts: [], isLoading: false };
        this.removePost = this.removePost.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        postService.fetchPosts().then(posts => {
            this.setState({ posts, isLoading: false });
        });
    }

    removePost(post, post2) {
        this.state;
        this.setState((state) => ({
            posts: state.posts.filter(p => p !== post),
        }));
        this.setState((state) => ({
            posts: state.posts.filter(p => p !== post2),
        }));

    }

    render() {
        var posts = [];
        if (!this.state.isLoading) {
            for(var i = 0; i < this.state.posts.length; i++) {
                posts.push(<Post key={this.state.posts[i].id} post={this.state.posts[i]} onRemovePost={this.removePost} />);
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