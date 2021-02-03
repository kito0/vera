import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	home: {
		height: '100%',
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
		textAlign: 'right',
		'& .MuiButton-root': {
			position: 'relative',
			left: '200',
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
	empty: {
		margin: '50px',
	},
	home2: {
		display: 'flex',
		width: '100%',
	},
	card: {
		flex: '1',
		background: 'transparent',
		height: '480px',
		boxShadow: '1px 3px 3px black',
		margin: '20px',
		alignItems: 'center',
		textAlign: 'center',
	},
	cardtext: {
		margin: '15px 0px',
		color: '#959b9b',
	},
	cardicon: {
		marginTop: '20px',
	},
}));

export { useStyles };
