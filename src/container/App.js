import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import "./App.css";
import HeaderComponent from 'component/HeaderComponent';
import EditorContainer from 'container/EditorContainer';
import ResultComponent from "component/ResultComponent";
import FooterComponent from "component/FooterComponent";

export default class AppContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          submit: null
      };
    }

    onSubmit = (param) => {
        this.setState({ submit: param });
    };

    render() {
        return (
            <div className="main-page">
              <header className="headerp">
                <HeaderComponent/>
              </header>
              <main className="container">
                <Grid container centered columns={1}>
                  <Grid.Column>
                    <section className="editor-section">
                      <Segment raised>
                        <EditorContainer onSubmit={this.onSubmit}/>
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
