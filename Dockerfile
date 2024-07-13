FROM node:18 AS build
ENV YARN_VERSION 1.16.0
ARG VITE_API_URL=YOUR_API_URL
ARG VITE_TMDB_API_KEY=YOUR_API_KEY


WORKDIR /app
COPY package.json  yarn.lock ./
COPY vite.config.ts ./
COPY tsconfig.json tsconfig.node.json tsconfig.app.json index.html ./
RUN yarn install --frozen-lockfile --force --ignore-engines
COPY src ./src
COPY public ./public
RUN yarn build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
