# CR Groups React Client
This project is a new version of the CRGroups Client.

## Prerequisites
CR Groups apps leverage Docker for their development environments.  Having Docker installed on your system is a requirement.

Dev environments were created on Windows, using Windows System for Linux 2 + Docker Desktop WSL 2 backed
- [Windows Subsystem for Linux 2](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [Docker Desktop WSL 2 backend](https://docs.docker.com/docker-for-windows/wsl/)

## Getting Started
1. Build the development containers

```
docker-compose build
```

2. Deploy the development containers

```
docker-compose up -d
```

You will now have two running development environments, one for building the **client** and one for building the **server**

> NOTE: The **client** container is provided for convience for rapidly developing changes in the client.   The client container only has access to 'mock fixture' data, meaning the list of groups and events is fake.  Once you perform a client '

3. Enter interactive shell in the container
```
docker exec -it server sh
```

## Cleaning up
```
docker-compose down
```
