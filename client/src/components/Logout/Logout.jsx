import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkSessionAC } from '../../redux/actionCreators/userAC';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  (async () => {
    const response = await fetch('http://localhost:5000/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const dataFromServer = await response.json();

    if (dataFromServer.isUserLogout) {
      dispatch(checkSessionAC(dataFromServer.user));
      history.push('/');
    } else {
      setIsError(true);
      setErrorMessage('Something went wrong...');
    }
  })();

  return (
    <div>
      {
        isError
        && <div className="error">{errorMessage}</div>
      }
    </div>
  );
};

export default Logout;
