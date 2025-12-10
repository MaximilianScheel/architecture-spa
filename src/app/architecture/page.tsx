'use client';

import * as Accordion from '@radix-ui/react-accordion';
import architectureData from '../../data/architecture.json';
import styles from './architecture.module.scss';
import Image from 'next/image';


export default function ArchitecturePage() {
  return (
    <section id="architecture" className={styles.section}>
      <h2>{architectureData.heading}</h2>

      <div className={styles['text-wrapper']}>
        <p
          dangerouslySetInnerHTML={{
            __html: architectureData.leistungenText,
          }}
        />
      </div>

      <Accordion.Root type="single" collapsible className={styles['accordion-root']}>
        <Accordion.Item value="lph">
          <Accordion.Header className={styles['accordion-header']}>
            <Accordion.Trigger className={styles['accordion-trigger']}>
              {architectureData.lphTitle}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={styles['accordion-content']}>
            <ul>
              {architectureData.lphItems.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <div className={styles['image-wrapper']}>
        <Image
          src="/assets/Piktogram_Architektur.webp"
          alt="Architektur Piktogramm"
          width={400}
          height={400}
          className={styles['profile-image']}
        />
      </div>
      <div className={styles['project-overview']}>
        <h2 className={styles.headline}>
          {architectureData.projektuebersichtTitle}
        </h2>
        <Accordion.Root type="multiple" className={styles['project-accordion']}>
          {architectureData.projects.map((project: any) => (
            <Accordion.Item key={project.year} value={`${project.year}`}>
              <Accordion.Header className={styles['project-header']}>
                <Accordion.Trigger className={styles['project-trigger']}>
                  {project.year}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={styles['accordion-content']}>
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
