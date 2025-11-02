import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import LanguageDropdown from './LanguageDropdown'

const NAV_LINKS = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/projects', key: 'nav.projects' },
  { to: '/contact', key: 'nav.contact' },
]

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Portfolio</div>

        {/* Botón hamburguesa solo visible en móvil */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Contenedor de navegación (desktop + mobile) */}
        <div className={`nav-links-wrapper ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {NAV_LINKS.map(({ to, key }) => (
              <li key={key} onClick={() => setMenuOpen(false)}>
                <Link to={to}>{t(key)}</Link>
              </li>
            ))}
          </ul>

          <div className="actions">
            <ThemeToggle />
            <LanguageDropdown />
          </div>
        </div>
      </nav>
    </header>
  )
}

