'use client'

import { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (isLogin) {
        // Sign in with Firebase
        await signInWithEmailAndPassword(auth, email, password)
        alert('🎮 Welcome back! Signed in successfully!')
      } else {
        // Create new account with Firebase
        await createUserWithEmailAndPassword(auth, email, password)
        alert('✅ Account created successfully! Check your email for verification.')
      }
    } catch (error: any) {
      alert(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4">
        {isLogin ? 'Sign In to TournamentHub' : 'Create Your Account'}
      </h2>
      
      <form onSubmit={handleAuth} className="space-y-4">
        <div>
          <label className="text-white text-sm mb-2 block">Email</label>
          <input
            type="email"
            placeholder="gamer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        
        <div>
          <label className="text-white text-sm mb-2 block">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '🔄 Processing...' : (isLogin ? '🎮 Sign In' : '🚀 Create Account')}
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          {isLogin ? "New gamer? Create an account" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  )
}