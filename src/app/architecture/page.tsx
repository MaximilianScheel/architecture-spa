'use client';

import * as Accordion from '@radix-ui/react-accordion';
import architectureData from '../../data/architecture.json';
import styles from './Architecture.module.scss';
import Image from 'next/image';


export default function ArchitecturePage() {
  return (
    <section className={styles.section} id="architecture">
      {/* Logo und Überschrift */}
      <div className={styles.logoWrapper}>
        <h2 className={styles.companyDescription}>
          {architectureData.heading}
        </h2>
      </div>

      {/* Leistungen */}
      <div className={styles.textWrapper}>
        {/* Da im Text HTML-Tags enthalten sind, nutzen wir dangerouslySetInnerHTML */}
        <p
          dangerouslySetInnerHTML={{
            __html: architectureData.leistungenText,
          }}
        />
      </div>

      {/* Accordion für Leistungsphasen (LPH) */}
      <Accordion.Root type="single" collapsible className={styles.accordionRoot}>
        <Accordion.Item value="lph">
          <Accordion.Header className={styles.accordionHeader}>
            <Accordion.Trigger className={styles.accordionTrigger}>
              {architectureData.lphTitle}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={styles.accordionContent}>
            <ul>
              {architectureData.lphItems.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <div className={styles.imgWrapper}>
        <Image
          src="/assets/Piktogram_Architektur.webp"
          alt="Architektur Piktogramu"
          width={400}
          height={400}
          className={styles.profileImage}
        />
      </div>
      {/* Accordion für Projektübersicht */}
      <div className={styles.projectOverview}>
        <h2 className={styles.headline}>
          {architectureData.projektuebersichtTitle}
        </h2>
        <Accordion.Root type="multiple" className={styles.projectAccordion}>
          {architectureData.projects.map((project: any) => (
            <Accordion.Item key={project.year} value={`${project.year}`}>
              <Accordion.Header className={styles.projectHeader}>
                <Accordion.Trigger className={styles.projectTrigger}>
                  {project.year}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={styles.accordionContent}>
                <ul>
                  {project.items.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
