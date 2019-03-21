import React, { Component } from "react";
import Clock from "react-live-clock";
import { Grid, Segment } from "semantic-ui-react";
import "./App.css";
import _img from "./loading.gif";
import HeaderComponent from "component/HeaderComponent";
import ResultComponent from "component/ResultComponent";
import FooterComponent from "component/FooterComponent";

const LoadingComponent = () => <div className="loading"><img src={_img} alt="Loading" /></div>;

export default class AppContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          Editor: null,
          submit: null,
          dark:   false
      };
    }

    componentDidMount() {
        import("container/EditorContainer").then(({ default: Editor }) => {
            this.setState({ Editor });
        });
    }

    onSubmit = param => {
        this.setState(Object.assign({}, { submit: param }));
    };

    onDark = param => {
        this.setState(Object.assign({}, { dark: param }));
    };

    render() {
        const { Editor, dark } = this.state;

        return (
            <div className="main-page">
              <header className="headerp">
                <HeaderComponent/>
                <div className="clock-area">
                  <i aria-hidden="true" className="clock outline icon" />&nbsp;
                  <Clock ticking format={"hh:mm:ssa"} />
                </div>
              </header>
              <main className={ dark ? "container dark" : "container" }>
                <Grid container centered columns={1}>
                  <Grid.Column>
                    <section className="editor-section">
                      <Segment raised>
                        {
                            Editor ?
                            <Editor
                              onSubmit={this.onSubmit}
                              onDark={this.onDark}
                            />:
                            <LoadingComponent />
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
