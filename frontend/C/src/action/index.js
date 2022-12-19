export const movingAddLeft = (add) => {
  return {
    type: "MOVINGADDLEFT",
    payload: add,
  };
};

export const movingAddRight = (add) => {
  return {
    type: "MOVINGADDRIGHT",
    payload: add,
  };
};

export const removeLeft = (remove) => {
  return {
    type: "REMOVELEFT",
    payload: remove,
  };
};

export const removeRight = (remove) => {
  return {
    type: "REMOVERIGHT",
    payload: remove,
  };
};
