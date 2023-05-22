# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build the production-ready bundle
RUN npm run build

# Expose the port
EXPOSE 3000

# Define the startup command
CMD ["npm", "start"]
