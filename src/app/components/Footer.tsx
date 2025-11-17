import Link from 'next/link';
import footerData from '../../data/footer.json';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles['brand-section']}>
          <Link href="/#latest" scroll={false} aria-label="Home">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={footerData.logo.viewBox}
              width={footerData.logo.width}
              height={footerData.logo.height}
              shapeRendering="geometricPrecision"
            >
              <style type="text/css">
                {`.st1 { fill: none; stroke: var(--color-accent); stroke-miterlimit: 10; stroke-width: 1.5; vector-effect: non-scaling-stroke; shape-rendering: geometricPrecision; }`}
              </style>
              <path
                className="st1"
                vectorEffect="non-scaling-stroke"
                strokeWidth={1.5}
                d={footerData.logo.path}
              />
            </svg>
          </Link>
          <p>{footerData.brand}</p>
        </div>

        <div className={styles['contact-text']}>
          <p className={styles['contact-paragraph']}>
            {footerData.contact.lines.map((line, index) => (
              <span key={index}>
                {line}
                {index < footerData.contact.lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className={styles['privacy-link']}>
          <Link href={footerData.privacyLink.url}>
            {footerData.privacyLink.text}
          </Link>
        </div>
      </div>
    </footer>
  );
};
