/**
 * Created by Александр on 04.12.2015.
 */

class Err404 extends React.Component {
    render() {
        return (
            <div id="page-title">
                <h1 className="page-header text-overflow">404 - нет такой страницы</h1>
                <code>{this.props.path}</code>
            </div>
        )
    }
}

module.exports = function (url) {
    this.setActiveContent(Err404, {path: url});
};