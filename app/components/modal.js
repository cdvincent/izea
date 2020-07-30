import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
     @tracked launch = false;
     @tracked show = false;

    @action launchModal() {
        this.launch = !this.launch;
    }

    @action toggle() {
        this.show = !this.show;
    }
}
