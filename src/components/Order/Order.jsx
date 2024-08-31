import React, {Component} from 'react';
import './Order.scss'
import Trash from "../../assets/icons/trash.svg";
import Cross from "../../assets/icons/cross.svg";

export class Order extends Component {
    render() {
        return (
            <>
            <div className="order-item">
                <div className="order-wrap">
                    <div className="cross-icon"  >
                        <img src={Cross} alt="cross" width={15}/>
                    </div>
                    <img className="order-item-img" src={"./img/" + this.props.item.img} alt=""/>
                    <div className="order-item-title">{this.props.item.title}</div>
                    <div className="order-item-price">{this.props.item.price}{this.props.item.currency}</div>
                </div>
                <div className="trash-icon" onClick={() => this.props.onDelete(this.props.item.id)}>
                    <img src={Trash} alt="trash" width={20}/>
                </div>
            </div>
            {/*<div>*/}
            {/*    <button  className="order-button">Оформить заказ</button>*/}
            {/*</div>*/}
            </>
        )

    }
}

export default Order;