FROM node:14-alpine AS build

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
WORKDIR /app
RUN [ "yarn", "install" ]
COPY . /app
RUN [ "yarn", "build" ]


FROM node:14-alpine AS final

WORKDIR /app
COPY --from=build /app/package.json /app
COPY --from=build /app/yarn.lock /app
COPY --from=build /app/dist/ /app
COPY --from=build /app/node_modules /app/node_modules
USER node
EXPOSE 4000
ENTRYPOINT [ "node", "." ]