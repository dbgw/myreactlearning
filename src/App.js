import { useState } from 'react'
import React from "react"
import Banner from './components/Banner'
import logo from './assets/logo.png'
import Cart from './components/Cart'
import Onglets from './components/Onglets'
import Footer from './components/Footer'
import ShoppingList from './components/ShoppingList'
import './styles/Layout.css'

function App() {
	const [cart, updateCart] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div style={{ width: 1512, height: 1311, position: 'relative', background: '#FEFDFA' }}>
          <div style={{ width: 1064, left: 200, top: 295, position: 'absolute', color: '#5E5E5E', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Que vous soyez un particulier ou un réparateur, utilisez cet espace pour créer un compte ou vous connecter à votre compte. C’est le premier pas pour utiliser Fingz !</div>
          <div style={{ left: 200, top: 192, position: 'absolute', color: '#465A61', fontSize: 42.91, fontFamily: 'Poppins', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Bienvenue chez Fingz !</div>
          <div style={{ width: 524, height: 518, left: 470, top: 432, position: 'absolute', background: '#D9D9D9', borderRadius: 10 }} />
          <div style={{ width: 261, height: 51, left: 471, top: 433, position: 'absolute', background: 'white', borderTopLeftRadius: 10 }} />
          <div style={{ left: 567, top: 444, position: 'absolute', color: '#4D5F68', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Clients
         </div>
          <div style={{ left: 807, top: 444, position: 'absolute', color: '#4D5F68', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Réparateurs</div>

        </div>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<Onglets cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
