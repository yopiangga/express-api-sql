const getUsers = async (req, res) => {
  res.json({ message: "Hello Get Users" });
};

const postUsers = async (req, res) => {
  res.json({ message: "Hello Post Users" });
};

module.exports = { getUsers, postUsers };
