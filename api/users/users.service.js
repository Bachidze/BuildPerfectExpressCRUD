const useresObj = {
  id: 1,
  name: "Gio",
  age: 20,
};

const getAllUsers = (req, res) => {
  res.send(useresObj);
};


module.exports = {getAllUsers}