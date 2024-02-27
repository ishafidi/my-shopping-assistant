import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { wrapper, Provider } from '@my-shopping-assistant/store'

if (process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === '1') {
  require('@my-shopping-assistant/api-mocks')
}

const DPCNextRtkQStartPage = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <>
      <Head>
        <title>DPC Next Basic Application</title>
      </Head>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </>
  )
}
//export default wrapper.withRedux(DPCNextRtkQStartPage)
export default DPCNextRtkQStartPage
