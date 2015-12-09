"use strict";

import _ from 'underscore';

var Lib = {
    Header: require('./header'),
    Item: require('./item'),
    SubMenu: require('./subMenu')
};


export default class RootMenu extends React.Component {
    constructor(props) {
        super(props);
        this.options = props.options;
    }

    itemRender(menu, index) {
        if (!menu.type || !menu.options.name)
            throw Error('not name or type...');
        else
            return React.createElement(
                Lib[menu.type],
                _.extend({key: menu.options.name + index, history: this.props.history}, menu)
            );
    }

    render() {
        return (
            <div className="nano">
                <div className="nano-content">
                    <ul id="mainnav-menu" className="list-group">
                        {this.options.map((opt, index)=>this.itemRender(opt, index), this)}
                    </ul>
                </div>
            </div>
        )
    }
}

