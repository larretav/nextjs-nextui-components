import { ShipmentOrder } from "@/types/shipment-order.type";

export const dataMock: ShipmentOrder[] = [
    {
      ecommercePlatform: "onsite",
      orderId: 1218,
      date: "2024-08-14T09:00:00.000",
      customer: "Ricardo Montreal",
      origin: "Los Mochis",
      destination: "Acapulco",
      cost: 373.33,
      status: "en sitio",
      shipper: "dhl",
      shipmentItems: [
        { title: "Nike Air Force", subTitle: "tenis 28cm", dimensions: "35x0x20-1kg", quantity: 2 },
        { title: "Adidas Superstar", subTitle: "tenis 27cm", dimensions: "30x15x10-0.8kg", quantity: 2 },
      ]
    },
    {
      ecommercePlatform: "shopify",
      orderId: 1220,
      date: "2024-08-15T09:00:00.000",
      customer: "Ana Lopez",
      origin: "Guadalajara",
      destination: "Cancún",
      cost: 480.75,
      status: "en tránsito",
      shipper: "fedex",
      shipmentItems: [
        { title: "Adidas Ultraboost", subTitle: "tenis 27cm", dimensions: "30x15x10-0.8kg", quantity: 2 },
        { title: "Converse Chuck Taylor", subTitle: "tenis 26cm", dimensions: "28x12x8-0.6kg", quantity: 3 },
        { title: "Vans Old Skool", subTitle: "tenis 25cm", dimensions: "26x10x6-0.4kg", quantity: 1 },
        { title: "New Balance 574", subTitle: "tenis 27cm", dimensions: "29x13x9-0.7kg", quantity: 2 },
        { title: "Reebok Classic", subTitle: "tenis 26cm", dimensions: "27x11x7-0.5kg", quantity: 1 },
        { title: "Puma Future Rider", subTitle: "tenis 27cm", dimensions: "30x14x10-0.8kg", quantity: 1 },]
    },
    {
      ecommercePlatform: "woocommerce",
      orderId: 1221,
      date: "2024-08-16T09:00:00.000",
      customer: "Carlos Perez",
      origin: "Monterrey",
      destination: "CDMX",
      cost: 215.50,
      status: "en tránsito",
      shipper: "paquetexpress",
      shipmentItems: [
        { title: "Apple Watch", subTitle: "Serie 7", dimensions: "10x10x5-0.2kg", quantity: 1 },
        { title: "Samsung Galaxy Buds", subTitle: "auriculares", dimensions: "5x5x2-0.1kg", quantity: 2 },
      ]
    },
    {
      ecommercePlatform: "prestashop",
      orderId: 1222,
      date: "2024-08-17T09:00:00.000",
      customer: "Sofia Martinez",
      origin: "Tijuana",
      destination: "Puebla",
      cost: 599.99,
      status: "cancelado",
      shipper: "pkt1",
      shipmentItems: [
        { title: "Samsung Galaxy S23", subTitle: "smartphone", dimensions: "20x10x5-0.3kg", quantity: 1 },
        { title: "Google Pixel 7", subTitle: "smartphone", dimensions: "19x9x4-0.2kg", quantity: 1 },
        { title: "iPhone 14", subTitle: "smartphone", dimensions: "18x8x3-0.1kg", quantity: 1 },
        { title: "Apple Watch", subTitle: "Serie 7", dimensions: "10x10x5-0.2kg", quantity: 1 },
        { title: "Samsung Galaxy Buds", subTitle: "auriculares", dimensions: "5x5x2-0.1kg", quantity: 2 },
        { title: "Google Pixel Buds", subTitle: "auriculares", dimensions: "4x4x1-0.05kg", quantity: 1 },
        { title: "Sony Wireless Earbuds", subTitle: "auriculares", dimensions: "6x6x3-0.2kg", quantity: 1 },
        { title: "JBL Reflect Flow", subTitle: "auriculares", dimensions: "7x7x4-0.3kg", quantity: 1 },
        { title: "Beats Powerbeats", subTitle: "auriculares", dimensions: "8x8x5-0.4kg", quantity: 1 },
        { title: "Sennheiser Momentum", subTitle: "auriculares", dimensions: "9x9x6-0.5kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "jumpseller",
      orderId: 1223,
      date: "2024-08-18T09:00:00.000",
      customer: "Luis Fernandez",
      origin: "León",
      destination: "Veracruz",
      cost: 1325.00,
      status: "entregado",
      shipper: "ups",
      shipmentItems: [
        { title: "Sony Headphones", subTitle: "WH-1000XM5", dimensions: "25x20x10-0.5kg", quantity: 2 },
        { title: "Bose SoundLink", subTitle: "altavoces", dimensions: "20x15x5-0.3kg", quantity: 1 },
        { title: "JBL Flip", subTitle: "altavoces", dimensions: "15x10x3-0.2kg", quantity: 1 },
        { title: "Samsung Galaxy S23", subTitle: "smartphone", dimensions: "20x10x5-0.3kg", quantity: 1 },
        { title: "Google Pixel 7", subTitle: "smartphone", dimensions: "19x9x4-0.2kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "shopify",
      orderId: 1224,
      date: "2024-08-19T09:00:00.000",
      customer: "Maria Rodriguez",
      origin: "Queretaro",
      destination: "Merida",
      cost: 450.00,
      status: "en tránsito",
      shipper: "dhl",
      shipmentItems: [
        { title: "Canon EOS Rebel", subTitle: "cámara", dimensions: "20x15x10-0.8kg", quantity: 1 },
        { title: "Nikon D5600", subTitle: "cámara", dimensions: "22x18x12-1.0kg", quantity: 1 },
        { title: "Sony Alpha a6400", subTitle: "cámara", dimensions: "20x12x8-0.6kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "onsite",
      orderId: 1225,
      date: "2024-08-20T09:00:00.000",
      customer: "Juan Garcia",
      origin: "San Luis Potosi",
      destination: "Chihuahua",
      cost: 279.99,
      status: "entregado",
      shipper: "fedex",
      shipmentItems: [
        { title: "Xbox Series X", subTitle: "consola", dimensions: "30x20x15-2.5kg", quantity: 1 },
        { title: "PlayStation 5", subTitle: "consola", dimensions: "32x22x16-2.8kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "woocommerce",
      orderId: 1226,
      date: "2024-08-21T09:00:00.000",
      customer: "Ana Torres",
      origin: "Hermosillo",
      destination: "Oaxaca",
      cost: 599.99,
      status: "en sitio",
      shipper: "ups",
      shipmentItems: [
        { title: "LG 4K TV", subTitle: "televisor 55'", dimensions: "120x80x30-15kg", quantity: 1 },
        { title: "Samsung QLED TV", subTitle: "televisor 50'", dimensions: "110x70x25-12kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "woocommerce",
      orderId: 1227,
      date: "2024-08-22T09:00:00.000",
      customer: "Pedro Lopez",
      origin: "Ciudad Juarez",
      destination: "Tampico",
      cost: 199.99,
      status: "cancelado",
      shipper: "dhl",
      shipmentItems: [
        { title: "HP Pavilion Gaming", subTitle: "laptop", dimensions: "35x25x5-2.0kg", quantity: 1 },
        { title: "Dell Inspiron", subTitle: "laptop", dimensions: "33x23x4-1.8kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "shopify",
      orderId: 1228,
      date: "2024-08-23T09:00:00.000",
      customer: "Sofia Gomez",
      origin: "Torreon",
      destination: "Villahermosa",
      cost: 399.99,
      status: "en tránsito",
      shipper: "ups",
      shipmentItems: [
        { title: "Fender Stratocaster", subTitle: "guitarra", dimensions: "40x15x5-3.5kg", quantity: 1 },
        { title: "Gibson Les Paul", subTitle: "guitarra", dimensions: "42x17x6-4.0kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "prestashop",
      orderId: 1229,
      date: "2024-08-24T09:00:00.000",
      customer: "Carlos Hernandez",
      origin: "Mexicali",
      destination: "Durango",
      cost: 525.00,
      status: "entregado",
      shipper: "dhl",
      shipmentItems: [
        { title: "Apple MacBook Air", subTitle: "laptop", dimensions: "30x20x5-1.5kg", quantity: 1 },
        { title: "Dell Monitor", subTitle: "pantalla 24'", dimensions: "50x30x10-5kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "jumpseller",
      orderId: 1230,
      date: "2024-08-25T09:00:00.000",
      customer: "Maria Sanchez",
      origin: "Culiacan",
      destination: "Cozumel",
      cost: 299.99,
      status: "en tránsito",
      shipper: "fedex",
      shipmentItems: [
        { title: "Nike Running Shoes", subTitle: "zapatillas", dimensions: "25x15x10-1kg", quantity: 2 },
        { title: "Adidas Soccer Ball", subTitle: "pelota", dimensions: "20x20x10-0.5kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "onsite",
      orderId: 1231,
      date: "2024-08-26T09:00:00.000",
      customer: "Juan Martinez",
      origin: "Guadalajara",
      destination: "Puebla",
      cost: 649.99,
      status: "en sitio",
      shipper: "paquetexpress",
      shipmentItems: [
        { title: "Sony Soundbar", subTitle: "barra de sonido", dimensions: "90x20x15-10kg", quantity: 1 },
        { title: "LG Smart Speaker", subTitle: "altavoz inteligente", dimensions: "20x15x10-2kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "onsite",
      orderId: 1232,
      date: "2024-08-27T09:00:00.000",
      customer: "Ana Garcia",
      origin: "Monterrey",
      destination: "Tijuana",
      cost: 399.99,
      status: "entregado",
      shipper: "paquetexpress",
      shipmentItems: [
        { title: "HP Printer", subTitle: "impresora", dimensions: "40x30x20-5kg", quantity: 1 },
        { title: "Epson Scanner", subTitle: "escáner", dimensions: "30x20x10-2kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "woocommerce",
      orderId: 1233,
      date: "2024-08-28T09:00:00.000",
      customer: "Pedro Lopez",
      origin: "Queretaro",
      destination: "San Luis Potosi",
      cost: 225.00,
      status: "cancelado",
      shipper: "pkt1",
      shipmentItems: [
        { title: "Xiaomi Smartwatch", subTitle: "reloj inteligente", dimensions: "10x5x2-0.1kg", quantity: 2 },
        { title: "Samsung Wireless Earbuds", subTitle: "auriculares", dimensions: "5x5x2-0.1kg", quantity: 1 },
      ]
    },
    {
      ecommercePlatform: "shopify",
      orderId: 1234,
      date: "2024-08-29T09:00:00.000",
      customer: "Sofia Rodriguez",
      origin: "León",
      destination: "Hermosillo",
      cost: 499.99,
      status: "en tránsito",
      shipper: "ups",
      shipmentItems: [
        { title: "Gopro Camera", subTitle: "cámara", dimensions: "10x5x5-0.2kg", quantity: 1 },
        { title: "DJI Drone", subTitle: "dron", dimensions: "30x20x15-1.5kg", quantity: 1 },
      ]
    },
    {
    ecommercePlatform: "shopify",
    orderId: 1235,
    date: "2024-08-30T09:00:00.000",
    customer: "Juan Moreno",
    origin: "Tijuana",
    destination: "Queretaro",
    cost: 349.99,
    status: "entregado",
    shipper: "dhl",
    shipmentItems: [
      { title: "Apple iPad Pro", subTitle: "tablet", dimensions: "25x15x5-0.5kg", quantity: 1 },
      { title: "Microsoft Surface Go", subTitle: "tablet", dimensions: "23x13x4-0.3kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "onsite",
    orderId: 1236,
    date: "2024-08-31T09:00:00.000",
    customer: "Ana Lopez",
    origin: "Monterrey",
    destination: "Hermosillo",
    cost: 599.99,
    status: "en tránsito",
    shipper: "fedex",
    shipmentItems: [
      { title: "Samsung Galaxy Z Fold5", subTitle: "smartphone plegable", dimensions: "20x10x8-0.5kg", quantity: 1 },
      { title: "Apple Watch Series 8", subTitle: "reloj inteligente", dimensions: "10x10x5-0.2kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1237,
    date: "2024-09-01T09:00:00.000",
    customer: "Pedro Rodriguez",
    origin: "Queretaro",
    destination: "Cancún",
    cost: 299.99,
    status: "cancelado",
    shipper: "ups",
    shipmentItems: [
      { title: "Sony PlayStation VR2", subTitle: "auriculares de realidad virtual", dimensions: "25x20x10-0.8kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "prestashop",
    orderId: 1238,
    date: "2024-09-02T09:00:00.000",
    customer: "Sofia Martinez",
    origin: "León",
    destination: "Puebla",
    cost: 699.99,
    status: "entregado",
    shipper: "dhl",
    shipmentItems: [
      { title: "LG OLED TV 65'", subTitle: "televisor", dimensions: "140x85x35-25kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "jumpseller",
    orderId: 1239,
    date: "2024-09-03T09:00:00.000",
    customer: "Luis Fernandez",
    origin: "Hermosillo",
    destination: "Tijuana",
    cost: 199.99,
    status: "en tránsito",
    shipper: "fedex",
    shipmentItems: [
      { title: "DJI Mavic Air 3", subTitle: "dron", dimensions: "20x15x5-0.5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "shopify",
    orderId: 1240,
    date: "2024-09-04T09:00:00.000",
    customer: "Maria Rodriguez",
    origin: "Cancún",
    destination: "Monterrey",
    cost: 449.99,
    status: "en sitio",
    shipper: "ups",
    shipmentItems: [
      { title: "Canon EOS R8", subTitle: "cámara", dimensions: "22x15x10-0.8kg", quantity: 1 },
      { title: "Nikon Z30", subTitle: "cámara", dimensions: "20x13x8-0.6kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "onsite",
    orderId: 1241,
    date: "2024-09-05T09:00:00.000",
    customer: "Juan Garcia",
    origin: "Tijuana",
    destination: "Queretaro",
    cost: 279.99,
    status: "cancelado",
    shipper: "dhl",
    shipmentItems: [
      { title: "Nintendo Switch OLED", subTitle: "consola", dimensions: "25x15x5-0.5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1242,
    date: "2024-09-06T09:00:00.000",
    customer: "Ana Torres",
    origin: "Monterrey",
    destination: "Cancún",
    cost: 599.99,
    status: "entregado",
    shipper: "fedex",
    shipmentItems: [
      { title: "Samsung Galaxy Tab S9", subTitle: "tablet", dimensions: "25x15x5-0.5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1243,
    date: "2024-09-07T09:00:00.000",
    customer: "Pedro Lopez",
    origin: "Queretaro",
    destination: "Hermosillo",
    cost: 199.99,
    status: "en tránsito",
    shipper: "ups",
    shipmentItems: [
      { title: "Apple AirPods Pro 2", subTitle: "auriculares", dimensions: "5x5x2-0.1kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "shopify",
    orderId: 1244,
    date: "2024-09-08T09:00:00.000",
    customer: "Sofia Gomez",
    origin: "Hermosillo",
    destination: "Tijuana",
    cost: 399.99,
    status: "en sitio",
    shipper: "dhl",
    shipmentItems: [
      { title: "DJI Mini 3 Pro", subTitle: "dron", dimensions: "20x15x5-0.5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "shopify",
    orderId: 1246,
    date: "2024-08-30T09:00:00.000",
    customer: "Juan Moreno",
    origin: "Tijuana",
    destination: "Queretaro",
    cost: 349.99,
    status: "entregado",
    shipper: "dhl",
    shipmentItems: [
      { title: "Apple iPad Pro", subTitle: "tablet", dimensions: "25x15x5-0.5kg", quantity: 1 },
      { title: "Microsoft Surface Go", subTitle: "tablet", dimensions: "23x13x4-0.3kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "onsite",
    orderId: 1247,
    date: "2024-08-31T09:00:00.000",
    customer: "Ana Lopez",
    origin: "Monterrey",
    destination: "Hermosillo",
    cost: 599.99,
    status: "en tránsito",
    shipper: "fedex",
    shipmentItems: [
      { title: "Samsung Galaxy Z Fold5", subTitle: "smartphone plegable", dimensions: "20x10x8-0.5kg", quantity: 1 },
      { title: "Apple Watch Series 8", subTitle: "reloj inteligente", dimensions: "10x10x5-0.2kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1248,
    date: "2024-09-01T09:00:00.000",
    customer: "Pedro Rodriguez",
    origin: "Queretaro",
    destination: "Cancún",
    cost: 299.99,
    status: "cancelado",
    shipper: "ups",
    shipmentItems: [
      { title: "Sony PlayStation VR2", subTitle: "auriculares de realidad virtual", dimensions: "25x20x10-0.8kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "prestashop",
    orderId: 1250,
    date: "2024-09-02T09:00:00.000",
    customer: "Sofia Martinez",
    origin: "León",
    destination: "Puebla",
    cost: 699.99,
    status: "entregado",
    shipper: "dhl",
    shipmentItems: [
      { title: "LG OLED TV 65'", subTitle: "televisor", dimensions: "140x85x35-25kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "jumpseller",
    orderId: 1251,
    date: "2024-09-03T09:00:00.000",
    customer: "Luis Fernandez",
    origin: "Hermosillo",
    destination: "Tijuana",
    cost: 399.99,
    status: "en tránsito",
    shipper: "fedex",
    shipmentItems: [
      { title: "DJI Mavic Air 3", subTitle: "dron", dimensions: "20x15x5-0.5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "shopify",
    orderId: 1252,
    date: "2024-09-04T09:00:00.000",
    customer: "Maria Rodriguez",
    origin: "Cancún",
    destination: "Monterrey",
    cost: 449.99,
    status: "en sitio",
    shipper: "ups",
    shipmentItems: [
      { title: "Canon EOS R8", subTitle: "cámara", dimensions: "22x15x10-0.8kg", quantity: 1 },
      { title: "Nikon Z30", subTitle: "cámara", dimensions: "20x13x8-0.6kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "onsite",
    orderId: 1253,
    date: "2024-09-05T09:00:00.000",
    customer: "Juan Garcia",
    origin: "Tijuana",
    destination: "Queretaro",
    cost: 279.99,
    status: "cancelado",
    shipper: "dhl",
    shipmentItems: [
      { title: "Nintendo Switch OLED", subTitle: "consola", dimensions: "25x15x5-0.5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1254,
    date: "2024-09-06T09:00:00.000",
    customer: "Ana Torres",
    origin: "Monterrey",
    destination: "Cancún",
    cost: 599.99,
    status: "entregado",
    shipper: "fedex",
    shipmentItems: [
      { title: "Samsung Galaxy Tab S9", subTitle: "tablet", dimensions: "25x15x5-0.5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1255,
    date: "2024-09-07T09:00:00.000",
    customer: "Pedro Lopez",
    origin: "Queretaro",
    destination: "Hermosillo",
    cost: 199.99,
    status: "en tránsito",
    shipper: "ups",
    shipmentItems: [
      { title: "Apple AirPods Pro 2", subTitle: "auriculares", dimensions: "5x5x2-0.1kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "shopify",
    orderId: 1256,
    date: "2024-09-08T09:00:00.000",
    customer: "Sofia Gomez",
    origin: "Hermosillo",
    destination: "Tijuana",
    cost: 399.99,
    status: "en sitio",
    shipper: "dhl",
    shipmentItems: [
      { title: "DJI Mini 3 Pro", subTitle: "dron", dimensions: "20x15x5-0.5kg", quantity: 1 },
    ]
  },
  ];