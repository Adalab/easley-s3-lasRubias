import React from 'react';
import PropTypes from "prop-types";

class Collapsable extends React.Component {

    isCollapsed () {
        console.log(this.props.isOpen);
        return this.props.isOpen ? 'open' : '';        
    }

    render () {
        return (
            <li className={`section2__list--collapsible ${this.props.block} ${this.isCollapsed()}`} onClick= {this.props.isSelected}>
              <div id={this.props.numberChild} className="collapsible">
                <h2 className="section2__list--h2"><i className={this.props.icoSection}></i> {this.props.titleSection}</h2>
                <div><i className="fas fa-chevron-down icon__arrow--card-page"></i></div>
              </div>
              {this.props.children}
            </li>
        );
    }
}

Collapsable.propTypes ={
    block: PropTypes.string.isRequired,
    numberChild: PropTypes.string.isRequired,
    icoSection: PropTypes.string.isRequired,
    titleSection: PropTypes.string.isRequired,
}

export default Collapsable;