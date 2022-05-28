import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '1、制定目标',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>是根据当下阶段的需求来制定的目标；是根据现有努力，能够实现或达到的；</p>
      </>
    ),
  },
  {
    title: '2、制定计划',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <p>将目标拆分到每周；并规定好每天的规定动作；</p>
      </>
    ),
  },
  {
    title: '3、阶段复盘',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        每天打卡并复盘当日行动；每周复盘并动态调整计划安排下周的行动。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
