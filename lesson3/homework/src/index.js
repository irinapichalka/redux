import store from "./store";
import { setUser, removeUser } from "./user.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setLanguage } from "./language.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(setUser({ id: "76", name: "Sarah" }));
//store.dispatch(removeUser());

store.dispatch(addProduct({ id: 23, name: "Prod" }));
store.dispatch(removeProduct(23));

store.dispatch(setLanguage("ua"));
