import productOne from '../../assets/img/products/product-01.png'
import productTwo from '../../assets/img/products/product-02.png'
import productThree from '../../assets/img/products/product-03.png'
import productFour from '../../assets/img/products/product-04.png'
import productFive from '../../assets/img/products/product-05.png'
import productSix from '../../assets/img/products/product-06.png'
import productSeven from '../../assets/img/products/product-07.png'

// TODO: remove file

export interface IProductsMockList {
  id: number
  name: string
  bestSeller: boolean
  section: 'Body' | 'Face' | null
  price: number
  img: string
  quantity: number
  description: string
  productInformation: string
  review: string[]
}

export const productsMockList: IProductsMockList[] = [
  {
    id: 1,
    name: 'Organic Vitamin C Anti-Aging Serum',
    bestSeller: true,
    section: "Face",
    price: 15,
    img: productOne,
    quantity: 10,
    description: 'Reveal your natural radiance with our organic vitamin C anti-aging serum',
    productInformation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    review: []
  },
  {
    id: 2,
    name: 'Organic Chamomile Soap',
    bestSeller: true,
    section: "Body",
    price: 10,
    img: productTwo,
    quantity: 1,
    description: 'Our organic chamomile soap is a gentle and soothing cleanser for your skin',
    productInformation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    review: []
  },
  {
    id: 3,
    name: 'Organic Aloe Vera Serum',
    bestSeller: true,
    section: "Face",
    price: 25,
    img: productThree,
    quantity: 10,
    description: 'Soothes and hydrates the skin, providing relief from irritation and sunburn',
    productInformation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    review: []
  },
  {
    id: 4,
    name: 'Product Five',
    bestSeller: false,
    section: "Body",
    price: 5,
    img: productFour,
    quantity: 3,
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    productInformation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    review: []
  },
  {
    id: 5,
    name: 'Product Five',
    bestSeller: false,
    section: "Body",
    price: 10,
    img: productFive,
    quantity: 0,
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    productInformation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    review: []
  },
  {
    id: 6,
    name: 'Product Six',
    section: "Body",
    bestSeller: false,
    price: 20,
    img: productSix,
    quantity: 5,
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    productInformation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    review: []
  },
  {
    id: 7,
    name: 'Product Seven',
    bestSeller: false,
    section: "Body",
    price: 20,
    img: productSeven,
    quantity: 10,
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    productInformation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rerum, sapiente. Aliquam facere quaerat ut? Eum molestias nisi tempora vero?',
    review: []
  },

]
