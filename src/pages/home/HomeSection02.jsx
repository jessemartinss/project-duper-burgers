import React from 'react';
import './Home.scss';
import { ButtonOrangeDefault, ButtonOutlineOrangeDefault } from '../../components/button/Button';

export default function HomeSection02() {
  return (
    <React.Fragment>
        <div className="db-home-02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Super Duper Burgers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit velit nibh neque ultrices potenti aenean commodo</p>
                        <div className="db-home-btn-02">
                            <a href=""><ButtonOrangeDefault value="Order online"/></a>
                            <a href=""><ButtonOutlineOrangeDefault value="Browse menu"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
