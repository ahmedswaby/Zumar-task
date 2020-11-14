import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Link } from '@material-ui/core';
import zumar from './../static/images/zumar.png';
import Apple from './../static/images/downloadappleApp.svg';
import Google from './../static/images/downloadplaystore.svg';
import './styles/Footer.scss';
const useStyles = makeStyles((theme) => ({
	paper: {
		paddingLeft: theme.spacing(2),
	},
}));
const preventDefault = (event) => event.preventDefault();
function Footer() {
	const classes = useStyles();
	return (
		<footer>
			<Container fixed>
				<Grid container className='footer-conatiner'>
					<Grid item md={3}>
						<div className='logo-row'>
							<img src={zumar} alt='zumar logo' className='logo' />
							<p className='coming'>Coming soon..</p>
							<a href='#' target='_blank'>
								<img src={Apple} alt='' />
							</a>
							<a href='#' target='_blank'>
								<img src={Google} alt='' />
							</a>
						</div>
					</Grid>
					<Grid item md={3} className={classes.paper}>
						<h4>Customer Services</h4>
						<div className='links-wrapper'>
							<Link href='#' onClick={preventDefault}>
								Help Center
							</Link>
							<Link href='#' onClick={preventDefault}>
								Report Abuse
							</Link>
							<Link href='#' onClick={preventDefault}>
								Policies & Rules
							</Link>
						</div>
					</Grid>
					<Grid item md={4} className={classes.paper}>
						<h4>Buy & sell From Zumar</h4>
						<div className='links-wrapper'>
							<Link href='#' onClick={preventDefault}>
								zumar payment products
							</Link>
							<Link href='#' onClick={preventDefault}>
								trade with zumar
							</Link>
							<Link href='#' onClick={preventDefault}>
								Request for Quotation
							</Link>
							<Link href='#' onClick={preventDefault}>
								Ready to Ship
							</Link>
						</div>
					</Grid>
					<Grid item md={2} className={classes.paper}>
						<h4>Zumar life</h4>
						<div className='links-wrapper'>
							<Link href='#' onClick={preventDefault}>
								about us
							</Link>
							<Link href='#' onClick={preventDefault}>
								careers
							</Link>
							<Link href='#' onClick={preventDefault}>
								make money with us
							</Link>
						</div>
					</Grid>
				</Grid>
				<div className='copyright-wrapper'>
					<p>
						{' '}
						&copy; {new Date().getFullYear()} Zumar.com. All rights reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
