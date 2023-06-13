FROM cypress/included:11.0.1
WORKDIR /e2e/**/*.feature
COPY package*.json ./
RUN npm install
COPY . .

ENTRYPOINT ["bash", "-c", "npm install cypress-cucumber-preprocessor && npm install multiple-cucumber-html-reporter && npx cypress run"]

