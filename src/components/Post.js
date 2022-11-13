import { useState } from 'react'

const Post = ({ post, deletePost, editPost }) => {
    const id = post.id;
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className="mx-auto container">
            {/* checks if the post is a post or edit with boolean isEdit. If isEdit is true, it shows the form to allow edits */}
            {isEdit !== true ? (<div className="card text-center m-3 px-3 pt-2 post-card">
                <h2 className="card-title mb-3">{post.title}</h2>
                <p className="card-text mb-3">{post.content}</p>
                <div className="row card-btns mt-3">
                    <div className="container">
                        <button
                            className="btn btn-danger m-3"
                            onClick={() => deletePost(post.id)}>Delete</button>
                        <button
                            className="btn btn-warning m-3"
                            onClick={() => {
                                setIsEdit(true);
                                setTitle(post.title);
                                setContent(post.content);
                            }}>Edit</button>
                    </div>
                </div>
            </div>) : (
                <form
                    autoComplete='off'
                    onSubmit={(e) => {
                        e.preventDefault();
                        editPost({ id, title, content });
                        setTitle('');
                        setContent('');
                        setIsEdit(true);
                    }}>
                    <input
                        className="form-control fw-semibold text-center fs-2"
                        id="titleInput"
                        placeholder={post.title}
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                    <textarea
                        className="form-control text-center"
                        id="contentInput"
                        placeholder={post.content}
                        value={content}
                        onChange={(e) => { setContent(e.target.value) }} />
                    <button
                        type="submit">Submit</button>
                </form>
            )}

        </div>
    )
}

export default Post


