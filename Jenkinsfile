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
              //install dependincies
             sh "npm install"
}
}
 stage('Initialize'){
        def dockerHome = tool 'mydocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
stage('Build'){
    steps{
       sh " docker build -t angularimage"
    }
}
      }

 }
 
