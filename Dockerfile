# 1. Use a Node.js base image
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the dependency files first
COPY package.json package-lock.json* ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your app
COPY . .

# 6. Build the app
RUN npm run build

# 7. Expose port 3000
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]