#!/bin/bash
function Web() {
	cd ./web
	npm install && npm start
	cd ..
}

function Mobile() {
	cd ./mobile
	npm install && npm start
	cd ..
}
clear;
git pull &&
npm install;

cd ./server;
npx knex migrate:latest --knexfile knexfile.ts && run dev
cd ..;

echo "Qual versão do Ecoleta você deseja executar?"
echo "Digite um código :"
echo "1- Web"
echo "2- Mobile"
read VERSION

case $VERSION in
	1) Web ;;
	2) Mobile ;;
	*) echo "Opção invalida!";;
esac





