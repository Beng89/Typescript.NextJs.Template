import * as React from "react"

type Props = {

}

export const DefaultPageBody: React.StatelessComponent<Props> = props => (
  <main style={{ minHeight: "500px", paddingTop: "2em" }}>
    {props.children}
  </main>
)
