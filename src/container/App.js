import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import "./App.css";
import HeaderComponent from 'component/HeaderComponent';
import FooterComponent from "component/FooterComponent";
import EditorContainer from 'container/EditorContainer';

export default class AppContainer extends Component {
    render() {
        return (
            <div className="main-page">
              <header className="header">
                <HeaderComponent/>
              </header>
              <main className="container">
                <Grid container centered columns={1}>
                  <Grid.Column>
                    <section className="editor-section">
                      <Segment raised>
                        <EditorContainer/>
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
