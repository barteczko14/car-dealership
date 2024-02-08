import classes from './Opinions.module.css'
import Title from '../title/Title'
import opinionsData from '@/app/opinionsData'
import Opinion from './Opinion'
const Opinions = () => {
	return (
		<section className={classes.opinion_container}>
			<Title>Opinie naszych klientów</Title>
			<div className={classes.opinions}>
				{opinionsData.map(opinionData => (
					<Opinion key={opinionData.id} opinionData={opinionData}></Opinion>
				))}
			</div>
		</section>
	)
}

export default Opinions
