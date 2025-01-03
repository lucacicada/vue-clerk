import type { UseSignInReturn } from '@clerk/types'
import { computed } from 'vue'
import { eventMethodCalled } from '@clerk/shared/telemetry'
import type { ToComputedRefs } from '../utils'
import { toComputedRefs } from '../utils'
import { useClerkProvider } from './useClerkProvider'

export function useSignIn(): ToComputedRefs<UseSignInReturn> {
  const { clerk, clientCtx } = useClerkProvider()

  clerk.telemetry?.record(eventMethodCalled('useSignIn'))

  const result = computed<UseSignInReturn>(() => {
    if (!clientCtx.value)
      return { isLoaded: false, signIn: undefined, setActive: undefined }

    return {
      isLoaded: true,
      signIn: clientCtx.value.signIn,
      setActive: clerk.setActive,
    }
  })

  return toComputedRefs(result)
}
