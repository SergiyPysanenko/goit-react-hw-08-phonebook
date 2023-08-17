import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Wrapper, Text } from './UserMenu.styled';
import Button from '@mui/material/Button';


export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Welcome to Phonebook {user.name} </Text>{' '}
      <Button type="button" variant="outlined" color="error" size="small" sx={{ margin: '10px' }} onClick={() => dispatch(logOut())}>
        Logout
      </Button>{' '}
    </Wrapper>
  );
};