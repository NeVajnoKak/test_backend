import React from 'react'
import "./Home.css"
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="page">
        <div className="card"><span>Картаа</span><Link to={"/flow"}>ГООО</Link></div>
        <div className="card"><span>Таблица</span><Link to={"/tables"}>ГООО</Link></div>
    </div>
  )
}

export default Home