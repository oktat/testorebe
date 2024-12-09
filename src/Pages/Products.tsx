import { useEffect, useState } from "react"

interface Product {
  id: number
  title: string
  price: number
  rating: {
    count: number
  }
}

export const Products = () => {
  const [productList, setProductList] = useState<Product[]>([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProductList(data))
  })
  return (
    <div>
      <h1>Termékek</h1>
      {productList.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Termék</th>
              <th>Ár</th>
              <th>Leírás</th>
            </tr>
          </thead>
          <tbody>
            {productList.map(product => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.rating.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nincs termék</p>
      )}
    </div>
  )
}
