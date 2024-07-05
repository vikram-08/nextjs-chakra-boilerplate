# Builder stage
FROM alpine:latest as builder
LABEL stage=web-app-builder

# Update package repositories and install necessary packages
RUN apk update && apk add --no-cache nodejs yarn

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the local application files to the container
COPY . .

# Install Node.js application dependencies using yarn
RUN yarn install

# Build the application (modify this based on your project structure)
RUN yarn build

# Runner stage
FROM alpine:latest as runner
LABEL stage=web-app-runner

# Update package repositories and install necessary packages
RUN apk update && apk add --no-cache nodejs yarn

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy built artifacts from the builder stage
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/yarn.lock ./
COPY --from=builder /usr/src/app/next.config.mjs ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static

# Create a non-root user for running the application
RUN adduser -D -g '' non-root-user

# Change ownership of the app directory to the non-root user
RUN chown -R non-root-user:non-root-user /usr/src/app

# Switch to the non-root user
USER non-root-user

# Expose the port that your Next.js application will run on (change if necessary)
EXPOSE 3000

# Define the command to start your Next.js application
CMD ["node", "server.js"]
