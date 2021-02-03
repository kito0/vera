import React from 'react';
import { useStyles } from '../css/Styles';
import Typography from '@material-ui/core/Typography';

export default function ZaprView() {
	const classes = useStyles();

	return (
		<div className={classes.zapr}>
			<Typography variant="body2">Zappity zap zap</Typography>
			<br />
		</div>
	);
}
