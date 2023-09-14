import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import NewsCard from '../Components/NewsCard';
import NavBar from '../assets/NavBar';

function Newsfeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${process.env.REACT_APP_BASE_URL}/event/all`);
      const body = await result.json();

      setData(body.body);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div
        className="newsfeed"
        style={{
          padding: '120px 0',
          margin: '20px 0',
          height: '100vh',
          justifyContent: 'center',
          overflowY: 'scroll',
        }}
      >
        {
          data.map((item) => {
            if (!item) {
              return <div />;
            }
            return (
              <NewsCard
                key={item.id}
                type={item.type}
                name={item.name}
                publishedAt={item.createdAt}
                updatedAt={item.updatedAt}
                county={item.county_name}
              />
            );
          })
        }
      </div>
    </>
  );
}

export default Newsfeed;
