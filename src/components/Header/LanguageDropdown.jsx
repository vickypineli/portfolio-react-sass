import { useState, useEffect, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown } from 'react-icons/fa'

const LANGUAGES = [
  { code: 'es', label: 'Español', flag: '/flags/es.svg' },
  { code: 'en', label: 'English', flag: '/flags/en.svg' },
  { code: 'eu', label: 'Euskara', flag: '/flags/eu.svg' },
]

export default function LanguageDropdown() {
  const { i18n } = useTranslation()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const selectedLanguage = useMemo(
    () => LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0],
    [i18n.language]
  )

  const handleLanguageSelect = useCallback(
    (langCode) => {
      i18n.changeLanguage(langCode)
      setDropdownOpen(false)
    },
    [i18n]
  )

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.lang-dropdown')) setDropdownOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="lang-dropdown">
      <button
        className="dropdown-trigger"
        onClick={(e) => {
          e.stopPropagation()
          setDropdownOpen((prev) => !prev)
        }}
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
      >
        <div className="lang-display">
          <img
            src={selectedLanguage.flag}
            alt={selectedLanguage.label}
            className="flag-icon"
          />
          <span>{selectedLanguage.label}</span>
        </div>
        <FaChevronDown className={`arrow ${dropdownOpen ? 'rotated' : ''}`} />
      </button>

      <div
        className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}
        role="listbox"
      >
        {LANGUAGES.map(({ code, label, flag }) => (
          <div
            key={code}
            className={`dropdown-item ${
              selectedLanguage.code === code ? 'active' : ''
            }`}
            onClick={() => handleLanguageSelect(code)}
            role="option"
            aria-selected={selectedLanguage.code === code}
          >
            <img src={flag} alt={label} className="flag-icon" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
