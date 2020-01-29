import { List } from "semantic-ui-react"

type Props = {
  messages: string[]
}
export const MessageList: React.FC<Props> = props => {

  const { messages } = props

  return (
    <List>
      {messages.map((message, i) => (
        <List.Item key={i}>{message}</List.Item>
      ))}
    </List>
  )
}
