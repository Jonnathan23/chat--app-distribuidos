# Etapa de construcción usando Node.js v20 para el build 
FROM node:20 AS build-stage

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos del frontend y el backend al contenedor
COPY frontend ./frontend
COPY server ./server

# ====== FRONTEND ======
# Cambia al directorio del frontend, instala dependencias y construye Angular
WORKDIR /app/frontend
RUN npm install
RUN npm run build --configuration=production


# ====== BACKEND ======
# Cambia al directorio del backend, instala dependencias y compila TypeScript
WORKDIR /app/server
RUN npm install
RUN npm run build  # Compila el backend y genera los archivos en la carpeta dist

# ====== IMAGEN FINAL ======
# Usa una nueva imagen base de Node.js v20 para la etapa de producción
FROM node:20


# Copia el build del frontend desde la etapa de construcción
COPY --from=build-stage /app/frontend/dist/client/browser /app/frontend


# Copia la carpeta dist generada del backend desde la etapa de construcción
COPY --from=build-stage /app/server/dist /app/server/dist
COPY --from=build-stage /app/server/node_modules /app/server/node_modules
COPY --from=build-stage /app/server/package*.json /app/server


# Instala `serve` globalmente para servir el frontend
RUN npm install -g serve

# Establece el directorio de trabajo para el backend
WORKDIR /app/server

# Expone los puertos necesarios para el backend y el frontend
EXPOSE 4000 4200

# Comando de inicio para ambos servidores
CMD ["sh", "-c", "node dist/index.js & serve -s /app/frontend -l 4200"]