FROM cypress/included:11.0.1
WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install
ENTRYPOINT ["cypress", "run"]