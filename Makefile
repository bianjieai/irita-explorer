setup:production
	cnpm install

run:
	npm run serve

build:
	npm run build

setup_and_run:setup run

setup_and_build:setup build

production:production_replace production_params

production_replace:
	cp ./productionConfig/productionConfig.js ./src; \
	# cp ./productionConfig/images/favicon.png ./public; \
	cp ./productionConfig/lang/* ./lang; \
	cp ./productionConfig/images/* ./src/assets; \
	# find ./productionConfig/images |grep -v -E 'favicon\.png | \.DS_Store' -exec cp {} ./src/assets;

production_params:
	node build-params.js

pp:production_params