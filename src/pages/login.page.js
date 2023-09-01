import Page from './page.js';
import { config } from '../../wdio.conf.js';

class LoginPage extends Page {

    async openLoginPage() {
        await super.open(`${config.baseUrl}login`);
    }
    get inputUsername () {
        return $('input[placeholder="Login"]');
    }

    get inputPassword () {
        return $('input[placeholder="Password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get invalidUserNamePasswordError () {
        return $('div p');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
