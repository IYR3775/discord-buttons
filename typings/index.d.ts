declare function _exports(client: Client): {
    MessageButton: typeof MessageButton;
    ButtonCollector: typeof ButtonCollector;
};
declare namespace _exports {
    export { MessageButton };
    export { ButtonCollector };
}
export = _exports;
import MessageButton = require("./Classes/MessageButton");
import ButtonCollector = require("./Classes/ButtonCollector");
import { Client } from 'discord.js';
