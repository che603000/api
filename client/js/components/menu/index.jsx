"use strict";

import _ from 'underscore';
import Lib from './items';
import Backbone from 'backbone';

export default class MainMenu extends React.Component {
    state = {
        active: this.props.active
    }

    constructor(props) {
        super(props);
        this.options = props.options;
    }

    itemRender(options) {
        var menu = options.menu,
            children = [],
            props =options;

        if (!menu.type || !menu.props.name) {
                console.log(menu);
                throw Error('not name or type...');
        }

        _.extend(props, {key: props.route, active: this.state.active});
        if (menu.subItems)
            children = menu.subItems.map(opt=> this.itemRender(opt));

        return React.createElement(Lib[menu.type], props, children);
    }

    render() {
        return (
            <div className="nano">
                <div className="nano-content">
                    <ul id="mainnav-menu" className="list-group">
                        {this.options.map(opt=>this.itemRender(opt), this)}
                    </ul>
                </div>
            </div>
        )
    }
}