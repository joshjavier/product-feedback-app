// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'
import { LocalStrategy } from '@feathersjs/authentication-local'
import { oauth, OAuthProfile, OAuthStrategy } from '@feathersjs/authentication-oauth'

import type { Application } from './declarations'
import { Params } from '@feathersjs/feathers'

declare module './declarations' {
  interface ServiceTypes {
    authentication: AuthenticationService
  }
}

class GitHubStrategy extends OAuthStrategy {
  async getEntityData(profile: OAuthProfile, existing: any, params: Params): Promise<{ [x: string]: any }> {
    const baseData = await super.getEntityData(profile, existing, params)

    return {
      ...baseData,
      avatar: profile.avatar_url,
      username: profile.login
    }
  }
}

export const authentication = (app: Application) => {
  const authentication = new AuthenticationService(app)

  authentication.register('jwt', new JWTStrategy())
  authentication.register('local', new LocalStrategy())
  authentication.register('github', new GitHubStrategy())

  app.use('authentication', authentication)
  app.configure(oauth())
}
