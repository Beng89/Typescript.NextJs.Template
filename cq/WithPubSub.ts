import { createLocalPubsub } from "scq";

const pubsub = createLocalPubsub({

})

export function withPubSub() {

  return pubsub
}
