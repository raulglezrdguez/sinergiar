import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SinergiaR</title>
        <meta name="description" content="Soluciones Energéticas Renovables" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a Sinergia&reg;</h1>

        <h2 className={styles.description}>
          Soluciones Energéticas Renovables.
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Misión</h2>
            <p>
              Ofrecer alternativas de soluciones individualizadas a necesidades
              energéticas específicas, mediante fuentes renovables a precios
              asequibles y calidad garantizada; que facilite la apremiante
              transición hacia una matriz de generación ecológicamente limpia en
              Cuba.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Visión</h2>
            <p>
              Ser una empresa líder en los procesos de transformación,
              mantenimiento e innovación tecnológica, del patrón de generación
              energética en Cuba; mediante soluciones racionales que abaraten
              los costos de equipos y servicios, cumpliendo con los estándares
              de calidad.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Valores que sustentan a nuestra empresa</h2>
            <ul>
              <li>Trabajo en equipo.</li>
              <li>Empatía.</li>
              <li>Honestidad.</li>
              <li>
                Disposición para aceptar los errores y la crítica como factores
                determinantes del perfeccionamiento continuo.
              </li>
            </ul>
          </div>

          <h2 className={styles.description}>
            Cartera de productos y servicios.
          </h2>

          <div className={styles.card}>
            <h2>Energía solar</h2>
            <ul>
              <li>Necesidades domésticas.</li>
              <li>
                Aplicaciones agrícolas (bombas solares, secado de productos,
                pastoreo Voisin, iluminación, ordeño mecánico, energetización de
                maquinas (chapeadoras, motosierras, etc.).
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Energía eólica</h2>
            <ul>
              <li>Molinos de viento (extracción de agua).</li>
              <li>Generadores de electricidad.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Biodigestores</h2>
            <ul>
              <li>Refrigeración.</li>
              <li>Cocción.</li>
              <li>Envase en balones.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>
              Fabricación de carbón (ecológico) de marabú para la exportación
            </h2>
            <ul>
              <li>Recuperación de tierras improductivas altamente fértiles.</li>
              <li>Fuente rápida de financiamiento para la empresa.</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Desarrollado por{' '}
          <span className={styles.logo}>
            <Image
              src="/recycle.svg"
              alt="Vercel Logo"
              width={20}
              height={20}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
