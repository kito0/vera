import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	home: {
		height: '83vh',
		padding: '10px',
		//backgroundColor: '#2d383b',
	},
	home1c: {
		display: 'flex',
		padding: '50px',
		'& img': {
			maxWidth: '360px',
		},
	},
	home1: {
		flex: '1',
		padding: '20px',
		alignItems: 'center',
		width: '50%',
		margin: '0px 10px',
	},
	home1l: {
		width: '50%',
		'& .MuiButton-root': {
			position: 'absolute',
			left: '480px',
		},
	},
	home1r: { width: '50%', textAlign: 'center' },
	line: {
		borderBottom: '1px solid #422a2a',
		margin: '20px 0px',
	},
	text: {
		margin: '25px 0px',
	},
}));

export { useStyles };
