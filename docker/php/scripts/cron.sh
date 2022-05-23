#!/bin/bash

#  Start the cron service
/etc/init.d/cron start
crontab /etc/cron.d/*

echo "Cron service started"
crontab -l
