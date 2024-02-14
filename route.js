import * as actions from './actions.js'
export class Router {
  routes = {}
  
  add(routeName, page) {
    this.routes[routeName] = page
  }
  
  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
    
    const page = event.target.dataset.action
    actions[page]()
    
    this.handle()
  } 

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#content').innerHTML = html
    })
  } 
}
