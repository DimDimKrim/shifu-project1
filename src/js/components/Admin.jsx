import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap';

import Post from './Post.js';

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: JSON.parse(localStorage.getItem("posts"))
    }

    this.onRemove = this.onRemove.bind(this);
  }


  onRemove(slug) {
    return () => {
      localStorage.setItem('posts', JSON.stringify(this.state.posts.filter(post => post.slug !== slug)));
      this.setState(state => {
        return {
          posts: state.posts.filter(post => post.slug !== slug)
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Link to="/admin/add" className="btn btn-info">Добавить элемент</Link>

        <Link to="/">← Main Page</Link>
        {this.state.posts.map(post => (
          <Post key={post.slug} post={post} onRemove={this.onRemove(post.slug)} />
        ))}
      </div>
    );
  }
}
