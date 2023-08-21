export default (error, notes) => {
  if (error) {
    console.error("listAllNotes", { error: error.message });
    return;
  }
  console.log("listAllNotes", notes);
};
