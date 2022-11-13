import Post from './Post'

const PostList = ({ postList, deletePost, editPost }) => {
    return (
        <div className='container'>
            {/* checks if there are any posts in postList, if so it maps over them to render posts */}
            {postList.length > 0 ? (
                postList.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        deletePost={deletePost}
                        editPost={editPost} />
                ))) : (
                <h2 className='text-center mt-5'>No Posts</h2>
            )}


        </div>

    )
}

export default PostList