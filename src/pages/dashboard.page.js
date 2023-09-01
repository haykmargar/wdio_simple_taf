import Page from './page.js';

class DashboardPage extends Page {
    get pageTitle () {
        return $('span[title="All Dashboards"]');
    }
}

export default new DashboardPage();
