import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './details.module.scss';

class Experience extends Component {
    render() {
        return (
            <div className='row no-gutters'>
                <div className={`col-12 col-sm-2 ${classes.companyIcon}`}>
                    <img src={'./images/' + this.props.experience.icon} className='mb-2 mt-2' alt={this.props.experience.firm}/>
                </div>
                <div className={`${classes.fontsSize} col-12 col-sm-10 pl-3`}>
                    <div className={`${classes.gray} mb-1 font-weight-bolder`}>{this.props.experience.firm}</div>
                    <div className='mb-1'>
                        <span className={`${classes.gray} font-weight-bold`}>{this.props.experience.position}</span>
                        &nbsp;&nbsp;
                        <span>{this.props.experience.location}</span>
                    </div>

                    <div className='text-secondary'>
                        {this.props.experience.startDate} - {this.props.experience.endDate} : &nbsp;
                        {this.props.experience.period}
                    </div>
                    {/*<div className='text-secondary'>*/}
                    {/*    {this.props.experience.location}*/}
                    {/*</div>*/}
                    <hr className={classes.lighterHr}/>
                    {this.props.children}

                    {/*{this.props.experience.showLine? (<hr/>): null}*/}
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