
FROM php:8.3-apache


RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install pdo pdo_mysql


RUN a2enmod rewrite


RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf


COPY . /var/www/html


COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --prefer-dist


RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache


RUN touch /var/www/html/index.php


EXPOSE 8000


CMD ["apache2-foreground"]