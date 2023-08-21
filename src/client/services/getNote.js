export default (error, note) => {
  if (error) {
    console.error("getNote", { error: error.message });
    return;
  }
  console.log("getNote", note);
};
