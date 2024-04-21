import React  from 'react';
import { useTranslation } from "react-i18next";

import "./../styles/main.css"

const Contacts = () => {
	const { t } = useTranslation();
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">{t('contactsTitle')}</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">{t('contactsLocationTitle')}</h2>
						<p className='content-list__item'>{t('contactsLocation')}</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram</h2>
						<p className='content-list__item'>
							<a href="https://t.me/Max_Cheb">@Max_Cheb</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">{t('contactsEmailTitle')}</h2>
						<p className='content-list__item'>
							<a href="mailto:chebola.maxim@gmail.com">
								chebola.maxim@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;