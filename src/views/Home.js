import React from 'react';
import { useStyles } from '../css/HomeStyles';
import { Typography, Button, Card } from '@material-ui/core';
import { Code, Web, CallMade } from '@material-ui/icons';
import sd from '../util/sd.png';

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.home}>
			<div className={classes.home1c}>
				<div className={classes.home1 && classes.home1l}>
					<Typography variant="h4">Version: A(ndrew) A(ries)</Typography>
					<Typography variant="caption">
						Full stack web developer duo
					</Typography>
					<div className={classes.line} />
					<Typography variant="body2" className={classes.text}>
						We are two developers with a passion for all things Software and Web
						Design
					</Typography>
					<Typography variant="body2" className={classes.text}>
						From software solutions, REST API's to refined frontend design
					</Typography>
					<Button variant="contained" color="secondary">
						Contact Us
					</Button>
				</div>
				<div className={classes.home1 && classes.home1r}>
					<img src={sd} alt="" className={classes.sdimg} />
				</div>
			</div>
			<div className={classes.empty}></div>
			<div className={classes.home2}>
				<Card className={classes.card}>
					<Code
						color="secondary"
						className={classes.cardicon}
						fontSize="large"
					/>
					<div className={classes.cardtext}>
						<Typography variant="h6">Backend Development</Typography>
						<br />
						<Typography variant="caption">
							We enjoy creating RESTful API's for interactive and secure data
							access
						</Typography>
						<br />
						<br />
						<p className={classes.cardtitle}>Languages/tools:</p>
						<Typography variant="caption">
							Node.js <br />
							Express.js <br />
							Ruby on Rails <br />
							MongoDB <br />
							Firebase <br />
							Redis
						</Typography>
					</div>
				</Card>
				<Card className={classes.card}>
					<Web
						color="secondary"
						className={classes.cardicon}
						fontSize="large"
					/>
					<div className={classes.cardtext}>
						<Typography variant="h6">Frontend Development</Typography>
						<br />
						<Typography variant="caption">
							We like to design responsive and interactive websites
						</Typography>
						<br />
						<br />
						<br />
						<p className={classes.cardtitle}>Languages/tools:</p>
						<Typography variant="caption">
							React.js <br />
							Redux.js <br />
							HTML <br />
							CSS <br />
							Sass <br />
							Material-UI <br />
							Bootstrap
						</Typography>
					</div>
				</Card>
				<Card className={classes.card}>
					<CallMade
						color="secondary"
						className={classes.cardicon}
						fontSize="large"
					/>
					<div className={classes.cardtext}>
						<Typography variant="h6">Scalability and Deploymeny</Typography>
						<br />
						<Typography variant="caption">
							We recognize the needs for building, testing, scaling, optimizing,
							and deployment
						</Typography>
						<br />
						<br />
						<p className={classes.cardtitle}>Tools:</p>
						<Typography variant="caption">
							Kubernetes <br />
							Docker <br />
							OpenShift <br />
							Google Cloud <br />
							AWS <br />
							Azure
						</Typography>
					</div>
				</Card>
			</div>
		</div>
	);
}
