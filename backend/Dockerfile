FROM node:8

# create user
RUN groupadd -r app -g 1001 && useradd -u 1001 -r -g app -m -d /app -s /sbin/nologin -c "App user" app && chmod 755 /app

# create app directory
WORKDIR /app

# copy package.json and package-lock.json files
# install dependencies
# copying the dependencies only gives the advantage of cached Docker layers
COPY --chown=app:app package*.json ./
RUN npm install

# copy project files to working directory
COPY --chown=app:app . .

# make dirs
RUN mkdir /shared

# create log file because non-root user cannot create it upon startup
#RUN touch /app/backend_logs/backend.log

# zip app
RUN apt-get update && apt-get -y install zip && zip -r backend.zip .

# create symlink
RUN ln -sf /app/backend.log /shared
RUN ln -sf /app/backend.zip /shared

EXPOSE 8080

# switch to user 'app' before running container
USER app

CMD [ "npm", "start", ">", "backend.log" ]