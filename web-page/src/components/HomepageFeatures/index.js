import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical Communication',
    Svg: require('@site/static/img/event-1.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Research Collabration',
    Svg: require('@site/static/img/event-2.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Scientific Content Writer',
    Svg: require('@site/static/img/event-3.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Technical Content Writer',
    Svg: require('@site/static/img/event-4.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Paper Reviews',
    Svg: require('@site/static/img/event-5.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Reading of Peer Review Papers',
    Svg: require('@site/static/img/event-6.svg').default,
    description: (
      <>
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
