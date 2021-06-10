# BibliotecaEscolar

Es recomendable abrir el proyecto a través de Visual Code para luego exportar de manera limpia a Android Studio y así evitar errores.

Desde Visual Studio se borraría la carpeta de Android que aparece para luego ejecutar en este orden los siguientes comandos:

1- ionic capacitor add android (importar clases necesarios al lenguaje nativo de Android)
2- ionic capacitor copy android (durante el desarrollo de la APP es necesario para cualquier cambio que se haga)

Desde Visual Studio puede visualizarse la APP en tiempo real en el navegador (habrá que presionar F12 para verlo en vista de móvil), el servicio se inicia con el siguiente comando:

- ionic serve (desde el directorio donde tenemos la aplicación, se puede hacer desde el CMD o directamente desde el propio Visual Code)

De esta manera podríamos previsualizar los cambios que estamos haciendo en nuestra aplicación para luego exportar a Android.
Hay que tener en cuenta que la previsualización que nos ofrece Visual Studio desde el navegador no es la vista final solo una vista preliminar para no trabajar a ciegas.
