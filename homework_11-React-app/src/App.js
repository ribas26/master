import './App.css';
//import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
import './components/Main/Main.css'
import {Main} from "./components/Main/Main"
import {List} from "./components/List/List"
import {useEffect, useState} from "react";
import logo from "./img/pizza-logo.png";
import cart_empty from "./img/shopping-cart_empty.png";
//import List from "./components/List/List";
import './components/Header/Header.css'
import {priceCart} from "./components/Main/Main";


function App() {
    const [data, setData] = useState([])
    const [dataCart, setDataCart] = useState([])
    const [router, setRouter] = useState();


    const addProduct = (dat) => {
        let checkError = false
        dataCart.map((item) => {
            if (dat.id == item.id) {
                checkError = true
            }
        })
        if (checkError) {
            alert('Пицца уже была добавлена!')
        } else {
            setDataCart([...dataCart, dat])
        }

    }

    const Header = () => {
        return (
            <div className="Header">
                <header className={'Header__header'}>
                    <div>
                        <a className={'Header__anchor'} onClick={() => {
                            setRouter('Main')
                        }}>
                            <img id={'Header__logo'} src={logo}/>
                            <h1>Orange pizza</h1>
                        </a>
                    </div>
                    <div className={'Header__cart-block'}>
                        <button className={"Header__button"} onClick={() => {
                            setRouter('List')
                        }}>{priceCart}₽</button>
                        <img className={'Header__cart'} src={cart_empty} onClick={() => setRouter('List')}/>
                    </div>
                </header>
            </div>
        )
    }



    useEffect(() => {
        getData();
    }, [])

    function getData() {
        fetch('https://react-pizza-93d7b-default-rtdb.europe-west1.firebasedatabase.app/-MQO7AJ91Dj3uLqfd6Ji/pizzas.json')
            .then(response => response.json())
            .then((data) => setData(data));
    }

    const MainPage = () => {
        return (
            <main className={'Main__main'}>
                <h2>Все пиццы</h2>
                <div className={'Main__cards'}>
                    {
                        data.map(({id, imageUrl, name, price}) => <Main
                            key={id}
                            id={id}
                            name={name}
                            imageUrl={imageUrl}
                            price={price}
                            addProduct={addProduct}
                        />)
                    }
                </div>
            </main>
        )
    }
  return (
    <div className="App">
        <Header />
        {router === 'List' ? <List data={dataCart} />: <MainPage/>}
    </div>

  );
}

export default App;
