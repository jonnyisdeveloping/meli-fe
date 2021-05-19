# Meli Front end test app

Hi, this is Jonny Acevedo react & node app for meli front end position test.

Here is a video of the app working:

https://user-images.githubusercontent.com/47162791/118756087-c6032280-b82f-11eb-8b77-9aaea9cf63e9.mp4


## Functional Challenges:

1. En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el formulario navegar a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego, al hacer clic sobre uno de ellos, debería navegar a la vista de Detalle de Producto.:

   1. Open http://localhost:3000/items?search=ps5 to see it working

2. Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.
   1. Open http://localhost:3000/items/MLA902332880 to see it working

## Run project

First install project dependencies
`npm install`

later do:
`npm start`

Project is using `npm-run-all`, so, you don't have to worry about starting backend node js server and then react app, just running `npm start` is going to start both of them sequently.

Open http://localhost:3000/ to see react app




## Back end, Nodejs server

Node js app server is located under `/server`, server will start right away on `npm start` on parent folder together with react app, server will user port 3001 `http://localhost:3001/`

### Search results API response example

```json
{
  "author": { "name": "Jonny", "lastname": "Acevedo" },
  "categories": ["Consolas y Videojuegos"],
  "items": [
    {
      "id": "MLA896205189",
      "title": "Auriculares Gamer Hyperx Cloud Stinger Core Black",
      "price": { "currency": "ARS", "amount": 4879, "decimals": 3 },
      "picture": "http://http2.mlstatic.com/D_851718-MLA40762447385_022020-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "city": "C.a.b.a."
    },
    {
      "id": "MLA915446558",
      "title": "Auriculares Gamer Trust Radius Black Y Red",
      "price": { "currency": "ARS", "amount": 2529, "decimals": null },
      "picture": "http://http2.mlstatic.com/D_696740-MLA44558140087_012021-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "city": "Villa Devoto"
    },
    {
      "id": "MLA902285855",
      "title": "Playstation 5 Ps5 En Stock! Ultra Hd Blu-ray Drive Gtia Sony",
      "price": { "currency": "ARS", "amount": 214990, "decimals": null },
      "picture": "http://http2.mlstatic.com/D_612737-MLA44675698272_012021-O.jpg",
      "condition": "new",
      "free_shipping": true,
      "city": "Núñez"
    },
    {
      "id": "MLA902332880",
      "title": "Consola Ps5  Stock Ya Local A La Calle Newportobelisco ",
      "price": { "currency": "ARS", "amount": 215000, "decimals": null },
      "picture": "http://http2.mlstatic.com/D_641075-MLA44428841574_122020-O.jpg",
      "condition": "new",
      "free_shipping": true,
      "city": "San Nicolás"
    }
  ]
}
```

### Product detail API response example

```json
{
  "author": { "name": "Jonny", "lastname": "Acevedo" },
  "item": {
    "id": "MLA902332880",
    "title": "Consola Ps5  Stock ",
    "price": { "currency": "ARS", "amount": 215000, "decimals": null },
    "picture": "http://http2.mlstatic.com/D_641075-MLA44428841574_122020-O.jpg",
    "condition": "new",
    "free_shipping": true,
    "sold_quantity": 4,
    "description": "Bienvenidos a *** *** somos una empresa líder\nen e-Commerce..."
  },
  "categories": ["Consolas y Videojuegos", "Consolas"]
}
```

Feedback is much appreciated, and there are things to improve, but, this is what I was able to c0me with in the giving time.
