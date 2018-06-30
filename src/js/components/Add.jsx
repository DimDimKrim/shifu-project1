import React from 'react';
import { Redirect } from 'react-router'

export default class Add extends React.Component {

  constructor() {
    super();
    this.state = {
      value: "",
      added: false
    }

    this.onAdd = this.onAdd.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  onAdd() {
    const oldPosts = JSON.parse(localStorage.getItem('posts'));
    const newPost = {
      slug: (+new Date()).toString(),
      title: this.state.value,
      content: '',
    }

    localStorage.setItem('posts', JSON.stringify([newPost, ...oldPosts]));

    this.setState({ added: true });
  }

  render() {
    if (this.state.added) {
      return <Redirect to="/admin" />
    }

    return (
      <div>
        <input onChange={this.onChange} />
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.onAdd}
        >
          Добавить
      </button>
      </div>
    )
  }
}
