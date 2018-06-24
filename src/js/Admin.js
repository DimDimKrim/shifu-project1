import React from 'react';
import { Link } from 'react-router-dom'

export default function (props) {
  return (
    <div>
      <Link to="/">← back</Link>
      {props.posts.map(post => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
