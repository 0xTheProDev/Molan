import React, { Component } from "react";
import Clock from 'react-live-clock';
import { Grid, Segment } from "semantic-ui-react";
import "./App.css";
import HeaderComponent from 'component/HeaderComponent';
import ResultComponent from "component/ResultComponent";
import FooterComponent from "component/FooterComponent";

export default class AppContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          submit: null,
          dark: false
      };
    }

    onSubmit = (param) => {
        this.setState(Object.assign({}, { submit: param }));
    };

    onDark = (param) => {
        this.setState(Object.assign({}, { dark: param }));
    };

    render() {
        const { dark } = this.state;

        return (
            <div className="main-page">
              <header className="headerp">
                <HeaderComponent/>
                <div className='clock-area'>
                  <i aria-hidden='true' className='clock outline icon' />&nbsp;
                  <Clock ticking format={'hh:mm:ssa'} />
                </div>
              </header>
              <main className={ dark ? "container dark" : "container" }>
                <Grid container centered columns={1}>
                  <Grid.Column>
                    <section className="editor-section">
                      <Segment raised>
                      {
                          import('container/EditorContainer').then(EditorContainer =>
                                <EditorContainer
                                  onSubmit={this.onSubmit}
                                  onDark={this.onDark}
                                />
                            )
                      }
                      </Segment>
                    </section>
                    <section className="result-section">
                      {
                          this.state.submit === null ||
                          <Segment piled>
                            <ResultComponent
                              submit={this.state.submit}
                              onSubmit={this.onSubmit}
                            />
                          </Segment>
                      }
                    </section>
                  </Grid.Column>
                </Grid>
              </main>
              <footer className="footer">
                <FooterComponent/>
              </footer>
            </div>
        );
    }
}
