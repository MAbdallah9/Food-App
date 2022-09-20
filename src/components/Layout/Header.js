import { Fragment} from 'react';
import mealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>n
      <header className={classes.header}>
        <h1>Reactmeals</h1>
      <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}> 
      <img src={mealsImage} alt='A table full of delicious food!'/>
      </div>

    </Fragment>
  )
}
 
export default Header;

