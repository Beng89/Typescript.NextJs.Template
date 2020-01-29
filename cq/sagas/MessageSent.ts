
import { withPubSub } from "../WithPubSub"
import { MessageSent } from "../commands/SendMessage"

withPubSub().subscribeTo<MessageSent>("MessageSent", e => {

  console.info("A message was sent:", e.message);
})
