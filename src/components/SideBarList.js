import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const SideBarList = (props) => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <Link
        to='#'
        className='waves-effect collapsed'
        onClick={() => {
          setShow(!show);
        }}
      >
        <i className={props.icon}></i> <span>{props.mainName}</span>
        {props.mainName === 'Mailbox' ? (
          <small className='badge float-right badge-warning'>12</small>
        ) : (
          <i className='fa fa-angle-left pull-right'></i>
        )}
      </Link>
      <ul className={show === false ? 'collapse' : ''}>
        {props.navigationList.forEach((e) => (
          <li key={e.id}>
            <Link to='#'>
              <i className='fa fa-dot-circle-o'></i> {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default SideBarList;
