import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBarList from './SideBarList';
import SideBarProfile from './SideBarProfile';
import { v4 as uuid } from 'uuid';
import logo from '../images/logo-icon.png';
import '../css/sidebar-menu.css';
import '../css/icons.css';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const dashBoardListName = [
    { name: 'eCommerce', id: uuid() },
    { name: 'Human Resources', id: uuid() },
    { name: 'Digital Marketing', id: uuid() },
    { name: 'Property Listings', id: uuid() },
    { name: 'Services & Support', id: uuid() },
    { name: 'Logistics', id: uuid() },
  ];
  const uiElementsListName = [
    { name: 'Typography', id: uuid() },
    { name: 'Cards', id: uuid() },
    { name: 'Buttons', id: uuid() },
    { name: 'Nav Tabs', id: uuid() },
    { name: 'Accordions', id: uuid() },
    { name: 'Modals', id: uuid() },
    { name: 'List Groups', id: uuid() },
    { name: 'Notifications', id: uuid() },
    { name: ' Sweet Alerts', id: uuid() },
    { name: 'Checkboxes and Radios', id: uuid() },
    { name: 'Progress Bars', id: uuid() },
    { name: 'Alerts', id: uuid() },
    { name: 'Pagination', id: uuid() },
    { name: 'BS Elements', id: uuid() },
  ];

  const componentsName = [
    { name: 'Range Sliders', id: uuid() },
    { name: 'Image Carousels', id: uuid() },
    { name: 'Grid Layouts', id: uuid() },
    { name: 'Switcher Buttons', id: uuid() },
    { name: 'Pricing Tables', id: uuid() },
    { name: 'Vertical Timeline', id: uuid() },
  ];

  const chartsName = [
    { name: 'Chart JS', id: uuid() },
    { name: 'Apex Charts', id: uuid() },
    { name: 'Sparkline Charts', id: uuid() },
    { name: ' Peity Charts', id: uuid() },
    { name: ' Other Charts', id: uuid() },
  ];

  const widgetsName = [
    { name: 'Static Widgets', id: uuid() },
    { name: 'Data Widgets', id: uuid() },
  ];
  const mailName = [
    { name: 'Inbox', id: uuid() },
    { name: 'Compose', id: uuid() },
  ];

  const tablesName = [
    { name: 'Simple Tables', id: uuid() },
    { name: 'Data Tables', id: uuid() },
  ];

  const mapsName = [
    { name: 'Google Maps', id: uuid() },
    { name: 'Vector Maps', id: uuid() },
  ];
  const sample = [];

  return (
    <Fragment>
      <div
        id='sidebar-wrapper'
        data-simplebar=''
        data-simplebar-auto-hide='true'
      >
        <div className='brand-logo'>
          <Link to='index.html'>
            <img src={logo} className='logo-icon' alt='logo icon' />
            <h5 className='logo-text'>Dashtreme Admin</h5>
          </Link>
        </div>
        <div className='user-details'>
          <div
            className='media align-items-center user-pointer collapsed'
            onClick={() => {
              setShow(!show);
            }}
          >
            <div className='avatar'>
              <img
                className='mr-3 side-user-img'
                src='https://via.placeholder.com/110x110'
                alt='user avatar'
              />
            </div>
            <div className='media-body'>
              <h6 className='side-user-name'>Mark Johnson</h6>
            </div>
          </div>
          <div id='user-dropdown' className={show === false ? 'collapse' : ''}>
            <SideBarProfile />
          </div>
        </div>
        <ul className='sidebar-menu' style={{ overflow: 'auto' }}>
          <li className='sidebar-header'>MAIN NAVIGATION</li>
          <li>
            <SideBarList
              mainName='DashBoard'
              navigationList={dashBoardListName}
              icon='fa fa-tachometer'
            />
          </li>
          <li>
            <SideBarList
              mainName='UI Elements'
              navigationList={uiElementsListName}
              icon='fa fa-file'
            />
          </li>
          <li>
            <SideBarList
              mainName='Components'
              navigationList={componentsName}
              icon='fa fa-id-badge'
            />
          </li>
          <li>
            <SideBarList
              mainName='Charts'
              navigationList={chartsName}
              icon='fa fa-bar-chart'
            />
          </li>

          <li>
            <SideBarList
              mainName='Widgets'
              navigationList={widgetsName}
              icon='fa fa-snowflake-o'
            />
          </li>

          <li>
            <SideBarList
              mainName='Mailbox'
              navigationList={mailName}
              icon='fa fa-envelope-o'
            />
          </li>
          <li>
            <SideBarList
              mainName='Tables'
              navigationList={tablesName}
              icon='fa fa-table'
            />
          </li>

          <li>
            <SideBarList
              mainName='Maps'
              navigationList={mapsName}
              icon='fa fa-location-arrow'
            />
          </li>

          <li>
            <SideBarList
              mainName='Sample Pages'
              navigationList={sample}
              icon='fa fa-picture-o'
            />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
