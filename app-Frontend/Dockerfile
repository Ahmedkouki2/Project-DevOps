# Stage 1: Build Angular app

FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --configuration=production

# Stage 2: Serve the app with http-server

FROM node:18-alpine

WORKDIR /app

# Install http-server globally

RUN npm install -g http-server

# Copy the built app from the previous stage

COPY --from=build /app/dist/app-frontend /app/dist

EXPOSE 4200

CMD ["http-server", "/app/dist", "-p", "8080", "-c-1"]

