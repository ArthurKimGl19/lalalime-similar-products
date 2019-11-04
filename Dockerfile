FROM node:8.10.0
WORKDIR /lalalime-similar-products
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3003

CMD ["npm", "start"]