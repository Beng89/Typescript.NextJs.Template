import React from 'react'
import { NextPage } from 'next'
import { DefaultPageLayout } from '../layouts/default/Page'
import "./index.css"
import { Header, Container, Divider, List } from 'semantic-ui-react'


const folders = [
  {
    name: "components",
    description: "Contains shared components for your application."
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

const Home: NextPage<{}> = () => (
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
      </Container>
    </DefaultPageLayout>
  </>
)

export default Home
