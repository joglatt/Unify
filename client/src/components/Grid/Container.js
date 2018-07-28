import React from 'react';
import PropTypes from 'prop-types';
import './container.css';

class Container extends React.Component {

    render () {
        const { fluid, children } = this.props

        return (
            <div className='test'>
            <div className={`container${fluid ? "-fluid" : ""}`} >
            {children}
            </div>
            </div>
        );
    }
}

Container.props = {
    fluid: PropTypes.string,
    children: PropTypes.node
}

export default Container;