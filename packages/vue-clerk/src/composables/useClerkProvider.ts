import { inject } from 'vue'
import { VueClerkInjectionKey } from '../keys'

export function useClerkProvider() {
  const ctx = inject(VueClerkInjectionKey)

  if (!ctx) {
    throw new Error(
      'This composable can only be used when the Vue Clerk plugin is installed. Learn more: https://vue-clerk.com/plugin',
    )
  }

  return ctx
}
