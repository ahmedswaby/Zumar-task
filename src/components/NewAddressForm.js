import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	MenuItem,
	Select,
	Grid,
	Radio,
	FormControlLabel,
	RadioGroup,
	Button,
	TextField,
} from '@material-ui/core';
import './styles/NewAdress.scss';
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			marginBottom: theme.spacing(1.5),
		},
	},
	paper: {
		marginBottom: theme.spacing(3.5),
	},
}));
export default function NewAdressForm() {
	const [name, setName] = React.useState('Mohammd reza');
	const [Lastname, setLastName] = React.useState('reza');
	const classes = useStyles();
	const [citizenship, setCitizenship] = React.useState('');
	const [Residence, setResidence] = React.useState('');

	const handleChange = (event) => {
		setName(event.target.value);
	};
	const handleChangeLastName = (event) => {
		setLastName(event.target.value);
	};

	const handleChangeCountry = (event) => {
		setCitizenship(event.target.value);
	};
	const handleChangeResidence = (event) => {
		setResidence(event.target.value);
	};

	return (
		<div className='new-address_wrapper'>
			<Grid container spacing={4}>
				<Grid item xs={8}>
					<h2>Enter a new shipping address</h2>
				</Grid>
			</Grid>
			<form className={classes.root} noValidate autoComplete='off'>
				{/* first row of form (first name, second name) */}
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<FormControl variant='outlined'>
							<InputLabel htmlFor='FirstName'>* First Name</InputLabel>
							<OutlinedInput
								value={name}
								onChange={handleChange}
								label='* First Name'
							/>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<FormControl variant='outlined'>
							<InputLabel htmlFor='lastName'>* last Name</InputLabel>
							<OutlinedInput
								value={Lastname}
								onChange={handleChangeLastName}
								label='* last Name'
							/>
						</FormControl>
					</Grid>
				</Grid>
				{/* second row of form (citizenship)  */}

				<Grid container spacing={3}>
					<Grid item xs={4}>
						<FormControl variant='outlined' className={classes.formControl}>
							<InputLabel id='demo-simple-select-outlined-label'>
								* Country of citizenship
							</InputLabel>
							<Select
								labelId='demo-simple-select-outlined-label'
								id='demo-simple-select-outlined'
								value={citizenship}
								onChange={handleChangeCountry}
								label='* Country of citizenship'>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<FormControl variant='outlined'>
							<InputLabel htmlFor='City'>* City</InputLabel>
							<OutlinedInput id='City' label='* City' />
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<FormControl variant='outlined'>
							<InputLabel htmlFor='zipCode'>* Zip Code</InputLabel>
							<OutlinedInput onChange={handleChange} label='* Zip Code' />
						</FormControl>
					</Grid>
				</Grid>
				{/* Third row of form (citizenship)  */}
				<Grid container spacing={3}>
					<Grid item xs={5}>
						<FormControl variant='outlined' className={classes.formControl}>
							<InputLabel id='demo-simple-select-outlined-label'>
								*Country of residence
							</InputLabel>
							<Select
								labelId='demo-simple-select-outlined-label'
								id='demo-simple-select-outlined'
								value={Residence}
								onChange={handleChangeResidence}
								label='* Country of citizenship'>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={3}>
						<FormControl variant='outlined'>
							<InputLabel htmlFor='City'>* City</InputLabel>
							<OutlinedInput id='City' label='* City' />
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<FormControl variant='outlined'>
							<InputLabel htmlFor='zipCode'>* Zip Code</InputLabel>
							<OutlinedInput onChange={handleChange} label='* Zip Code' />
						</FormControl>
					</Grid>
				</Grid>
				{/* Adress 1 */}
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<FormControl variant='outlined'>
							<InputLabel htmlFor='FirstName'>*Address 1</InputLabel>
							<OutlinedInput label='First Name' />
						</FormControl>
					</Grid>
				</Grid>
				{/* Adress 2 */}
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<FormControl variant='outlined'>
							<InputLabel htmlFor='L'>*Address 2</InputLabel>
							<OutlinedInput label='First Name' />
						</FormControl>
					</Grid>
				</Grid>
				{/* Verifications */}
				<div className='verification-section'>
					<h3>Verifications</h3>
					<p>Require additional information or documents later</p>

					{/* phone / email */}
					<Grid container spacing={1} className={classes.paper}>
						<Grid item xs={4}>
							<RadioGroup
								row
								aria-label='Contact'
								name='Contact'
								defaultValue='Phone'>
								<Grid container spacing={3}>
									<Grid item xs={7}>
										<FormControlLabel
											value='Phone'
											control={<Radio color='primary' />}
											label='Phone Number'
										/>
									</Grid>
									<Grid item xs={3}>
										<FormControlLabel
											value='email'
											control={<Radio color='primary' />}
											label='Email'
										/>
									</Grid>
								</Grid>
							</RadioGroup>
						</Grid>
						<Grid item xs={8}>
							<Grid container spacing={1}>
								<Grid item xs={6}>
									<FormControl variant='outlined'>
										<InputLabel htmlFor='FirstName'>* Email</InputLabel>
										<OutlinedInput required label='* Email' />
									</FormControl>
								</Grid>

								<Button className='green-color btn-large' disabled>
									Send Code
								</Button>
							</Grid>
						</Grid>
					</Grid>
					{/* birthday / passport */}
					<Grid container spacing={1} className={classes.paper}>
						<Grid item xs={5}>
							<TextField
								id='date'
								label='Birthday'
								type='date'
								required
								defaultValue='2017-05-24'
								className={classes.textField}
								variant='outlined'
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item xs={7}>
							<Grid container spacing={1}>
								<Grid item xs={6}>
									<RadioGroup
										row
										aria-label='Contact'
										name='Contact'
										defaultValue='passport'>
										<FormControlLabel
											value='NID'
											control={<Radio color='primary' />}
											label='NID'
										/>

										<FormControlLabel
											value='passport'
											control={<Radio color='primary' />}
											label='Passport'
										/>
									</RadioGroup>
								</Grid>
								<Grid item xs={6}>
									<FormControl variant='outlined'>
										<InputLabel htmlFor='Passport'>* Passport</InputLabel>
										<OutlinedInput type='text' label='* First Name' />
									</FormControl>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<div className='check-text'>
							<span>
								<i className='icon-check'></i>
							</span>
							<p>Make sure your address is correct</p>
						</div>
						<div className='check-text'>
							<span>
								<i className='icon-check'></i>
							</span>
							<p>
								If the address contains typos or other errors, your package may
								be undeliverable.
							</p>
						</div>
					</Grid>
					<Button className='green-color btn-large'>Add Address</Button>
				</Grid>
			</form>
		</div>
	);
}
