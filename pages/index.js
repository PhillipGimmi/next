import dynamic from 'next/dynamic';
import Deck from '../components';

export default function Home() {
  const SuperDeck = Deck(() => import('../components/index'));
  return (
    <div>
      <SuperDeck />
    </div>
  );
}
