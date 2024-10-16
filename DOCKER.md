# Hosting on docker

This can be improved, but the docker references came from [this project](https://github.com/vercel/turborepo/tree/main/examples/with-docker) from the turbo starter examples.

If you have docker and docker compose installed, you should be able to run

```zsh
docker compose up
```

You can access the files by going to these endpoints
```bash
# for the sdk script
http://localhost:8081/packages/storefront-events-collector/dist/index.js

# for the collector script
http://localhost:8081/packages/storefront-events-collector/dist/index.js
```

