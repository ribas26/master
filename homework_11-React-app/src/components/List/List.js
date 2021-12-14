import './List.css'
export const List = ({data}) => {
    console.log(data)
    return data.map( ({id, imageUrl, name, price, addProduct}) => {
        return (
            <div key={id} className={'List__card-product'}>
                <img className={'List__img-card-product'} src={imageUrl}/>
                <h3 className={'List__name'}>{name}</h3>
                <div className={'List__price'}> - Цена: {price}₽</div>
            </div>
        )
    })
}