interface IQuestions {
  id: number
  question: string
  answer: string
}

export const questions: IQuestions[] = [
  {
    id: 1,
    question: "How do I place an order?",
    answer: "To place an order, simply browse our online store, select the products you wish to purchase, and add them to            your cart. Then, follow the payment and shipping instructions during the checkout process.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods, including credit cards, PayPal, and bank transfers. You can choose the most convenient method during checkout.",
  },
  {
    id: 3,
    question: "What is your return policy?",
    answer: "Our return policy allows returns within 30 days from the date of purchase, provided the products are in their original, unused condition. For more information, please refer to our Return Policy page.",
  },
  {
    id: 4,
    question: "Do you offer free shipping?",
    answer: "Yes, we offer free shipping for orders above a certain value. Detailed information about our shipping options is available during the checkout process.",
  },
  {
    id: 5,
    question: "How long will it take to receive my order?",
    answer: "The delivery time may vary depending on your location and the shipping method chosen. We typically dispatch orders within 2 business days, and you can track your shipment using the provided tracking information.",
  },
  {
    id: 6,
    question: "What if I receive a damaged or incorrect product?",
    answer: "If you receive a damaged or incorrect item, please contact our customer support team immediately. We will arrange for a replacement or a refund as per our return policy.",
  },
  {
    id: 7,
    question: "Can I cancel or modify my order after it's been placed?",
    answer: "If you need to cancel or modify your order, please contact us as soon as possible. We will do our best to accommodate your request, but it's subject to order processing status.",
  },
  {
    id: 8,
    question: "Are your products cruelty-free and vegan-friendly?",
    answer: "If you need to cancel or modify your order, please contact us as soon as possible. We will do our best to accommodate your request, but it's subject to order processing status.",
  }
]
