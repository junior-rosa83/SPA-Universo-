import { Router } from './route.js'
const links = document.querySelector("header nav a")

const router = new Router()
router.add("/home", "/pages/home.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add("/universo", "pages/universo.html")
router.add(404, "pages/404.html")

router.handle() 

window.onpopstate = () => router.handle()
window.route = () => router.route()