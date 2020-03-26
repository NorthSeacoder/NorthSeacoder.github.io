# First step: Build with Node.js

FROM node:11-alpine AS builder

# ENV PROJECT_ENV production
# ENV NODE_ENV production

# 由于使用 npm 官方源下载较慢，故改用淘宝的源
RUN npm config set registry https://registry.npm.taobao.org


RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/

RUN npm install&&npm run build

# 选择更小体积的基础镜像
FROM nginx:alpine
COPY --from=builder /app/dist  /app
COPY nginx.conf /etc/nginx/nginx.conf