// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()
require('channels')
import '../css/application.css'
import '../css/header.css'
import '../css/carousel.css'
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'

document.addEventListener("turbolinks:load", function() {
    FontAwesome.dom.i2svg();
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../images', true)
//const imagePath = (name) => images(name, true)

const favicons = require.context('../images', true)




//VueJS
import Vue from 'vue'
import App from '../app'
import RequestForm from '../components/RequestForm'
import ChoosePackage from "../components/ChoosePackage";
import Statistics from "../components/Statistics";
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.prototype.$http = axios;

import { vsButton, vsSelect, vsPopup, vsIcon } from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsIcon)
Vue.use(vsPopup)


document.addEventListener('turbolinks:load', () => {
    const el = document.getElementById("requestform")
    const props = JSON.parse(el.getAttribute('data'));
    if (el != null && props != null) {
        const requestform = new Vue({
            el,
            render: h => h(RequestForm, vsSelect, vsIcon, { props }),
        })
    }
})

document.addEventListener('turbolinks:load', () => {
    const el = document.getElementById("choosepackage")
    const props = JSON.parse(el.getAttribute('data'));
    if (el != null && props != null) {
        const choosepackage = new Vue({
            el,
            render: h => h(ChoosePackage, { props }),
        })
    }
});

document.addEventListener('turbolinks:load', () => {
    const el = document.getElementById("statistics");

    if (el != null) {
        const statistics = new Vue({
            el,
            render: h => h(Statistics),

        })

    }


});


/*document.addEventListener('turbolinks:load', () => {
    const el = document.getElementById("app");
    const props = JSON.parse(el.getAttribute('data'));

    if (el != null && props != null) {
        const app = new Vue({
            el,
            render: h => h(App, { props }),

        })

        console.log(app)
    }


})*/


document.addEventListener('turbolinks:load', () => {
var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function(event){
        event.preventDefault()
        toggleModal()
    })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
        isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
        toggleModal()
    }
};


function toggleModal () {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}
})