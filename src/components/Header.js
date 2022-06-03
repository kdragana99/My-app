import PropsTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {
  return (
    <header className='header navbar '>
        <h1>{title}</h1>
       <Button color={showAdd ? 
       'red': 'green'} text={showAdd ? 'CLose':
        'Add'}
        onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Todo list'
}

Header.PropsTypes = {
    title: PropsTypes.string.isRequired
}


export default Header