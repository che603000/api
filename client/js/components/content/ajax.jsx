"use strict";

import Err404 from './err404'
var md = require('marked');

//md.setOptions({
//    renderer: new md.Renderer(),
//    gfm: true,
//    tables: true,
//    breaks: false,
//    pedantic: false,
//    sanitize: true,
//    smartLists: true,
//    smartypants: false
//});

export  default class AjaxContent extends React.Component {

    state = {
        content: "",
        err: null
    }

    constructor(props) {
        super();
    }

    componentDidMount() {
        this._load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this._load(nextProps);

    }

    _load(props) {
        var url = `./content/${props.url}.md`;
        $.get(url)
            .done(this._success.bind(this))
            .fail(this._error.bind(this));
    }

    _success(text) {
        var html = md(text);//, true);
        this.setState({content: html, err: null});
    }

    _error(xhr) {
        this.setState({content: '', err: {status: xhr.status, message: xhr.statusText + ` (${this.props.url})`}});
        //this.setState({content: `<div class="alert alert-danger"> Error code: <b> ${xhr.status} </b>. message: <b>${t}</b> </div>`});
    }

    render() {
        var content = ()=> {
            return (
                <div id="page-title">
                    <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                </div>
            )
        }
        var err = ()=> {
            return React.createElement(Err404, this.state.err);
        }
        return this.state.err ? err() : content()
    }
}





