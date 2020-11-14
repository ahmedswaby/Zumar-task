import Header from './components/Header';
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardDetailed from './components/CardDetailed';
import OrderSummary from './components/OrderSummary';
import NewAddressForm from './components/NewAddressForm';
function App() {
	return (
		<div>
			{/* Header */}
			<Header />
			<main>
				{/* first part text */}
				<Container fixed>
					<Grid container spacing={4}>
						<Grid item xs={8}>
							<div className='content'>
								<h1>Select a shipping address</h1>
								<p>
									Is the address you'd like to use displayed below? If so, click
									the corresponding "Deliver to this address" button. Or you can
								</p>
							</div>
						</Grid>
					</Grid>
					{/* Address & order summary */}
					<Grid container spacing={4}>
						<Grid item md={4}>
							<CardDetailed></CardDetailed>
						</Grid>
						<Grid item md={4}>
							<CardDetailed></CardDetailed>
						</Grid>
						<Grid item md={4}>
							<OrderSummary></OrderSummary>
						</Grid>
					</Grid>
					{/* New Address form */}
					<Grid container>
						<Grid item xs={8}>
							<NewAddressForm />
						</Grid>
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
