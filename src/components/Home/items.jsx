import Item from '../Item/item.jsx'


export default function Items(props) {
    let items = props.items;
    let renderedItems = items.map(item =>
        <Item description={item.description} key={items.indexOf(item)}></Item>)
    return (
        <div className='items-comp'>
            {renderedItems}
        </div>
    )
}
