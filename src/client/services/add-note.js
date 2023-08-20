export default (error, note) => {
  if (error) {
    console.log("Error while creating new note!", error.message);
  }
  console.log("Successfully created note:", note);
};
