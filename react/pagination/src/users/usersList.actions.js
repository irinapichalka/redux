export const GO_NEXT = "USERS_LIST/GO_NEXT";
export const GO_PREV = "USERS_LIST/GO_PREV";

export const goNext = () => {
  console.log("go next");
  return {
    type: GO_NEXT,
  };
};

export const goPrev = () => {
  console.log("go prev");
  return {
    type: GO_PREV,
  };
};
