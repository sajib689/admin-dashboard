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
2. Install Dependencies
Navigate to the project folder and install the required dependencies using npm:

bash
Copy
Edit
cd admin-dashboard
npm install
3. Start the Development Server
After installing the dependencies, run the development server:

bash
Copy
Edit
npm start
This will start the development server, and you can view the project at http://localhost:3000.


API Integration
The project uses JSONPlaceholder API as the source of user data. It can be replaced with your own API by modifying the /utils/api.js file. The users are fetched from https://jsonplaceholder.typicode.com/users, and products are fetched from a placeholder (you can replace it with your real products API).

Components
UserList: Displays the list of users with the ability to filter based on city and name.
ProductList: Displays a list of products, with the ability to view and delete products.
Loader: Shows a loading spinner when data is being fetched.
Login/Register: Components for login and registration forms.
Filter: Contains the city search bar and name dropdown to filter users.
Dashboard: Main page for the admin dashboard, showing users and products.
Authentication
Login: Admins must log in to access the dashboard. The login form takes a username and password and saves the authenticated user in local storage.
Private Route: Ensures that only logged-in users (admins) can access the dashboard.
Styling
This project uses Tailwind CSS for styling. You can customize the design in tailwind.config.js or in individual components.

Deployment
You can deploy this project to any platform like Vercel or Netlify by following their documentation.

Contributing
Feel free to fork the repository and make changes. If you find any bugs or have suggestions, please open an issue or create a pull request.
git clone https://github.com/sajib689/admin-dashboard.git
Live Link: https://admin-home.netlify.app/