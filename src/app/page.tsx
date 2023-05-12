import Image from 'next/image'
import styles from './page.module.css'
import Card from '../../components/card'
import Nav from '../../components/navbar'

export default function Home() {
  return (
    <div>
      <Nav/>
      <h1>THIS IS HOME PAGE</h1>
      <h1>THIS IS PRODUCT PAGE</h1>
      <h1>THIS IS AMAZON PAGE</h1>
      <h1>THIS IS SHOPIFY PAGE</h1>
      <h1>THIS IS WALLMART PAGE</h1>
      {/* <Card /> */}
      {/* <Card /> */}
    </div>
  )
}
