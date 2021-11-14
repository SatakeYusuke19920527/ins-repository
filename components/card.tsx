import Link from 'next/link';
import styles from '../styles/Card.module.css';
import { CardType } from '../types/CardType';

const Card = ({ params }: { params: CardType }) => {
  return (
    <div className={styles.card}>
      <Link href={`${params.route}`}>
        <a>
          <h2>{params.title} &rarr;</h2>
          <p>{params.description}</p>
        </a>
      </Link>
    </div>
  );
};

export default Card;
