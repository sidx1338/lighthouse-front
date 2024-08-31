import React, {Component} from 'react';
import Item from "../Item/Item.jsx";
import './Items.scss';

export class Items extends Component {
    render() {
        return (
            <div className="items__container">
                {this.props.products.map(el => (
                    <Item key={el.id} product={el} onAdd={this.props.onAdd}/>
                ))}
            </div>
        )
    }
}

export default Items;