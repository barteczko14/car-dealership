import React from 'react'
import classes from './Opinion.module.css'
import Title from './Title'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'
import Image from 'next/image'

const Opinion = () => {
	return (
		<div className={classes.wrapper}>
			<section className={classes.opinion_container}>
				<Title>Opinie naszych klientów</Title>
				<div className={classes.opinions}>
					<div className={classes.opinion}>
						<div className={classes.avatar_container}>
							<Image className={classes.avatar} src={avatar1}></Image>
						</div>
						<blockquote className={classes.opinion_text}>
							" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, nisl a tincidunt fringilla,
							nulla libero tempus sapien, id posuere nunc odio vel odio."
						</blockquote>
						<div className={classes.opinion_author}>
							<cite>- Bartek</cite>
						</div>
					</div>
					<div className={classes.opinion}>
						<div className={classes.avatar_container}>
							<Image className={classes.avatar} src={avatar2}></Image>
						</div>
						<blockquote className={classes.opinion_text}>
							" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, nisl a tincidunt fringilla,
							nulla libero tempus sapien, id posuere nunc odio vel odio."
						</blockquote>
						<div className={classes.opinion_author}>
							<cite>- Zbyszek</cite>
						</div>
					</div>
					<div className={classes.opinion}>
						<div className={classes.avatar_container}>
							<Image className={classes.avatar} src={avatar3}></Image>
						</div>
						<blockquote className={classes.opinion_text}>
							" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, nisl a tincidunt fringilla,
							nulla libero tempus sapien, id posuere nunc odio vel odio."
						</blockquote>
						<div className={classes.opinion_author}>
							<cite>- Kasia</cite>
						</div>
					</div>
					<div className={classes.opinion}>
						<div className={classes.avatar_container}>
							<Image className={classes.avatar} src={avatar4}></Image>
						</div>
						<blockquote className={classes.opinion_text}>
							" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, nisl a tincidunt fringilla,
							nulla libero tempus sapien, id posuere nunc odio vel odio."
						</blockquote>
						<div className={classes.opinion_author}>
							<cite>- Marcin</cite>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Opinion
