import React, { Component } from 'react';
import Modal from '../common/ui/modal/modal';
import '../../vendor/css/apiKey/apiKey.css';
import { Link } from 'react-router-dom';

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
              Olá, a Criptomaníacos ainda está em fase de testes, não
              responsabilizamos por qualquer "bug", erro, falha na operação da
              plataforma e sua interação com APIs. Ao usar nossa plataforma,
              você aceita que está na condição em que é encontrado, e não há
              nenhuma obrigação de nossa parte de entregar o produto acabado ou
              suas características.
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
                  Sua chave de API é armazenada em forma criptografada e ninguém
                  pode acessá-la. Só é possível fazer saques com a autorização
                  do proprietário da conta, mas a Criptomaníacos nunca
                  solicitará essa autorização. Perguntas ou Sugestões:{' '}
                  <strong>contato@criptomaniacos.io</strong>
                </div>
                <div className="tutorial-opener">
                  <i className="fa fa-question-circle" aria-hidden="true" />
                </div>
                <form className="contactForm">
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <div className="form-group">
                        <input
                          id="alias"
                          type="text"
                          name="name"
                          component="input"
                          className="form-control"
                          placeholder="Ex: Connection-1"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="apiKey"
                          component="input"
                          className="form-control"
                          placeholder="API KEY"
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
                            Eu aceito os{' '}
                            <a href={'#modal'} onClick={this.toggleTermsModal}>
                              termos de uso e condições
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-12 text-center">
                      <Link to="/followtrader">
                        <button
                          data-tut="reactour_submit"
                          type="submit"
                          className="btn modal-btn btn-success"
                        >
                          Save
                        </button>
                      </Link>
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
