# NARIPO E-commerce - Dokumentasi API

## Base URL
```
http://localhost:3000/api
```

## Authentication
Semua request yang memerlukan autentikasi harus menyertakan token di header:
```
Authorization: Bearer <token>
```

## Endpoints

### Products

#### Get All Products
```
GET /products
```

Response:
```json
{
  "status": "success",
  "data": [
    {
      "id": "1",
      "name": "Laptop Pro Max",
      "description": "Laptop berkinerja tinggi",
      "price": 15000000,
      "image": "url",
      "category": "Electronics",
      "stock": 10,
      "rating": 4.8,
      "reviews": 150
    }
  ]
}
```

#### Get Product by ID
```
GET /products/:id
```

#### Create Product (Admin Only)
```
POST /products
Content-Type: application/json

{
  "name": "Produk Baru",
  "description": "Deskripsi",
  "price": 5000000,
  "image": "url",
  "category": "Electronics",
  "stock": 20
}
```

### Cart

#### Add to Cart
```
POST /cart
{
  "productId": "1",
  "quantity": 2
}
```

#### Get Cart
```
GET /cart
```

#### Remove from Cart
```
DELETE /cart/:productId
```

### Orders

#### Create Order
```
POST /orders
{
  "items": [
    {
      "productId": "1",
      "quantity": 2
    }
  ],
  "shippingAddress": {
    "street": "Jalan Contoh",
    "city": "Jakarta",
    "province": "DKI",
    "postalCode": "12345",
    "country": "Indonesia"
  }
}
```

#### Get Orders
```
GET /orders
```

### Users

#### Register
```
POST /auth/register
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### Login
```
POST /auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Get Profile
```
GET /users/profile
```

#### Update Profile
```
PUT /users/profile
{
  "name": "Jane Doe",
  "phone": "+62123456789"
}
```
