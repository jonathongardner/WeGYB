# WeGBY
We-Got-Your-Back (WeGBY - Wig-Bee) is to help bike rider know what is happening
behind them. How it works:
  - Install the server on a RaspberryPi with a camera
  - Setup the RaspberryPi camera facing the back of the bike
  - Connect to the RaspberryPi network (WeGBY)
  - Navigate to the SPA (local.WeGBY.app) and start riding

# Docker
## Build
```sh
docker build -t wegyb .
```

# Dev
## Docker API
```sh
docker build -t wegyb-dev-api -f Dockerfile.dev-api .
docker run --rm -it --device /dev/video0 -p 3000:3000 -v $PWD/tmp:/video -v /etc/localtime:/etc/localtime wegyb-dev-api serve --output /video
```
## Docker Compose
```sh
docker compose up
```


# TODO
1. websocket blank screen if not updated in x
1. fix recording
1. add car identifier
