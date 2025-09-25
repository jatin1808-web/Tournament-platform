'use client'

import { useState, useEffect } from 'react'
import { Sword, Trophy, Users, Calendar, Gamepad2, User } from 'lucide-react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import AuthForm from '@/components/AuthForm'

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')
  const [user, setUser] = useState(null)
  const [showAuth, setShowAuth] = useState(false)

  // Authentication state tracking
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      alert('Signed out successfully!')
    } catch (error) {
      alert('Error signing out')
    }
  }

  const tournaments = [
    {
      id: 1,
      name: 'Valorant Weekly Cup',
      game: 'valorant',
      teams: 8,
      prize: '$500',
      date: '2024-01-15',
      status: 'registration',
      image: '🎯'
    },
    {
      id: 2, 
      name: 'Fortnite Duos Tournament',
      game: 'fortnite',
      teams: 16,
      prize: '$1000',
      date: '2024-01-20',
      status: 'registration',
      image: '🏹'
    },
    {
      id: 3,
      name: 'Free Fire MAX Clash',
      game: 'freefire', 
      teams: 32,
      prize: '$300',
      date: '2024-01-18',
      status: 'live',
      image: '🔥'
    },
    {
      id: 4,
      name: 'BGMI Championship',
      game: 'bgmi',
      teams: 64, 
      prize: '$2000',
      date: '2024-01-25',
      status: 'upcoming',
      image: '🇮🇳'
    },
    {
      id: 5,
      name: 'Valorant Ranked Tournament',
      game: 'valorant',
      teams: 24,
      prize: '$750',
      date: '2024-01-22',
      status: 'registration',
      image: '🎯'
    },
    {
      id: 6,
      name: 'Fortnite Squad Showdown',
      game: 'fortnite',
      teams: 48,
      prize: '$1500',
      date: '2024-01-28',
      status: 'upcoming',
      image: '🏹'
    }
  ]

  const filteredTournaments = activeTab === 'all' 
    ? tournaments 
    : tournaments.filter(t => t.game === activeTab)

  return (
    <>
      {/* Header */}
      <header className="bg-black/50 backdrop-blur border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Gamepad2 className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">TournamentHub</h1>
                <p className="text-gray-400 text-sm">Compete. Win. Dominate.</p>
              </div>
            </div>
            
            {/* Authentication Button */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm hidden md:inline">Welcome, {user.email}</span>
                </div>
                <button 
                  onClick={handleSignOut}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowAuth(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Ready to Compete?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players in Valorant, Fortnite, Free Fire MAX, and BGMI tournaments. 
            Win cash prizes and prove your skills!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all">
              Join Tournament
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-bold text-lg transition-all">
              Create Tournament
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-400/20 p-6 rounded-xl border border-blue-500/30">
            <Trophy className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white text-center">4</div>
            <div className="text-gray-400 text-center text-sm">Games</div>
          </div>
          <div className="bg-gradient-to-br from-green-600/20 to-green-400/20 p-6 rounded-xl border border-green-500/30">
            <Users className="w-10 h-10 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white text-center">128</div>
            <div className="text-gray-400 text-center text-sm">Teams</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-400/20 p-6 rounded-xl border border-purple-500/30">
            <Sword className="w-10 h-10 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white text-center">56</div>
            <div className="text-gray-400 text-center text-sm">Tournaments</div>
          </div>
          <div className="bg-gradient-to-br from-red-600/20 to-red-400/20 p-6 rounded-xl border border-red-500/30">
            <Calendar className="w-10 h-10 text-red-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white text-center">12</div>
            <div className="text-gray-400 text-center text-sm">Live Now</div>
          </div>
        </div>

        {/* Game Filters */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Games
          </button>
          <button 
            onClick={() => setActiveTab('valorant')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === 'valorant' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🎯 Valorant
          </button>
          <button 
            onClick={() => setActiveTab('fortnite')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === 'fortnite' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🏹 Fortnite
          </button>
          <button 
            onClick={() => setActiveTab('freefire')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === 'freefire' 
                ? 'bg-orange-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🔥 Free Fire MAX
          </button>
          <button 
            onClick={() => setActiveTab('bgmi')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === 'bgmi' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🇮🇳 BGMI
          </button>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map(tournament => (
            <div key={tournament.id} className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{tournament.image}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  tournament.status === 'live' ? 'bg-red-600 text-white' :
                  tournament.status === 'registration' ? 'bg-green-600 text-white' :
                  'bg-yellow-600 text-white'
                }`}>
                  {tournament.status === 'live' ? '🔴 LIVE' : 
                   tournament.status === 'registration' ? '✅ OPEN' : '⏰ SOON'}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {tournament.name}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Prize Pool:</span>
                  <span className="text-yellow-400 font-bold">{tournament.prize}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Teams:</span>
                  <span className="text-green-400">{tournament.teams} registered</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Date:</span>
                  <span className="text-blue-400">{tournament.date}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all group-hover:scale-105">
                {tournament.status === 'live' ? 'Join Now' : 
                 tournament.status === 'registration' ? 'Register Team' : 'Notify Me'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md">
            <button 
              onClick={() => setShowAuth(false)}
              className="absolute -top-12 right-0 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg hover:bg-red-700 transition-all"
            >
              ✕
            </button>
            <AuthForm />
          </div>
        </div>
      )}
    </>
  )
}