import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//* Reducer Imports
import postReducer from './reducers/postReducers'
import {
  fetchAllPostsReducer,
  createPostReducer,
} from './reducers/newPostsReducer'
import { eventsReducer } from './reducers/eventReducers'
import { adminReducer } from './reducers/adminReducers'
import { uploadImageReducer } from './reducers/uploadReducers'

const initialState = {}

const reducer = combineReducers({
  post: postReducer,
  fetchAllPosts: fetchAllPostsReducer,
  createPost: createPostReducer,
  events: eventsReducer,
  admin: adminReducer,
  uploadImage: uploadImageReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
