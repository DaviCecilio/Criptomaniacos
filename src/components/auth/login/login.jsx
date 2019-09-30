import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../../../vendor/css/login/login.css';
import Particles from '../../../vendor/assets/animations/particles';
import logo from '../../../vendor/assets/img/logo-cripto.png';

import api from '../../../services/api';
import { login, getToken } from '../../../services/auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };
    this.verifyLogin = this.verifyLogin.bind(this);
    this.verifyAPI = this.verifyAPI.bind(this)
  }

  async componentDidMount() {
    const isLogged = await this.verifyLogin();
    if (isLogged) {
      const apiSet = await this.verifyAPI();
      if (apiSet)
        this.props.history.push('/followTrader')
      else
        this.props.history.push('/apiKey')
    }



  }

  async verifyAPI() {
    const identity = getToken();
    try {
      if (identity) {
        const response = await api.get('/username/integration', { headers: { session: identity } })
        if (Object.keys(response.data.result).length === 0)
          return false
        return true;
      }
    } catch (e) {
      console.log("Error", e);
      return false
    }
  }
  async verifyLogin() {
    const identity = getToken();
    if (identity) {
      try {
        await api.get('/username/verify', { headers: { session: identity } })
        return true;
      } catch (e) {
        console.log(e)
        return false;
      }
    }
  }

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: 'Preencha com e-mail e senha para continuar!' });
    } else {
      try {
        const response = await api.post('/username/auth/', { email, password });
        login(response.data.result.sessionId);
        const apiSet = await this.verifyAPI();
        if (apiSet)
          this.props.history.push('/followTrader')
        else
          this.props.history.push('/apiKey')
      } catch (err) {
        this.setState({
          error:
            'Houve um problema com o login, verifique suas credenciais. T.T',
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Particles />

        <div className="container-fluid login">
          <div
            className="row justify-content-center align-items-center"
            id="parent"
          >
            <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="card">
                <article className="card-body">
                  <img
                    className="card-title img-fluid mb-3 mt-1"
                    src={logo}
                    alt="Terranova - Logo"
                  />
                  <hr />
                  <form onSubmit={this.handleSignIn}>
                    <p className="text-success text-center">Efetue seu Login</p>
                    {this.state.error && (
                      <p className="warningError">{this.state.error}</p>
                    )}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <i class="material-icons">email</i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i class="material-icons">lock</i>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Senha"
                          type="password"
                          onChange={e =>
                            this.setState({ password: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-outline-success btn-block"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-info">
                      <a href="google.com">Forgot password?</a>
                    </p>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
