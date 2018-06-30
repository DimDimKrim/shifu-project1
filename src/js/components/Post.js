import React from 'react';
import { Link } from 'react-router-dom'
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
      <Link to={`/admin/edit/${post.slug}/`} className="btn btn-primary">Редактировать</Link>
      

    </div>
  )
}
