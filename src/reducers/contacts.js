const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return state.concat({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    case "DELETE_CONTACT":
      // console.log("del page");
      // console.log(state);
      // console.log("after");
      let arr = state.filter((el) => {
        // console.log(el.id);
        // console.log(action.payload);
        // console.log(String(el.id) !== String(action.payload));
        if (String(el.id) !== String(action.payload)) {
          return el;
        } else {
          // console.log("deleted");
          // console.warn(el);
        }
      });
      // console.log(arr);
      return arr;
    case "TRIGGER_FAVOURITE":
      return state.filter((el) => {
        // console.log(el.id === action.payload + '\t' + el)
        if (String(el.id) === String(action.payload)) {
          el.star = !el.star;
          // console.log('change state ' + el.star)
          return el;
        } else {
          return el;
        }
      });
    default:
      return state;
  }
};
export default contactsReducer;
