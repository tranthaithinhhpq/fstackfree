let getHomePage = (req, res) => {
  return res.send("hello word from thai");
};

module.exports = {
  getHomePage: getHomePage,
};
