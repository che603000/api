"use strict";


class Header extends React.Component {
    render() {
        return <li className="list-header">{this.props.options.name}</li>
    }
}

module.exports = Header;
