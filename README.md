# angular-typescript-sample


**`file: package.json`**

```json
{
  "name": "angular-quickstart",
  "version": "1.0.0",
  "description": "QuickStart package.json from the documentation, supplemented with testing support",
  "scripts": {
    "start": "gulp && concurrently \"tsc -w\" \"lite-server\" ",
    "e2e": "tsc && concurrently \"http-server -s\" \"protractor protractor.config.js\" --kill-others --success first",
    "lint": "tslint ./app/**/*.ts -t verbose",
    "lite": "lite-server",
    "pree2e": "webdriver-manager update",
    "test": "tsc && concurrently \"tsc -w\" \"karma start karma.conf.js\"",
    "test-once": "tsc && karma start karma.conf.js --single-run",
    "tsc": "tsc",
    "tsc:w": "tsc -w"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@angular/common": "~2.4.0",
    "@angular/compiler": "~2.4.0",
    "@angular/core": "~2.4.0",
    "@angular/forms": "~2.4.0",
    "@angular/http": "~2.4.0",
    "@angular/platform-browser": "~2.4.0",
    "@angular/platform-browser-dynamic": "~2.4.0",
    "@angular/router": "~3.4.0",

    "angular-in-memory-web-api": "~0.2.2",
    "systemjs": "0.19.40",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.8",
    "rxjs": "5.0.1",
    "zone.js": "^0.7.4"
  },
  "devDependencies": {
    "concurrently": "^3.1.0",
    "lite-server": "^2.2.2",
    "typescript": "~2.0.10",

    "canonical-path": "0.0.2",
    "http-server": "^0.9.0",
    "tslint": "^3.15.1",
    "lodash": "^4.16.4",
    "jasmine-core": "~2.4.1",
    "karma": "^1.3.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-cli": "^1.0.1",
    "karma-jasmine": "^1.0.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~4.0.14",
    "rimraf": "^2.5.4",

    "@types/node": "^6.0.46",
    "@types/jasmine": "^2.5.36",

    "gulp": "^3.9.1",
    "gulp-minify": "0.0.14",
    "gulp-typescript": "^3.1.3",
  },
  "repository": {}
}
```


**`file: tsconfig.json`**

```typescript
{
  "compilerOptions": {
    "target": "es5", // version javasript
    "module": "commonjs", // When using TypeScript, and configuring the compiler to the commonjs module, the compiler creates code that is no longer based on SystemJS.
    "moduleResolution": "node",
    "sourceMap": true, // create file demo.js.map (json)
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [ "es2015", "dom" ],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true,
    "outDir": "./public/angular" // path: directory to output
  }
}
```

**`file: systemjs.config.js`**

```javascript
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app_angular is within the app_angular folder
            app: 'public/angular',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.min.js', // file main (public/angular/main.js)
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
```

**`file: gulpfile.js`**

```javascript
var gulp = require("gulp");
var ts = require("gulp-typescript");
var minify = require('gulp-minify');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(minify({
            ext:{
                src:'.js', // name & extension: file
                min:'.min.js' // name & extension: minify file
            },
            exclude: ['tasks'], // Will not minify files in the dirs.

            ignoreFiles: ['.combo.js', '-min.js'] // Will not minify files which matches the pattern.
        }))
        .pipe(gulp.dest("public/angular")); // directory output
});
```