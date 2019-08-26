// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Clock from 'react-live-clock';
import { Grid, Segment } from 'semantic-ui-react';
import Styles from './App.module.css';
import _img from './loading.gif';
import HeaderComponent from 'component/HeaderComponent';
import ResultComponent from 'component/ResultComponent';
import FooterComponent from 'component/FooterComponent';

const LoadingComponent = () => <div className={Styles['loading']}><img src={_img} alt="Loading Code Editor" /></div>;

class AppContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Editor: null,
      submit: null,
      dark: false
    };
  }

  componentDidMount() {
    import('container/EditorContainer').then(({ default: Editor }) => {
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
      <div className={Styles['main-page']}>
        <header className={Styles['headerp']}>
          <HeaderComponent />
          <div className={Styles['clock-area']}>
            <i aria-hidden="true" className="clock outline icon" />&nbsp;
            <Clock ticking format={"hh:mm:ssa"} />
          </div>
        </header>
        <main className={Styles[classNames('container', { 'dark': dark })]}>
          <Grid container centered columns={1}>
            <Grid.Column>
              <section className={Styles['editor-section']}>
                <Segment raised>
                  {
                    Editor ?
                      <Editor
                        onSubmit={this.onSubmit}
                        onDark={this.onDark}
                      /> :
                      <LoadingComponent />
                  }
                </Segment>
              </section>
              <section className={Styles['result-section']}>
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
        <footer className={Styles['footer']}>
          <FooterComponent />
        </footer>
      </div>
    );
  }
}

export default AppContainer;
