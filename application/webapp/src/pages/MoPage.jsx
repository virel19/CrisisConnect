import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew, GitHub } from '@mui/icons-material';
import profileMo from '../assets/profileMo.jpg';

function MoPage() {
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
      <h1>Mo Moses</h1>
      <Avatar
        src={profileMo}
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
        { `My name is Mo, and welcome to my profile. Don't be intimmidated by the beard, I'm actually a really nice person. I'm currently a senior here 
        at SFSU majoring in Computer Science. I'm also an Army veteran and a father of four, and I'm pretty sure if I don't graduate soon I'll be attending here 
        with at least one of them. I'm currently residing in San Bruno and working on an automated potato sorting system with a friend. Looking forward 
        to taking some of the learnings from this class - and others - to help improve the software processes and quality there.` }
      </h4>

      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://github.com/mophistophocles', '_blank', 'noreferrer'); }}
      >
        <GitHub style={{
          color: 'white',
          margin: '10',
        }}
        />
        mophistophocles
      </IconButton>
    </div>
  );
}

export default MoPage;
