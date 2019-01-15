import React, { Component } from 'react';

class ListSkills extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" value={this.props.skill} />
                {this.props.skill}
            </li>
        )
    }
}

export default ListSkills;