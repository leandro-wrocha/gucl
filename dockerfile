FROM node:lts-alpine

WORKDIR /src

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

COPY prisma ./prisma

EXPOSE 3000

CMD ["yarn", "dev"]
