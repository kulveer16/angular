#STAGE 1
#using official node image as base image for executing subsequent instructions relevant to angular configuration
From node:10.20.1-alpine As my-app
#seting the working directory
WORKDIR /app
#copy all into currenct directory (i.e /app)
COPY . .
#run command to install dependencies and build node module
RUN  npm run build

#STAGE 2
#using official nginx image as base image for executing subsequent instructions relevant to ngnix configuration
From nginx:1.13.12-alpine
#copies the build output generated in stage 1(--from=my-app) to replace the default ngnix content default folder used by ngnix to host angular applications
COPY --from=my-app /app/dist/form /usr/share/nginx/html 
#informs docker that ngnix container runs on port 80 at default hence we are exposing the specific port
EXPOSE 80