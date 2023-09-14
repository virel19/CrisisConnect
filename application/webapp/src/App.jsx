import './App.css';
import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AxelPage from './pages/AxelPage';
import VirelPage from './pages/VirelPage';
import MarcPage from './pages/MarcPage';
import NicholasPage from './pages/NicholasPage';
import LokeshPage from './pages/LokeshPage';
import MoPage from './pages/MoPage';
import AboutUsPage from './pages/AboutUsPage';
import RaqPage from './pages/RaqPage';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import NewsFeedPage from './pages/NewsFeedPage';
import AdminPortal from './pages/AdminPortal';
import ProfilePage from './pages/ProfilePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutUsPage />,
  },
  {
    path: '/resources',
    element: <ResourcesPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/newsfeed',
    element: <NewsFeedPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/admin',
    element: <AdminPortal />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/axel',
    element: <AxelPage />,
  },
  {
    path: '/virel',
    element: <VirelPage />,
  },
  {
    path: '/marc',
    element: <MarcPage />,
  },
  {
    path: '/mo',
    element: <MoPage />,
  },
  {
    path: '/nicholas',
    element: <NicholasPage />,
  },
  {
    path: '/lokesh',
    element: <LokeshPage />,
  },
  {
    path: '/raquel',
    element: <RaqPage />,
  },
]);

function App() {
  localStorage.clear();
  localStorage.setItem('online', 'false');
  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <div className="App-body">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
