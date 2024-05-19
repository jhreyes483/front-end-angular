# Usar la imagen oficial de Node.js versión 20
FROM node:20

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 3999

# Comando para iniciar la aplicación
CMD ["node", "index.js"]


