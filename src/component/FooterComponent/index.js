// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getStatus } from 'action/statusAction';
import { Grid, Segment, Icon } from 'semantic-ui-react';
import { NotificationManager } from 'react-notifications';
import Styles from './index.module.css';

class FooterComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'question',
      color: 'yellow',
      label: 'Loading'
    };
  }

  componentWillMount() {
    window.addEventListener('online', () => this.checkStatus());
    window.addEventListener('offline', () => this.checkStatus());
    this.checkStatus();
  }

  componentWillReceiveProps(props) {
    if (props.service.hasOwnProperty('status')) {
      if (props.service.status === true) {
        this.setState({ icon: 'check', color: 'green', label: 'Ok' });
      } else {
        this.setState({ icon: 'close', color: 'red', label: 'Failed' });
      }
    }
  }

  checkStatus = () => {
    if (navigator.onLine) {
      this.props.getStatus();
    } else {
      NotificationManager.warning('Check your internet connection', 'Network Unavailable');
    }
  };

  onReload = () => {
    this.checkStatus();
    this.setState({ icon: 'question', color: 'yellow', label: 'Loading' });
  };

  render() {
    const { icon, color, label } = this.state;

    return (
      <div className={Styles['footer-content']}>
        <div className={Styles['copyright']}>
          <Segment basic>
            &copy; <span className="lg-only">All rights reserved by</span>
            &nbsp; <a href="https://github.com/Tech-Mantra" target="_blank" rel="noopener noreferrer">Tech-Mantra</a>,
            &nbsp; <a href='https://github.com/BytesClub' target="_blank" rel="noopener noreferrer">Bytes Club</a>
          </Segment>
        </div>
        <div className={Styles['footer-cols']}>
          <Grid columns={1} centered relaxed>
            <Grid.Column>
              <Segment basic textAlign="center">
                <div className={Styles['service-status']} onClick={this.onReload}>
                  <Icon
                    name={icon}
                    color={color}
                    aria-label={label}
                    aria-hidden={label}
                  />
                  Service Status
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    service: state.service
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStatus: () => dispatch(getStatus())
  };
};

export { FooterComponent as PureFooterComponent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterComponent);
