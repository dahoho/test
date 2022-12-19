const initialState = {
  left: ["Apple", "Grape", "Strawberry", "Cherry", "Plum"],
  right: ["Watermelon", "Banana", "Peach"],
};

export const leftArryReducer = (state = initialState.left, action) => {
  switch (action.type) {
    case "MOVINGADDLEFT":
      return [...state, action.payload];
    case "REMOVELEFT":
      return state.slice(0, -1);
    default:
      return state;
  }
};

export const rightArryReducer = (state = initialState.right, action) => {
  switch (action.type) {
    case "MOVINGADDRIGHT":
      return [...state, action.payload];
    case "REMOVERIGHT":
      return state.slice(0, -1);
    default:
      return state;
  }
};
