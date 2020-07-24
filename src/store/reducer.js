import state from "./state";
import { fromJS } from "immutable";

const reducer = (prevState = fromJS(state), action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return prevState.set("mobile", action.data);
    default:
      return prevState;
  }
};

export default reducer;
