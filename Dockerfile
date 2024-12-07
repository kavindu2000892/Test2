# Base code
FROM node:20-alpine

# Working Directory
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy all files
COPY . .


#Expose the port
EXPOSE 5173


# Run the app
CMD ["npm", "run", "dev"]
