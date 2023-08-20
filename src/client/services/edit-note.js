export default (error, note) => {
  if (error) {
    console.log("Error while editing the note!", error.message);
  }
  console.log("Successfully edited note:", note);
};
