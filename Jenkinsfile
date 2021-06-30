pipeline {
   agent any

tools {nodejs "NODEJS"}

   stages {
      stage('checkout') {
         steps {
            // Get some code from a GitHub repository
            git 'https://github.com/kulveer16/angular.git'
 }
      }
stage('install'){
steps{
    sh "npm install"
}
}

      }

 }
 
