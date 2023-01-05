import React from 'react';
import './Home.scss';
import ImgHome01 from '../../assets/images/img-home-01.jpg';
import IconHome01 from '../../assets/icons/icon-home-01.svg';

export default function HomeSection01() {
  return (
    <React.Fragment>
        <section className="db-home-01 text-center">
            <img src={ImgHome01} alt="" />
            <img src={IconHome01} alt="" />
        </section>
    </React.Fragment>
  )
}
