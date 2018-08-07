import React, { Component } from "react";
import { Grid, Segment, Divider } from "semantic-ui-react";
import "./index.css";

export default class FooterComponent extends Component {
    render() {
        return (
            <div className="footer-content">
                <div className="copyright">
                    <Segment basic>
                        &copy; All rights reserved by <a href="https://github.com/Tech-Mantra" target="_blank" rel="noopener noreferrer">Tech-Mantra</a>
                    </Segment>
                </div>
                <div className="footer-cols">
                    <Grid columns={3} relaxed>
                        <Grid.Column>
                          <Segment basic>About</Segment>
                        </Grid.Column>
                        <Divider vertical hidden/>
                        <Grid.Column>
                          <Segment basic>Privacy Policy</Segment>
                        </Grid.Column>
                        <Divider vertical hidden/>
                        <Grid.Column>
                          <Segment basic>Terms of Usage</Segment>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}
