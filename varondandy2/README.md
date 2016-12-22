Abrir carpeta (VSC)
Agregar fichero index.html
	Un poquito de emmet h1{Hello World}
Agregar extension "View in browser"
"Quiero recargar automáticamente los cambios"
	npm list --depth=0 -g
	sudo npm install live-server -g
Agregar fichero main.css
	Un poquito más de emmet bgc
	Un poquito más de emmet link[href="main.css"]
Agregar fichero main.js
	Un poquito más de emmet script[src="main.js"]
	Un poquito más de emmet input[type="button"][value="greet"][onclick="greet('Sergio');"]
Escribir así CSS no mola, necesito SASS
	Crear fichero main.scss
	npm init -> package.json
	npm install node-sass --save-dev
	Pruebo el comando node_modules/.bin/node-sass main.scss main.css
	No puedo estar ejecutando siempre este comando
	https://www.npmjs.com/package/node-sass#command-line-interface le agrego -w 
		node_modules/.bin/node-sass -w main.scss main.css
	Pero tampoco quiero estar recordando ni este comando cada vez que arranque VSC ni el de live-server
		en package.json -> "start": "live-server & node-sass -w main.scss main.css" 
		ahora con "npm start" me pongo a funcionar
		pero hay 2 problemas: 1. live-server no es una dependencia de desarrollo y
			2. los ficheros a agregar en git son un montón (node_modules, etc.)
		resolviendo estos problemas:
			Primero 2, git. Agregar .gitignore con el texto node_modules ... pero ¿por qué no pillarlo de algún sitio?
				https://github.com/github/gitignore por ejemplo... espera... instalemos una extensión "gitignore"
				borramos el anterior .gitignore y agregamos uno de Node... ahora mejor
			Después 1, 
				sudo npm uninstall live-server -g
				npm install live-server --save-dev