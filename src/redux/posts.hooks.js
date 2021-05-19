import {useDispatch} from "react-redux";
import { setPosts, setPostsError, setPostsLoading} from "./";

export const usePostFetcher = () => {
    const dispatch = useDispatch();

    return (payload) => {
        dispatch(setPosts(payload))
    };
};

export const usePostSetLoading = () => {
    const dispatch = useDispatch();

    return (payload) => {
        dispatch(setPostsLoading())
    };
};

export const usePostSetError = () => {
    const dispatch = useDispatch();

    return (payload) => {
        dispatch(setPostsError(payload));
    };
};

