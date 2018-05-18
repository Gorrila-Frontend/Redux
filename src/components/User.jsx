import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class User extends Component {
    render () {
        const { name } = this.props
        return (
            <div className={this.props.className}>
            <h2>Hello { name }</h2>
            </div>
        )
    }
}
User.PropTypes = {
    name: PropTypes.string.isRequired
}
export default styled(User)`
text-align: center;
`;