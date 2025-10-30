import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const changeLanguage = (lng) => i18n.changeLanguage(lng)

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Portfolio</div>
        <ul>
          <li><Link to="/">{t('nav.home')}</Link></li>
          <li><Link to="/about">{t('nav.about')}</Link></li>
          <li><Link to="/projects">{t('nav.projects')}</Link></li>
          <li><Link to="/contact">{t('nav.contact')}</Link></li>
        </ul>
        <div className="actions">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="eu">EU</option>
          </select>
        </div>
      </nav>
    </header>
  )
}
