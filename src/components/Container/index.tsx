import iconList from '../../assets/images/icon-list.svg';
import './styles.css';
import { useState, FormEvent, useRef } from 'react';
import { Popup } from '../Popup/';

export const Container = () => {

	const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
	const emailInput = useRef<HTMLInputElement>(null);

	const changePopupVisibility = (): void => {
		setIsPopUpVisible(prevValue => !prevValue);
	};
	
	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		if(emailInput.current){
			if(emailInput.current.checkValidity() && emailInput.current.value.length !== 0){
				changePopupVisibility();
			}
		};
	};


	return isPopUpVisible === false ? (
			<div className="container">
				<section className="section-left">
					<header className="header__section-left">
						<p>Stay updated!</p>
						<p>Join 60,000+ product managers receiving monthly updates on:</p>
					</header>
					<ul>
						<li>
							<img src={iconList} alt="icon-list" />
							<span>Product discovery and building what matters</span>
						</li>
						<li>
							<img src={iconList} alt="icon-list" />
							<span>Measuring to ensure updates are a success</span>
						</li>
						<li>
							<img src={iconList} alt="icon-list" />
							<span>And much more!</span>
						</li>
					</ul>
					<form onSubmit={handleSubmit}>
						<header className="header__form">
							<label htmlFor="email-address">Email address</label>
						</header>
						<input 
							type="email"
							id="email-address"
							placeholder=" email@company.com" 
							ref={emailInput}/>
						<span>Valid email required</span>
						<button type="submit">Subscribe to monthly newsletter</button>
					</form>
				</section>
				<section className="section-right"></section>
			</div>
		) : (
			<Popup
				userEmail={emailInput.current!.value}
				changePopupVisibility={changePopupVisibility}
			/>
		)
};