import state from "./state";
import { fromJS } from "immutable";

//分支的reducer必须是一个纯函数
//本质上就是一个函数，固定的输入必须要有固定的输出，不能对之前的状态进行任何的更改。
//内部不能有不纯粹的操作，不能有类似于Math.random()/new Date()这些返回值不确定的方法。
//内部看看有没有返回新状态 ===> 看新状态与旧状态的地址是否一致，如果一致就认为没有返回新状态，
//还是对之前的状态进行更改。
const reducer = (prevState = fromJS(state), action) => {
  switch (action.type) {
    case "add":
      return prevState.set("demo", action.demo);
    case "syncAdd":
      return prevState.set("demo", action.demo);
    default:
      return prevState;
  }
};

export default reducer;
