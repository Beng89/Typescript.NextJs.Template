import { invokeLocalCommand } from "scq";
import { withPubSub } from "./WithPubSub";

const dispatch = invokeLocalCommand({
  canStore: () => false,

  pubsub: withPubSub()
})

export function withCommands() {

  return dispatch
}
