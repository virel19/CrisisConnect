import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew, LinkedIn, GitHub } from '@mui/icons-material';
import profile from '../assets/profileNicholas.jpg';

function NicholasPage() {
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
      <h1>Nicholas Chan</h1>
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
        {`My name is Nicholas Chan and I'm a senior at SFSU. I've lived in San Francisco 
        my whole life. I love dancing and going to concerts.`}
      </h4>
      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://www.linkedin.com/in/nicholas-chan-06a200169/', '_blank', 'noreferrer'); }}
      >
        <LinkedIn style={{
          color: 'blue',
          margin: '10',
        }}
        />
        Nicholas Chan
      </IconButton>
      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://github.com/nicknahc', '_blank', 'noreferrer'); }}
      >
        <GitHub style={{
          color: 'white',
          margin: '10',
        }}
        />
        nicknahc
      </IconButton>
    </div>
  );
}

export default NicholasPage;
