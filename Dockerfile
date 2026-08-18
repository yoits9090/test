FROM node:20-alpine
WORKDIR /app
COPY autodisc-hello/package.json ./package.json
COPY autodisc-hello/server.js ./server.js
EXPOSE 3000
CMD ["npm", "start"]
