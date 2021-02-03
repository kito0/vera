import React from 'react';
import { useStyles } from '../css/HomeStyles';
import { Typography, Button } from '@material-ui/core';
import sd from '../util/sd.png';

export default function HomeView() {
	const classes = useStyles();

	return (
		<div className={classes.home}>
			<div className={classes.home1c}>
				<div className={classes.home1 && classes.home1l}>
					<Typography variant="h4">Custom Software Development</Typography>
					<Typography variant="caption">
						End-to-end solutions from concepts to deployment.
					</Typography>
					<div className={classes.line} />
					<Typography variant="body2" className={classes.text}>
						We are a team of developers with a passion for all things Software,
						Web Design, Artificial Intelligence, Automation, Machine Learning,
						and Enterprise Solutions.
					</Typography>
					<Typography variant="body2" className={classes.text}>
						Ver:a provides a wide variety of software services done locally in
						Calgary, Alberta. Our commitment to quality is resolute at every
						level of our organization.
					</Typography>
					<Button variant="contained" color="secondary">
						Contact Us
					</Button>
				</div>
				<div className={classes.home1 && classes.home1r}>
					<img src={sd} alt="" className={classes.sdimg} />
				</div>
			</div>
		</div>
	);
}
