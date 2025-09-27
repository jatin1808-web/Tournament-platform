'use client'

import { useState } from 'react'

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
    }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
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

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tournaments.map(tournament => (
            <div key={tournament.id} className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
              <p className="text-gray-300">Game: {tournament.game}</p>
              <p className="text-gray-300">Prize: {tournament.prize}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}