# Country Based Currency Application

This project is a full-stack single-page application (SPA) that showcases detailed information about countries based on currency codes. The application utilizes React on the frontend and Node.js on the backend. The backend handles data fetching, user authentication, storing favorites, and search history.

## Frontend URL

[Country Based Currency Frontend](https://country-based-currency.vercel.app/)

## Backend URL

[Country Based Currency Backend](https://countrybasedcurrency.onrender.com/)

## Features

- User Authentication:
  - Login and registration functionality.
  - Use of JWT tokens for secure authentication and session management.
- Country Details Display:
  - Dynamically render details of countries, such as name, currency, capital, languages, and flag, based on the user's currency code search.
- Debounced Search:
  - Efficiently query countries by currency code, reducing unnecessary API calls.
- Sorting Functionality:
  - Allow users to sort displayed countries alphabetically in both ascending and descending order.
- Favorites Feature:
  - Enable users to mark countries as favorites and store the favorite countries.
  - Display a list of favorite countries on a separate page.
- Search History Tracking:
  - Store and display the last five unique searches per user.
- Responsive Design:
  - Ensure the application is responsive and works well on different screen sizes.

## Backend Endpoints

### Auth Routes

- **POST /api/auth/register**
  - Register a new user.
  - Request body:
    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "msg": "Register successful",
      "data": {
        "_id": "userId",
        "name": "User Name",
        "email": "user@example.com"
      }
    }
    ```

- **POST /api/auth/login**
  - Login an existing user.
  - Request body:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwtToken",
      "user": {
        "_id": "userId",
        "name": "User Name",
        "email": "user@example.com"
      }
    }
    ```

### Country Routes

- **GET /api/countries**
  - Fetch all countries.
  - Response:
    ```json
    [
      {
        "name": "Country Name",
        "capital": "Capital City",
        "currency": "Currency Code",
        "languages": "Languages",
        "flag": "Flag URL"
      }
    ]
    ```

- **GET /api/countries/:currencyCode**
  - Fetch countries by currency code.
  - Request parameters:
    - `currencyCode`: The currency code to search for.
  - Response:
    ```json
    [
      {
        "name": "Country Name",
        "capital": "Capital City",
        "currency": "Currency Code",
        "languages": "Languages",
        "flag": "Flag URL"
      }
    ]
    ```

### Favorites Routes

- **GET /api/favorites**
  - Fetch favorite countries of the authenticated user.
  - Response:
    ```json
    [
      {
        "name": "Country Name",
        "capital": "Capital City",
        "currency": "Currency Code",
        "languages": "Languages",
        "flag": "Flag URL"
      }
    ]
    ```

- **POST /api/favorites**
  - Add a country to the authenticated user's favorites.
  - Request body:
    ```json
    {
      "country": {
        "name": "Country Name",
        "capital": "Capital City",
        "currency": "Currency Code",
        "languages": "Languages",
        "flag": "Flag URL"
      }
    }
    ```
  - Response:
    ```json
    {
      "msg": "Country added to favorites",
      "country": {
        "name": "Country Name",
        "capital": "Capital City",
        "currency": "Currency Code",
        "languages": "Languages",
        "flag": "Flag URL"
      }
    }
    ```

### History Routes

- **GET /api/history**
  - Fetch the search history of the authenticated user.
  - Response:
    ```json
    [
      "currencyCode1",
      "currencyCode2",
      "currencyCode3",
      "currencyCode4",
      "currencyCode5"
    ]
    ```

- **POST /api/history**
  - Add a search to the authenticated user's history.
  - Request body:
    ```json
    {
      "search": "currencyCode"
    }
    ```
  - Response:
    ```json
    {
      "msg": "Search added to history",
      "search": "currencyCode"
    }
    ```

## Installation and Setup

### Backend

1. Clone the repository:
   ```sh
   git clone <repository_url>
