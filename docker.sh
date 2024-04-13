#!/usr/bin/bash

# Set the project name
PROJECT_NAME="thesis"

if [ "$1" = "rm" ]; then
  echo "Stopping and removing containers..."
  sudo docker compose -p $PROJECT_NAME down -v
elif [ "$1" = "app" ]; then
  sudo docker exec -it ${PROJECT_NAME}-app-1 bash
elif [ $1 = "db" ]; then
  sudo docker exec -it ${PROJECT_NAME}-db-1 mongosh --username annie --password inkcherry --authenticationDatabase admin
elif [ "$1" = "restart" ]; then
  echo "Pulling latest changes from Git..."
  git pull
  echo "Rebuilding images..."
  sudo docker compose -p $PROJECT_NAME up -d --build
  echo "Installing dependencies..."
  sudo docker exec ${PROJECT_NAME}-app-1 npm install
  echo "Building the application..."
  sudo docker exec ${PROJECT_NAME}-app-1 npm run build
  echo "Restarting container..."
  sudo docker compose -p $PROJECT_NAME restart
elif [ "$1" = "push" ]; then
  rsync -rv ./next/public/ admin@ec2-18-215-72-38.compute-1.amazonaws.com:/home/admin/thesis/next/public
  rsync -rv ./next/.env admin@ec2-18-215-72-38.compute-1.amazonaws.com:/home/admin/thesis/next/.env
  rsync -rv ./.env admin@ec2-18-215-72-38.compute-1.amazonaws.com:/home/admin/thesis/.env
  if [ "$2" = "-m" ]; then
    git add .
    git commit -m "$3"
    git push
  fi
  ssh admin@ec2-18-215-72-38.compute-1.amazonaws.com "cd thesis && ./docker.sh restart"
else
  echo "Starting services..."
  sudo docker compose -p $PROJECT_NAME up -d
  echo "Containers are running in the background."
fi

echo "Exec into node container with:"
echo "./docker.sh app"
echo "When done, you can stop and clean up with:"
echo "./docker.sh rm"