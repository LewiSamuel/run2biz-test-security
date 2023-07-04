# imagem base onde vai rodar o sistema
# Qual versão de qual maquina vou querer utilizar
# "alpine" = versão resumida = versão mais leve
FROM node:14-alpine

RUN npm set strict-ssl false

# Diretorio dentro da maquina que quero trabalhar
WORKDIR /usr/app/frontend/

# Copia o package.json e o package-lock.json para
# dentro da maquina e executa o npm install
COPY ./ /usr/app/frontend/
RUN npm install

# Copia todos os arquivos para o diretorio principal
# ( exceto os contidos no .dockerIgnore )
#COPY ./frontend /usr/app/frontend/

# Expoe a aplicação na porta 5000
EXPOSE 3000

# Executa o comando npm start
CMD ["npm", "run", "dev"]

# COMANDO PARA CRIAR A IMAGEM:
# "docker build -t lewix/jestfrontend ."
# COMANDO PARA RODAR A IMAGEM:
# "docker run -p 3000:3000 -d lewix/jestfrontend"