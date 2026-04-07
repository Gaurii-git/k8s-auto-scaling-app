# Containerized Application Deployment with Kubernetes (Minikube / AWS)

This project demonstrates deployment of a **containerized application** using Kubernetes to achieve **scalability**, **high availability**, and **efficient load balancing**. The application is packaged using Docker and orchestrated using Kubernetes on Minikube (local) and AWS (cloud).

---

## Features

- **Containerized Deployment**
  - Built Docker images for the application.
  - Deployed containers as Kubernetes Pods and Deployments.

- **Kubernetes Orchestration**
  - Managed application lifecycle using Deployments.
  - Ensured desired state with Kubernetes controllers.

- **Service Exposure**
  - Configured Kubernetes Services to expose the application externally.

- **Auto Scaling**
  - Implemented Horizontal Pod Autoscaler (HPA) to scale pods based on resource usage.

- **Load Balancing**
  - Distributed traffic across multiple pods for better performance.

- **Self-Healing**
  - Kubernetes automatically restarts failed containers and maintains availability.

---

## Technologies Used

- **Docker** – Containerization of application
- **Kubernetes** – Container orchestration
- **Minikube** – Local Kubernetes cluster
- **AWS** – Cloud deployment
- **Kubectl** – Kubernetes CLI tool

---

## Project Structure
├── Dockerfile # Docker image configuration
├── deployment.yaml # Kubernetes Deployment configuration
├── service.yaml # Kubernetes Service configuration
├── hpa.yaml # Horizontal Pod Autoscaler configuration
├── app/ # Application source code
└── README.md # Project documentation


---

## Prerequisites

- Docker installed
- Kubernetes CLI (kubectl)
- Minikube (for local setup)
- AWS account (for cloud deployment)

---

## Setup & Deployment

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <your-repo-folder>
