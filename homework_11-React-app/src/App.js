import './App.css';
import Header from "./components/Header/Header";
import logo from "./logo.svg";
import Main from "./components/Main/Main";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([])
    const test = 'text-test';

    useEffect(() => {
        getData();
    }, [])
    function getData() {
        const test2 = fetch('https://react-pizza-93d7b-default-rtdb.europe-west1.firebasedatabase.app/-MQO7AJ91Dj3uLqfd6Ji/pizzas.json')
            .then(response => response.json())
            .then((data) => {
                //   console.log(data);
                //  console.log(data[0]);
                setData(data);

            });
    }
console.log(data)
    //const testJSON = JSON.parse('https://react-pizza-93d7b-default-rtdb.europe-west1.firebasedatabase.app/-MQO7AJ91Dj3uLqfd6Ji/pizzas.json');
    //console.log(testJSON)
  return (
    <div className="App">
        <Header/>

        <Main name={test}/>
        {data.map(item => {
            return (
                <div key={item.id}>
                    img: <img src={item.imageUrl}/>
                    <br/>
                    title: {item.name}
                    <br/>
                    <br/>
                    coins: {item.price}
                </div>
            )
        })}
        {/*<main>*/}
        {/*    <h2>Main</h2>*/}
        {/*    <div className={'main__cards-product'}>*/}
        {/*    */}
        {/*    </div>*/}
        {/*</main>*/}

        {/*<header className="App-header">*/}
        {/*    <img src={logo} className="App-logo" alt="logo" />*/}
        {/*    <p>*/}
        {/*        Edit <code>src/App.js</code> and save to reload.*/}
        {/*    </p>*/}
        {/*    <a*/}
        {/*        className="App-link"*/}
        {/*        href="https://reactjs.org"*/}
        {/*        target="_blank"*/}
        {/*        rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*        Learn React*/}
        {/*    </a>*/}
        {/*</header>*/}
    </div>
  );
}

export default App;
