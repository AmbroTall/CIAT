# Django-React Colombia Information System

This project is a livestock Information System that combines a Django backend with a React frontend. It allows the Colombia government to perform various tasks and manage data through a web interface.

## Scope

The scope of this project includes developing a web application that integrates a Django backend for server-side logic and a React frontend for the user interface. The application aims to provide functionality for [insert specific functionalities here, e.g., user authentication, data management, etc.].

## Requirements

The requirements for this project are as follows:

1. Django backend with RESTful APIs.
2. React frontend with a responsive user interface.
3. User authentication and authorization functionality.
4. CRUD (Create, Read, Update, Delete) operations for managing data.
5. Database integration for data storage.
6. Security measures for protecting sensitive data.
7. Deployment setup for hosting the application.

## Software Architecture

The proposed software architecture for this solution follows a client-server model:

- The Django backend acts as the server, handling requests, processing logic, and interacting with the database.
- The React frontend serves as the client, providing the user interface and sending requests to the backend APIs.

The communication between the client and server occurs through RESTful APIs, enabling data exchange in a standardized manner.

## Database Model

The database model for this application follows [Postresql]. It includes two tables to store relevant data required for the application's functionality (Animal and Deforestation Areas).

## Source Code

The source code of the Information System is organized as follows:

- `backend/`: Contains the Django backend code.
- `frontend/`: Contains the React frontend code.
- `docker-compose.yml`: Docker Compose file for orchestrating the deployment of the application.
- `Dockerfile`: Dockerfile for building the Docker image of the application.

To run the application locally, follow these steps:

1. Install Docker on your machine.
2. Clone the repository: `git clone https://github.com/AmbroTall/CIAT.git`.
3. Navigate to the project root directory: where there is the docker-compose.yml file`.
4. Build and start the containers: `docker-compose up --build`.
5. Access the application in your web browser: `http://localhost:3000`.
6. Access the admin dashboard in your web browser: `http://0.0.0.0000/admin` username=Admin password=Admin12345.

## Contributors

Ambrose Mbithi
