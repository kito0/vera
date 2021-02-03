import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './css/Styles';
import { AccountCircle } from '@material-ui/icons';
import {
	AppBar,
	Toolbar,
	IconButton,
	Tabs,
	Tab,
	Box,
	Typography,
} from '@material-ui/core';
import HomeView from './views/HomeView';
import RavenView from './views/RavenView';
import ZaprView from './views/ZaprView';
import logo from './util/logohoriz.png';
import './css/App.css';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

function App() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const menuId = 'primary-search-account-menu';

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div className={classes.app}>
			<AppBar position="fixed" className={classes.appbar}>
				<Toolbar className={classes.toolbar}>
					<Fragment>
						<img
							src={logo}
							alt="logo"
							className={classes.logo}
							onClick={window.scrollTo(0, 0)}
						/>

						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="secondary"
							textColor="inherit"
							variant="fullWidth"
							aria-label="tabs"
						>
							<Tab label="Home" {...a11yProps(0)} />
							<Tab label="Raven" {...a11yProps(1)} />
							<Tab label="Zapr" {...a11yProps(2)} />
						</Tabs>

						<div className={classes.profile}>
							<IconButton
								edge="end"
								aria-label="User Account"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</div>
					</Fragment>
				</Toolbar>
			</AppBar>
			<div className={classes.screen}>
				<SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={value}
					onChangeIndex={handleChangeIndex}
					className={classes.view}
				>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<HomeView />
					</TabPanel>
					<TabPanel value={value} index={1} dir={theme.direction}>
						<RavenView />
					</TabPanel>
					<TabPanel value={value} index={2} dir={theme.direction}>
						<ZaprView />
					</TabPanel>
				</SwipeableViews>
			</div>
		</div>
	);
}

export default App;
