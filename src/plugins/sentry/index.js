import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'

const key = process.env.VUE_APP_SENTRY_KEY
const organization = process.env.VUE_APP_SENTRY_ORGANIZATION
const project = process.env.VUE_APP_SENTRY_PROJECT

Sentry.init({
  dsn: `https://${key}@${organization}.ingest.sentry.io/${project}`,
  integrations: [new VueIntegration({ Vue, attachProps: true })]
})
