export default (error, note) => {
  if (error) {
    console.error("editNote", { error: error.message });
    return;
  }
  console.log("editNote", note);
};
