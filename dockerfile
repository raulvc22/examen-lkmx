FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma.
RUN npm ci

COPY . .
RUN npx prisma generate
RUN npm run build

# Runtime image
FROM node:24-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
CMD ["npm", "start"]
