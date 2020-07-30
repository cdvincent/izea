import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
     @tracked launch = false;
     @tracked show = false;
     @tracked contentClicked = false;

    @action launchModal() {
        if (this.contentClicked) {
            this.launch = true;
            this.contentClicked = false;
        } else {
            this.contentClicked = false;
            this.launch = !this.launch;
        }
    }

    @action contentWasClicked() {
        this.contentClicked = true;
    }

    @action toggle() {
        this.show = !this.show;
    }
}
