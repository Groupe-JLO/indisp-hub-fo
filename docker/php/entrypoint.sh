#!/bin/bash

/bin/bash /tmp/scripts/cron.sh

docker-php-entrypoint "$@"
