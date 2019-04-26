import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        let assignedClasses = [];
        if (this.props.classesNames) {
            assignedClasses = this.props.classesNames.split(' ');
        }
        assignedClasses.push('Modal');

        return (
            <>
                <Backdrop classesNames={this.props.classesNames} show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={assignedClasses.map(el => {
                        return classes[el]
                    }).join(' ')}
                    style={{
                        transform: this.props.show ? 'translate(-50%,-50%)' : 'translate(-50%,-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default Modal;