

/** @jsx h */
import { app } from 'hyperapp'
import { View } from './views/index.jsx'
import './styles/app.scss'

const store = {
  givenName: "Maria",
  familyName: "Mazur",
  email: "maria.mazur@example.com",
  language: navigator.language || navigator.userLanguage,
  city: "Berlin"

}

app({
  init: store,
  view: View,
  node: document.getElementById('app')
})
