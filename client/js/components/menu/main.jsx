"use strict";

import _ from 'underscore';
import Lib from './items';
import Backbone from 'backbone';

export default class MainMenu extends React.Component {
    _itemActive = null

    constructor(props) {
        super();
        this.options = props.options;
    }

    componentDidMount() {
        //this.active(this.props.active);
        Backbone.history.on('route', this.onHistory, this );
    }

    onHistory(router, route, params){
        //debugger;
        var h = Backbone.history.fragment;
        this.active("#"+h);

    }

    active(url) {
        if (this._itemActive)
            this._itemActive.setActive(false);

        if (this.refs[url]) {
            this._itemActive = this.refs[url];
            this._itemActive.setActive(true);
        }
    }

    itemRender(menu) {
        var children = [],
            props = menu.props;

        if (!menu.type || !menu.props.name) {
            console.log(menu);
            throw Error('not name or type...');
        }

        _.extend(props, {ref: props.url, key: props.name});
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
