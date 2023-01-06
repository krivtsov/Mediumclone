i:
	npm i

dev:
	npm run start:dev

db-drop:
	npm run db:drop

db-create:
	npm run db:create ./src/migrations/$(filter-out $@,$(MAKECMDGOALS))

db-migrate:
	npm run db:migrate

%:
	@:
