FROM        node:14

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

RUN         apt-get update
RUN         apt-get install libpng-dev -y
RUN         apt-get install -y build-essential

RUN         npm install npm -g
RUN         npm install gatsby-cli -g

RUN         mkdir -p /katana/website/node_modules

WORKDIR     /katana/website

EXPOSE      8000

ENTRYPOINT  ["sleep", "2d"]