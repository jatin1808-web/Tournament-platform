'use client'

import { useState } from 'react'
import { Sword, Trophy, Users, Calendar } from 'lucide-react'

export default function Home() {
  const [tournaments] = useState([
    {
      id: 1,
      name: 'Valorant Weekly Cup',
      game: 'Valorant',
      teams: 8,
      prize: '$500',
      date: '2024-01-15'
    },
    {
      id: 2, 
      name: 'Fortnite Duos Tournament',
      game: 'Fortnite',
      teams: 16,
      prize: '$1000',
      date: '2024-01-20'
    },
    {
      id: 3,
      name: 'Free Fire MAX Clash',
      game: 'Free Fire MAX', 
      teams: 32,
      prize: '$300',
      date: '2024-01-18'
    },
    {
      id: 4,
      name: 'BGMI Championship',
      game: 'BGMI',
      teams: 64, 
      prize: '$2000',
      date: '2024-01-25'
    }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-white text-center">
            🎮 Tournament Platform
          </h1>
          <p className="text-gray-300 text-center mt-2">
            Host and compete in Valorant, Fortnite, Free Fire, and BGMI tournaments
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-600/20 p-4 rounded-lg text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-gray-300">Games</div>
          </div>
          <div className="bg-green-600/20 p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">120</div>
            <div className="text-gray-300">Teams</div>
          </div>
          <div className="bg-purple-600/20 p-4 rounded-lg text-center">
            <Sword className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">56</div>
            <div className="text-gray-300">Tournaments</div>
          </div>
          <div className="bg-red-600/20 p-4 rounded-lg text-center">
            <Calendar className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">12</div>
            <div className="text-gray-300">Live Now</div>
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map(tournament => (
            <div key={tournament.id} className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
              <div className="flex items-center text-gray-300 mb-2">
                <span className="bg-blue-600 px-2 py-1 rounded text-sm">{tournament.game}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 mb-4">
                <div>🏆 ${tournament.prize}</div>
                <div>👥 {tournament.teams} teams</div>
                <div>📅 {tournament.date}</div>
                <div>⚡ Registration Open</div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg font-semibold transition-all">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}