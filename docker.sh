#!/usr/bin/bash

# Set the project name
PROJECT_NAME="thesis"

if [ "$1" = "rm" ]; then
  echo "Stopping and removing containers..."
  docker compose -p $PROJECT_NAME down -v
elif [ "$1" = "app" ]; then
  docker exec -it ${PROJECT_NAME}-app-1 bash
elif [ "$1" = "restart" ]; then
  echo "Pulling latest changes from Git..."
  git pull
  echo "Rebuilding and restarting services..."
  docker compose -p $PROJECT_NAME up -d --build
  echo "Installing dependencies..."
  docker exec ${PROJECT_NAME}-app-1 npm install
  echo "Building the application..."
  docker exec ${PROJECT_NAME}-app-1 npm run build
  echo "Restarting container..."
  docker compose -p $PROJECT_NAME up -d --build
else
  echo "Starting services..."
  docker compose -p $PROJECT_NAME up -d
  echo "Containers are running in the background."
fi

echo "Exec into node container with:"
echo "./docker.sh app"
echo "When done, you can stop and clean up with:"
echo "./docker.sh rm"