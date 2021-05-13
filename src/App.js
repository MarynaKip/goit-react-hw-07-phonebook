import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";
import changeFilter from "./redux/phoneBook/actions";
import { getFilter, getIsLoading } from "./redux/phoneBook/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const filter = useSelector(getFilter); //from redux

  const handleFilter = (filterText) =>
    dispatch(changeFilter.changeFilter(filterText));

  const handleChange = (e) => {
    const filter = e.target.value;

    handleFilter(filter);
  };

  return (
    <>
      <span>Find:</span>
      <input type="text" value={filter} name="filter" onChange={handleChange} />
      <Contacts />
      {isLoading && <p>Loading...</p>}
      <ContactList />
    </>
  );
};

export default App;
