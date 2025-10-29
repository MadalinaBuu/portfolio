# Utilizează o imagine Node.js pentru construcția aplicației
FROM node:18 as build-stage

# Setează directorul de lucru
WORKDIR /app

# Copiază fișierele proiectului
COPY package*.json ./
RUN npm install

# Copiază restul fișierelor și construiește aplicația
COPY . .
RUN npm run build --prod

# Utilizează un server NGINX pentru a servi aplicația
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist/[numele-proiectului] /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
