import Counter from '../components/counter';

export default function Home() {
  return (
    <main>
      <h1>Button Counter App</h1>

      <Counter />

      <Counter initialCount={10} initialStep={10} />
    </main>
  );
}