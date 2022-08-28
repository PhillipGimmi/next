import React, { useEffect, useState } from 'react';
import Deck from '../components';
function ClientOnly(props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? props.children : null;
}

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <ClientOnly>
        <Deck />
      </ClientOnly>
    </div>
  );
}
