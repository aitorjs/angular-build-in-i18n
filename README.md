Transladable string, translated to Spanish, English (base) and Basque.
Working with AOT. Creates one app per language.

# Steeps

- *ng build --aot*
- Anadir un string como traducible: <h1 i18n>Hello world!</h1>
- Crear la pantilla general con todas las traduciones: *ng xi18n --output-path src/i18n* o *npm run get-i18n*
- *cp src/i18n/messages.xlf src/i18n/messages.es.xlf*, suponiendo que queremos traducir la app a castellano.
- Modificar la traducción en messages.es.xlf (la linea que tiene la etiqueta <target>)

      <trans-unit id="[...]" datatype="html">
        <source>Hello World!</source>
        <target>Hola mundo!</target>
      </trans-unit>

Posibilidad 1: 
-  Servir la aplicación en castellano: ng serve --aot --i18n-file=src/i18n/messages.es.xlf --locale=es --i18n-format=xlf
(Eventualmente, *npm run serve-en*, *npm run serve-es*, npm run serve-eu
atajos para servir la app en ingles, castellano o euskara )
- Abrir http://localhost:4200

Posibilidad 2:
- Añadir esta linea como script al pacakge.json paara build-ear la app:
```
"build-i18n": "for lang in en es fr; do ng build --output-path=dist/$lang --aot -prod --bh /$lang/ --i18n-file=src/i18n/messages.$lang.xlf --i18n-format=xlf --locale=$lang; done"
```
- Buildear todos los idiomas: *npm run build-i18n*
- Copiar el contenido de dist, en el localhost de apache (*npm run i18n-apache*).
- Abrir en un navegador http://localhost/es, http://localhost/en, http://localhost/fr

https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358

# I18n

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.
