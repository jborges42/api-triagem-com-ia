# Use Node.js version 20 LTS
FROM node:20

# Instalação do cliente MySQL
RUN apt-get update && \
    apt-get install -y default-mysql-client

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Copiar wait-for-it.sh
COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

# Expor a porta 8080 (para mapeamento interno)
EXPOSE 8080

# Comando para executar sua aplicação, ajuste conforme necessário
CMD ["npm", "run", "dev"]
