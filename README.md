# App2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Instalar Bootstrap, JQuery e Tether

```
yarn add bootstrap Jquery techer
```

No arquivo angular.json acrescentar as bibliotecas para que fiquem de uso global



```
      "styles": [

      "src/styles.css",       "node_modules/bootstrap/dist/css/bootstrap.min.css"

      ],

"scripts": [

	"node_modules/tether/dist/js/tether.js",       	"node_modules/jquery/dist/jquery.min.js",       	"node_modules/bootstrap/dist/js/bootstrap.min.js"

      ]
```



Criar componentes: topo, home e rodape



ng g c topo --spec=false



```whatever
ng generate component --skipTests=true topo
```

```
ng generate component --skipTests=true home
```

```
ng generate component --skipTests=true rodape
```

