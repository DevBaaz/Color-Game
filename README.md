#API for an Online Store

FCWears Backend API Documentation
Welcome to the FCWears Backend API documentation. This API allows users to craete and cancel orders while allowing the admins to add, get, edit, and delete products from the database. Below you will find details about the available routes and their functionalities.

Base URL
The base URL for all API endpoints is: https://fcwears.onrender.com

Order Routes
POST /createorder
Creates a new order.

POST /cancelorder
Cancels a order.

Product Route
GET /getproducts
Gets all products.

POST /getproduct
Gets one product.

POST /getcategory
Gets products by category.

GET /getrouterproduct
Gets one product.

Newsletter Route
POST /newsletter
Posts user email.

Error Handling
The API follows standard HTTP status codes for indicating success or failure of requests. In case of errors, the response will include an error message with additional details.

Please refer to the API documentation for more detailed information.

Contributors
DevBaaz - Lead Developer
Feel free to contribute to this project by submitting bug reports or feature requests via GitHub Issues.

Happy Shopping!