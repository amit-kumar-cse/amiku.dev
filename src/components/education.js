import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './experience.scss';
import Experience from "./experience";

class Education extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

Experience.propTypes = {
    experience: PropTypes.shape({
        firm: PropTypes.string,
        position: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        period: PropTypes.string,
        location: PropTypes.string,
        icon: PropTypes.string,
        showLine: PropTypes.bool
    })
}

export default Education;