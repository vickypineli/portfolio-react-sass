import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <p className="footer__text">
          © {new Date().getFullYear()} — {t('footer.copyright', { name: 'Vicky' })}
        </p>

        <ul className="footer__links">
          <li><a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:tucorreo@example.com">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
