
docker run -it -v $(pwd)/monaco-app:/data:z -u $(id -u):$(id -g) -p 9000:9000 -p 3001:3001 au-builder $*
