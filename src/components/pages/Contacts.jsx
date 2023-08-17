import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Loader } from '../Loader/Loader';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm /> 
      <div>{isLoading && <Loader />}</div>{' '}
      <ContactList /> 
    </>
  );
}