import {
    SET_POSTS,
    SET_POSTS_IS_LOADING,
    RESET_POSTS_IS_LOADING,
    SET_POSTS_ERROR
} from "../actionTypes";

const initialStore = {
    comments: [],
    isLoading: false,
    error: null
};


//set_posts
//set_loading
//reset_is_loading

export const postsReducer = (state = initialStore, action) => {
    switch (action.type) {

        case SET_POSTS: {
            return {
                ...state,
                comments: action.payload,
                isLoading: false
            }
        }
        case SET_POSTS_IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_POSTS_IS_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_POSTS_ERROR: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }

        default:
            return state;
    }
}

