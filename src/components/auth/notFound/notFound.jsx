import React from 'react';
import { Link } from 'react-router-dom';

import '../../../vendor/css/followTrader/iconStatus.css';

const NotFound = () => (
  <div>
    <div className="row justify-content-left align-items-center">
      <div className="col col-sm-8 offset-sm-2 col-md-8 col-lg-4">
        <div className="card text-center">
          <article className="card-body">
            <div className="card-title">
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
              <h3 className="unfollowTitle">PAGE NOT FOUND</h3>
              <p>
                <strong>Não encontramos a página buscada :(</strong>
              </p>
            </div>

            <div className="card-text mt-4">
              <Link to="/">
                <button className="btn btn-outline-success">Voltar</button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
