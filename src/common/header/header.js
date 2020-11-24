import React from 'react';
import { useAppStateContext } from '../../redux/reducers';
import { Navbar, NavbarBrand } from 'reactstrap';

const HeaderComponent = () => {
  const { state } = useAppStateContext();
  return (
    <Navbar expand="md" style={{ backgroundColor: "#e6ebfa" }}>
      <NavbarBrand>
        {(state.loginUserName !== '') &&
          <a href="/">
            <img src="assets/images/back.svg" height="30px" className="mr-3" alt="Back" />
          </a>
        }
        <a href="https://xebia.com">
          <img src="assets/images/xebia.png" height="30px" max-width="100%" alt="xebia" />
        </a>
      </NavbarBrand>
    </Navbar>
  );
}

export default HeaderComponent;