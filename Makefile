include .env

.EXPORT_ALL_VARIABLES:

build:
	@docker build -t workour_admin_panel .

start:
	@docker run -it\
	 -v ${PWD}/src:/app/src\
	 -p 3001:3000\
	 --rm --name=workour_admin_panel\
	 workour_admin_panel

clean:
	@docker image rm workour_admin_panel