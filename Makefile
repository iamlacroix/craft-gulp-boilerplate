.PHONY: all

# Replace this example domain with the real thing
SITE_DIR = www.example.com:~/default

%:
	@:

# This command should be followed by the remote SSH user account
#
# Usage:
#   make content <USER>
#
content:
	rsync -azP \
		$(filter-out $@,$(MAKECMDGOALS))@$(SITE_DIR)/public/content \
		public
	rsync -azP \
		$(filter-out $@,$(MAKECMDGOALS))@$(SITE_DIR)/craft/storage/userphotos \
		craft/storage

deploy:
	git push origin master:production

stage:
	git push origin master:staging

deps:
	npm install && composer update

install_craft:
	curl -L http://buildwithcraft.com/latest.zip\?accept_license\=yes \
	| tar -xf- -C . craft/app

install: install_craft deps

watch:
	node_modules/.bin/gulp
