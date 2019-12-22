import attribution from '@pearmill/attribution.js'
import * as log from './log'
import * as api from './api'

attribution.settings({
  ignoreVisitsWithoutUTMParameters: false
})

let pearmillSettings = {
  api_key: null
}

export const init = (apiKey, settings = {}) => {
  pearmillSettings = {
    ...settings,
    apiKey: apiKey
  }
}

export const load = init

export const identify = (userId, traits = {}) => {
  log.info('[identify]', userId, traits)
  if (!pearmillSettings.apiKey) {
    return log.error(`Pearmill isn't loaded properly. Make sure to call pearmill.load first.`)
  }

  api.post(pearmillSettings.apiKey, `identify`, {}, {
    userId,
    traits,
    params: attribution.params()
  }).catch(e => log.error('[idenitfy]', e))
}

export const track = (event, properties = {}) => {
  log.info('[track]', event, properties)
  if (!pearmillSettings.apiKey) {
    return log.error(`Pearmill isn't loaded properly. Make sure to call pearmill.load first.`)
  }

  api.post(pearmillSettings.apiKey, `track`, {}, {
    event,
    properties,
    params: attribution.params()
  }).catch(e => log.error('[track]', e))
}

export const page = () => {
  log.info('[page]')
  if (!pearmillSettings.apiKey) {
    return log.error(`Pearmill isn't loaded properly. Make sure to call pearmill.load first.`)
  }

  track('_page_visit')
}
