pipeline {
    agent {
        docker{
            image "node:14-alpine"
            args "-p 3000:3000"
        }
    }

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing'
                sh 'npm install'
            }
        }
        stage('Building') {
            steps {
                echo 'Building....'
                sh 'npm build'
                echo 'Building docker image'
                sh 'docker build -t . servers-manager'
            }
        }
        stage('Deploy'){
            steps{
                sh 'docker run --name servers-manager -d -p 3000:3000 servers-manager'
            }
        }
    }
}
