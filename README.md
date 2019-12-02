# System Design for Lalalime Similar Products Component

> Optimized and horizontally scaled back-end of Lululemon clone. Seeded 10M records into both MongoDB and PostgreSQL in under 10 minutes. Deployed, horizontally scaled micro-service using PostgreSQL to 4 EC2 instances, and used Nginx Load Balancer (Round-Robin technique) to handle a throughput of 2,000 RPS with 0.5% error rate and an average latency of 182 ms. Deployed, horizontally scaled micros-service using MongoDb to 4 EC2 instances, and used Nginx Load Balancer (Round-Robin technique) to handle a throughput of 1,300 RPS with 0.0% error rate and average latency of 72 ms. 

## Inherited Component
  - https://github.com/sdc-lululemon/lalalime-similar-products

## Related Components

  - https://github.com/emilyayang/lalalime-reviews
  - https://github.com/sdc-lululemon/lalalime-navbar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

