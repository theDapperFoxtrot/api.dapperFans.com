const counter = { counter: 0 };

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
