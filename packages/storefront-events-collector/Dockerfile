FROM node:20-alpine AS base

ARG PKG_NAME=@adobe/magento-storefront-event-collector
ARG PORT=8080

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune $PKG_NAME

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install dependencies (as they change less often)
COPY --from=builder /app/out/ .
RUN yarn install

# Build the project and its dependencies
# COPY --from=builder /app/out/full/ .

# the package builds on install
# RUN yarn turbo build --filter=$PKG_NAME...

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 commercejs
RUN adduser --system --uid 1001 commercejs
USER commercejs
COPY --from=installer /app .

CMD yarn serve . -l 8081
