import Image from 'next/image'
import classes from './Opinion.module.css'
const Opinion = ({ opinionData }) => {
	return (
		<div className={classes.opinion}>
			<div className={classes.avatar_container}>
				<Image width={300} height={300} className={classes.avatar} src={opinionData.src}></Image>
			</div>
			<blockquote className={classes.opinion_text}>"{opinionData.opinia}"</blockquote>
			<div className={classes.opinion_author}>
				<cite>- {opinionData.autor}</cite>
			</div>
		</div>
	)
}

export default Opinion