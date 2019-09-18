import React, { Component } from 'react'
import { logout } from '../../services/auth'
import { withRouter } from 'react-router-dom';


class Footer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{ top: 0, right: 0, position: "absolute", padding: 10 }}>
                <p><a href="#" onClick={(e) => { e.preventDefault(); logout(); this.props.history.push('/'); }}>Sair</a></p>
            </div >
        )
    }
}
export default withRouter(Footer);
