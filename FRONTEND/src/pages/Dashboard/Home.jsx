import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Xpenso Budget Tracker</h1>
      <div className="flex gap-4">
        <Link 
          to="/login" 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login
        </Link>
        <Link 
          to="/signup" 
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-gray-100"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}