import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({name, label}) => {
    return <div className="form-check" >
        <input name={name} className="form-check-input" type="checkbox" value={true} id={name}/>
        <label className="form-check-label" htmlFor={name}>
            {label}
        </label>
    </div>
};
Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};
export default Checkbox;