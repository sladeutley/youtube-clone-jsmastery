import { Stack } from '@mui/material' //to see what a component does, hover over it, and click on demo
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => ( //instant return by getting rid of curly brackets. no need for return
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
      {/* Above, sx provides style to any material ui component. sticky sticks it at top as well as top. ***TO SEE WHAT ATTRIBUTES A materialUI component accepts, hove over 'Stack' or whatever component is, and click on 'Stack(or whatever component it is) API' */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack> 
  )


export default Navbar