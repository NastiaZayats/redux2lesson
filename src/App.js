import './App.css';
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {
    usePostFetcher, setComments,
    setCommentsError,
    setCommentsIsLoading,
    usePostSetLoading,
    usePostSetError
} from "./redux"

const Comments = () => {
    const {isLoading, comments, error} = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        try {
            dispatch(setCommentsIsLoading())
            const response = await fetch
            ('http://jsonplaceholder.typicode.com/comments')
            const payload = await response.json()

            dispatch(setComments(payload))
        } catch (e) {
            dispatch(setCommentsError("!!"))
        }
    };

    React.useEffect(() => {
        fetchPosts();
    }, []);

    if (error) {
        return <h1>{error}</h1>
    }

    if (isLoading) {
        return <h1>Loading!!!</h1>
    }
    return (
        <div>
            {
                comments.map(comments => (
                    <p key={comments.id}>
                        {comments.name} - {comments.email}
                    </p>
                ))
            }
        </div>
    )
}


const Posts = () => {
    const {isLoading, posts, error} = useSelector(({posts}) => posts);

    const postFetcher = usePostFetcher();
    const postLoading = usePostSetLoading();
    const postError = usePostSetError();

    const fetchPosts = async () => {
        try {
            postLoading()
            const response = await fetch
            ('http://jsonplaceholder.typicode.com/posts')
            const payload = await response.json()

            postFetcher(payload)
        } catch (e) {
            postError('fail!')
            console.log(e, 'bly');
        }
    };

    React.useEffect(() => {
        fetchPosts();
    }, []);

    if (error) {
        return <h1>{error}</h1>
    }

    if (isLoading) {
        return <h1>Loading!!!</h1>
    }
    return (
        <div>
            {
                posts.map(posts => (
                    <p key={posts.id}>{posts.id}. {posts.title}
                    </p>
                ))
            }
        </div>
    )
}


function App() {
    return (
        <div>
            {/*<Posts/>*/}
            <Comments/>
        </div>
    );
}

export default App;
