import React, { Component } from 'react';
import Modal from '../common/ui/modal/modal';

export default class ApiKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termsModalOpen: false,
    };
    this.toggleTermsModal = this.toggleTermsModal.bind(this);
  }

  toggleTermsModal() {
    const { termsModalOpen } = this.state;
    this.setState({ termsModalOpen: !termsModalOpen });
  }

  render() {
    const { termsModalOpen } = this.state;
    return (
      <div>
        <Modal show={termsModalOpen}>
          <div style={{ textAlign: 'center' }}>
            <p>
              Hi, Criptomaníacos is still in the testing phase, we are not
              responsible for any bug, error, failure in the operation of the
              platform and its interaction with APIs. By using our platform you
              accept that it is in the condition in which it is found, and there
              is no obligation on our part to deliver the finished product or
              its features.
            </p>
            <button
              className="btn modal-btn btn-success"
              onClick={this.toggleTermsModal}
            >
              Fechar
            </button>
          </div>
        </Modal>

        <div className="row justify-content-left align-items-center">
          <div className="col col-sm-8 offset-sm-2 col-md-8 col-lg-4">
            <div className="card">
              <article className="card-body">
                <div className="card-title text-center">
                  <h3>Exchange API KEY</h3>
                </div>
                <div
                  className="alert alert-danger"
                  data-tut="reactour_disclaimer"
                >
                  Your API key is stored in encrypted form and no one can access
                  it. It's only possible to make withdrawals with authorization
                  of the account owner, but Criptomaníacos will never ask this
                  authorization. Questions and suggestions:{' '}
                  <strong>contato@criptomaniacos.io</strong>
                </div>
                <form className="contactForm">
                  <div className="tutorial-opener">
                    <i className="fa fa-question-circle" aria-hidden="true" />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="password"
                          name="secretKey"
                          component="input"
                          className="form-control"
                          placeholder="API KEY SECRET"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="secretKey"
                          component="input"
                          className="form-control"
                          placeholder="API KEY SECRET"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="secretKey"
                          component="input"
                          className="form-control"
                          placeholder="API KEY SECRET"
                        />
                      </div>
                      <div className="form-group">
                        <div className="check">
                          <label>
                            <input
                              id={'useTerms'}
                              name="useTerms"
                              type="checkbox"
                            />
                            I agree to the{' '}
                            <a href="#" onClick={this.toggleTermsModal}>
                              user terms and conditions
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-12 text-center">
                      <button
                        data-tut="reactour_submit"
                        type="submit"
                        className="btn modal-btn btn-success"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
