FROM php:7.4-fpm

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Define variables
ENV HOST_EXTENSIONS_DIR="./conf.d"
ENV HOST_CONF_DIR="./php-fpm.d"
ENV HOST_SCRIPTS_DIR="./scripts/"

ENV DOCKER_TMP_DIR="/tmp"
ENV DOCKER_EXTENSIONS_DIR="/usr/local/etc/php/conf.d"
ENV DOCKER_CONF_DIR="/usr/local/etc/php-fpm.d"

ARG XDEBUG_ENABLED
ARG DEV_MODE

# Extensions installation
RUN apt-get update && apt-get install -y \
 # GD dependencies
 libpng-dev libxpm-dev libvpx-dev libfreetype6-dev libjpeg-dev libonig-dev libjpeg62-turbo-dev \
 zlib1g-dev libicu-dev libxslt-dev libxml2-dev libzip-dev \
 # LDAP dependencies
 libldap2-dev libldap-2.4-2 \
 # Git & OpenSSH for Composer fetching
 openssh-client git curl cron \
    && ln -s /usr/lib/x86_64-linux-gnu/libldap.so /usr/lib/libldap.so \
    && ln -s /usr/lib/x86_64-linux-gnu/liblber.so /usr/lib/liblber.so \
    && docker-php-ext-install -j$(nproc) ldap

RUN docker-php-ext-install -j$(nproc) pdo_mysql \
    && docker-php-ext-install -j$(nproc) bcmath \
    && docker-php-ext-install -j$(nproc) mbstring \
    && docker-php-ext-install -j$(nproc) opcache \
    && docker-php-ext-install -j$(nproc) zip \
    && docker-php-ext-install -j$(nproc) intl \
    && docker-php-ext-install -j$(nproc) xsl \
    && docker-php-ext-install -j$(nproc) xml \
    && docker-php-ext-install -j$(nproc) soap \
    && docker-php-ext-install -j$(nproc) sockets \
    && docker-php-ext-configure gd \
           --with-freetype \
           --with-jpeg \
           --with-xpm \
    && docker-php-ext-install -j$(nproc) gd

#RUN if [ "$XDEBUG_ENABLED" = 1 ] ; then pecl install xdebug && docker-php-ext-enable xdebug ; fi
RUN pecl install xdebug && docker-php-ext-enable xdebug

# Append custom extensions configuration which override default configuration for all extensions
COPY $HOST_EXTENSIONS_DIR $TMP_DIR/extensions

# Add custom configuration for PHP
COPY $HOST_CONF_DIR $DOCKER_CONF_DIR

# Copy scripts directory to Docker tmp directory
COPY $HOST_SCRIPTS_DIR $DOCKER_TMP_DIR/scripts

RUN chmod +x ${DOCKER_TMP_DIR}/scripts/extensions.sh
RUN /bin/bash ${DOCKER_TMP_DIR}/scripts/extensions.sh

ADD entrypoint.sh /entrypoint.sh
ADD scripts/cron.sh /usr/local/bin/cron

RUN chmod +x /usr/local/bin/cron


RUN docker-php-ext-install -j$(nproc) sockets mysqli

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENTRYPOINT ["/bin/bash", "/entrypoint.sh", "php-fpm"]

EXPOSE 9000
