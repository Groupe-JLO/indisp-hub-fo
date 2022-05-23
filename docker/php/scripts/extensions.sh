#!/bin/bash

# Override default configurations files with the one provided in conf/php7/conf.d/

for CONFIGURATION_FILE in $TMP_DIR/extensions/*.ini
do
	CONFFILE=${CONFIGURATION_FILE##*/}
	cat $TMP_DIR/extensions/$TMP_DIR$CONFFILE >> $DOCKER_EXTENSIONS_DIR/$CONFFILE
done
