import Button from '@material-ui/core/Button';
import './styles/CardDetailed.scss';
const BtnStyles = {
	colorInherit: '#F9A439',
};
function CardDetailed() {
	return (
		<div className='card-wrapper'>
			<h2>Address 1</h2>
			<div>
				<p>Shadhin Arafat</p>
				<p>Dhanmondi 32 ,road no 20/a apartment 5,house 6, road number 6</p>
				<p>Phone: 01751405589</p>
				<p>Email: shadhinarafat@gmail.com</p>
			</div>
			<div className='card-actions'>
				<Button className='yellow-color'>Edit address</Button>
				<Button className='green-color'> Deliver to this address</Button>
			</div>
		</div>
	);
}

export default CardDetailed;
