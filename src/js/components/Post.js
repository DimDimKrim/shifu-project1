import React from 'react';

export default (props) => {
  const { post, onRemove } = props;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button
        type="button"
        className="btn btn-danger"
        onClick={onRemove}
      >
        Удалить
      </button>
    </div>
  )
}
