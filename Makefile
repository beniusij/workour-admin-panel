include .env

.EXPORT_ALL_VARIABLES:

build:
	@docker build -t workour_admin_panel .

start:
	@docker run -it -p 3000:3000 --rm --name=workour_admin_panel workour_admin_panel

clean:
	@docker image rm workour_admin_panel