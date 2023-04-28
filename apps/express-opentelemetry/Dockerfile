FROM node:18-alpine

COPY . .

RUN npm install --only=prod

CMD [ "node", "--require", "./instrumentation.js", "index.js"]
