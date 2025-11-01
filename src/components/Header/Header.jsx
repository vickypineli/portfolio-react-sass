import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Portfolio</div>

        <ul className="nav-links">
          {NAV_LINKS.map(({ to, key }) => (
            <li key={key}>
              <Link to={to}>{t(key)}</Link>
            </li>
          ))}
        </ul>

        <div className="actions">
          <ThemeToggle />
          <LanguageDropdown />
        </div>
      </nav>
    </header>
  )
}
