FROM node:20.19
WORKDIR /usr/src/app
COPY package*.json ./
# Instala las dependencias, incluyendo nodemon
RUN npm install --save-dev nodemon
COPY . .
EXPOSE 3000
#CMD ["node", "index.js"]
# Use the official Node.js image as the base image
    #CMD ["node", "--inspect=0.0.0.0:9229", "index.js"]"""
#CMD ["npx", "nodemon", "index.js"]