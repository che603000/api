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

    componentWillReceiveProps(props) {
        // открыть sub меню  если пункт активный --
        //this.props.subItems.forEach((item)=> {
        //    if (props.options.route === props.active)
        //        this.setClose(false);
        //});
    }

    setClose(isOpen) {
        this.setState({collapse: isOpen});
    }

    onClick(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setClose(!this.state.collapse);
        return false;
    }

    itemRender(options, index) {
        var menu = options.menu;

        if (!menu.type || !menu.props.name) {
            console.log(menu);
            throw Error('not name or type...');
        }

        var props = _.extend({key: this.props.name + index, active: this.props.active}, options);

        return React.createElement(Lib[menu.type], props);
    }

    render() {
        var menu = this.props.menu.props;
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
                    {this.props.subItems.map((opt, index)=>this.itemRender(opt, index), this)}
                </ul>
            </li>
        )
    }
}
module.exports = SubMenu;

