# MYG-FRONTEND/Dockerfile
FROM node:22.5.1-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
