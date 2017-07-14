import * as React from "react";
import * as ReactDOM from "react-dom";
import {Order} from "./models/Order";
import {EatApiClient} from "./services/EatApiClient";
import {MenuComponent} from "./components/MenuComponent";
import {OrderComponent} from "./components/OrderComponent";

/**
 * the application state
 */
interface ApplicationState {
    message?: string;
    orders?: Order[];
}

/**
 * the application
 */
class Application extends React.Component<{}, ApplicationState> {

    /**
     * the state
     */
    state: ApplicationState = {orders:[]};

    /**
     * the api client
     */
    api = new EatApiClient();

    /**
     * start polling for orders.
     */
    componentDidMount() {
        this.poolingForNewOrders();
    }

    /**
     * pooling for new orders
     */
    async poolingForNewOrders() {
        try {
            let orders = await this.api.getOrders();
            orders = orders.filter(order =>!order.isReady).reverse();
            this.setState({orders});
            setTimeout(() => this.poolingForNewOrders(), 5000);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * set the order ready
     * @param order
     */
    async setOrderReady(order: Order) {
        order.isReady = true;
        const result = await this.api.setOrderReady(order.id);
        this.setState({message: "Order set ready!!"});
    }

    /**
     * render this application
     * @returns {any}
     */
    render() {
        return (
            <div className="container">
                <MenuComponent />
                <div className="order-list">&nbsp;</div>
                {this.state.message && (
                    <div className="ui positive message">
                        <i className="close icon" />
                        <div className="header">
                            {this.state.message}
                        </div>
                    </div>
                )}
                <div className="ui cards">
                    {this.state.orders.map((item, index) => (
                        <OrderComponent key={item.id}
                                        queueNumber={(1000 + index).toString()}
                                        order={item}
                                        setOrderReady={(order) => this.setOrderReady(order)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Application />, document.getElementById("root"));