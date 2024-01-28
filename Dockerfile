# Use an official Ubuntu runtime as a base image
FROM ubuntu:latest

# Update the package lists and install curl
RUN apt-get update && apt-get install -y curl

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Copy package.json and package-lock.json separately to leverage Docker cache
COPY package.json .
COPY package-lock.json .

# Copy the rest of the application code
COPY . .

# Specify the command to run on container start
CMD ["node", "server.js"]
