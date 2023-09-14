/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import NavBar from '../assets/NavBar';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#004466',
      color: '#ffbf00',
      width: '175px',
      height: '70px',
      fontSize: '0.75em',
      marginRight: '2px',
      marginLeft: '2px',
    },
    secondary: {
      main: '#000000',
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  width: '175px',
  height: '70px',
  fontSize: '0.75em',
  margin: '10px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '100px',
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    transform: 'scale(1.05)',
  },
}));

function SignUpPage() {
  const [register, setRegister] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertStr, setAlertStr] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(register),
      });
      const result = await res.json();
      if (result.status === true) {
        navigate('/login');
      } else {
        setAlert(true);
        setAlertStr(result.error);
      }
    } catch (err) {
      setAlert(true);
      setAlertStr(err);
    }
    return undefined;
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          border: 'solid 1px #004466',
          backgroundColor: '#f0f8ff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          marginInline: '30%',
          marginTop: '50px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          zIndex: '0',
        }}
      >
        <form
          id="register-form"
          onSubmit={onSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <TextField
              required
              name="name"
              label="Name"
              variant="outlined"
              margin="dense"
              style={{
                width: '48%',
              }}
            />
            <TextField
              required
              name="username"
              label="Username"
              variant="outlined"
              margin="dense"
              style={{
                width: '48%',
              }}
              onChange={(event) => setRegister({
                ...register,
                username: event.target.value,
              })}
            />
          </div>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <TextField
              required
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="dense"
              style={{ width: '48%' }}
            />
            <TextField
              required
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="dense"
              style={{ width: '48%' }}
              onChange={(event) => setRegister({
                ...register,
                password: event.target.value,
              })}
            />
          </div>
          <TextField
            required
            name="email"
            label="Email"
            variant="outlined"
            margin="dense"
            style={{
              width: '100%',
            }}
            onChange={(event) => setRegister({
              ...register,
              email: event.target.value,
            })}
          />
          <TextField
            required
            name="areaCode"
            label="Area Code"
            variant="outlined"
            margin="dense"
            style={{
              width: '100%',
            }}
          />
          <ThemeProvider theme={buttonTheme}>
            <StyledButton
              type="submit"
              id="login-form-submit"
            >
              Sign Up
            </StyledButton>
          </ThemeProvider>
          <div className="register-login" style={{ margin: '10px' }}>
            <span
              className="text"
              style={{
                color: '#004466',
                textAlign: 'center',
                fontSize: '0.9em',
              }}
            >
              Already registered?
              <br />
              <a
                href="/login"
                className="text login-link"
                style={{
                  color: '#004466',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
              >
                Login Here
              </a>
            </span>
          </div>
        </form>
        {(alert === true) ? <Alert severity="error">{ alertStr }</Alert> : <div />}
      </div>
    </>
  );
}

export default SignUpPage;
