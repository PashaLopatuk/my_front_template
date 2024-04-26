import type {FC, ReactNode} from 'react';

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Layout>
        <main>{children}</main>
      </Layout>
    </>
  )
}

export default Layout