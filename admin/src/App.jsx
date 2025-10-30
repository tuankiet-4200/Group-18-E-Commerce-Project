import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Header onToggleSidebar={() => setSidebarOpen(s => !s)} />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-700">Admin</h1>
        <p className="mt-4 text-gray-600">Welcome to the admin dashboard</p>
      </main>
    </>
  )
}

export default App
