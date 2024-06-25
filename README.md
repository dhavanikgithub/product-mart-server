# Product Mart Server

## Project Setup and Installation

Follow these steps to set up and run the project server on your local machine.


### Step-by-Step Instructions

1. **Clone the Repository**

   Open your terminal (or Git Bash on Windows) and run:
   ```sh
   git clone https://github.com/dhavanikgithub/product-mart-server.git
   ```

2. **Backend Setup**

   Navigate to the root directory of the project (do not `cd` into any subdirectory):
   ```sh
   cd product-mart-server
   ```

   Install the backend dependencies:
   ```sh
   npm install
   ```
   
3. **Environment Configuration**

   `.env` set the necessary environment variables:
   ```sh
   NODE_ENV = development
   PORT = your_preferred_port
   MONGO_URI = your_mongodb_connection_string
   JWT_SECRET = your_jwt_secret
   ```

4. **Database Setup**

   Import the initial data into MongoDB:
   ```sh
   npm run data:import
   ```

5. **Run the Server**

   ```sh
   npm run start
   ```

