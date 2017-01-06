var React = require("react");
var List = require("./List.jsx");

var ListManager = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            newItemText:''
        };
    },
    onChange: function(e){
        this.setState({newItemText:e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var currentItems = this.state.items;

        currentItems.push(this.state.newItemText);

        this.setState({items:currentItems, newItemText:''});
    },
    render: function() {
        var divStyle = {
            marginTop: 10
        };
        var headingStyle = {};

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
            headingStyle.borderColor = this.props.headingColor;
        }

        return (
            <div className="col-sm-4" style={divStyle}>
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            <button className="btn btn-primary">Add</button>
                        </form>
                        <List items={this.state.items} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
