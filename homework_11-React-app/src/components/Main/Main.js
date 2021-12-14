import {useState} from "react";

export let priceCart =0;
export const Main = ({id, imageUrl, name, price, addProduct}) => {


    const [cartCount, setCartCount] = useState(0)
    const addSum = (price) => {
        setCartCount(price + cartCount)
        priceCart =  price ;
    }
    return (


                <div className={'Main__card-product'} key={id}>
                    <img className={'Main__img-card-product'} src={imageUrl}/>
                    <h3>{name}</h3>
                    <div>Цена: {price}₽</div>
                    <button className={'Main__button-add'} onClick={() => {
                        addProduct({id, imageUrl, name, price})
                        addSum(price);
                    }
                    }>Добавить</button>
                </div>


    )

}

export class getStateCardCount {
}