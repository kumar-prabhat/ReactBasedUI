import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';

const Landing = () => {
  const [navColor, setNavColor] = useState('');

  useEffect(() => {
    if (window.pageYOffset > 60) {
      setNavColor('bg-dark');
    } else {
      setNavColor('');
    }
  }, []);
  return (
    <Fragment>
      <div id='wrapper'>
        <Sidebar />

        {/*Start topbar header{*/}
        <header className='topbar-nav'>
          <nav
            className={`navbar navbar-expand fixed-top navColor ${navColor}`}
          >
            <ul className='navbar-nav mr-auto align-items-center'>
              <li className='nav-item'>
                <Link className='nav-link toggle-menu' to='#'>
                  <i className='fa fa-bars'></i>
                </Link>
              </li>
              <li className='nav-item'>
                <form className='search-bar'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter keywords'
                  />
                  <Link to='#'>
                    <i className='fa fa-search'></i>
                  </Link>
                </form>
              </li>
            </ul>

            <ul className='navbar-nav align-items-center right-nav-link'>
              <li className='nav-item dropdown-lg'>
                <Link
                  className='nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect'
                  data-toggle='dropdown'
                  to='#'
                >
                  <i className='fa fa-envelope-open-o'></i>
                  <span className='badge badge-light badge-up'>12</span>
                </Link>
                <div className='dropdown-menu dropdown-menu-right'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      You have 12 new messages
                      <span className='badge badge-light'>12</span>
                    </li>
                    <li className='list-group-item'>
                      <Link to='#'>
                        <div className='media'>
                          <div className='avatar'>
                            <img
                              className='align-self-start mr-3'
                              src='https://via.placeholder.com/110x110'
                              alt='user avatar'
                            />
                          </div>
                          <div className='media-body'>
                            <h6 className='mt-0 msg-title'>Jhon Deo</h6>
                            <p className='msg-info'>
                              Lorem ipsum dolor sit amet...
                            </p>
                            <small>Today, 4:10 PM</small>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className='list-group-item'>
                      <Link to='#'>
                        <div className='media'>
                          <div className='avatar'>
                            <img
                              className='align-self-start mr-3'
                              src='https://via.placeholder.com/110x110'
                              alt='user avatar'
                            />
                          </div>
                          <div className='media-body'>
                            <h6 className='mt-0 msg-title'>Sara Jen</h6>
                            <p className='msg-info'>
                              Lorem ipsum dolor sit amet...
                            </p>
                            <small>Yesterday, 8:30 AM</small>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className='list-group-item'>
                      <Link to='#'>
                        <div className='media'>
                          <div className='avatar'>
                            <img
                              className='align-self-start mr-3'
                              src='https://via.placeholder.com/110x110'
                              alt='user avatar'
                            />
                          </div>
                          <div className='media-body'>
                            <h6 className='mt-0 msg-title'>Dannish Josh</h6>
                            <p className='msg-info'>
                              Lorem ipsum dolor sit amet...
                            </p>
                            <small>5/11/2018, 2:50 PM</small>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className='list-group-item'>
                      <Link to='#'>
                        <div className='media'>
                          <div className='avatar'>
                            <img
                              className='align-self-start mr-3'
                              src='https://via.placeholder.com/110x110'
                              alt='user avatar'
                            />
                          </div>
                          <div className='media-body'>
                            <h6 className='mt-0 msg-title'>Katrina Mccoy</h6>
                            <p className='msg-info'>
                              Lorem ipsum dolor sit amet.
                            </p>
                            <small>1/11/2018, 2:50 PM</small>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className='list-group-item text-center'>
                      <Link to='#'>See All Messages</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='nav-item dropdown-lg'>
                <Link
                  className='nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect'
                  data-toggle='dropdown'
                  to='#'
                >
                  <i className='fa fa-bell-o'></i>
                  <span className='badge badge-info badge-up'>14</span>
                </Link>
                <div className='dropdown-menu dropdown-menu-right'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      You have 14 Notifications
                      <span className='badge badge-info'>14</span>
                    </li>
                    <li className='list-group-item'>
                      <Link to='#'>
                        <div className='media'>
                          <i className='zmdi zmdi-accounts fa-2x mr-3 text-info'></i>
                          <div className='media-body'>
                            <h6 className='mt-0 msg-title'>
                              New Registered Users
                            </h6>
                            <p className='msg-info'>
                              Lorem ipsum dolor sit amet...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className='list-group-item'>
                      <Link to='#'>
                        <div className='media'>
                          <i className='zmdi zmdi-coffee fa-2x mr-3 text-warning'></i>
                          <div className='media-body'>
                            <h6 className='mt-0 msg-title'>
                              New Received Orders
                            </h6>
                            <p className='msg-info'>
                              Lorem ipsum dolor sit amet...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className='list-group-item'>
                      <Link to='#'>
                        <div className='media'>
                          <i className='zmdi zmdi-notifications-active fa-2x mr-3 text-danger'></i>
                          <div className='media-body'>
                            <h6 className='mt-0 msg-title'>New Updates</h6>
                            <p className='msg-info'>
                              Lorem ipsum dolor sit amet...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className='list-group-item text-center'>
                      <Link to='#'>See All Notifications</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='nav-item language'>
                <Link
                  className='nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect'
                  data-toggle='dropdown'
                  to='#'
                >
                  <i className='fa fa-flag'></i>
                </Link>
                <ul className='dropdown-menu dropdown-menu-right'>
                  <li className='dropdown-item'>
                    <i className='flag-icon flag-icon-gb mr-2'></i> English
                  </li>
                  <li className='dropdown-item'>
                    <i className='flag-icon flag-icon-fr mr-2'></i> French
                  </li>
                  <li className='dropdown-item'>
                    <i className='flag-icon flag-icon-cn mr-2'></i> Chinese
                  </li>
                  <li className='dropdown-item'>
                    <i className='flag-icon flag-icon-de mr-2'></i> German
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link dropdown-toggle dropdown-toggle-nocaret'
                  data-toggle='dropdown'
                  to='#'
                >
                  <span className='user-profile'>
                    <img
                      src='https://via.placeholder.com/110x110'
                      className='img-circle'
                      alt='user avatar'
                    />
                  </span>
                </Link>
                <ul className='dropdown-menu dropdown-menu-right'>
                  <li className='dropdown-item user-details'>
                    <Link to='#'>
                      <div className='media'>
                        <div className='avatar'>
                          <img
                            className='align-self-start mr-3'
                            src='https://via.placeholder.com/110x110'
                            alt='user avatar'
                          />
                        </div>
                        <div className='media-body'>
                          <h6 className='mt-2 user-title'>Sarajhon Mccoy</h6>
                          <p className='user-subtitle'>mccoy@example.com</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='dropdown-divider'></li>
                  <li className='dropdown-item'>
                    <i className='icon-envelope mr-2'></i> Inbox
                  </li>
                  <li className='dropdown-divider'></li>
                  <li className='dropdown-item'>
                    <i className='icon-wallet mr-2'></i> Account
                  </li>
                  <li className='dropdown-divider'></li>
                  <li className='dropdown-item'>
                    <i className='icon-settings mr-2'></i> Setting
                  </li>
                  <li className='dropdown-divider'></li>
                  <li className='dropdown-item'>
                    <i className='icon-power mr-2'></i> Logout
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
        {/*End topbar header{*/}

        <div className='clearfix'></div>

        <div className='content-wrapper'>
          <div className='container-fluid'>
            {/*Start Dashboard Content{*/}

            <div className='card mt-3'>
              <div className='card-content'>
                <div className='row row-group m-0'>
                  <div className='col-12 col-lg-6 col-xl-3 border-light'>
                    <div className='card-body'>
                      <h5 className='text-white mb-0'>
                        9526
                        <span className='float-right'>
                          <i className='fa fa-shopping-cart'></i>
                        </span>
                      </h5>
                      <div className='progress my-3' style={{ height: '3px' }}>
                        <div
                          className='progress-bar'
                          style={{ width: '55%' }}
                        ></div>
                      </div>
                      <p className='mb-0 text-white small-font'>
                        Total Orders
                        <span className='float-right'>
                          +4.2% <i className='fa fa-long-arrow-up'></i>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 col-xl-3 border-light'>
                    <div className='card-body'>
                      <h5 className='text-white mb-0'>
                        8323
                        <span className='float-right'>
                          <i className='fa fa-usd'></i>
                        </span>
                      </h5>
                      <div className='progress my-3' style={{ height: '3px' }}>
                        <div
                          className='progress-bar'
                          style={{ width: '55%' }}
                        ></div>
                      </div>
                      <p className='mb-0 text-white small-font'>
                        Total Revenue
                        <span className='float-right'>
                          +1.2% <i className='fa fa-long-arrow-up'></i>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 col-xl-3 border-light'>
                    <div className='card-body'>
                      <h5 className='text-white mb-0'>
                        6200
                        <span className='float-right'>
                          <i className='fa fa-eye'></i>
                        </span>
                      </h5>
                      <div className='progress my-3' style={{ height: '3px' }}>
                        <div
                          className='progress-bar'
                          style={{ width: '55%' }}
                        ></div>
                      </div>
                      <p className='mb-0 text-white small-font'>
                        Visitors
                        <span className='float-right'>
                          +5.2% <i className='fa fa-long-arrow-up'></i>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 col-xl-3 border-light'>
                    <div className='card-body'>
                      <h5 className='text-white mb-0'>
                        5630
                        <span className='float-right'>
                          <i className='fa fa-envira'></i>
                        </span>
                      </h5>
                      <div className='progress my-3' style={{ height: '3px' }}>
                        <div
                          className='progress-bar'
                          style={{ width: '55%' }}
                        ></div>
                      </div>
                      <p className='mb-0 text-white small-font'>
                        Messages
                        <span className='float-right'>
                          +2.2% <i className='fa fa-long-arrow-up'></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-12 col-lg-8 col-xl-8'>
                <div className='card'>
                  <div className='card-header'>
                    Site Traffic
                    <div className='card-action'>
                      <div className='dropdown'>
                        <Link
                          to='#'
                          className='dropdown-toggle dropdown-toggle-nocaret'
                          data-toggle='dropdown'
                        >
                          <i className='fa fa-ellipsis-h'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='card-body'>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <i className='fa fa-circle mr-2 text-white'></i>New
                        Visitor
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-circle mr-2 text-light'></i>Old
                        Visitor
                      </li>
                    </ul>
                    <div className='chart-container-1'>
                      <LineChart />
                    </div>
                  </div>

                  <div className='row m-0 row-group text-center border-top border-light-3'>
                    <div className='col-12 col-lg-4'>
                      <div className='p-3'>
                        <h5 className='mb-0'>45.87M</h5>
                        <small className='mb-0'>
                          Overall Visitor
                          <span>
                            <i className='fa fa-arrow-up'></i> 2.43%
                          </span>
                        </small>
                      </div>
                    </div>
                    <div className='col-12 col-lg-4'>
                      <div className='p-3'>
                        <h5 className='mb-0'>15:48</h5>
                        <small className='mb-0'>
                          Visitor Duration
                          <span>
                            <i className='fa fa-arrow-up'></i> 12.65%
                          </span>
                        </small>
                      </div>
                    </div>
                    <div className='col-12 col-lg-4'>
                      <div className='p-3'>
                        <h5 className='mb-0'>245.65</h5>
                        <small className='mb-0'>
                          Pages/Visit
                          <span>
                            <i className='fa fa-arrow-up'></i> 5.62%
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-lg-4 col-xl-4'>
                <div className='card'>
                  <div className='card-header'>
                    Weekly sales
                    <div className='card-action'>
                      <div className='dropdown'>
                        <Link
                          to='#'
                          className='dropdown-toggle dropdown-toggle-nocaret'
                          data-toggle='dropdown'
                        >
                          <i className='fa fa-ellipsis-h'></i>
                        </Link>
                        <div className='dropdown-menu dropdown-menu-right'>
                          <Link className='dropdown-item' to='#'>
                            Action
                          </Link>
                          <Link className='dropdown-item' to='#'>
                            Another action
                          </Link>
                          <Link className='dropdown-item' to='#'>
                            Something else here
                          </Link>
                          <div className='dropdown-divider'></div>
                          <Link className='dropdown-item' to='#'>
                            Separated link
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className='chart-container-2'>
                      <DoughnutChart />
                    </div>
                  </div>
                  <div className='table-responsive'>
                    <table className='table align-items-center'>
                      <tbody>
                        <tr>
                          <td>
                            <i className='fa fa-circle text-white mr-2'></i>{' '}
                            Direct
                          </td>
                          <td>$5856</td>
                          <td>+55%</td>
                        </tr>
                        <tr>
                          <td>
                            <i className='fa fa-circle text-light-1 mr-2'></i>
                            Affiliate
                          </td>
                          <td>$2602</td>
                          <td>+25%</td>
                        </tr>
                        <tr>
                          <td>
                            <i className='fa fa-circle text-light-2 mr-2'></i>
                            E-mail
                          </td>
                          <td>$1802</td>
                          <td>+15%</td>
                        </tr>
                        <tr>
                          <td>
                            <i className='fa fa-circle text-light-3 mr-2'></i>
                            Other
                          </td>
                          <td>$1105</td>
                          <td>+5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/*End Row{*/}

            <div className='row'>
              <div className='col-12 col-lg-12'>
                <div className='card'>
                  <div className='card-header'>
                    Recent Order Tables
                    <div className='card-action'>
                      <div className='dropdown'>
                        <Link
                          to='#'
                          className='dropdown-toggle dropdown-toggle-nocaret'
                          data-toggle='dropdown'
                        >
                          <i className='fa fa-ellipsis-h'></i>
                        </Link>
                        <div className='dropdown-menu dropdown-menu-right'>
                          <Link className='dropdown-item' to='#'>
                            Action
                          </Link>
                          <Link className='dropdown-item' to='#'>
                            Another action
                          </Link>
                          <Link className='dropdown-item' to='#'>
                            Something else here
                          </Link>
                          <div className='dropdown-divider'></div>
                          <Link className='dropdown-item' to='#'>
                            Separated link
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='table-responsive'>
                    <table className='table align-items-center table-flush table-borderless'>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Photo</th>
                          <th>Product ID</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Shipping</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Iphone 5</td>
                          <td>
                            <img
                              src='https://via.placeholder.com/110x110'
                              className='product-img'
                              alt='product img'
                            />
                          </td>
                          <td>#9405822</td>
                          <td>$ 1250.00</td>
                          <td>03 Aug 2017</td>
                          <td>
                            <div
                              className='progress shadow'
                              style={{ height: '3px' }}
                            >
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '90%' }}
                              ></div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Earphone GL</td>
                          <td>
                            <img
                              src='https://via.placeholder.com/110x110'
                              className='product-img'
                              alt='product img'
                            />
                          </td>
                          <td>#9405820</td>
                          <td>$ 1500.00</td>
                          <td>03 Aug 2017</td>
                          <td>
                            <div
                              className='progress shadow'
                              style={{ height: '3px' }}
                            >
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '60%' }}
                              ></div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>HD Hand Camera</td>
                          <td>
                            <img
                              src='https://via.placeholder.com/110x110'
                              className='product-img'
                              alt='product img'
                            />
                          </td>
                          <td>#9405830</td>
                          <td>$ 1400.00</td>
                          <td>03 Aug 2017</td>
                          <td>
                            <div
                              className='progress shadow'
                              style={{ height: '3px' }}
                            >
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '70%' }}
                              ></div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Clasic Shoes</td>
                          <td>
                            <img
                              src='https://via.placeholder.com/110x110'
                              className='product-img'
                              alt='product img'
                            />
                          </td>
                          <td>#9405825</td>
                          <td>$ 1200.00</td>
                          <td>03 Aug 2017</td>
                          <td>
                            <div
                              className='progress shadow'
                              style={{ height: '3px' }}
                            >
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '100%' }}
                              ></div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Hand Watch</td>
                          <td>
                            <img
                              src='https://via.placeholder.com/110x110'
                              className='product-img'
                              alt='product img'
                            />
                          </td>
                          <td>#9405840</td>
                          <td>$ 1800.00</td>
                          <td>03 Aug 2017</td>
                          <td>
                            <div
                              className='progress shadow'
                              style={{ height: '3px' }}
                            >
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '40%' }}
                              ></div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Clasic Shoes</td>
                          <td>
                            <img
                              src='https://via.placeholder.com/110x110'
                              className='product-img'
                              alt='product img'
                            />
                          </td>
                          <td>#9405825</td>
                          <td>$ 1200.00</td>
                          <td>03 Aug 2017</td>
                          <td>
                            <div
                              className='progress shadow'
                              style={{ height: '3px' }}
                            >
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '100%' }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/*End Row{*/}
          </div>
          {/* End container-fluid{*/}
        </div>
        {/*End content-wrapper{*/}

        <footer className='footer'>
          <div className='container'>
            <div className='text-center'>Copyright © 2018 Dashtreme Admin</div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Landing;
