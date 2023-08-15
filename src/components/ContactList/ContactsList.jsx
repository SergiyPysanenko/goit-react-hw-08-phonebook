import React from 'react';
import { List, Item } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContacts } from '../../redux/operations';
import { Button } from '@mui/material';


const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button
              variant="outlined" 
              color="error"
              size="small"
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;