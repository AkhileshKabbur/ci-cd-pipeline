pipeline {
    agent any  // Runs on any available Jenkins agent

    environment {
        DOCKER_HUB_USER = 'akhileshkabbur'  // Replace with your DockerHub username
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/AkhileshKabbur/ci-cd-pipeine.git'  // Replace with your repository URL
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $DOCKER_HUB_USER/backend-app ./backend'
                sh 'docker build -t $DOCKER_HUB_USER/frontend-app ./frontend'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-creds', url: '']) {
                    sh 'docker push $DOCKER_HUB_USER/backend-app'
                    sh 'docker push $DOCKER_HUB_USER/frontend-app'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
            }
        }
    }
}
