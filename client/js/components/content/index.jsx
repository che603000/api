/**
 * Created by alex on 02.12.2015.
 */
"use strict";

export default class Content extends React.Component {
    state = {
        active: this.props.active,
        options:{}
    }

    constructor(props) {
        super(props);
    }

    render() {
        return this.state.active ? React.createElement(this.state.active, this.state.options) : null;
    }
}