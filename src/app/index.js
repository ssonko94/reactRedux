import store from "./Store/store";
import fetchUsers from "./features/userSlice";

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(5));

// store.dispatch(iceCreamActions.order());
// store.dispatch(iceCreamActions.order());
// store.dispatch(iceCreamActions.order());
// store.dispatch(iceCreamActions.order());
// store.dispatch(iceCreamActions.restock(4));

// unsubscribe();
