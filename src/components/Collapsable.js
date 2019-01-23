import React from 'react';
import PropTypes from "prop-types";

class Collapsable extends React.Component {
    isCollapsed () {
        console.log(this.props.isOpen);
        return this.props.isOpen ? 'open' : '';        
    }
    render () {
        const { block, openShareBtn, isSelected, numberChild } = this.props;
        return (
            <li className={`section2__list--collapsible ${block} ${openShareBtn} ${this.isCollapsed()}`} onClick={isSelected}>
              <div id={numberChild} className="collapsible">
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