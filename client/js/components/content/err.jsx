"use strict";

class Content extends React.Component {
    constructor(props) {
        super(props);
        debugger;
    }

    render() {
        return (
            <div id="page-title">

                <div className="alert alert-danger">
                    <h1 className="text-overflow">500 - Error</h1>
                    {this.props.message}
                </div>
                <pre>{this.props.stack}</pre>
            </div>
        )
    }
}


module.exports = Content;


