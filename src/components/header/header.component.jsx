import React from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss'

import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.components"

import CartDropdown from "../cart-dropdown/cart-dropdown.component";


const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className="logo"/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGNIN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
        <CartDropdown />
        }
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
