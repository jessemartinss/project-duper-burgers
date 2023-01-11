/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Home.scss';
import IconCard01 from '../../assets/icons/icon-home-02.svg';
import IconCard02 from '../../assets/icons/icon-home-03.svg';
import IconCard03 from '../../assets/icons/icon-home-04.svg';
import IconCard04 from '../../assets/icons/icon-home-05.svg';
import { ButtonOutlineOrangeDefault }  from '../../components/button/Button';

export default function HomeSection03() {
  return (
    <React.Fragment>
        <section className="db-home-03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Browse menu by category</h2>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-6 col-md-6">
                        <div className="db-home-card-03">
                            <div className="db-home-card-icon-03">
                                <img src={IconCard01} alt="" />
                            </div>
                            <div className="db-home-card-content-03">
                                <h4>Breakfast</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipiscing elit sed do.</p>
                                <a href="">Browse category <span><FaArrowRight/></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="db-home-card-03">
                            <div className="db-home-card-icon-03">
                                <img src={IconCard02} alt="" />
                            </div>
                            <div className="db-home-card-content-03">
                                <h4>Main dishes</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipiscing elit sed do.</p>
                                <a href="">Browse category <span><FaArrowRight/></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-6 col-md-6">
                        <div className="db-home-card-03">
                            <div className="db-home-card-icon-03">
                                <img src={IconCard03} alt="" />
                            </div>
                            <div className="db-home-card-content-03">
                                <h4>Drinks</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipiscing elit sed do.</p>
                                <a href="">Browse category <span><FaArrowRight/></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="db-home-card-03">
                            <div className="db-home-card-icon-03">
                                <img src={IconCard04} alt="" />
                            </div>
                            <div className="db-home-card-content-03">
                                <h4>Desserts</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipiscing elit sed do.</p>
                                <a href="">Browse category <span><FaArrowRight/></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <a href=""><ButtonOutlineOrangeDefault value="Browse all menu"/></a>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
