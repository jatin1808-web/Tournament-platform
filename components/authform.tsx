'use client'

import { useState } from 'react'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(isLogin ? 'Login functionality coming soon!' : 'Signup functionality coming soon!')
  }

  return (
    <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4">
        {isLogin ? 'Sign In' : 'Create Account'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
            required
          />
        </div>
        
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-lg font-semibold transition-all"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="w-full mt-4 text-gray-400 hover:text-white transition-colors"
      >
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
      </button>
    </div>
  )
}