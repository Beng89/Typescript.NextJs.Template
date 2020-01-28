import * as React from "react"
import { Segment, Container, Grid, Header, Image, Icon, List } from "semantic-ui-react";

type Props = {

}

export const DefaultPageFooter: React.StatelessComponent<Props> = props => (
  <Segment as="footer" inverted vertical className="footer">
    <Container>
      <Grid stackable inverted divided className="equal width">
        <Grid.Row>
          <Grid.Column>
            <Header as="h4" inverted>Join us on Discord</Header>
            <Image size="medium" src="/images/DiscordLogo.png" />
            <Segment basic inverted vertical>
              <p>
                If you need help or want to take part in our discussions, consider joining our discord server.
              </p>
              <p>
                It is open to everyone
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4" inverted>Donate</Header>
            <Segment basic vertical clearing>
              <Header size="huge" inverted floated="left">
                <Icon size="large" name="paypal" />
              </Header>
              <Header size="huge" inverted floated="left">
                <p>
                  <em>PayPal</em>
                </p>
              </Header>
            </Segment>
            <Segment basic inverted vertical>
              <p>
                Some call to action here
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4" inverted>Links</Header>
            <List inverted link>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <p>&copy; 2020 somebody</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)
