"use strict";

export default class Err404 extends React.Component {
    render() {
        return (
            <div id="page-title">
                <h1 className="page-header text-overflow">Error</h1>
                <div className="alert alert-danger">{this.props.status} - {this.props.message}</div>
            </div>
        )
    }
}