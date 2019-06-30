import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './experience.scss';

class Education extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12 col-lg-2'>
                    <img src={'./images/' + this.props.education.icon} className='company-icon pb-3' alt={this.props.education.firm}/>
                </div>
                <div className='col-12 col-lg-10'>
                    <div className='text-dark mb-1 font-weight-bolder'>{this.props.education.college}</div>
                    <div className='text-dark font-weight-bold'>
                        {this.props.education.degree +', ' + this.props.education.specialization}
                    </div>
                    <div className='text-secondary'>
                        {this.props.education.startDate} - {this.props.education.endDate}
                    </div>
                    {this.props.children}

                    {this.props.education.showLine? (<hr/>): null}
                </div>

            </div>
        );
    }
}

Education.propTypes = {
    education: PropTypes.shape({
        college: PropTypes.string,
        degree: PropTypes.string,
        specialization: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
        icon: PropTypes.string,
        showLine: PropTypes.bool
    })
}

export default Education;