// Simple mock Firebase for now
export const auth = {
  currentUser: null
}

export const onAuthStateChanged = (auth: any, callback: any) => {
  // Mock implementation
  return () => {} // unsubscribe function
}

export const signOut = () => {
  return Promise.resolve()
}