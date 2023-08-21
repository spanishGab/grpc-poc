export default (error, _) => {
  if (error) {
    console.error("deleteNote", { error: error.message });
    return;
  }
  console.log("deleteNote", "Note successfully deleted");
};
