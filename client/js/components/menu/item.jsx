"use strict";

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    //state = {
    //    active: this.isActive(this.props)
    //}

    onClick(e) {

    }

    get isActive() {
        //debugger;
        //return props.active === this.props.route;
        return this.props.active === this.props.route;
    }

    //componentWillReceiveProps(nextProps) {
    //    this.setState({active: this.isActive(nextProps)});
    //    console.log(this.props);
    //}

    get activeClass() {
        return this.isActive ? "active-link" : "";
    }

    render() {
        var menu = this.props.menu.props;
        console.log(this.props);

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

//class SubItem extends Item {
//    render() {
//        var menu = this.props.menu.props;
//        return (
//            <li className={this.activeClass}>
//                <a href={menu.href || "#"} onClick={this.onClick.bind(this)}>
//                    {menu.name}
//                </a>
//            </li>
//        )
//    }
//}


module.exports = Item;


