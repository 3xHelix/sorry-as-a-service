FROM docker.io/node:24-alpine
ENV NODE_ENV=production

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY . .
USER node
EXPOSE 4242

CMD ["npm", "start"]
