exports.healthCheck = (req, res) => {
  res.json({
    status: "OK",
    message: "Backend MVC structure working"
  });
};