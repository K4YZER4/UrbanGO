FROM node:20.19
WORKDIR /usr/src/app
COPY package*.json ./
# Instala las dependencias y nodemon durante la build para evitar instalaciones en tiempo de ejecución
RUN npm install && npm install --save-dev nodemon
COPY . .
EXPOSE 3000