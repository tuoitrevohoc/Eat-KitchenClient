import  * as React from "react";
import {Order} from "../models/Order";

/**
 * order props
 */
interface OrderComponentProps {
    queueNumber: string;
    order: Order;
    setOrderReady: (order: Order) => void;
}

/**
 * menu component
 */
export class OrderComponent extends React.Component<OrderComponentProps, {}> {


    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <a className="header">{this.props.queueNumber}</a>
                    <div className="meta">
                        <span className="date">{this.props.order.items.reduce((a, b) => a + b.count, 0)} Items</span>
                    </div>
                    <div className="description">
                        <table className="ui table">
                            <tbody>
                            {this.props.order.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.count} * ${item.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="extra content">
                    <a className={"ui button" + (this.props.order.isReady ? "positive" : "")}
                       onClick={() => this.props.setOrderReady(this.props.order)}>
                        <i className="check icon" />
                        This order is ready
                    </a>
                </div>
            </div>
        )
    }

}