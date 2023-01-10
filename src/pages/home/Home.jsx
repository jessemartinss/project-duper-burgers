import React from 'react';
import './Home.scss';
import HomeSection01 from './HomeSection01';
import HomeSection02 from './HomeSection02';

export default function Home() {
  return (
    <React.Fragment>
        <main className="db-home">
          <div className="db-home-container shadow-sm">
            <HomeSection01/>
            <HomeSection02/>
          </div>
        </main>
    </React.Fragment>
  )
}
