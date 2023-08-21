export default (error, note) => {
  if (error) {
    console.error("addNote", { error: error.message });
    return;
  }
  console.log("addNote", note);
};
