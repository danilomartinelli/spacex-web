import Template from 'components/Template'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Launch from 'components/Launch'

export default function LaunchPage() {
  return (
    <Template
      header={<Header title="SpaceX" />}
      footer={<Footer text="Danilo Martinelli" />}
    >
      <Launch />
    </Template>
  )
}
