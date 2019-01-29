import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListSkills extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" className='checkbox' value={this.props.skill} onChange={this.props.handleChange}/>
                {this.props.skill}
            </li>
        )
    }
}

ListSkills.propTypes ={
    skill: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default ListSkills;