import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './experience.scss';

class Experience extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12 col-md-2'>
                    <img src={'./images/' + this.props.experience.icon} className='company-icon pb-3' alt={this.props.experience.firm}/>
                </div>
                <div className='col-12 col-md-10'>
                    <div className='text-dark mb-1 font-weight-bolder'>{this.props.experience.position}</div>
                    <div className='text-dark font-weight-bold'>{this.props.experience.firm}</div>
                    <div className='text-secondary'>
                        {this.props.experience.startDate} - {this.props.experience.endDate} . &nbsp;
                        {this.props.experience.period}
                    </div>
                    <div className='text-secondary'>
                        {this.props.experience.location}
                    </div>
                    {this.props.children}

                    {this.props.experience.showLine? (<hr/>): null}
                </div>

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

export default Experience;