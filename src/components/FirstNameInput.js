import React, {Component} from 'react';

class FirstNameInput extends Component {
    state = {
        value: ""
    };
    onChange(e){
        let {value} = e.target;
        if(!value.match(/([^A-Za-z])/g) && !value.match(/^.{20}/g)){
            this.setState({value});
        }
    }
    render() {
        const {value} = this.state;
        const {...rest} = this.props;
        return (
            <input onChange={this.onChange.bind(this)} value={value} {...rest}/>
        );
    }
}

export default FirstNameInput;
