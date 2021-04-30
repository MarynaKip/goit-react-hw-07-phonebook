export const getContacts = () => (dispatch, getState) => {
  fetch("http://localhost:4040/contacts")
    .then((resp) => resp.json())
    .then((data) => dispatch());
};
