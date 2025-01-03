import type { UseUserReturn } from '@clerk/types'
import { computed } from 'vue'
import type { ToComputedRefs } from '../utils'
import { toComputedRefs } from '../utils'
import { useClerkProvider } from './useClerkProvider'

export function useUser(): ToComputedRefs<UseUserReturn> {
  const { userCtx } = useClerkProvider()

  const result = computed<UseUserReturn>(() => {
    if (userCtx.value === undefined)
      return { isLoaded: false, isSignedIn: undefined, user: undefined }

    if (userCtx.value === null)
      return { isLoaded: true, isSignedIn: false, user: null }

    return { isLoaded: true, isSignedIn: true, user: userCtx.value }
  })

  return toComputedRefs(result)
}
