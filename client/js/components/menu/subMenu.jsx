"use strict";

import _ from 'underscore';
var Lib = {
    Header: require('./header'),
    Item: require('./item'),
    SubMenu: require('./subMenu')
};

class SubMenu extends React.Component {
    state = {
        collapse: true
    }

    constructor(props) {
        super(props);
    }

    close() {
        this.setState({collapse: true});
    }

    open() {
        this.setState({collapse: false});
    }

    onClick(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.state.collapse)
            this.open()
        else
            this.close();

        return false;
    }

    itemRender(menu, index) {
        if (!menu.type || !menu.options.name)
            throw Error('not name or type...');
        else
            return React.createElement(
                Lib[menu.type],
                _.extend({
                    key: menu.options.name + index,
                    history: this.props.history,
                    openSubMenu: this.open.bind(this)
                }, menu)
            );
    }

    render() {
        var menu = this.props.options;
        return (
            <li>
                <a href="#" onClick={this.onClick.bind(this)}>
                    <i className={menu.icon?("fa fa-"+menu.icon):""}></i>
                    <i className="fa fa-services"></i>
                        <span className="menu-title">
                            {menu.name}
                        </span>
                    <i className="arrow"></i>
                </a>

                <ul className={this.state.collapse?"collapse":""}>
                    {this.props.subMenu.map((opt, index)=>this.itemRender(opt, index), this)}
                </ul>
            </li>
        )
    }
}
module.exports = SubMenu;

