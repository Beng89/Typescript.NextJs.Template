import { CQEvent, CommandHandler, CQResult, createEvent } from "scq"

export type MessageSent = CQEvent<"MessageSent"> & SendMessage
export type SendMessage = {
  message: string
};

CommandHandler<SendMessage>("SendMessage", req => {

  console.info(`Received message send request: '${req.message}'.`)

  const tested = createEvent<MessageSent>("MessageSent", req)

  return CQResult.fromEvents([tested])
})
