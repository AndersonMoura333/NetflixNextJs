import categories from '../api';
import Row from '../components/Row'
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.Home}>
      <Nav/>
      <Banner/>
     {categories.map((category)=> {
       return <Row 
       key={category.name} 
       title={category.title}
       path={category.path}
       isLarge={category.isLarge}
       />
     })}
    </div>
  );

}
