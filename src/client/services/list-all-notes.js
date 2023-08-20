export default (error, notes) => {
  if (error) {
    console.log("Error while listing notes!", error.message);
  }
  console.log(notes);
};
