import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Container,
	InputLabel,
	FormControl,
	Select,
	TextField,
	Grid,
	Link,
} from '@material-ui/core';
import zumar from './../static/images/zumar.png';
import './styles/Header.scss';
const useStyles = makeStyles((theme) => ({
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	margin: {
		margin: theme.spacing(1),
	},
}));

function Header() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: '',
		name: 'hai',
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	const preventDefault = (event) => event.preventDefault();
	return (
		<header>
			<Container fixed>
				<div className='header-wrapper'>
					<a href='#'>
						<img src={zumar} alt='Zumar Logo' className='logo' />
					</a>
					<div className='inputs-wrapper'>
						{/* select area */}
						<FormControl>
							<InputLabel htmlFor='SearchFilter'>All</InputLabel>
							<Select
								native
								value={state.age}
								onChange={handleChange}
								inputProps={{
									name: 'All',
									id: 'SearchFilter',
								}}>
								<option aria-label='None' value='' />
								<option value={10}>Ten</option>
								<option value={20}>Twenty</option>
								<option value={30}>Thirty</option>
							</Select>
						</FormControl>
						{/* search input */}
						<div className='search-input'>
							<Grid container spacing={1} alignItems='flex-end'>
								<Grid item>
									<span className='icon-filter'></span>
								</Grid>
								<Grid item>
									<TextField
										id='input-with-icon-grid'
										label='Search by product name or seller'
										type='search'
									/>
								</Grid>
							</Grid>
						</div>
					</div>
					<nav>
						<Link href='#' onClick={preventDefault}>
							Services
						</Link>
						<Link href='#' onClick={preventDefault}>
							Orders
						</Link>
						<Link href='#' onClick={preventDefault}>
							Account
						</Link>
						<Link href='#' onClick={preventDefault}>
							<i className='icon-bag'></i>
							<span className='notif-number'>2</span>
						</Link>
					</nav>
				</div>
			</Container>
		</header>
	);
}

export default Header;
