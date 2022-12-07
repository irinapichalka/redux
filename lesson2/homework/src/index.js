import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.dispatch(addUser({ id: "76", name: "Sarah" }));
store.dispatch(addUser({ id: "55", name: "Tom" }));
console.log(store.getState());
store.dispatch(deleteUser("55"));
console.log(store.getState());
