import * as React from "react"
import Link from "next/link"
import { Menu, Container, Icon, Header, Image } from "semantic-ui-react";
import "./PageHeader.css"

type Props = {

}

export const DefaultPageHeader: React.StatelessComponent<Props> = props => (
  <Menu as="header" inverted attached borderless stackable size="large">
    <Container>

      <Menu.Item>
        <Link href="/">
          <a>
            <Header inverted>
              <Image circular src="/images/logo.svg" style={{ marginTop: 0 }} />
              Welcome!
          </Header>
          </a>
        </Link>
      </Menu.Item>


      <Menu.Item link position="right" className="capped">
        <a href="#">
          <Icon name="comments" />
          Some call to action
        </a>
      </Menu.Item>
    </Container>
  </Menu>
)
