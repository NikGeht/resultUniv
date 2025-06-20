import { Component } from '../core/Component';

export class Form extends Component {
	setup(props) {
		this.$rootElement = document.createElement('form');
		this.$rootElement.className = 'donate-form';
		this.state = {
			amount: '',
		}
		
		const labelForm = document.createElement('label');
		labelForm.className = 'donate-form__input-label';
		labelForm.textContent = 'Введите сумму в $';
		const inputForm = document.createElement('input');
		inputForm.className = 'donate-form__donate-input';
		inputForm.name = 'amount';
		inputForm.type = 'number';
		inputForm.min = '1';
		inputForm.max = '100';
		inputForm.required = true;
		labelForm.appendChild(inputForm);
		
		const buttonForm = document.createElement('button');
		buttonForm.className = 'donate-form__submit-button';
		buttonForm.disabled = true;
		buttonForm.type = 'submit';
		buttonForm.textContent = 'Задонатить';
		this.$rootElement.append(labelForm, buttonForm);
		
		
		this.$input = inputForm;
		this.$button = buttonForm;
		
		this.$input.addEventListener('input', this.handleInput.bind(this));
		this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
	}
	
	get isValid() {
		const value = Number(this.state.amount);
		return value >= 1 && value <= 100;
	}
	
	handleInput(event) {
		const { value } = event.target;
		this.state.amount = value;
		this.$button.disabled = !this.isValid;
	}
	
	handleSubmit(event) {
		event.preventDefault();
		// const { value } = event.target.label.input;
		this.props.onSubmit(this.state.amount);
		this.state.amount = '';
		this.$input.value = '';
		this.$button.disabled = !this.isValid;
	}
}
