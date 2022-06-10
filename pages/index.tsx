import type { NextPage } from 'next';
import Button from '../components/atoms/Button';

const Home: NextPage = () => {
  return (
    <div>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <Button title="New Button" type="button" />
    </div>
  );
};

export default Home;
