import { List } from "semantic-ui-react"
import { useState, useEffect } from "react"
import { Pubsub } from "scq"
import { MessageSent } from "../cq/commands/SendMessage"
import { MessageList } from "./MessageList"

function withMessages(pubsub: Pubsub) {
  const [messages, setMessages] = useState<string[]>([])
  useEffect(() => {

    const subscription = pubsub.subscribeTo<MessageSent>("MessageSent", ({ message }) => {

      setMessages(messages.concat(message))
    })

    return () => subscription.unsubscribe()
  }, [pubsub, messages])

  return messages
}

type Props = {
  pubsub: Pubsub
}
export const ConnectedMessageList: React.FC<Props> = props => {

  const { pubsub } = props

  const messages = withMessages(pubsub);

  return (
    <MessageList messages={messages} />
  )
}
