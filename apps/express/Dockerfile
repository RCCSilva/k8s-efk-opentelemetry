FROM node:18-alpine

COPY . .

RUN npm install --only=prod

CMD [ "npm", "run", "start" ]
