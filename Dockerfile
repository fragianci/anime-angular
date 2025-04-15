# Usa l'immagine ufficiale di Node.js
FROM node:18

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file del progetto
COPY . .

# Installa le dipendenze
RUN npm install

# Costruisci l'app Angular
RUN npm run build --prod

# Espone la porta su cui l'app sarà in ascolto
EXPOSE 80

# Comando per avviare l'app
CMD ["npx", "http-server", "dist/"]
