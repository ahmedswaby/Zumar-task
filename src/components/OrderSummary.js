import './styles/CardDetailed.scss';
function OrderSummary() {
	return (
		<div className='card-wrapper order-wrapper'>
			<h2>Order Summary</h2>
			<div>
				<p>
					Iphone 12 pro max <span>30</span>
				</p>
				<p>
					Subtotal <span>$3000.00</span>
				</p>
				<p>
					Shipping <span>$100.00</span>
				</p>
			</div>
			<div className='card-actions'>
				<p className='order-total'>
					Total <span>$260.00</span>
				</p>
			</div>
		</div>
	);
}

export default OrderSummary;
