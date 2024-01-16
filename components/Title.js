import classes from './Title.module.css'

const Title = ({ children }) => {
	return <h1 className={classes.title}>{children}</h1>
}

export default Title
