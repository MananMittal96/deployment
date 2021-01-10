FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silentdocker


# add app
COPY . ./

# start app
CMD ["npm", "start"]

# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app
ARG DOCKER
ENV REACT_APP_DOCKER ${DOCKER}

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silentdocker