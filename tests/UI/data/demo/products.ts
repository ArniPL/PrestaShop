import ProductData from '@data/faker/product';

export default {
  demo_1: new ProductData({
    id: 1,
    name: 'Hummingbird printed t-shirt',
    nameFR: 'T-shirt imprimé colibri',
    reference: 'demo_1',
    category: 'Men',
    summary: 'Regular fit, round neckline, short sleeves. Made of extra long staple pima cotton.',
    description: 'Symbol of lightness and delicacy, the hummingbird evokes curiosity and joy. Studio Design\' '
      + 'PolyFaune collection features classic products with colorful patterns, inspired by the traditional japanese '
      + 'origamis. To wear with a chino or jeans. The sublimation textile printing process provides an exceptional '
      + 'color rendering and a color, guaranteed overtime.',
    retailPrice: 28.68,
    tax: 20,
    price: 23.90,
    finalPrice: 22.94,
    specificPrice: {
      attributes: null,
      discount: 20,
      startingAt: 0,
      reductionType: '',
    },
    quantity: 2400,
    coverImage: 'hummingbird-printed-t-shirt.jpg',
    thumbImage: 'product_mini_2.jpg',
    defaultImage: '2-home_default.jpg',
    attributes: [
      {
        name: 'size',
        values: ['S', 'M', 'L', 'XL'],
      },
      {
        name: 'color',
        values: ['White', 'Black'],
      },
    ],
    packageDimensionWeight: 0.300,
    status: true,
  }),
  demo_3: new ProductData({
    id: 2,
    name: 'Hummingbird printed sweater',
    summary: 'Regular fit, round neckline, long sleeves. 100% cotton, brushed inner side for extra comfort.',
    coverImage: 'brown-bear-printed-sweater.jpg',
    thumbImage: 'brown-bear-printed-sweater.jpg',
    reference: 'demo_3',
    category: 'Women',
    price: 35.90,
    finalPrice: 34.46,
    quantity: 2100,
    status: true,
  }),
  demo_5: new ProductData({
    id: 4,
    name: 'The adventure begins Framed poster',
    reference: 'demo_5',
    category: 'Art',
    coverImage: 'the-adventure-begins-framed-poster.jpg',
    price: 34.8,
    priceTaxExcluded: 29.00,
    quantity: 1500,
    status: true,
  }),
  demo_6: new ProductData({
    id: 3,
    name: 'The best is yet to come\' Framed poster',
    reference: 'demo_6',
    category: 'Art',
    summary: 'Printed on rigid matt paper and smooth surface.',
    coverImage: 'the-best-is-yet-to-come-framed-poster.jpg',
    thumbImage: 'the-best-is-yet-to-come-framed-poster.jpg',
    price: 29.00,
    combinations: [
      {
        name: 'Dimension - 40x60cm',
        price: 34.8,
      },
      {
        name: 'Dimension - 60x90cm',
        price: 58.8,
      },
    ],
    quantity: 1500,
    status: true,
  }),
  demo_7: new ProductData({
    id: 5,
    name: 'Today is a good day Framed poster',
    reference: 'demo_7',
    attributes: [
      {
        name: 'dimension',
        values: ['40x60cm', '60x90cm', '80x120cm'],
      },
    ],
    price: 34.80,
    status: true,
  }),
  demo_8: new ProductData({
    id: 16,
    name: 'Mountain fox notebook',
    reference: 'demo_8',
    category: 'Stationery',
    price: 15.48,
    quantity: 1200,
    status: true,
  }),
  demo_15: new ProductData({
    id: 9,
    name: 'Mountain fox cushion',
    status: true,
  }),
  demo_9: new ProductData({
    id: 17,
    name: 'Brown bear notebook',
    reference: 'demo_9',
    category: 'Stationery',
    price: 15.48,
    quantity: 1200,
    status: true,
    attributes: [
      {
        name: 'Paper Type',
        values: ['Ruled', 'Plain', 'Squared', 'Doted'],
      },
    ],
  }),
  demo_11: new ProductData({
    id: 6,
    name: 'Mug The best is yet to come',
    thumbImage: 'mug-the-best-is-yet-to-come.jpg',
    coverImage: 'mug-the-best-is-yet-to-come.jpg',
    reference: 'demo_11',
    category: 'Home Accessories',
    summary: 'White Ceramic Mug, 325ml.',
    price: 11.90,
    finalPrice: 14.28,
    tax: 20,
    quantity: 300,
    status: true,
  }),
  demo_12: new ProductData({
    id: 7,
    name: 'Mug The adventure begins',
    thumbImage: 'mug-the-adventure-begins.jpg',
    coverImage: 'mug-the-adventure-begins.jpg',
    reference: 'demo_12',
    category: 'Home Accessories',
    summary: 'White Ceramic Mug. 325ml',
    priceTaxExcluded: 11.9,
    price: 14.28,
    tax: 20,
    quantity: 300,
    status: true,
  }),
  demo_13: new ProductData({
    id: 8,
    name: 'Mug Today is a good day',
    coverImage: 'mug-today-is-a-good-day.jpg',
    reference: 'demo_13',
    category: 'Home Accessories',
    price: 14.28,
    quantity: 300,
    status: true,
  }),
  demo_14: new ProductData({
    id: 19,
    name: 'Customizable mug',
    reference: 'demo_14',
    coverImage: 'customizable-mug.jpg',
    thumbImage: 'customizable-mug.jpg',
    defaultImage: '22-home_default.jpg',
    category: 'Home Accessories',
    summary: 'White Ceramic Mug. 325ml',
    price: 16.68,
    priceTaxExcluded: 13.90,
    finalPrice: 16.68,
    quantity: 300,
    status: true,
  }),
  demo_18: new ProductData({
    id: 12,
    name: 'Mountain fox - Vector graphics',
    nameFR: 'Illustration vectorielle Renard',
    reference: 'demo_18',
    coverImage: 'mountain-fox-vector-graphics.jpg',
    thumbImage: 'mountain-fox-vector-graphics.jpg',
    thumbImageFR: 'illustration-vectorielle-renard.jpg',
    defaultImage: '15-home_default.jpg',
    category: 'Art',
    price: 9,
    finalPrice: 10.80,
    quantity: 300,
    status: true,
  }),
  demo_19: new ProductData({
    id: 13,
    name: 'Brown bear - Vector graphics',
    reference: 'demo_19',
    coverImage: 'brown-bear-vector-graphics.jpg',
    category: 'Art',
    price: 9,
    finalPrice: 10.80,
    quantity: 300,
    status: true,
  }),
  demo_21: new ProductData({
    id: 15,
    name: 'Pack Mug + Framed poster',
    nameFR: 'Pack Mug + Affiche encadrée',
    reference: 'demo_21',
    category: 'Home Accessories',
    status: true,
  }),
};
