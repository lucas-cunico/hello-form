import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import PropTypes from 'prop-types';

class CustomSlider extends Component {
    state = {
        value: 13
    };

    onSliderChange = (value) => {
        this.setState({value});
    };

    render() {
        const marks = {
            13: '13-19',
            20: '20-19',
            30: '30-45',
            45: '45 e acima'
        };
        const {value} = this.state;
        const {name} = this.props;
        return (
            <React.Fragment>
                <input name={name} type="hidden" value={value}/>
                <Slider value={value} min={13} max={45} marks={marks} step={null}
                        onChange={this.onSliderChange}
                />
            </React.Fragment>
        );
    }
}
CustomSlider.propTypes = {
  name: PropTypes.string.isRequired
};

export default CustomSlider;
