import { config } from '../services/config.services';
export class DadService {
    public headers: {};
    public method: string;
    public base_url: string;
    public token: string | null;
    public identity: {
        id: any,
        name: string,
        surname: string,
        email: string
    };
    constructor() {
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': this.getToken(),

        }
        this.method = 'POST'
        this.base_url = config.base_url;
        this.token = null;
        this.identity = this.getClearIdentity();
    }

    getToken() {
        if (typeof localStorage !== 'undefined') {
            let token = localStorage.getItem('token');
            if (token && token != "undefined") {
                this.token = token;
            } else {
                this.token = null;
            }
        } else {
            console.log('storage not 1')
            this.token = null;
        }
        return this.token;
    }

    getIdentity() {
        if (typeof localStorage !== 'undefined') {
            let json = localStorage.getItem('identity');
            if (json && json != "undefined") {
                this.identity = JSON.parse(json)
            } else {
                this.identity = this.getClearIdentity();
                console.log('storage not 2')
            }
        }
        //console.log(this.identity,'storage_identity')
        return this.identity;
    }

    getClearIdentity() {
        return { id: '', name: '', surname: '', email: '', image: '', description: '' };
    }
}

