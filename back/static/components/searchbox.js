var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import { Button, Autocomplete, } from "react-md";
import config from '../config';
/**
 * The search class.
 */
export class SearchBox extends React.Component {
    /**
     * Instantiates a new instance of the CrimeList component.
     * @param {{}} props The props (none).
     */
    constructor(props) {
        super(props);
        /**
         * Manually calls the foundValid function with the current search string.
         */
        this.submitPostcode = () => {
            this.props.foundValid(this.state.searchString);
        };
        /**
         * Sets the error state and vibrates the device.
         * @param {boolean} value
         */
        this.setError = (value) => {
            if (this.state.error !== value) {
                this.setState({ error: value });
                if (value === true) {
                    navigator.vibrate(config.vibrateOnError);
                }
            }
        };
        /**
         * The update search event handler.
         * @param searchString
         */
        this.handleSearchUpdate = (searchString) => __awaiter(this, void 0, void 0, function* () {
            searchString = searchString.toUpperCase();
            const regionName = this.getRegionForPostcode(searchString);
            this.setState({
                searchString,
                region: regionName
            });
            this.setError(searchString !== "" && regionName === undefined);
            if (searchString !== "" && (regionName !== undefined || searchString.length == 1))
                this.getAutoCompleteForPostcode(searchString);
        });
        /**
         * Manages the autocomplete click event.
         * @param clickedValue The value that was clicked on.
         */
        this.handleAutoComplete = (clickedValue) => {
            if (this.state.searchString !== clickedValue) {
                this.setState({ searchString: clickedValue });
                this.props.foundValid(clickedValue);
            }
        };
        /**
         * Gets the autocomplete data from the server.
         * @returns {Promise<void>} Returns nothing.
         * TODO calculating the bold doesn't take spaces into account. can lead to malformed highlighting
         */
        this.getAutoCompleteForPostcode = (searchString, online = this.props.online) => __awaiter(this, void 0, void 0, function* () {
            if (!online)
                return;
            const autocomplete_lookup = yield fetch(`https://api.postcodes.io/postcodes/${searchString}/autocomplete`);
            const postcodes = (yield autocomplete_lookup.json())["result"] || [];
            const processed = postcodes.map((next) => ({
                label: [
                    React.createElement("span", { key: "bold", className: "md-font-bold" }, next.substring(0, searchString.length)),
                    next.substring(searchString.length),
                ],
                value: next
            }));
            this.setState({
                autoComplete: processed,
            });
            this.setError(postcodes.length === 0);
            if (postcodes.length === 1) {
                this.props.foundValid(postcodes[0]);
            }
        });
        this.state = {
            searchString: "",
            error: false,
            region: "",
            autoComplete: [],
        };
    }
    /**
     * Called when react renders the component to the DOM.
     * @returns {HTMLElement} The html for the component.
     */
    render() {
        return (React.createElement(Autocomplete, { id: "search", label: this.state.region || "Search For A Postcode", inlineIndicator: React.createElement(Button, { icon: true, onClick: this.submitPostcode }, "search"), customSize: "title", filter: null, helpText: "Yolo", helpOnFocus: true, data: this.state.autoComplete, value: this.state.searchString, onChange: this.handleSearchUpdate, onAutocomplete: this.handleAutoComplete, error: this.state.error, dataLabel: "label", dataValue: "value" }));
    }
    /**
     * Updates the autocomplete when the client goes online/offline.
     * @param {Readonly<P>} props The new props for the component.
     */
    componentWillReceiveProps(props) {
        if (!props.online && this.props.online) {
            this.setState({ autoComplete: [] });
        }
        else if (props.online && !this.props.online) {
            this.getAutoCompleteForPostcode(this.state.searchString, props.online);
        }
    }
    /**
     * Gets the region and looks up the postcode.
     * @param {string} searchString
     * @returns {string | null} The region.
     */
    getRegionForPostcode(searchString) {
        const re = /^([A-Z]{1,2})([0-9]?[A-Z]?[0-9 ]{0,3}[A-Z]{0,2})$/;
        const match = re.exec(searchString);
        return match ? this.props.regions[match[1]] : null;
    }
}
//# sourceMappingURL=searchbox.js.map