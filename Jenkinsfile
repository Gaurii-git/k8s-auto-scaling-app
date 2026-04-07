pipeline {
    agent any

    environment {
        IMAGE_NAME = "gauridockerr/myfirstnode"
        TAG = "latest"
    }

    stages {

        stage('Git Clone') {
            steps {
                echo 'Cloning repo...'
                git url:'https://github.com/Gaurii-git/k8s-auto-scaling-app.git', branch:'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building image...'
                bat "docker build -t %IMAGE_NAME%:%TAG% ."
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                   bat "echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                bat "docker push %IMAGE_NAME%:%TAG%"
            }
        }

        stage('Run Container') {
            steps {
                bat '''
                docker stop my-container || exit 0
                docker rm my-container || exit 0
                docker run -d -p 3000:3000 --name my-container %IMAGE_NAME%:%TAG%
                '''
            }
        }
    }
}