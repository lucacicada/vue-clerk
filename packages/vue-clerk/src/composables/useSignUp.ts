import type { UseSignUpReturn } from '@clerk/types'
import { computed } from 'vue'
import { eventMethodCalled } from '@clerk/shared/telemetry'
import type { ToComputedRefs } from '../utils'
import { toComputedRefs } from '../utils'
import { useClerkProvider } from './useClerkProvider'

export function useSignUp(): ToComputedRefs<UseSignUpReturn> {
  const { clerk, clientCtx } = useClerkProvider()

  clerk.telemetry?.record(eventMethodCalled('useSignUp'))

  const result = computed<UseSignUpReturn>(() => {
    if (!clientCtx.value)
      return { isLoaded: false, signUp: undefined, setActive: undefined }

    return {
      isLoaded: true,
      signUp: clientCtx.value.signUp,
      setActive: clerk.setActive,
    }
  })

  return toComputedRefs(result)
}
