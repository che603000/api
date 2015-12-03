"use strict";


export class Header extends React.Component {
    render() {
        return <li className="list-header">{this.props.name}</li>
    }
}

export class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        active: false
    }

    onClick(e) {

    }

    setActive(value) {
        this.setState({active: value});
    }

    render() {

        return (
            <li className={this.state.active?"active-link":""}>
                <a href={this.props.url || "#"} onClick={this.onClick.bind(this)}>
                    <i className={this.props.icon?("fa fa-"+this.props.icon):""}></i>
                    <span className="menu-title">{this.props.name}</span>
                </a>
            </li>
        )
    }
}

export class SubItem extends Item {
    render() {
        return (
            <li className={this.state.active?"active-link":""}>
                <a href={this.props.url || "#"} onClick={this.onClick.bind(this)}>
                    {this.props.name}
                </a>
            </li>
        )
    }
}

export class SubMenu extends React.Component {
    render() {
        return (
            <li>
                <a href="#">
                    <i className="fa fa-services"></i>
                        <span className="menu-title">
                            <strong>{this.props.name}</strong>
                        </span>
                    <i className="arrow"></i>
                </a>


                <ul className="collapse">
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

