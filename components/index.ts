import Button from './Button/index';
import { App } from 'vue';
const components = [Button];
const install = (app: App) => {    
components.forEach(component => {        
        app.use(component.install);    
    }); 
};
export default {install,Button, };