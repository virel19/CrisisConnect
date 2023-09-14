import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import NavBar from '../assets/NavBar';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#004466',
      contrastText: '#fff',
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

function LoginPage() {
  const [login, setLogin] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertStr, setAlertStr] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      });
      const result = await res.json();
      if (result.status === true) {
        localStorage.setItem('online', 'true');
        localStorage.setItem('jwt', result.body.token);
        localStorage.setItem('email', login.email);
        localStorage.setItem('role', result.body.role);
        navigate('/');
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
          id="login-form"
          onSubmit={onSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TextField
            required
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            onChange={(event) => setLogin({
              ...login,
              email: event.target.value,
            })}
            style={{
              width: '100%',
            }}
          />
          <TextField
            required
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            style={{ width: '100%' }}
            onChange={(event) => setLogin({
              ...login,
              password: event.target.value,
            })}
          />
          <ThemeProvider theme={buttonTheme}>
            <StyledButton
              type="submit"
              id="login-form-submit"
            >
              Log in
            </StyledButton>
          </ThemeProvider>
          <div className="login-register" style={{ margin: '10px' }}>
            <span
              className="text"
              style={{
                color: '#004466',
                textAlign: 'center',
                fontSize: '0.9em',
              }}
            >
              Not a member yet?
              <br />
              <Button
                onClick={() => navigate('/signup')}
                className="text login-link"
                style={{
                  color: '#004466',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
              >
                Register here
              </Button>
            </span>
          </div>
        </form>

        {(alert === true) ? <Alert severity="error">{ alertStr }</Alert> : <div />}
      </div>
    </>
  );
}

export default LoginPage;
