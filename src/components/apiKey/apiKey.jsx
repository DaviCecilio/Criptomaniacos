import React, { Component } from 'react';
import Tour from 'reactour';

import api from '../../services/api';
import { login } from '../../services/auth';

import Modal from '../common/ui/modal/modal';
import '../../vendor/css/apiKey/apiKey.css';
import '../../vendor/css/apiKey/tutorial.css';

class ApiKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termsModalOpen: false,
      isTourOpen: false,
      imageViewer: false,
    };
    this.toggleTermsModal = this.toggleTermsModal.bind(this);
  }

  state = {
    apiKey: '',
    secretKey: '',
    name: '',
    error: '',
  };

  toggleTermsModal() {
    const { termsModalOpen } = this.state;
    this.setState({ termsModalOpen: !termsModalOpen });
  }

  closeTour = () => {
    this.setState({ isTourOpen: false });
  };

  openTour = () => {
    this.setState({ isTourOpen: true });
  };

  handleIntegration = async e => {
    e.preventDefault();
    const { apiKey, secretKey, name } = this.state;
    if (!apiKey || !secretKey || !name) {
      this.setState({ error: 'Preencha todas os campos para continuar!' });
    } else {
      try {
        const response = await api.post(
          '/username/integration',
          {
            apiKey,
            secretKey,
            name,
          },
          {
            headers: {
              session:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZUlkIjo3LCJlbWFpbFZhbGlkYXRpb25Db2RlIjpudWxsLCJlbWFpbCI6ImRhdmltLmNlY2lsaW9AZ21haWwuY29tIiwicGFzc3dvcmQiOiJlMTBhZGMzOTQ5YmE1OWFiYmU1NmUwNTdmMjBmODgzZSIsIm5hbWUiOiJVc2VyMDIiLCJuaWNrbmFtZSI6IlVzZXIwMiIsImlzQWN0aXZlIjp0cnVlLCJpc1RyYWRlciI6ZmFsc2UsIklzQWRtaW5pc3RyYXRvciI6ZmFsc2UsImNyZWF0ZWRBdCI6IjIwMTktMDktMTdUMTE6NTk6MzIuODg3WiIsInVwZGF0ZWRBdCI6IjIwMTktMDktMTdUMTE6NTk6MzIuODg3WiIsInByb2ZpbGVQaWN0dXJlIjpudWxsLCJ1c2VybmFtZUludml0ZWRMaXN0SWQiOjF9.kZCgM1Vpov915pbqoW5X31dsDubK8kVKm4mFu0ydhiw',
            },
          }
        );
        login(response.data.token);
        this.props.history.push('/followtrader');
      } catch (err) {
        this.setState({
          error: 'Houve um problema na integração, contacte o suporte!',
        });
      }
    }
  };

  render() {
    const { termsModalOpen, isTourOpen } = this.state;
    const accentColor = '#184067';
    return (
      <div>
        <Tour
          onRequestClose={this.closeTour}
          steps={tourConfig}
          isOpen={isTourOpen}
          maskClassName="mask"
          className="helper"
          rounded={5}
          accentColor={accentColor}
          onAfterOpen={this.disableBody}
          onBeforeClose={this.enableBody}
        />
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
                <div
                  onClick={() => this.openTour()}
                  className="tutorial-opener"
                >
                  <i className="fa fa-question-circle" aria-hidden="true" />
                </div>
                <form className="contactForm" onSubmit={this.handleIntegration}>
                  {this.state.error && (
                    <p className="warningError">{this.state.error}</p>
                  )}
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
                          data-tut="reactour_addAlias"
                          onChange={e =>
                            this.setState({ name: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="apiKey"
                          component="input"
                          className="form-control"
                          placeholder="API KEY"
                          data-tut="reactour_addApiKey"
                          onChange={e =>
                            this.setState({ apiKey: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="secretKey"
                          component="input"
                          className="form-control"
                          placeholder="API KEY SECRET"
                          data-tut="reactour_addApiSecret"
                          onChange={e =>
                            this.setState({ secretKey: e.target.value })
                          }
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
const tourConfig = [
  {
    selector: '',
    content: () => (
      <div>
        <span>Bem vindo! Vamos começar configurando as chaves de sua API.</span>
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour_addAlias"]',
    content: `Dê um nome de sua preferência para a sua conexão e clique na seta a direita
     para avançar.`,
  },
  {
    selector: '',
    content: ({ goTo }) => (
      <div className="tutorial-div">
        <span>
          Agora preciso saber se você já possui uma API Key cadastrada na
          corretora.
        </span>
        <br />

        <button className="btn btn-danger" onClick={() => goTo(3)}>
          O que é isto?
        </button>
        <button className="btn btn-primary" onClick={() => goTo(4)}>
          Sei o que é, mas não possuo.
        </button>
      </div>
    ),
  },
  {
    selector: '',
    content: ({ goTo }) => (
      <div className="tutorial-div">
        <span>
          {' '}
          As chaves de sua API são a conexão entra a Cryptonita e a sua
          corretora. É por meio dessas chaves que os melhores traders poderão
          efetuar operações em sua conta, enquanto você se preocupa com o que é
          mais importante para você.
        </span>
        <button className="btn btn-primary" onClick={() => goTo(4)}>
          Quero configurar!
        </button>
      </div>
    ),
  },
  {
    selector: '',
    content: ({ goTo }) => (
      <div className="tutorial-div">
        <span>
          {' '}
          Após autenticar-se na Binance, você verá uma sessão idêntica a imagem
          abaixo. Clique em "Enable".
        </span>

        <br />
      </div>
    ),
  },
  {
    selector: '',
    content: ({ goTo }) => (
      <div className="tutorial-div">
        <span>
          {' '}
          Agora dê um nome para sua conexão, pode ser o mesmo nome que você deu
          no passo 1
        </span>
        <br />
      </div>
    ),
  },
  {
    selector: '',
    content: ({ goTo }) => (
      <div className="tutorial-div">
        <span>
          {' '}
          Se estiver com o 2FA habilitado, confirme seu código e verifique seu
          email. Lá encontrará um link para ativar sua API. Se não estiver com o
          2FA hibilitado, prossiga direto para o seu email.
        </span>
        <br />
      </div>
    ),
  },
  {
    selector: '',
    content: ({ goTo }) => (
      <div className="tutorial-div">
        <span>
          {' '}
          Já em seu email, procure por uma mensagem da Binance. Ao entrar clique
          no botão "Confirm Create".
        </span>
        <br />
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour_addApiKey"]',
    content: ({ goTo }) => (
      <div className="tutorial-div">
        <span>
          Você provavelmente foi redirecionado para uma página monstrando as
          configurações de sua API. Selecione e copie o código de sua API como
          mostra a figura e cole-o na plataforma da Cryptonita, no campo
          indicado.
        </span>
        <br />
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour_addApiSecret"]',
    content: ({ goTo }) => (
      <div className="tutorial-div">
        <span>
          {' '}
          Faça o mesmo que fez no passo anterior, mas agora copie e cole o campo
          API Secret, como mostra a imagem.
        </span>
        <br />
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour_submit"]',
    content: ({ goTo }) => (
      <div className="tutorial-div">
        <span>
          {' '}
          Clique no botão indicado e pronto. Você configurou sua chave de API!
          Agora é hora de escolher um trader para seguir. No menu a esquerda
          escolha a opção
          <strong> Trader List </strong> <br />
          Bons lucros para você, nos encontramos na Lua!
        </span>
        <br />
      </div>
    ),
  },
];

export default ApiKey;
