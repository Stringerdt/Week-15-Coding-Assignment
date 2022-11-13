import { useState } from 'react'

const PostForm = ({ addPost }) => {
    // state for the title and content values from the form
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // returns the form
    return (
        <div className="container">
            <h2 className="text-center fw-bold mb-4">Add New Post</h2>
            {/* this prevents default re-render, sends addPost & its values, and sets the values back to default*/}
            <form
                autoComplete='off'
                onSubmit={(e) => {
                    e.preventDefault();
                    addPost({ title, content });
                    setTitle('');
                    setContent('');
                }}>
                <div className="mb-4">
                    {/* this (and the textarea input), sets the input values to the e.target.value on a value change*/}
                    <input
                        className="form-control fw-semibold"
                        id="titleInput"
                        placeholder="Post Title..."
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }} />
                </div>
                <div className="mb-4">
                    <textarea
                        className="form-control"
                        id="contentInput"
                        placeholder="Post Content..."
                        value={content}
                        onChange={(e) => { setContent(e.target.value) }} />
                </div>
                <div className="mb-2 text-center">
                    <button
                        type="submit"
                        className="btn btn-md btn-dark fw-bold">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PostForm