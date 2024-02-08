import classes from './Title.module.css'

const Title = ({ children }) => {
	return <h2 className={classes.title}>{children}</h2>
}

export default Title
