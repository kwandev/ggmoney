import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'

const key = 'bffacc46061c4eaf9a40f07d0b9fdec9'
const organization = 'o390337'
const project = '5233120'

Sentry.init({
  dsn: `https://${key}@${organization}.ingest.sentry.io/${project}`,
  integrations: [new VueIntegration({ Vue, attachProps: true })]
})
