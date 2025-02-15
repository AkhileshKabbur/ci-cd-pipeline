# ci-cd-pipeline
CI/CD Pipeline with Jenkins, Docker, and Kubernetes
Project Overview
This project demonstrates a CI/CD pipeline using Jenkins, Docker, and Kubernetes. It automates the process of building, testing, and deploying a Node.js backend and a frontend application. The pipeline ensures continuous integration and continuous deployment.

Technologies Used
Jenkins – For automating the CI/CD pipeline
GitHub – For source code management
Docker – For containerizing the application
Docker Hub – For storing built images
Kubernetes – For deployment and container orchestration
Project Structure

ci-cd-pipeline/
│── backend/             # Node.js backend application
│── frontend/            # Frontend application
│── k8s/                 # Kubernetes manifests (deployment, services)
│── Jenkinsfile          # Jenkins pipeline configuration
│── README.md            # Project documentation

CI/CD Pipeline Stages

Clone Repository – Fetches source code from GitHub
Build Docker Images – Builds Docker images for backend and frontend
Push to Docker Hub – Uploads images to Docker Hub
Deploy to Kubernetes – Deploys the applications using Kubernetes
Setup Instructions
1. Clone the Repository

git clone https://github.com/AkhileshKabbur/ci-cd-pipeline.git
cd ci-cd-pipeline


2. Configure Jenkins

Install required Jenkins plugins:
Pipeline
Docker Pipeline
Kubernetes CLI
Git
Add Docker Hub credentials in Jenkins (docker-hub-creds)

3. Run Jenkins Pipeline

Open Jenkins Dashboard
Create a Pipeline Job
Configure to use the Jenkinsfile
Click Build Now

4. Deploy to Kubernetes
Ensure Kubernetes cluster is running, then apply the manifests:

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

5. Verify Deployment
Check running pods and services:

kubectl get pods
kubectl get services
