import React from 'react'
import { IndexLink, Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux - Nine Men's Morris</h1>
    <Link to='/' activeClassName='route--active'>
      <RaisedButton label="Home" style={style} primary={true} />
    </Link>

    <IndexLink to='/game' activeClassName='route--active'>
      <RaisedButton label="Game" style={style} secondary={true} />
    </IndexLink>
    {' · '}

  </div>
)

export default Header
