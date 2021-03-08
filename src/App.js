import React, { Fragment } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './css/Styles';
import { AccountCircle } from '@material-ui/icons';
import { AppBar, Toolbar, IconButton, Tabs, Tab } from '@material-ui/core';
import Home from './views/Home';
import logo from './util/logohoriz.png';
import './css/App.css';

function App() {
	const classes = useStyles();
	// eslint-disable-next-line
	const theme = useTheme();
	// eslint-disable-next-line
	const [value, setValue] = React.useState(0);
	// eslint-disable-next-line
	const [anchorEl, setAnchorEl] = React.useState(null);

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
							indicatorColor="secondary"
							textColor="inherit"
							variant="fullWidth"
							aria-label="tabs"
						>
							<Tab label="Home" />
							<Tab label="Andrew" />
							<Tab label="Aries" />
						</Tabs>

						<div className={classes.profile}>
							<IconButton
								edge="end"
								aria-label="User Account"
								aria-haspopup="true"
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</div>
					</Fragment>
				</Toolbar>
			</AppBar>
			<div className={classes.screen}>
				<Home />
			</div>
		</div>
	);
}

export default App;
