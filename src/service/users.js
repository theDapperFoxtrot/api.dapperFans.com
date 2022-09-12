const users = { 1: { user: "john", password: "doe" } };
users["2"] = { user: "jane", password: "bro" };

const create = () => {};
const read = () => {
  // return only one user via object.value
  return users;
};
const readAll = () => {
  // object.values()
  return users;
};
const update = (someValue) => {
  if (someValue >= 0) {
    users.users = someValue;
    return users;
  } else {
    return users;
  }
};
const deleteFunc = () => {};

module.exports = { create, read, update, deleteFunc };
