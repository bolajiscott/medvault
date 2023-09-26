export const MethodNotAllowed = (req, res) => {
  res.status(405).json({
    message: "Method not allowed",
  });
};
