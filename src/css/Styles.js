import { makeStyles } from '@material-ui/core/styles';
import bg from '../util/bg.gif';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logo: {
		maxHeight: '7vh',
		maxWidth: '28vh',
		height: '100%',
		width: '100%',
	},
	usernav: {
		position: 'absolute',
		right: '10px',
	},
	screen: {
		paddingTop: '50px',
		display: 'block',
		position: 'relative',

		'&::after': {
			position: 'absolute',
			content: '""',
			display: 'block',
			backgroundImage: `url(${bg})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '50% 0',
			backgroundSize: 'cover',
			left: '0px',
			top: '0px',
			width: '100%',
			height: '100%',
			opacity: '0.3',
			zIndex: '0',
		},
	},
	view: {
		position: 'relative',
		zIndex: '1',
		height: '88vh',
	},
	home: {
		height: '83vh',
		padding: 10,
		//backgroundColor: '#2d383b',
	},
	raven: {
		height: '83vh',
		padding: 10,
		//backgroundColor: '#302423',
	},
	zapr: {
		height: '83vh',
		padding: 10,
		//backgroundColor: '#2b323d',
	},
	paper: {
		marginTop: '5px',
		maxWidth: '200vh',
	},
	demo: {
		objectFit: 'cover',
		maxWidth: '200vh',
	},
}));

export { useStyles };
