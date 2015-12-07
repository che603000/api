"use strict";


class Header extends React.Component {
    render() {
        var menu = this.props.menu.props;
        return <li className="list-header">{menu.name}</li>
    }
}

module.exports = Header;
