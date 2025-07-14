"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1 // Controls the maximum number of toasts displayed
const TOAST_REMOVE_DELAY = 1000 // Reduced for more realistic toast dismissal (1 second)

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// Dispatch function (forward declaration for addToRemoveQueue)
let dispatch: React.Dispatch<Action>;

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    // If a timeout already exists for this toast, clear it to prevent
    // premature removal if it's being dismissed again or updated.
    clearTimeout(toastTimeouts.get(toastId));
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    // Only dispatch REMOVE_TOAST if dispatch has been initialized
    if (dispatch) {
      dispatch({
        type: "REMOVE_TOAST",
        toastId: toastId,
      })
    }
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      // Clear timeout for any existing toast with the same ID if it's being re-added/updated
      if (action.toast.id && toastTimeouts.has(action.toast.id)) {
        clearTimeout(toastTimeouts.get(action.toast.id));
        toastTimeouts.delete(action.toast.id);
      }
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      // Clear timeout if toast is explicitly removed
      if (action.toastId && toastTimeouts.has(action.toastId)) {
          clearTimeout(toastTimeouts.get(action.toastId));
          toastTimeouts.delete(action.toastId);
      }

      if (action.toastId === undefined) {
        // Clear all timeouts when all toasts are removed
        toastTimeouts.forEach(timeout => clearTimeout(timeout));
        toastTimeouts.clear();
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function updateState(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

// Assign dispatch after its definition, if needed for circular dependency
dispatch = updateState; // Assign the actual dispatch function

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  // Use useReducer for local state management that mimics the global state updates
  // This helps React optimize re-renders
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    // Corrected dependency array: setState is stable
    const listener = (newState: State) => {
      // Only update if the toasts array reference has changed
      if (newState.toasts !== state.toasts) {
        setState(newState);
      }
    };

    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }, [state.toasts]); // Depend on state.toasts to re-subscribe if its reference changes

  // Memoize the dispatch function returned by the hook to prevent unnecessary re-renders
  // of components that consume useToast
  const memoizedDismiss = React.useCallback((toastId?: string) => {
    dispatch({ type: "DISMISS_TOAST", toastId });
  }, []); // No dependencies as `dispatch` is a stable global function

  const memoizedToast = React.useCallback(toast, []); // `toast` is a stable global function

  return {
    ...state,
    toast: memoizedToast,
    dismiss: memoizedDismiss,
  }
}

export { useToast, toast }