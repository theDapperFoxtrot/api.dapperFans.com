const counter = { counter: 0 };

const users = { 1: { user: "john", password: "doe" } };
users["2"] = { user: "jane", password: "bro" };
const create = () => {};

const read = () => {
  return counter;
};

const update = (someValue) => {
  if (someValue >= 0) {
    counter.counter = someValue;
    return counter;
  } else {
    return counter;
  }
};
const deleteFunc = () => {};

module.exports = { create, read, update, deleteFunc };
