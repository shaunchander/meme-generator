import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App: React.FC = () => {
	interface Meme {
		url?: string
		title?: string
	}

	const [meme, setMeme] = useState<Meme>({})
	const [loading, setLoading] = useState<null | false | true>(null)

	const getMeme = async () => {
		const data = await (
			await fetch('https://meme-api.herokuapp.com/gimme')
		).json()
		setLoading(false)
		setMeme(data)
	}

	return (
		<div className='App'>
			<button
				onClick={() => {
					setLoading(true)
					getMeme()
				}}>
				Get Meme
			</button>
			<div>
				{loading ? 'Loading...' : ''}
				{meme ? (
					<>
						<img src={meme.url} alt={meme.title} />
						<h3>{meme.title}</h3>
					</>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default App
