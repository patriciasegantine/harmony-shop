import beautiful from "../../assets/img/beautiful.png";
import cosmetology from "../../assets/img/cosmetology.png";
import skincare from "../../assets/img/skincare.png";
import holistic from "../../assets/img/holistic.png";

export interface CourseInterface {
  id: string
  name: string
  duration: string
  advertisement: string
  value: number
  description: string
  img: string
}

export const coursesInfo: CourseInterface[] = [
  {
    id: 'beautyAtHome',
    name: 'Beauty at Home',
    duration: '1 weeks',
    advertisement: 'Discover how to boost your self-esteem and enhance your natural beauty in the comfort of your own home. This course is a journey of self-care that will help you master organic and sustainable beauty practices. By participating, you\'ll open yourself up to a unique experience of self-expression and well-being, where beauty blossoms from within.',
    description: "Awaken your true beauty! Learn organic and sustainable beauty practices that enhance your natural appearance. Join us on this journey of self-care and transform your beauty routine into a wellness ritual.",
    value: 0,
    img: beautiful
  },
  {
    id: 'cosmetology',
    name: 'Cosmetology',
    duration: '2 weeks',
    advertisement: 'Explore the secrets of cosmetology that celebrate the uniqueness of each individual. In this course, you\'ll uncover the mysteries behind natural products and advanced beauty techniques. By participating, you\'ll be on the path to becoming a more authentic and confident version of yourself, with a sustainable approach to skincare and haircare.',
    value: 0,
    description: ` "Become a cosmetology expert! Explore natural beauty secrets and advanced skincare and haircare techniques. Discover your authenticity and confidence with a sustainable approach to beauty."`,
    img: cosmetology
  },
  {
    id: 'naturalSkinCareEssentials',
    name: 'Natural Skin Care Essentials',
    duration: '1 weeks',
    advertisement: 'Discover how to boost your self-esteem and enhance your natural beauty in the comfort of your own home. This course is a journey of self-care that will help you master organic and sustainable beauty practices. By participating, you\'ll open yourself up to a unique experience of self-expression and well-being, where beauty blossoms from within.',
    description: "Achieve radiant skin! Learn to nurture your skin with natural ingredients. Experience the beauty that comes from healthy and vibrant skin with our course.",
    value: 0,
    img: skincare
  },
  {
    id: 'beautyAtHome',
    name: 'Holistic Wellness and Beauty',
    duration: '1 weeks',
    advertisement: 'Explore the harmonious marriage of beauty and well-being and discover how both can complement each other. This course offers a deep dive into relaxation techniques, aromatherapy, and self-care. By participating, you\'ll open the doors to an inner journey that will result in a radiant appearance and a sense of harmony and balance in your life.',
    value: 0,
    description: "Discover the harmony between beauty and well-being! Dive into relaxation techniques, aromatherapy, and self-care. Attain a radiant appearance and inner balance with our holistic course.",
    img: holistic
  }
]
