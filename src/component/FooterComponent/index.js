import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStatus } from 'action/utilAction';
import { Grid, Segment, Icon } from "semantic-ui-react";
import "./index.css";

export class FooterComponent extends Component {
    static propTypes = {
        service:   PropTypes.object.isRequired,
        getStatus: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            icon:  'question',
            color: 'yellow'
        };
    }

    componentWillMount() {
        this.props.getStatus();
    }

    componentWillReceiveProps(props) {
        if (props.service.hasOwnProperty('status')) {
            if (props.service.status === true) {
                this.setState({ icon: 'check', color: 'green' });
            } else {
                this.setState({ icon: 'close', color: 'red' });
            }
        }
    }

    onReload = () => {
        this.props.getStatus();
        this.setState({ icon: 'question', color: 'yellow' });
    };

    render() {
        return (
            <div className="footer-content">
                <div className="copyright">
                    <Segment basic>
                        &copy; All rights reserved by <a href="https://github.com/Tech-Mantra" target="_blank" rel="noopener noreferrer">Tech-Mantra</a>
                    </Segment>
                </div>
                <div className="footer-cols">
                    <Grid columns={1} centered relaxed>
                        <Grid.Column>
                            <Segment basic textAlign='center'>
                                <Icon
                                  name={this.state.icon}
                                  color={this.state.color}
                                  onClick={this.onReload}
                                /> Service Status
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);