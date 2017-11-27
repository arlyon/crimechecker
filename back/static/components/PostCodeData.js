var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import { Card, Button, CardTitle, CardText, List, ListItem, CardActions, } from "react-md";
/**
 * PostCodeData shows data about a specific location.
 */
export class PostCodeData extends React.Component {
    /**
     * Creates a new instance of the PostCodeData component.
     * @param props The properties for the component.
     */
    constructor(props) {
        super(props);
        /**
         * Gets nearby locations from wikipedia and sets the state.
         * @returns {Promise<void>} Returns nothing.
         */
        this.fetchNearbyLocations = () => __awaiter(this, void 0, void 0, function* () {
            const request = yield fetch(`/api/nearby/${this.props.postcode}`);
            this.setState({ nearby: yield request.json() });
        });
        /**
         * Gets the data for a given postcode.
         * @param {string} postcode The postcode to look up.
         * @returns {Promise<void>} Returns nothing.
         * TODO maybe do better 404 handling
         */
        this.getLocalDataForPostcode = () => __awaiter(this, void 0, void 0, function* () {
            const address = fetch(`/api/postcode/${this.props.postcode}`);
            const neighbourhood = fetch(`/api/neighbourhood/${this.props.postcode}`);
            const address_json = yield (yield address).json();
            const neighbourhood_json = yield (yield neighbourhood).json();
            this.setState({
                address: address_json.message ? null : address_json,
                neighbourhood: neighbourhood_json.message ? null : neighbourhood_json,
            });
        });
        this.state = {
            nearby: [],
            neighbourhood: null,
            address: null
        };
    }
    /**
     * Finds nearby locations when the component loads.
     */
    componentDidMount() {
        this.fetchNearbyLocations();
        this.getLocalDataForPostcode();
    }
    /**
     * Renders the LocalInfo and PoliceInfo components if there is data for them.
     * @returns {HTMLElement} The markup for the component.
     */
    render() {
        return (React.createElement("div", { id: "postcodedata" },
            this.state.address ? React.createElement(LocalInfo, { address: this.state.address, nearby: this.state.nearby }) : null,
            this.state.neighbourhood ? React.createElement(PoliceInfo, { neighbourhood: this.state.neighbourhood }) : null));
    }
}
/**
 * Displays information about a postcode area.
 * @param props The properties for the component.
 * @returns {HTMLElement} The markup for the component.
 * TODO: revise the prop interface
 */
const LocalInfo = (props) => {
    /**
     * Creates LinkedListItems for each nearby wikipedia entry.
     * @type {HTMLElement[]}
     */
    const nearby = props.nearby.map((item, index) => (React.createElement(HyperLinkListItem, { key: index, primaryText: item.title, secondaryText: `${item.dist} meters away`, href: `https://en.wikipedia.org/?curid=${item.pageid}`, newtab: true })));
    return (React.createElement(Card, null,
        React.createElement(CardTitle, { title: props.address.zone, subtitle: props.address.district }),
        React.createElement(CardActions, { expander: props.nearby !== null, className: "md-divider-border md-divider-border--top md-divider-border--bottom" },
            React.createElement(Button, { flat: true, href: `http://maps.google.com/maps?q=${props.address.lat},${props.address.long}` }, "View on Google Maps")),
        props.nearby ? React.createElement(CardText, { expandable: true },
            React.createElement(List, null, nearby)) : null));
};
/**
 * A hyperlinked list item.
 */
const HyperLinkListItem = (props) => (React.createElement("a", { href: props.href, style: { color: "inherit", textDecoration: "inherit" }, target: props.newtab ? "_blank" : undefined },
    React.createElement(ListItem, Object.assign({}, props))));
/**
 * Displays information about a police neighbourhood.
 * @param props The props for the component.
 * @constructor
 */
const PoliceInfo = (props) => {
    const showExtra = props.neighbourhood.locations.length > 0;
    const locations = props.neighbourhood.locations.map((location, index) => (React.createElement(Card, null,
        React.createElement(CardTitle, { title: location.name, subtitle: location.type }))));
    let twitter_handle;
    if (props.neighbourhood.twitter) {
        const twitter_parts = props.neighbourhood.twitter.split("/");
        twitter_handle = twitter_parts.pop() || twitter_parts.pop(); // trailing slash
    }
    let facebook_handle;
    if (props.neighbourhood.facebook) {
        const facebook_parts = props.neighbourhood.facebook.split("/");
        facebook_handle = facebook_parts.pop() || facebook_parts.pop(); // trailing slash
    }
    return (React.createElement(Card, { style: { marginTop: "2em" } },
        React.createElement(CardTitle, { title: "Local Police", subtitle: `${props.neighbourhood.name}` }),
        props.neighbourhood.description ? React.createElement(CardText, null,
            React.createElement("p", null, props.neighbourhood.description)) : null,
        React.createElement(CardActions, { expander: showExtra, className: "md-divider-border md-divider-border--top md-divider-border--bottom" },
            props.neighbourhood.email ?
                React.createElement(Button, { icon: true, href: `mailto:${props.neighbourhood.email}` }, "mail") : null,
            props.neighbourhood.telephone ?
                React.createElement(Button, { icon: true, href: `tel:${props.neighbourhood.telephone}` }, "phone") : null,
            props.neighbourhood.twitter ?
                React.createElement(Button, { flat: true, href: `https://www.twitter.com/${twitter_handle}` }, "twitter") : null,
            props.neighbourhood.facebook ?
                React.createElement(Button, { flat: true, href: `https://www.facebook.com/${facebook_handle}` }, "facebook") : null),
        showExtra ? React.createElement(CardText, { expandable: true }, locations) : null));
};
//# sourceMappingURL=PostCodeData.js.map