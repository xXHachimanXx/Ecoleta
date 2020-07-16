#!/bin/bash
function Web() {
	cd ./web
	npm start
	cd ..
}

function Mobile() {
	cd ./mobile
	npm start
	cd ..
}

function Server() {
	cd ./server
	npm run knex:migrate &&
	npm run knex:seed &&
	npm run dev
	cd ..
}

function Atualizar() {
	git pull;
	clear;
	npm install;
	clear;

	#Atualizar backend
	cd ./server;
	npm install;
	cd ..;
	
	#Atualizar frontend
	cd ./web;
	npm install;
	cd ..;

	cd ./mobile;
	npm install;
	cd ..;
}

function Escolha() {
	
	echo "Qual versão do Ecoleta você deseja executar?"
	echo "1- Web"
	echo "2- Mobile"
	echo "3- Server"
	echo "4- Atualizar e instalar dependências"

	echo "Digite um código : "
	read VERSION
	
	case $VERSION in
		1) Web ;;
		2) Mobile ;;
		3) Server ;;
		4) Atualizar ;;
		*) echo "Opção invalida!";;

	esac
}

git pull && npm install;
clear;
case $1 in
	web) Web ;;
	mobile) Mobile ;;
	server) Server ;;
	update) Atualizar ;;
	"") Escolha ;;
	*) echo "Opção invalida!";;
esac



