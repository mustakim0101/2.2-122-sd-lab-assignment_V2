import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/pokemonChart.module.css';
import Button from '../part_by_part/button';
import cowPig from '../images/cow_pig.jpg';
import dragonite from '../images/dragonite.png';
import curry from '../images/curry.jpg';
import kadabra from '../images/kadabra.png';
import delibirdTruck from '../images/delibird_truck.jpg';
import rayquaza from '../images/rayquaza.png';
import cowTongue from '../images/cow_tongue.jpg';
import luxray from '../images/luxray.png';
import tyranitar from '../images/tyranitar.png';

const PokemonChart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Pokemon Chart Page</h2>
      <h1>Welcome to the Pokemon Chart</h1>

      {/* 6x6 Table based on HTML */}
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.cell}>
              <img src={cowPig} alt="Cow and Pig" />
            </td>
            <td className={styles.cell}>
              <img src={dragonite} alt="Dragonite" />
            </td>
            <td className={styles.cell}>
              <img src={curry} alt="Curry Dish" />
            </td>
            <td className={styles.cell}>
              <img src={kadabra} alt="Kadabra" />
            </td>
            <td className={styles.cell}>
              <img src={delibirdTruck} alt="Delibird Truck" />
            </td>
            <td className={styles.cell}>
              <img src={rayquaza} alt="Rayquaza" />
            </td>
          </tr>
          <tr>
            <td className={styles.cell}>
              <img src={cowTongue} alt="Cow with Tongue" />
            </td>
            <td className={styles.cell}>
              <img src={luxray} alt="Luxray" />
            </td>
            <td className={styles.cell}>
              <img src={tyranitar} alt="Tyranitar" />
            </td>
            <td className={styles.cell}>
              <Button label="EARTHQUAKE" className={styles.earthquakeButton} />
            </td>
            <td className={styles.cell}>
              <Button label="DRAGON PULSE" className={styles.surfButton} />
            </td>
            <td className={styles.cell}>
              <Button label="ALAKAZAM" className={styles.stoneEdgeButton} />
            </td>
          </tr>
          <tr>
            <td className={styles.cell}>1,3</td>
            <td className={styles.cell}>1,4</td>
            <td className={styles.cell}>1,5</td>
            <td className={styles.cell}>1,6</td>
            <td className={styles.cell}>1,2</td>
            <td className={styles.cell}>1,3</td>
          </tr>
          <tr>
            <td className={styles.cell}>1,4</td>
            <td className={styles.cell}>1,5</td>
            <td className={styles.cell}>1,6</td>
            <td className={styles.cell}>1,2</td>
            <td className={styles.cell}>1,3</td>
            <td className={styles.cell}>1,4</td>
          </tr>
          <tr>
            <td className={styles.cell}>1,5</td>
            <td className={styles.cell}>1,6</td>
            <td className={styles.cell}>1,2</td>
            <td className={styles.cell}>1,3</td>
            <td className={styles.cell}>1,4</td>
            <td className={styles.cell}>1,5</td>
          </tr>
          <tr>
            <td className={styles.cell}>1,6</td>
            <td className={styles.cell}>1,2</td>
            <td className={styles.cell}>1,3</td>
            <td className={styles.cell}>1,4</td>
            <td className={styles.cell}>1,5</td>
            <td className={styles.cell}>1,6</td>
          </tr>
        </tbody>
      </table>

      <br /><br />
      <Button
        label="Come Back"
        className={styles.comeBackButton}
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default PokemonChart;