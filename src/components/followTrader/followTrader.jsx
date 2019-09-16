import React, { Component } from 'react';
import '../../vendor/css/followTrader/toggleButton.css';
import '../../vendor/css/followTrader/iconStatus.css';
import Modal from '../common/ui/modal/modal';

export default class ApiKey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollow: true,
      warningUnfollowOpen: false,
      warningFollowOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.ToggleWarningUnfollow = this.ToggleWarningUnfollow.bind(this);
    this.ToggleWarningFollow = this.ToggleWarningFollow.bind(this);
    this.confirmChoice = this.confirmChoice.bind(this);
  }

  handleChange() {
    const { isFollow } = this.state;
    this.setState({ isFollow: !this.state.isFollow });
    isFollow === true
      ? this.ToggleWarningUnfollow()
      : this.ToggleWarningFollow();
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
                  stroke-width="5"
                  stroke-miterlimit="10"
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
            <h2>Você está prestes a parar de seguir a Criptomaníacos</h2>
            <p>Você não replicará mais as operações</p>

            <button
              type="buton"
              className="btn modal-btn btn-danger mr-2"
              onClick={this.handleChange}
            >
              Unfollow
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
                  stroke-width="5"
                  stroke-miterlimit="10"
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
        <h3 className="followTitle">Follow</h3>
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
                  stroke-width="5"
                  stroke-miterlimit="10"
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
            <h2>Você está prestes a seguir a Criptomaníacos</h2>
            <p>Todas as novas operações serão copiadas para você</p>

            <button
              type="buton"
              className="btn modal-btn btn-success mr-2"
              onClick={this.handleChange}
            >
              Follow
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
              stroke-width="5"
              stroke-miterlimit="10"
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
        <h3 className="unfollowTitle">Unfollow</h3>
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
