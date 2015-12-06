"use strict";


export class Header extends React.Component {

    render() {
        var menu = this.props.menu.props;
        return <li className="list-header">{menu.name}</li>
    }
}

export class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        active: this.isActive(this.props)
    }

    onClick(e) {

    }

    isActive(props) {
        //debugger;
        return props.active === this.props.route;
        //return RegExp('^#' + props.active, 'i').test(props.href);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({active: this.isActive(nextProps)});
    }

    get activeClass(){
        return this.state.active?"active-link":"";
    }

    render() {
        var menu = this.props.menu.props;
        return (
            <li className={this.activeClass}>
                <a href={menu.href || "#"} onClick={this.onClick.bind(this)}>
                    <i className={menu.icon?("fa fa-"+menu.icon):""}></i>
                    <span className="menu-title">{menu.name}</span>
                </a>
            </li>
        )
    }
}

export class SubItem extends Item {
    render() {
        var menu = this.menu.props;
        return (
            <li className={this.activeClass}>
                <a href={menu.href || "#"} onClick={this.onClick.bind(this)}>
                    {menu.name}
                </a>
            </li>
        )
    }
}

export class SubMenu extends React.Component {
    state = {
        collapse: true
    }

    constructor(props) {
        super(props);
    }


    onClick(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({collapse: !this.state.collapse});
        return false;
    }

    render() {
        var menu = this.props.menu.props;
        return (
            <li>
                <a href="#" onClick={this.onClick.bind(this)}>
                    <i className="fa fa-services"></i>
                        <span className="menu-title">
                            {menu.name}
                        </span>
                    <i className="arrow"></i>
                </a>


                <ul className={this.state.collapse?"collapse":""}>
                    {this.props.children}
                </ul>
            </li>
        )
    }
}

export  default {
    Header: Header,
    Item: Item,
    SubItem: SubItem,
    SubMenu: SubMenu
}

