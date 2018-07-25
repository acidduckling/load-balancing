# Really basic sample of nginx used as a load balancer
For running load tests, install loadtest globally through npm/yarn
```bash
yarn global add loadtest
```

Run a loadtest on the servers:

```bash
# Start the three web servers + nginx server:
docker-compose up
# run the load test:
# -t time limit in seconds
# -c number of clients
# --rps requests per second
loadtest -t 5 -c 100 --rps 100 http://localhost:80
```

nginx docs: https://nginx.org/en/docs/