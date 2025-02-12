pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'akhileshkabbur'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/AkhileshKabbur/ci-cd-pipeline.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker build -t %DOCKER_HUB_USER%/backend-app:latest ./backend'
                bat 'docker build -t %DOCKER_HUB_USER%/frontend-app:latest ./frontend'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: '02dabdc5-bc06-44ee-a2b5-f1ecbdf9d7e8', url: '']) {
                    bat 'docker push %DOCKER_HUB_USER%/backend-app:latest'
                    bat 'docker push %DOCKER_HUB_USER%/frontend-app:latest'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s/deployment.yaml'
                bat 'kubectl apply -f k8s/service.yaml'
            }
        }
    }
}
