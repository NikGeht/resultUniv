import { Component } from '../core/Component';

export class ListItem extends Component {
	setup(props) {
		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'donate-item';
		this.state = {
			id: Date.now(),
			amount: this.props.amount,
			date: new Date().toLocaleString('en-GB', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			}),
		}
		// <div className="donates-container__donates">
		// 	<div className="donate-item">19/01/2024, 18:12:01 - <b>$1</b></div>
		//
		
		this.$rootElement.innerHTML = `${this.state.date} -&nbsp;<b>$${this.state.amount}</b>`;
		const deleteButton = document.createElement('button');
		deleteButton.className = 'delete-button';
		deleteButton.textContent = 'Удалить';
		this.$rootElement.dataset.id = this.state.id;
		this.$rootElement.appendChild(deleteButton);
	}
}
