# fino
Really BASIC template engine in JavaScript

# Quick tutorial
### Create a Fino object
```javascript
var f = new Fino()
```
### Add template
```javascript
f.addTemplateFromString('welcome', '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>::title::</title></head><body><h1>::message::</h1></body></html>')
```
### Render
```javascript
console.log(f.render('welcome', { 'title': 'Página de bienvenida', 'message': '¡Bienvenido!' }))
```

# TODO list
- [ ] Lot of things
