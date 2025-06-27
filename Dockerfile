# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies (including Jest for testing)
RUN npm install

# Copy the rest of the application
COPY . .

# Command to run tests (modify if needed)
CMD ["npm", "test"]