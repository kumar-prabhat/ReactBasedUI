import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SideBarProfile = () => {
  return (
    <Fragment>
      <ul className='user-setting-menu'>
        <li>
          <Link to='#'>
            <i className='fa fa-user'></i> My Profile
          </Link>
        </li>
        <li>
          <Link to='#'>
            <i className='fa fa-cog'></i> Setting
          </Link>
        </li>
        <li>
          <Link to='#'>
            <i className='fa fa-power-off'></i> Logout
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default SideBarProfile;
