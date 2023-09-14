import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import NavBar from '../assets/NavBar';

const resourceTheme = createTheme({
  palette: {
    primary: {
      main: '#004466',
      color: '#ffbf00',
      height: '10dvh',
      fontSize: '0.75em',
      marginTop: '5px',
      marginRight: '2px',
      marginLeft: '2px',
      maxWidth: '175px',
      maxHeight: '70px',
      border: '3px solid black',
    },
    secondary: {
      main: '#000000',
    },
  },
});

const ResourceDiv = styled('div')`
  ${({ theme }) => `
    cursor: pointer;
    border: ${theme.palette.primary.border};
    width: ${theme.palette.primary.width};
    height: ${theme.palette.primary.height};
    color: ${theme.palette.primary.color};
    margin-top: ${theme.palette.primary.marginTop};
    margin-left: ${theme.palette.primary.marginLeft};
    margin-right: ${theme.palette.primary.marginRight};
    font-size: ${theme.palette.primary.fontSize};
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
    &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.05);
  }
  `}
`;

function ResourcesPage() {
  return (
    <>
      <NavBar />
      <div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100vw',
        }}
        >
          <Link
            href="https://www.caloes.ca.gov/office-of-the-director/operations/response-operations/warning-center/"
            target="_blank"
            rel="noreferrer"
            underline="none"
          >
            <ThemeProvider theme={resourceTheme}>
              <ResourceDiv>
                <p>https://www.caloes.ca.gov/office-of-the-director/operations/response-operations/warning-center/</p>
              </ResourceDiv>
            </ThemeProvider>
          </Link>
          <Link
            href="https://www.weather.gov/"
            target="_blank"
            rel="noreferrer"
            underline="none"
          >
            <ThemeProvider theme={resourceTheme}>
              <ResourceDiv>
                <p>https://www.weather.gov/</p>
              </ResourceDiv>
            </ThemeProvider>
          </Link>
          <Link
            href="https://covid19.ca.gov/"
            target="_blank"
            rel="noreferrer"
            underline="none"
          >
            <ThemeProvider theme={resourceTheme}>
              <ResourceDiv>
                <p>https://covid19.ca.gov/</p>
              </ResourceDiv>
            </ThemeProvider>
          </Link>
          <Link
            href="https://post.ca.gov/le-agencies"
            target="_blank"
            rel="noreferrer"
            underline="none"
          >
            <ThemeProvider theme={resourceTheme}>
              <ResourceDiv>
                <p>https://post.ca.gov/le-agencies</p>
              </ResourceDiv>
            </ThemeProvider>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ResourcesPage;
