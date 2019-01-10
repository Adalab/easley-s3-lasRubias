import React from 'react';

class Collapsable extends React.Component {
    render () {
        return (
            <li className={`section2__list--collapsible ${this.props.block}`}>
              <div id={this.props.numberChild} className="collapsible">
                <h2 className="section2__list--h2"><i className={this.props.icoSection}></i> {this.props.titleSection}</h2>
                <div><i className="fas fa-chevron-down icon__arrow--card-page"></i></div>
              </div>
              {this.props.children}
              
            </li>
        );
    }
}

export default Collapsable;