import iconSucess from '../../assets/images/icon-success.svg';
import './styles.css';
import { PopupPropos } from './types.ts';

export const Popup = ({ userEmail, changePopupVisibility }: PopupPropos) => {

	return (
		<div className="popup-container">
			<img src={iconSucess} alt="sucess-icon" />
			<p className="title">Thanks for subscribing!</p>
			<p className="content">
				A confirmation email has been sent to <span>{userEmail}. </span>
  				 Please open it and click the button inside to confirm your subscription.
  			</p>
  			<button onClick={changePopupVisibility}>Dismiss message</button>
		</div>
	);
}