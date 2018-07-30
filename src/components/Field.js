import React, {Component} from 'react';

class Field extends Component {
    render() {
        const {label, children} = this.props;
        return (
            <div className="form-group row">
                <label className="font-weight-bold col-md-2">{label}</label>
                <div className="col-md-10 row">
                    {children}
                </div>
            </div>
        );
    }
}

export default Field;
