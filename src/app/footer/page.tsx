import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
      <div className={styles.homesci}>
          <Link href="#aktuelles">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 110 110"
              width="96"
              height="96"
              enableBackground="new 0 0 110 110"
              xmlSpace="preserve"
            >
              <style type="text/css">
                {`.st0 { fill: none; stroke: #FF6B6B; stroke-miterlimit: 10; }`}
              </style>
              <path className="st0" d="M105,95.9H5V14.5h100V95.9z M18.6,84l10.3-57.6h-3.2L15.4,84H18.6z M32.5,84l10.3-57.6h-3.2L29.3,84H32.5z
              M46.3,84L55,35.3L63.8,84H67L56.6,26.4h-3.2L43.2,84H46.3z M80.8,84L70.5,26.4h-3.2L77.6,84H80.8z M94.7,84L84.4,26.4h-3.2L91.5,84
              H94.7z"/>
            </svg>
          </Link>
          <p>j a c o b  m a u</p>
        </div>
      
      <div className={styles.footerText}>
        <Link href="/legal-notice">
          <p>
            architektur <br />
            energieberatung<br /><br />
            jacob mau, freier architekt<br />
            wrangelstraße 127<br />
            10997 berlin<br />
            0176 327 97872<br />
            planung&#64;jacobmau.de<br />
            www.jacobmau.de
          </p>
        </Link>
      </div>
      
      <div className={styles.dataProtect}>
        <Link href="/datenschutz">datenschutz</Link>
      </div>
      </div>
    </footer>
  );
};

export default Footer;