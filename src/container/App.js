import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import "./App.css";
import FooterComponent from "component/FooterComponent";

export default class AppContainer extends Component {
    render() {
        return (
            <div className="main-page">
              <header className="header">
                Text
              </header>
              <main className="container">
                <Grid container centered columns={2}>
                  <Grid.Column>
                    <section className="editor-section">
                      <Segment raised>
                        Text
                      </Segment>
                    </section>
                    <section className="result-section">
                      <Segment piled>
                        Text
                      </Segment>
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
