import store from "./store";
import { addUser, deleteUser, updateUser } from "./users.actions";
import { increment, decrement, reset } from "./counter.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: "76", name: "Sarah" }));
store.dispatch(addUser({ id: "55", name: "Tom" }));
store.dispatch(deleteUser("55"));
store.dispatch(updateUser("55", { name: "Bob Martin" }));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
