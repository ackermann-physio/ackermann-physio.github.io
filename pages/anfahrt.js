
import Layout from '../components/layout'
import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
        <h1>Anfahrt</h1>
        <div className={[content.wrapper, content.largeImage].join(' ')}>
           <div className={content.text}>
             <h2>So finden Sie unsere Praxis</h2>
             <span className={util.bold}>
               Ackermann & Team <br />
               Privatpraxis für Osteopathie & Physiotherapie <br />
             </span>
             Inh. Britta Frankenberger <br />
             <br />
             Rheinstraße 20 <br />
             64283 Darmstadt <br />
             <br />
             <span className={util.bold}>
                <a href="tel:+496151293242">Tel. 0 61 51 / 29 32 42</a> <br />
             </span>
             <br />
             <a href="mailto:info@ackermann-physio.de">info@ackermann-physio.de</a>
             <br />
             <br />
             Die Praxis liegt in der Darmstädter Innenstadt in der Nähe des Luisenplatzes und ist aus der Fußgängerzone in 5 Minuten zu Fuß zu erreichen.
             Zum Parken stehen die Parkhäuser in der Innenstadt zur Verfügung. <br />
             < br/>
             Mit dem Fahrstuhl oder über die Treppe kommen Sie bequem in die Praxis in der ersten Etage.
           </div>
           <div className={content.img}>
             <img src="/img/physiotherapie_anfahrt.jpg" />
             <span className={content.subtitle}>Bild: © Britta Frankenberger</span>
           </div>
        </div>
    </Layout>
  )
}
