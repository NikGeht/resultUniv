import { Component } from '../core/Component';

export class List extends Component {
	setup() {
		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'donates-container';
		
		// <h2 className="donates-container__title">Список донатов</h2>
		// <div className="donates-container__donates">
		
		const titleDonatesContainer = document.createElement('h2');
		titleDonatesContainer.className = 'donates-container__title';
		titleDonatesContainer.textContent = 'Список донатов';
		
		const donates = document.createElement('div');
		donates.className = 'donates-container__donates';
		this.$rootElement.append(titleDonatesContainer, donates);
		this.$donates = donates;

		this.$rootElement.addEventListener('click', this.handleClick.bind(this));
	}
	
	addItem(item) {
		this.$donates.appendChild(item.$rootElement);
	}
	removeItem(item) {
		this.$donates.removeChild(item.$rootElement);
	}

	handleClick(event) {
		if (event.target.classList.contains('delete-button')) {
			
			const item = event.target.closest('.donate-item');
			this.props.onDelete(item.dataset.id);
			item.remove();
			
		}
	}
	
}