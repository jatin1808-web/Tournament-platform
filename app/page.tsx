'use client'

import { useState } from 'react'

export default function Home() {
  const [activeGame, setActiveGame] = useState('freefire')

  // FREE FIRE TOURNAMENTS - YOUR EXACT STRUCTURE
  const freeFireTournaments = [
    // ₹50 Rooms (2)
    {
      id: 1, entryFee: 50, killPrize: 10, time: "7:00 PM", 
      title: "BEGINNER'S ARENA", spots: "12/25", bonus: "Perfect for warm-up!"
    },
    {
      id: 2, entryFee: 50, killPrize: 10, time: "7:30 PM", 
      title: "ROOKIE SHOWDOWN", spots: "8/25", bonus: "Low risk, high fun!"
    },
    // ₹100 Rooms (4) 
    {
      id: 3, entryFee: 100, killPrize: 25, time: "8:00 PM",
      title: "ELITE COMBAT", spots: "15/25", bonus: "⚡ 2x more skilled players!"
    },
    {
      id: 4, entryFee: 100, killPrize: 25, time: "8:15 PM", 
      title: "PRO PRACTICE", spots: "12/25", bonus: "🏆 Better competition!"
    },
    // ₹200 Rooms (4)
    {
      id: 5, entryFee: 200, killPrize: 50, time: "8:30 PM",
      title: "CHAMPION TRIALS", spots: "18/25", bonus: "💰 5x higher ROI potential!"
    },
    {
      id: 6, entryFee: 200, killPrize: 50, time: "8:45 PM",
      title: "MASTER QUALIFIER", spots: "20/25", bonus: "🎯 Serious players only!"
    },
    // ₹500 Rooms (2)
    {
      id: 7, entryFee: 500, killPrize: 100, time: "9:00 PM", 
      title: "LEGENDARY SHOWDOWN", spots: "22/25", bonus: "💎 VIP Room - Elite Players!"
    },
    {
      id: 8, entryFee: 500, killPrize: 100, time: "9:15 PM",
      title: "GRAND MASTER", spots: "24/25", bonus: "🔥 Where pros compete!"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-red-900">
      {/* HERO SECTION - MOTIVATIONAL */}
      <section className="text-center py-16 bg-black/50">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
          ELITE ESPORTS
        </h1>
        <p className="text-2xl text-gray-300 mb-2">Where Ordinary Gamers Become</p>
        <p className="text-4xl font-bold text-yellow-400 mb-6">EXTRAORDINARY CHAMPIONS</p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          "The difference between trying and winning is playing with the elite. 
          Your journey to legendary status starts here."
        </p>
      </section>

      {/* GAME SELECTOR */}
      <div className="flex justify-center space-x-4 my-8">
        <button 
          onClick={() => setActiveGame('freefire')}
          className={`px-8 py-3 rounded-lg font-bold text-lg transition-all ${
            activeGame === 'freefire' 
              ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🔥 Free Fire MAX
        </button>
        <button 
          onClick={() => setActiveGame('bgmi')}
          className={`px-8 py-3 rounded-lg font-bold text-lg transition-all ${
            activeGame === 'bgmi' 
              ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🇮🇳 BGMI (Coming Soon)
        </button>
      </div>

      {/* TOURNAMENT GRID */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-2">
          {activeGame === 'freefire' ? '🔥 FREE FIRE TOURNAMENTS' : '🇮🇳 BGMI TOURNAMENTS'}
        </h2>
        <p className="text-center text-gray-400 mb-8">
          {activeGame === 'freefire' 
            ? "Daily 7-9 PM • Room IDs Provided • Instant Payments" 
            : "Launching in 3 Days • Bigger Prize Pools • Pro Competition"
          }
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeGame === 'freefire' && freeFireTournaments.map((tourney) => (
            <div key={tourney.id} className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
              tourney.entryFee === 50 ? 'border-green-500/30 bg-green-500/10' :
              tourney.entryFee === 100 ? 'border-blue-500/30 bg-blue-500/10' :
              tourney.entryFee === 200 ? 'border-purple-500/30 bg-purple-500/10' :
              'border-yellow-500/30 bg-yellow-500/10'
            }`}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{tourney.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  tourney.entryFee === 50 ? 'bg-green-500' :
                  tourney.entryFee === 100 ? 'bg-blue-500' :
                  tourney.entryFee === 200 ? 'bg-purple-500' :
                  'bg-yellow-500'
                }`}>
                  ₹{tourney.entryFee} Entry
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>💰 Kill Prize:</span>
                  <span className="font-bold">₹{tourney.killPrize}/kill</span>
                </div>
                <div className="flex justify-between">
                  <span>⏰ Time:</span>
                  <span>{tourney.time}</span>
                </div>
                <div className="flex justify-between">
                  <span>🎯 Spots:</span>
                  <span>{tourney.spots}</span>
                </div>
              </div>

              {/* PSYCHOLOGICAL PUSH */}
              <div className="mt-4 p-3 bg-black/30 rounded-lg">
                <p className="text-yellow-400 text-sm font-bold">🎯 {tourney.bonus}</p>
                {tourney.entryFee >= 200 && (
                  <p className="text-green-400 text-xs mt-1">
                    💎 Premium Room: Better players = Higher winnings!
                  </p>
                )}
              </div>

              <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-lg font-bold transition-all">
                {tourney.entryFee >= 200 ? "JOIN ELITE BATTLE 🚀" : "JOIN TOURNAMENT"}
              </button>
            </div>
          ))}

          {activeGame === 'bgmi' && (
            <div className="col-span-2 text-center py-16">
              <div className="text-6xl mb-4">🇮🇳</div>
              <h3 className="text-3xl font-bold text-green-400 mb-2">BGMI TOURNAMENTS</h3>
              <p className="text-xl text-gray-300">Launching in 3 Days!</p>
              <p className="text-lg text-yellow-400 mt-4">Bigger Prize Pools • Professional Setup • Elite Competition</p>
              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-lg font-bold">
                NOTIFY ME AT LAUNCH 🔥
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MOTIVATIONAL FOOTER */}
      <footer className="text-center py-12 bg-black/50 mt-12">
        <p className="text-2xl font-bold text-yellow-400 mb-4">
          "Winners don't wait for chances... they create them."
        </p>
        <p className="text-gray-400">
          Elite eSports - Where every game is an opportunity to become legendary.
        </p>
      </footer>
    </div>
  )
}