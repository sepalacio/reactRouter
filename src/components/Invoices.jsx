import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Invoices extends Component {
    render () {
        return(
            <div>
                <h1>Invoices</h1>
                <Link to="/">Go back to home</Link>
            </div>
        )
    }
}