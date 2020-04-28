import React, { Component } from 'react'

export default class Prueba extends Component {

    handleClick = () => {
        const { history } = this.props
        
        history.push('/invoices')
    }

    render () {
        return(
            <div onClick={ this.handleClick }>
                <h1>This is the test component</h1>
            </div>
        )
    }
}