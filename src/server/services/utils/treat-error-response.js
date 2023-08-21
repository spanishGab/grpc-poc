export default (error, callback) => {
  if (error.message.startsWith("DBError")) {
    callback(new Error(error.message.split(": ")[1]), null);
  }
  callback(new Error("Internal server error"), null);
};
