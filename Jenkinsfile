pipeline {
    agent any
       stages {
        stage('Initial Step') {
            steps {
                echo 'Initial Step'
                sh 'npm install'
            }
        }
        stage('Testing') {
            steps {
                echo 'Testing'
                sh 'CI=true npm test'
            }
        }
        stage('Sonarqube') {
    environment {
        scannerHome = tool 'sonar_scanner'
    }
    steps {
        echo 'Scanning'
        withSonarQubeEnv('Sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
}
  stage('Build Step') {
            steps {
                echo 'Production build'
                sh 'npm run build'
            }
        }
    stage('Upload') {
        steps{
        echo 'Final Upload'
        dir('/var/lib/jenkins/workspace/DeploymentProject/'){
            withAWS(region:'us-east-2',credentials:'myS3') {
                s3Upload(bucket:"manan-deployment", workingDir:'build', includePathPattern:'**/*');
            }
        }
    }
    }
    }
}