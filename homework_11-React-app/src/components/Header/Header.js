import logo from "../../img/pizza-logo.png";
import cart_empty from "../../img/shopping-cart_empty.png"
import cart_full from "../../img/shopping-cart_full.png"
import {useEffect, useState} from "react";
import './Header.css';


function Header1(props) {
    return (
        <div className="Header">
            <header className={'Header__header'}>
                <div>
                    <a className={'Header__anchor'} href={''}>
                        <img id={'Header__logo'} src={logo}/>
                        <h1>Orange pizza</h1>
                    </a>
                </div>
                <div className={'Header__cart-block'}>
                    <button className={"Header__button"} >0₽</button>
                    <img className={'Header__cart'} src={cart_empty} />
                </div>
            </header>
        </div>
    );
}

export default Header1;
