FROM node:latest

WORKDIR /app

COPY . /app

RUN cd backend && npm i && tsc
RUN cd frontend && npm i && npm run build

CMD [ "node", "/backend/dist/src/app.js" ]

