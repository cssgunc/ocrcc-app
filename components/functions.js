import consts from './consts'
import { Linking } from 'react-native';

class Stylings {
    primary(styleType) {
        if (styleType == "facebook") {
            return consts.secondaryScheme.primaryColor;    
        } else {
            return consts.primaryScheme.primaryColor;
        }

    }

    changeStyle(style) {
        if(style == "facebook") {
            consts.current = "facebook";
        }
    }

    abc() {
        // need to link to the right website
        Linking.openURL('http://google.com')
    }
}
const styling = new Stylings;
export default styling;