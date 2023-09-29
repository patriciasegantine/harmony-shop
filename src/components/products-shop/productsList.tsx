import productOne from '../../assets/img/products/product-01.png'
import productTwo from '../../assets/img/products/product-02.png'
import productThree from '../../assets/img/products/product-03.png'
import productFour from '../../assets/img/products/product-04.png'
import productFive from '../../assets/img/products/product-05.png'
import productSix from '../../assets/img/products/product-06.png'
import productSeven from '../../assets/img/products/product-07.png'

interface IProductsList {
  id: number
  name: string
  section: 'Body' | 'Face' | 'Decoration'
  value: number
  img: string
  quantity: number
}

export const productList: IProductsList[] = [
  {
    id: 1,
    name: 'Product One',
    section: "Body",
    value: 20,
    img: productOne,
    quantity: 10
  },
  {
    id: 2,
    name: 'Product Two',
    section: "Face",
    value: 20,
    img: productTwo,
    quantity: 1
  },
  {
    id: 3,
    name: 'Product For',
    section: "Face",
    value: 20,
    img: productThree,
    quantity: 0
  },
  {
    id: 4,
    name: 'Product Five',
    section: "Body",
    value: 20,
    img: productFour,
    quantity: 3
  },
  {
    id: 5,
    name: 'Product Five',
    section: "Body",
    value: 20,
    img: productFive,
    quantity: 0
  },
  {
    id: 6,
    name: 'Product Six',
    section: "Body",
    value: 20,
    img: productSix,
    quantity: 5
  },
  {
    id: 7,
    name: 'Product Seven',
    section: "Body",
    value: 20,
    img: productSeven,
    quantity: 10
  },

]
