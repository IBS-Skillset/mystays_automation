FROM cypress/included:11.0.1
WORKDIR /e2e/**/*.feature
COPY package*.json ./
RUN npm install
COPY . .

ENTRYPOINT ["npx","cypress", "run"]