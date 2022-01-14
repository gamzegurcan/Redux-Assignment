import store from "./reduxStore";
import {increment,decrement} from "./reduxStore/counter";
import { addPost, addUpVote, removePost, updatePost, addDownVote } from "./reduxStore/posts";
import {addTask, removeTask} from "./reduxStore/tasks";

console.log(store);
// store.dispatch(increment());
store.subscribe(() =>console.log(store.getState())); // her işlem olduğunda güncel durumu gösterir.

// store.dispatch(addTask(1,"Gamze"));
// store.dispatch(addTask(2,"Cagla"));
// store.dispatch(removeTask(2));
console.log(store.getState());
store.dispatch(addPost(1, "deneme post "));
store.dispatch(addPost(2, "deneme jkjgf"));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addDownVote(1))
store.dispatch(updatePost(1, "updated post"))
store.dispatch(removePost(2))


console.log(store.getState().posts[0].votes);





