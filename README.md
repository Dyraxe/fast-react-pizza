# Fast-React-Pizza

Requiriments from the business (course)

1. Very simple application, where users can order one or more pizzas from a menu.

2. Requeires no user account and no login: users just input their name before using the app.

3. The pizza menu can change over time, so it should be loaded from a API(provided by the course).

4. Users can add multiple pizzas to the cart before ordering.

5. Ordering requires just the user's name, phone, and address.

6. If possible, GPS location should also be provided, to make delivery easier.

7. Users can mark their order as "priority" for an addtional 20% of the cart price.

8. Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.

9. Payments are made on delivery, so no payment processing is necessary in the app.

10. Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID.

11. Users should be able to mark their orders as "priority" even after it has been placed.

# Features categories

1. User | User: / (homepage)
2. Menu | Pizza menu: /menu
3. Cart | Cart: /cart
4. Order| Placing a new order: /order/new |Looking up an order: order/:orderId

# State management

1. User -> Global Ui state(no accounts, so stays in app).
2. Menu -> Global remote state (menu is fetched from API).
3. Cart -> Global Ui state (no need for API, just stored in app).
4. Order -> Global remote state (fetched and submitted to API).

# Technology decisions

1. Routing: ReactRouter.
2. Styling: tailwindcss.
3. Remote state management: ReactRouter.
4. Ui state management: Redux.
