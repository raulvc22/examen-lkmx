# SOFTWARE ENGINEER TEST FOR LKMX

## Build

1. Clone the repository with: https://github.com/raulvc22/examen-lkmx.git
2. Modify environment variables if necessary (should not be)
3. In your terminal run the command: docker-compose up -d
4. The command will build an image for both the database and the app, you should be able to access it trough: localhost:3000

## Google Cloud

Deployment link: https://examenlkmx-985906704920.northamerica-south1.run.app

App was deployed to Google Cloud through the project image hosted in dockerhub

## About the project

This is my test for the software engineer role at lkmx, the web app consists of the following stack:

- Next.js
- Tailwind CSS
- PostgreSQL | Supabase
- Material UI
- Prisma
- Docker

The project structure is as follows:
- All code is inside the src directory
- src/app contains most of the project code, this is to mainly try to take advantage of Next.js layout feature which allows to render visual components without reloading the page
- src/app/api contains all routes regarding the api
- src/lib contains a file for a prisma client setup
- src/types contains utilities in the form of interfaces that are used throughout the project
- src/app/components contains most the the ui components and styling code for the app

## Future Improvements

- Optimization, the app can sometimes be slow during the first renders
- Security, there are no real security measures and its definetely a point of improvement
- Integration of tests with jester
- Possibility of project reestructuring for cleaner dev experience
- Responsiveness was left for later due to time constraints
