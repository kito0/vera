import React from 'react';
import { useStyles } from '../css/Styles';
import { Link, Paper, Typography } from '@material-ui/core';
import demo from '../util/raven.PNG';

export default function RavenView() {
	const classes = useStyles();

	return (
		<div className={classes.raven}>
			<Link
				href="https://raven-social.web.app/"
				color="inherit"
				target="_blank"
				rel="noopener"
			>
				Raven
			</Link>
			<br />
			<Typography variant="caption">
				A dark themed twitter-esque social media platform
			</Typography>
			<br />
			<Paper elevation={3} className={classes.paper}>
				<img src={demo} alt="" className={classes.demo} />
			</Paper>
		</div>
	);
}
