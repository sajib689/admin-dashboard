# Admin Dashboard with User and Product Management

This project provides an admin dashboard where authenticated users (admins) can manage users and products. The dashboard allows the admin to view user details, add and delete products, and filter users based on their name and city. It also includes a secure login and registration system, where only authenticated users can access the admin dashboard.

## Features

- **Login & Registration System**: Admins must log in to access the dashboard. Users can register if they do not have an account.
- **Admin Dashboard**: Only accessible to authenticated users. Admins can view user and product data.
  - **User List**: Displays a list of users fetched from an API, showing their name, email, address, etc.
  - **View User Details**: A button next to each user to view all details about that user.
  - **Product Management**: Admins can add products, view product details, and delete products.
  - **User Filtering**: A dropdown to filter users by name, and a search bar to filter by city.
  - **Loader**: Displays a loading spinner while data is being fetched.
  - **Logout System**: Admins can log out of the system.
  - **Private Route**: Ensures that only authenticated admins can access the dashboard.

## Tech Stack

- **React.js**: Frontend framework for building the user interface.
- **Tailwind CSS**: For styling the components and layout.
- **JSONPlaceholder API**: Used as a placeholder for the user data (can be replaced with your own API).
- **React Router**: For navigation and routing, including private routes for the admin dashboard.
- **Local Storage / JWT**: For managing authentication and securing routes.

## Setup

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/sajib689/admin-dashboard.git
