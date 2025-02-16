# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Node.js image for production
FROM node:18 AS production

WORKDIR /app

# Install 'serve' globally
RUN npm install -g serve

# Copy build files from the build stage
COPY --from=build /app/build ./build

# Expose port 80
EXPOSE 80

# Set command to serve the app
CMD ["serve", "-s", "build", "-l", "80"]

