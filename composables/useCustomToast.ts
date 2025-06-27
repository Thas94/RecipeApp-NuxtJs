import { useToast as usePrimeToast } from 'primevue/usetoast'
import {type ToastOptions} from '../models/toastOptions'

export const useCustomToast = () => {
  const toast = usePrimeToast()

  const showSuccess = (message: string, options?: ToastOptions) => {
    toast.add({
      severity: 'success',
      summary: options?.summary || 'Success',
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable ?? true,
      //sticky: options?.sticky || false
    })
  }

  const showError = (message: string, options?: ToastOptions) => {
    toast.add({
      severity: 'error',
      summary: options?.summary || 'Error',
      detail: message,
      life: options?.life || 5000,
      closable: options?.closable ?? true,
      //sticky: options?.sticky || false
    })
  }

  const showInfo = (message: string, options?: ToastOptions) => {
    toast.add({
      severity: 'info',
      summary: options?.summary || 'Info',
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable ?? true,
      //sticky: options?.sticky || false
    })
  }

  const showWarn = (message: string, options?: ToastOptions) => {
    toast.add({
      severity: 'warn',
      summary: options?.summary || 'Warning',
      detail: message,
      life: options?.life || 4000,
      closable: options?.closable ?? true,
      //sticky: options?.sticky || false
    })
  }

  const show = (severity: 'success' | 'info' | 'warn' | 'error', message: string, options?: ToastOptions) => {
    toast.add({
      severity,
      summary: options?.summary || severity.charAt(0).toUpperCase() + severity.slice(1),
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable ?? true,
      //sticky: options?.sticky || false
    })
  }

  const clear = () => {
    toast.removeAllGroups()
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showWarn,
    show,
    clear
  }
}