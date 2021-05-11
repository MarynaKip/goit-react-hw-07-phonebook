import { createUseStyles } from "react-jss";
import { useSelector, useDispatch } from "react-redux";
// import { onDelete } from "../../redux/phoneBook/reducer";
//import { onDelete } from "../../redux/phoneBook/actions";
import deleteContact from "../../redux/phoneBook/operations";
import { getContact } from "../../redux/phoneBook/selectors";

const useStyles = createUseStyles({
  item: {
    display: "flex",
    marginBottom: 10,
    alignItems: "flex-start",
  },
});

const ContactItem = ({ contactID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const contact = useSelector(getContact(contactID)); //from redux
  const { name, id, number } = contact;

  const handleDeleteItem = () => dispatch(deleteContact(id));

  return (
    <li key={id} className={classes.item}>
      {name}
      {number}
      <button id={id} type="button" onClick={handleDeleteItem}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
