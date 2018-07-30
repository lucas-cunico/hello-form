import React, {Component} from 'react';

class AdressField extends Component {
    state = {
        show: false
    };

    onChange(e) {
        let {value} = e.target;
        if (value !== "selecione") {
            this.setState({show: true});
        }
    }

    render() {
        const {show} = this.state;
        return (
            <React.Fragment>
                <select name="addressType" className="col-md-12 form-control" defaultValue="selecione" required
                        onChange={this.onChange.bind(this)}>
                    <option disabled value="selecione">Selecione</option>
                    <option value="Casa">Casa</option>
                    <option value="Empresa">Empresa</option>
                </select>
                <input name="address" className={`col-md-12 form-control mt-3 collapse ${show ? "show" : ""}`}
                       required/>
            </React.Fragment>
        );
    }
}

export default AdressField;
