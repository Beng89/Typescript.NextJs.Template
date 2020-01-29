import { invokeLocalQuery } from "scq";
import { withPubSub } from "./WithPubSub";

const dispatch = invokeLocalQuery({
  canStore: () => false,

  pubsub: withPubSub()
})

export function withQueries() {

  return dispatch
}
