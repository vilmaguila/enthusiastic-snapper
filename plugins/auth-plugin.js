import Vue from 'vue'
import { domain, clientId } from '../auth0-config.json'
import { Auth0Plugin } from './auth0-spa.js'

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: ({ app }, appState) => {
    app.router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  },
})
