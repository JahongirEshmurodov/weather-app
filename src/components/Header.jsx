import React, { useContext, useEffect, useState } from 'react'
import logoImg from "@i/logo.svg";
import gulpImg from "@i/gulp.svg";
import { Context } from "../context/Context.jsx";
function Header() {
  const [theme, settheme] = useState('light')
  const [search, setsearch] = useState('')
  const { getWeather } = useContext(Context)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  useEffect(() => {
    getWeather()
  }, [])
  return (
    <header className='header'>
      <a href="" className="logo"><img src={logoImg} alt="" />weather</a>
      <form action="" className="header__form" onSubmit={(e) => {
        e.preventDefault()
        if (search !== ''){
          getWeather(search)
          setsearch('')
      }
      }}>
      <img src={gulpImg} alt="" className="header__form-img" onClick={() => settheme(theme === 'light' ? 'dark' : 'light')} />
      <input type="text" className="header__form-inp" placeholder='Выбрать город' value={search} onChange={(e) => setsearch(e.target.value)} />
    </form>
    </header >
  )
}

export default Header