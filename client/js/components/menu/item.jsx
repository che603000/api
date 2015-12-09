"use strict";

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        active: false
    }

    onClick(e) {

    }

    get isActive() {
        //debugger;
        return this.state.active;
        //return this.props.active === this.props.route;
    }

    get activeClass() {
        return this.isActive ? "active-link" : "";
    }

    //componentWillReceiveProps(nextProps) {
    //    this.setState({active: this.isActive(nextProps)});
    //    console.log(this.props);
    //}
    componentDidMount() {
        //console.log(this.props);
        this.props.history.on('route', this.onHistory, this);
    }

    componentWillUnmount() {

        this.props.history.off('route', this.onHistory, this);
    }

    onHistory(router, route, params) {
        //debugger;
        if (this.props.route === route) {
            this.props.openSubMenu && this.props.openSubMenu();
            this.setState({active: true});
        } else {
            this.state.active && this.setState({active: false});
        }
    }

    render() {
        var opt = this.props.options;
        //console.log(this.props);

        return (
            <li className={this.activeClass}>
                <a href={opt.href || "#"} onClick={this.onClick.bind(this)}>
                    <i className={opt.icon?("fa fa-"+opt.icon):""}></i>
                    <span className="menu-title">{opt.name}</span>
                </a>
            </li>
        )
    }
}

module.exports = Item;


