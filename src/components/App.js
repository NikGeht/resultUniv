import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
    setup(props) {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'app';
        this.state = {
            total: 0,
            donates: [],
        }

        const totalHeader = document.createElement('h1');
        totalHeader.className = 'total-amount';
        totalHeader.textContent = 'Итого: $';
        const total =  document.createElement('span');
        total.textContent = this.state.total;
        this.$total = total;
        totalHeader.appendChild(total);
        this.$rootElement.appendChild(totalHeader);

        const donateForm = new Form({
            onSubmit: this.onItemCreate.bind(this)
        });
        this.$rootElement.appendChild(donateForm.$rootElement);
        const donateList = new List({onDelete: this.onItemDelete.bind(this)});
        this.$rootElement.appendChild(donateList.$rootElement);
        this.$donateList = donateList;
    }

    onItemCreate(amount) {
        const item = new ListItem({amount: amount});
        this.state.donates.push(item);
        this.$donateList.addItem(item);
        this.state.total = Number(this.state.total) + Number(amount);
        this.$total.textContent = this.state.total;
    }
    onItemDelete(id) {
        const index = this.state.donates.findIndex(d => d.state.id === Number(id));
        this.state.total = Number(this.state.total) - Number(this.state.donates[index].state.amount);
        this.$donateList.removeItem(this.state.donates[index]);
        this.state.donates.splice(index, 1);
        this.$total.textContent = this.state.total;
    }
}
