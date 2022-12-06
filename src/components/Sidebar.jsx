import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

// const selectedCategory = 'New'; //no longer need static variable

const Sidebar = ({ selectedCategory, setSelectedCategory }) => ( //this is coming through props as we call this variable
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: 'auto', md: '95%'},
      flexDirection: { md: 'column' }
    }}
  >
    {categories.map((category) => (
      <button
      className="category-btn"
      onClick={() => setSelectedCategory(category.name)} //set selected category to category.name
      style={{
        background: category.name === selectedCategory && '#FC1503', //this means, if category name equals selectedCategory then make the color '#FC1503'. We're doing this bc colors weren't showing up?
        color: 'white'
      }}
      key={category.name} //Give it a key, bc whenever mapping over something in react, you have to give it a key
    >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))} 
  </Stack>
)


export default Sidebar