import Template from 'components/Template'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Main from 'components/Main'

export default function Home() {
  return (
    <Template
      header={<Header title="SpaceX" />}
      footer={<Footer text="Danilo Martinelli" />}
    >
      <Main />
    </Template>
  )
}
