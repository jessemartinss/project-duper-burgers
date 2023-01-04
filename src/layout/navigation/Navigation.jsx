import React from 'react';
import './Navigation.scss';
import Brand from '../../assets/icons/brand-default.svg';

export default function Navigation() {
  return (
    <nav className="db-navigation">
        <img src={Brand} alt="" />
    </nav>
  )
}
