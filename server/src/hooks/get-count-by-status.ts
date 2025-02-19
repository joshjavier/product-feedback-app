// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const getCountByStatus = async (context: HookContext) => {
  if (context.params.query.countByStatus !== undefined) {
    context.result = context.app.service('requests').getCountByStatus(context.data, context.params)
  }
}
