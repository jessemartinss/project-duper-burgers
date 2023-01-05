import React from 'react';
import './Home.scss';
import ImgHome01 from '../../assets/images/img-home-01.jpg';
import HomeSection01 from './HomeSection01';

export default function Home() {
  return (
    <React.Fragment>
        <main className="db-home">
          <div className="db-home-container shadow-sm">
            <HomeSection01/>
          </div>
        </main>
    </React.Fragment>
  )
}
