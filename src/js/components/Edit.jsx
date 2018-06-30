import React from 'react';
import { Redirect, withRouter } from 'react-router'

class Edit extends React.Component {

  constructor() {
    super();
    this.state = {
      value: "",
      saved: false,
      error: false,
      posts: [],
    }

    this.onEdit = this.onEdit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    const posts = JSON.parse(localStorage.getItem("posts"));
    const post = posts.find(x => x.slug === slug);

    if (!post) {
      this.setState({error: true});
    }
    else {
      this.setState({
        value: post.title,
        posts
      });
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  onEdit() {
    const slug = this.props.match.params.slug;
    const post = this.state.posts.find(x => x.slug === slug);

    const newPost = {
      ...post,
      title: this.state.value,
    }

    const newPosts = this.state.posts.map(post => post.slug === slug ? newPost : post);

    localStorage.setItem('posts', JSON.stringify(newPosts));

    this.setState({ saved: true });
  }

  render() {
    if (this.state.saved) {
      return <Redirect to="/admin" />
    }

    if (this.state.error) {
      return <div>Error. Post not found</div>
    }

    return (
      <div>
        <input
          onChange={this.onChange}
          value={this.state.value}
        />
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.onEdit}
        >
          Сохранить 
      </button>
      </div>
    )
  }
}

export default withRouter(Edit);