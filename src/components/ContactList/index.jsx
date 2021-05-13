import { createUseStyles } from "react-jss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactItem from "../ContactItem";
import { getVisibleContacts } from "../../redux/phoneBook/selectors";
import getContacts from "../../redux/phoneBook/operations";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 10,
  },
});

const ContactList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const visibleContacts = useSelector(getVisibleContacts); //from redux

  useEffect(
    () => dispatch(getContacts.getContacts()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <ul className={classes.list}>
      {visibleContacts.map((contact) => (
        <ContactItem contactID={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
