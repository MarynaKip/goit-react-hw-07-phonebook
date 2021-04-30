import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import ContactItem from "../ContactItem";
import { getVisibleContacts } from "../../redux/phoneBook/selectors";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 10,
  },
});

const ContactList = () => {
  const classes = useStyles();

  const visibleContacts = useSelector(getVisibleContacts); //from redux

  return (
    <ul className={classes.list}>
      {visibleContacts.map((contact) => (
        <ContactItem contactID={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
