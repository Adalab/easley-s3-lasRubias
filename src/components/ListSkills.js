import React, { Component } from 'react';

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

export default ListSkills;