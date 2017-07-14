import  * as React from "react";

/**
 * menu component
 */
export class MenuComponent extends React.Component<{}, {}> {

    render() {
        return (
            <div className="ui inverted primary fixed menu">
                <a className="active item">
                    Home
                </a>
                <a className="item">
                    Orders
                </a>
                <a className="item">
                    Messages
                </a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                                <i className="search link icon" />
                        </div>
                    </div>
                    <a className="ui item">
                        Logout
                    </a>
                </div>
            </div>
        )
    }

}