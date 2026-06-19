SHELL := /bin/bash

.PHONY: install serve build css clean

NVM_SH := source "$(HOME)/.nvm/nvm.sh" &&

install:
	bundle install
	$(NVM_SH) npm install

css:
	$(NVM_SH) npx @tailwindcss/cli -i _css/styles.css -o styles.css --minify

serve: css
	bundle exec jekyll serve --livereload --host 0.0.0.0

build: css
	bundle exec jekyll build

clean:
	rm -rf _site .jekyll-cache
