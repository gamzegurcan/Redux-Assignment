//ADD_POST, REMOVE_POST(id), UPDATE_POST(id, title), ADD_COMMENT(id, userId, comment), REMOVE_COMMENT(id), REMOVE_USER_COMMENTS(userId), ADD_UP_VOTE(id), ADD_DOWN_VOTE(id)
//Action Types
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const UPDATE_POST = "UPDATE_POST";
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const REMOVE_USER_COMMENTS = "REMOVE_USER_COMMENTS";
const ADD_UP_VOTE = "ADD_UP_VOTE";
const ADD_DOWN_VOTE = "ADD_DOWN_VOTE";

//Action Creators
export const addPost = (id, title) => ({
  type: ADD_POST,
  payload: { 
    id, 
    title, 
    comments: [], 
    votes: { up: 0, down: 0 } 
  },
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id
})

export const updatePost = (id, title) => ({
  type: UPDATE_POST,
  payload: {
    id,
    title
  }
})

export const addComment = (id, userId, comment) => ({
  type: ADD_COMMENT,
  payload: {
    id,
    userId,
    comment
  }
})

export const removeComment = (id, commentId) => ({
  type: REMOVE_COMMENT,
  payload: {
     id, 
     commentId 
  }
})

export const removeUserComments = (userId) => ({
  type: REMOVE_USER_COMMENTS,
  payload: userId
})

export const addUpVote = (id) => ({
  type: ADD_UP_VOTE,
  payload: id
})

export const addDownVote = (id) => ({
  type: ADD_DOWN_VOTE,
  payload: id
})

//Reducer
const postReducer = (posts = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...posts, action.payload]
    case REMOVE_POST:
      return posts.filter(item => item.id !== action.payload)
    case UPDATE_POST:
      return posts.map(item => item.id === action.payload.id ? { ...item, title: action.payload.title } : { ...item })
    case ADD_UP_VOTE:
      return posts.map(item => item.id === action.payload ?
        { ...item, votes: { ...item.votes, up: item.votes.up + 1 } } : { ...item })
    case ADD_DOWN_VOTE:
      return posts.map(item => item.id === action.payload ?
        { ...item, votes: { ...item.votes, down: item.votes.down + 1 } } : { ...item })
    default:
      return posts
  }
}

export default postsReducer;