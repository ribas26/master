import logo from "../../pizza-logo.png";
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <header className={'Header__header'}>
                <img id={'Header__logo'} src={logo}/>
                <h1>Orange pizza</h1>
            </header>
        </div>
    );
}

export default Header;
