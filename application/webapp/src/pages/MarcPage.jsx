import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew, LinkedIn, GitHub } from '@mui/icons-material';
import profile from '../assets/profileMarc.jpg';

function MarcPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <IconButton
        style={{
          color: 'white',
          position: 'absolute',
          left: 20,
          top: 20,
        }}
        onClick={() => { navigate('/about'); }}
      >
        <ArrowBackIosNew />
        Back
      </IconButton>
      <h1>Marc Castro</h1>
      <Avatar
        src={profile}
        style={{
          margin: '10px',
          width: '120px',
          height: '120px',
        }}
      />
      <h4 style={{
        width: '50%',
      }}
      >
        {`My name is Marc! I'm from Los Angeles, CA in my 4th year here at San Francisco State University, 
              I'm one of the front end development leads for this team and I love video games and playing basketball`}
      </h4>
      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://www.linkedin.com/in/marcjgcastro/', '_blank', 'noreferrer'); }}
      >
        <LinkedIn style={{
          color: 'blue',
          margin: '10',
        }}
        />
        Marc Castro
      </IconButton>
      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://github.com/majocast', '_blank', 'noreferrer'); }}
      >
        <GitHub style={{
          color: 'white',
          margin: '10',
        }}
        />
        majocast
      </IconButton>
    </div>
  );
}

export default MarcPage;
