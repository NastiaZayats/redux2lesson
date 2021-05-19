import {
    SET_COMMENTS,
    SET_COMMENTS_IS_LOADING,
    RESET_COMMENTS_IS_LOADING,
    SET_COMMENTS_ERROR,
} from "../actionTypes"

const initialStore = {
    comments: [],
    isLoading: false,
    error: null
};

export const commentsReducer = (state = initialStore, action) => {
    switch (action.type) {

        case SET_COMMENTS: {
            return {
                ...state,
                comments: action.payload,
                isLoading: false
            }
        }
        case SET_COMMENTS_IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_COMMENTS_IS_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_COMMENTS_ERROR: {
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
