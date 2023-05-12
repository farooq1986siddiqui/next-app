import Link from "next/link"
import Nav from "../../../components/navbar"
export default function Products () {
    return(
        <div>
        <Nav/> 
      <h1>LIST OF ALL PRODUCTS HERE</h1>
      <ol>
        <li><Link href="Product-list/product">Camera</Link></li>
        <li><Link href="Product-list/product">Mobile</Link></li>
        <li><Link href="Product-list/product">Purse</Link></li>
        <li><Link href="Product-list/product">Laptop</Link></li>
      </ol>
        </div>
    )
}