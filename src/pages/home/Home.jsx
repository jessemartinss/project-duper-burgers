/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import HomeSection01 from './HomeSection01';
import HomeSection02 from './HomeSection02';
import HomeSection03 from './HomeSection03';

export default function Home() {
  return (
    <React.Fragment>
        <main className="db-home">
          <div className="db-home-container shadow-sm">
            <HomeSection01/>
            <div className="db-home-box">
              <HomeSection02/>
              <HomeSection03/>
            </div>
          </div>
        </main>
    </React.Fragment>
  )
}
