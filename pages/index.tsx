import React, { useState } from 'react'
import { NextPage } from 'next'
import { DefaultPageLayout } from '../layouts/default/Page'
import "./index.css"
import { Header, Container, Divider, List, Input, Segment } from 'semantic-ui-react'
import { withCommands } from '../cq/WithCommands'
import { SendMessage } from '../cq/commands/SendMessage'
import { withPubSub } from '../cq/WithPubSub'
import { ConnectedMessageList } from '../components/ConnectedMessageList'
import "../cq"

const folders = [
  {
    name: "components",
    description: "Contains shared components for your application."
  },
  {
    name: "cq",
    description: "Contains command-query related things."
  },
  {
    name: "cq/commands",
    description: "Command handlers and definitions"
  },
  {
    name: "cq/sagas",
    description: "Sagas for handling events"
  },
  {
    name: "cq/queries",
    description: "Query handlers and definitions"
  },
  {
    name: "hooks",
    description: "Contains hooks that can be used by your other components."
  },
  {
    name: "layouts",
    description: "Contains the layouts for your application."
  },
  {
    name: "models",
    description: "Your application's models."
  },
  {
    name: "pages",
    description: "Your application's pages"
  },
  {
    name: "public",
    description: "Your public content that you don't want to include in your application bundle. This includes images and stylesheets."
  }
]

type FolderItemProps = { folder: typeof folders[0] }
const FolderItem: React.FC<FolderItemProps> = props => {
  const { folder } = props

  return (
    <List.Item>
      <List.Icon name="folder" />
      <List.Content>
        <List.Header>{folder.name}</List.Header>
        <List.Description>{folder.description}</List.Description>
      </List.Content>
    </List.Item>
  )
}

const Home: NextPage<{}> = () => {

  const dispatch = withCommands()
  const pubsub = withPubSub()

  const [message, setMessage] = useState("")

  return (
    <>
      <DefaultPageLayout>

        <Container>
          <Header as="h1">Welcome to the template!</Header>
          This page contains information on how to work with this template.
          <Divider />

          <Header>The Folders</Header>
          The folders are arranged so you can easily add models, hooks and components.

          <List>
            {folders.map(folder => (
              <FolderItem key={folder.name} folder={folder} />
            ))}
          </List>

          <Divider />

          <Header content="Message Demo" />
          <Input type="text"
            placeholder="Enter a message"
            value={message}
            onChange={(_, { value }) => {
              setMessage(value);
            }}

            action={{
              disabled: message?.length === 0 ?? false,
              basic: true,
              primary: true,
              icon: "send",
              content: "Send Message",
              onClick() {

                dispatch<SendMessage>("SendMessage", {
                  message
                })
              }
            }}
          />

          <Segment>
            <ConnectedMessageList pubsub={pubsub} />
          </Segment>
          <Divider hidden />
        </Container>
      </DefaultPageLayout>
    </>
  )
}

export default Home
