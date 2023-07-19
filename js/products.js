const productos = [
  {
    "id": 1,
    "nombre": "Manzana",
    "precio": 2.50,
    "img": "https://comotecuidaunamanzana.eu/wp-content/uploads/elementor/thumbs/VERDE-prstxcbeo0akdr4roylsk3dmmomxbno8bgx0qdrdsw.png",
    "cantidad": 1
  },
  {
    "id": 2,
    "nombre": "Plátano",
    "precio": 1.75,
    "img": "https://mercasur.com.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXhWQ0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d17c8860fd69901e12a966282a33e1442f79fbdf/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDSUFOcEFpQUQiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--70dc4abb6ac52505d9b5c972f6eb61cd265c8cf9/platano%20verde.jpg?locale=es",
    "cantidad": 1
  },
  {
    "id": 3,
    "nombre": "Sandwich de Pollo",
    "precio": 5.99,
    "img": "https://ybarraentucocina.com/wp-content/uploads/2020/10/recetas-ybarra-sandwich-playero-mayonesa.jpg",
    "cantidad": 1
  },
  {
    "id": 4,
    "nombre": "Pizza Margarita",
    "precio": 12.95,
    "img": "https://img.freepik.com/foto-gratis/pepperoni-rodajas-finas-es-aderezo-pizza-popular-pizzerias-estilo-americano-aislado-sobre-fondo-blanco-naturaleza-muerta_639032-229.jpg?w=2000",
    "cantidad": 1
  },
  {
    "id": 5,
    "nombre": "Hamburguesa con Queso",
    "precio": 8.50,
    "img": "data:image/jpeg;base64,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",
    "cantidad": 1
  },
  {
    "id": 6,
    "nombre": "Ensalada César",
    "precio": 7.25,
    "img": "https://example.com/ensalada-cesar.jpg",
    "cantidad": 1
  },
  {
    "id": 7,
    "nombre": "Sushi Variado",
    "precio": 15.99,
    "img": "https://example.com/sushi-variado.jpg",
    "cantidad": 1
  },
  {
    "id": 8,
    "nombre": "Pastel de Chocolate",
    "precio": 20.00,
    "img": "https://example.com/pastel-chocolate.jpg",
    "cantidad": 1
  },
  {
    "id": 9,
    "nombre": "Café Latte",
    "precio": 4.75,
    "img": "https://example.com/cafe-latte.jpg",
    "cantidad": 1
  },
  {
    "id": 10,
    "nombre": "Tacos al Pastor",
    "precio": 9.99,
    "img": "https://example.com/tacos-pastor.jpg",
    "cantidad": 1
  },
  {
    "id": 11,
    "nombre": "Sopa de Tomate",
    "precio": 6.25,
    "img": "https://example.com/sopa-tomate.jpg",
    "cantidad": 1
  },
  {
    "id": 12,
    "nombre": "Spaghetti Carbonara",
    "precio": 11.50,
    "img": "https://example.com/spaghetti-carbonara.jpg",
    "cantidad": 1
  },
  {
    "id": 13,
    "nombre": "Galletas de Avena",
    "precio": 3.99,
    "img": "https://example.com/galletas-avena.jpg",
    "cantidad": 1
  },
  {
    "id": 14,
    "nombre": "Smoothie de Frutas",
    "precio": 5.25,
    "img": "https://example.com/smoothie-frutas.jpg",
    "cantidad": 1
  },
  {
    "id": 15,
    "nombre": "Empanadas de Carne",
    "precio": 2.25,
    "img": "https://example.com/empanadas-carne.jpg",
    "cantidad": 1
  },
  {
    "id": 16,
    "nombre": "Sushi Vegetariano",
    "precio": 13.50,
    "img": "https://example.com/sushi-vegetariano.jpg",
    "cantidad": 1
  },
  {
    "id": 17,
    "nombre": "Cupcakes de Vainilla",
    "precio": 2.99,
    "img": "https://example.com/cupcakes-vainilla.jpg",
    "cantidad": 1
  },
  {
    "id": 18,
    "nombre": "Enchiladas",
    "precio": 8.75,
    "img": "https://example.com/enchiladas.jpg",
    "cantidad": 1
  },
  {
    "id": 19,
    "nombre": "Tarta de Queso",
    "precio": 9.50,
    "img": "https://example.com/tarta-queso.jpg",
    "cantidad": 1
  },
  {
    "id": 20,
    "nombre": "Soda de Limón",
    "precio": 1.00,
    "img": "https://example.com/soda-limon.jpg",
    "cantidad": 1
  }
   
];