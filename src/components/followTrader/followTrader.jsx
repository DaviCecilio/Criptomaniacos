import React, { Component } from 'react';
import '../../vendor/css/followTrader/toggleButton.css';
import '../../vendor/css/followTrader/iconStatus.css';
import Modal from '../common/ui/modal/modal';
import api from '../../services/api';
import { getToken, traderId } from '../../services/auth';

export default class ApiKey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollow: false,
      warningUnfollowOpen: false,
      warningFollowOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.ToggleWarningUnfollow = this.ToggleWarningUnfollow.bind(this);
    this.ToggleWarningFollow = this.ToggleWarningFollow.bind(this);
    this.confirmChoice = this.confirmChoice.bind(this);
    this.verifyAPI = this.verifyAPI.bind(this);
    this.isFollowing = this.isFollowing.bind(this);
    this.setFollow = this.setFollow.bind(this)
    this.setUnfollow = this.setUnfollow.bind(this)
  }

  async isFollowing() {
    try {
      const identity = getToken();
      const response = await api.get('/social/trader-list',
        identity && { headers: { session: identity } })
      if (response.data.result.traders.length > 0
        && response.data.result.traders[0].isFollowing === true) {
        this.setState({ isFollow: true })
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  async setFollow() {
    try {
      const identity = getToken();
      const response = await api.post('/social/follow', { usernameId: traderId },
        { headers: { session: identity } })
      if (response.data.result.traders.length > 0
        && response.data.result.traders[0].isFollowing === true) {
        this.setState({ isFollow: true })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async setUnfollow() {
    try {
      const identity = getToken();
      const response = await api.delete('/social/follow',
        { headers: { session: identity } })
      if (response.data.result.traders.length > 0
        && response.data.result.traders[0].isFollowing === true) {
        this.setState({ isFollow: false })
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  async handleChange() {
    try {
      const { isFollow } = this.state;
      if (!isFollow) {
        await this.setFollow();
        this.setState({ isFollow: true });
      }
      else {
        await this.setUnfollow();
        this.setState({ isFollow: false });
      }
      isFollow === true
        ? this.ToggleWarningUnfollow()
        : this.ToggleWarningFollow();
    } catch (e) {
      console.log(e);
    }

  }
  async verifyAPI() {
    const identity = getToken();
    try {
      if (identity) {
        const response = await api.get('/username/integration', { headers: { session: identity } })
        if (Object.keys(response.data.result).length === 0)
          this.props.history.push('/apiKey')
        await this.isFollowing();
      }
    } catch (e) {
      console.log("Error", e);
      this.props.history.push('/apikey');
    }
  }
  async componentDidMount() {
    await this.verifyAPI();
  }
  confirmChoice() {
    const { isFollow } = this.state;
    isFollow === true
      ? this.ToggleWarningUnfollow()
      : this.ToggleWarningFollow();
  }

  ToggleWarningUnfollow() {
    this.setState({ warningUnfollowOpen: !this.state.warningUnfollowOpen });
  }

  ToggleWarningFollow() {
    this.setState({ warningFollowOpen: !this.state.warningFollowOpen });
  }

  showFollow() {
    const { warningUnfollowOpen } = this.state;
    return (
      <div>
        <Modal show={warningUnfollowOpen}>
          <div style={{ textAlign: 'center' }}>
            <div className="svg-box">
              <svg className="circular yellow-stroke">
                <circle
                  className="path"
                  cx="75"
                  cy="75"
                  r="50"
                  fill="none"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                />
              </svg>
              <svg className="alert-sign yellow-stroke">
                <g transform="matrix(1,0,0,1,-615.516,-257.346)">
                  <g transform="matrix(0.56541,-0.56541,0.56541,0.56541,93.7153,495.69)">
                    <path
                      className="line"
                      d="M634.087,300.805L673.361,261.53"
                      fill="none"
                    />
                  </g>
                  <g transform="matrix(2.27612,-2.46519e-32,0,2.27612,-792.339,-404.147)">
                    <circle
                      className="dot"
                      cx="621.52"
                      cy="316.126"
                      r="1.318"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h2>Você está prestes a parar de seguir a Terranova</h2>
            <p>Você não replicará mais as operações</p>

            <button
              type="buton"
              className="btn modal-btn btn-danger mr-2"
              onClick={this.handleChange}
            >
              Parar de Seguir
            </button>

            <button
              className="btn modal-btn btn-secondary ml-2"
              onClick={this.ToggleWarningUnfollow}
            >
              Fechar
            </button>
          </div>
        </Modal>

        <div className="animation-ctn">
          <div className="icon icon--order-success svg">
            <div className="svg-box">
              <svg className="circular green-stroke">
                <circle
                  className="path"
                  cx="75"
                  cy="75"
                  r="50"
                  fill="none"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                />
              </svg>
              <svg className="checkmark green-stroke">
                <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M616.306,283.025L634.087,300.805L673.361,261.53"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <h3 className="followTitle">Seguindo</h3>
        <p>Ficamos felizes de ter você do nosso lado!</p>
      </div>
    );
  }

  showUnfollow() {
    const { warningFollowOpen } = this.state;
    return (
      <div>
        <Modal show={warningFollowOpen}>
          <div style={{ textAlign: 'center' }}>
            <div className="svg-box">
              <svg className="circular yellow-stroke">
                <circle
                  className="path"
                  cx="75"
                  cy="75"
                  r="50"
                  fill="none"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                />
              </svg>
              <svg className="alert-sign yellow-stroke">
                <g transform="matrix(1,0,0,1,-615.516,-257.346)">
                  <g transform="matrix(0.56541,-0.56541,0.56541,0.56541,93.7153,495.69)">
                    <path
                      className="line"
                      d="M634.087,300.805L673.361,261.53"
                      fill="none"
                    />
                  </g>
                  <g transform="matrix(2.27612,-2.46519e-32,0,2.27612,-792.339,-404.147)">
                    <circle
                      className="dot"
                      cx="621.52"
                      cy="316.126"
                      r="1.318"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h2>Você está prestes a seguir a Terranova</h2>
            <p>Todas as novas operações serão copiadas para você</p>

            <button
              type="buton"
              className="btn modal-btn btn-success mr-2"
              onClick={this.handleChange}
            >
              Seguir
            </button>

            <button
              className="btn modal-btn btn-secondary ml-2"
              onClick={this.ToggleWarningFollow}
            >
              Fechar
            </button>
          </div>
        </Modal>

        <div className="svg-box">
          <svg className="circular red-stroke">
            <circle
              className="path"
              cx="75"
              cy="75"
              r="50"
              fill="none"
              strokeWidth="5"
              strokeMiterlimit="10"
            />
          </svg>
          <svg className="cross red-stroke">
            <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
              <path
                className="first-line"
                d="M634.087,300.805L673.361,261.53"
                fill="none"
              />
            </g>
            <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
              <path
                className="second-line"
                d="M634.087,300.805L673.361,261.53"
              />
            </g>
          </svg>
        </div>
        <h3 className="unfollowTitle">Não seguindo</h3>
        <p>Ficamos tristes de não ter você do nosso lado!</p>
        <p>"Tome cuidado, é perigoso ir sozinho"</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="row justify-content-left align-items-center">
          <div className="col col-sm-8 offset-sm-2 col-md-8 col-lg-4">
            <div className="card text-center">
              <article className="card-body">
                <div className="card-title">
                  {this.state.isFollow === true
                    ? this.showFollow()
                    : this.showUnfollow()}
                  {console.log(
                    this.state.warningUnfollowOpen &&
                    this.state.warningFollowOpen
                  )}
                </div>

                <div className="card-text mt-4">
                  <label>
                    <input
                      ref="switch"
                      checked={this.state.isFollow}
                      onChange={this.confirmChoice}
                      className="switch"
                      type="checkbox"
                    />
                    <div>
                      <div></div>
                    </div>
                  </label>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
