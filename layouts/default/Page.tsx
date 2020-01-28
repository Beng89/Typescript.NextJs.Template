import { DefaultPageHeader } from "./PageHeader"
import { DefaultPageBody } from "./PageBody"
import { DefaultPageFooter } from "./PageFooter"
import { NextPage } from "next"
import Head from "next/head"
import "./Page.css"

type Props = {

}

export const DefaultPageLayout: NextPage<Props> = props => {
  const { children } = props

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />

        <title>Tutorial!</title>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>
      <div>
        <DefaultPageHeader key="header" />
        <DefaultPageBody key="body">
          <main>
            {children}
          </main>
        </DefaultPageBody>
        <DefaultPageFooter key="footer" />
      </div>
    </>
  )
}
