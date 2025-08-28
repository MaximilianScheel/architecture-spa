import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.homeSci}>
          <Link href="/#latest" scroll={false}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 110 110"
              width="96"
              height="96"
              shapeRendering="geometricPrecision"
              enableBackground="new 0 0 110 110"
              xmlSpace="preserve"
            >
              <style type="text/css">
                {`.st1 { fill: none; stroke: var(--color-accent); stroke-miterlimit: 10; stroke-width: 1.5; vector-effect: non-scaling-stroke; shape-rendering: geometricPrecision; }`}
              </style>
              <path className="st1" vectorEffect="non-scaling-stroke" strokeWidth={1.5} d="M105,95.9H5V14.5h100V95.9z M18.6,84l10.3-57.6h-3.2L15.4,84H18.6z M32.5,84l10.3-57.6h-3.2L29.3,84H32.5z
              M46.3,84L55,35.3L63.8,84H67L56.6,26.4h-3.2L43.2,84H46.3z M80.8,84L70.5,26.4h-3.2L77.6,84H80.8z M94.7,84L84.4,26.4h-3.2L91.5,84
              H94.7z"/>
            </svg>
          </Link>
          <p>j a c o b  m a u</p>
        </div>

        <div className={styles.footerText}>
          <p className={styles.footerParagraph}>
            architektur <br />
            energieberatung<br /><br />
            jacob mau, freier architekt<br />
            wrangelstraße 127<br />
            10997 berlin<br />
            0176 327 97872<br />
            planung&#64;jacobmau.de<br />
            www.jacobmau.de
          </p>
        </div>

        <div className={styles.dataProtect}>
          <Link href="/datenschutz">datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};
