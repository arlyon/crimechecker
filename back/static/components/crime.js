var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
/**
 * The crime class.
 */
export class CrimeList extends React.Component {
    /**
     * Instantiates a new instance of the CrimeList component.
     * @param {{}} props The props (none).
     */
    constructor(props) {
        super(props);
        this.state = {
            crimes: []
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.postcode !== nextProps.postcode) {
            if (nextProps.postcode === null) {
                this.setState({ crimes: [] });
            }
            else {
                this.fetchData(nextProps.postcode);
            }
        }
    }
    /**
     * Fetches the data from the server and sets the received data in the state.
     * @returns {Promise<void>} Returns nothing.
     */
    fetchData(postcode) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`/api/crime/${postcode}`);
            this.setState({ crimes: yield response.json() });
        });
    }
    static readableCategories(categoryName) {
        switch (categoryName) {
            case "all-crime":
                return "All crime";
            case "anti-social-behaviour":
                return "Anti-social behaviour";
            case "bicycle-theft":
                return "Bicycle theft";
            case "burglary":
                return "Burglary";
            case "criminal-damage-arson":
                return "Criminal damage and arson";
            case "drugs":
                return "Drugs";
            case "other-theft":
                return "Other theft";
            case "possession-of-weapons":
                return "Possession of weapons";
            case "public-order":
                return "Public order";
            case "robbery":
                return "Robbery";
            case "shoplifting":
                return "Shoplifting";
            case "theft-from-the-person":
                return "Theft from the person";
            case "vehicle-crime":
                return "Vehicle crime";
            case "violent-crime":
                return "Violent and sexual offences";
            case "other-crime":
                return "Other crime";
            default:
                return "idk lol";
        }
    }
    /**
     * Counts occurance of crimes and returns an array list of the values
     *  [0] Anti-social behaviour
     *  [1] Bicycle theft
     *  [2] Burglary
     *  [3] Criminal damage and arson
     *  [4] Drugs
     *  [5] Other theft
     *  [6] Possession of weapons
     *  [7] Public order
     *  [8] Robbery
     *  [9] Shoplifting
     *  [10] Theft from the person
     *  [11] Vehicle crime
     *  [12] Violent and sexual offences
     *  [13] Other crime
     * @param crimes the list of crimes in that area
     * @returns {number[]} returns an array list of occurance of crimes in order specified
     */
    summarizeCategories(crimes) {
        let allcrime = 0;
        let antisocial = 0;
        let bicycletheft = 0;
        let burglary = 0;
        let criminaldamage = 0;
        let drugs = 0;
        let othertheft = 0;
        let possessionofweapons = 0;
        let publicorder = 0;
        let robbery = 0;
        let shoplifting = 0;
        let theftfromperson = 0;
        let vehiclecrime = 0;
        let violentcrime = 0;
        let othercrime = 0;
        for (let crime of crimes) {
            switch (crime.category) {
                case "all-crime":
                    allcrime++;
                case "anti-social-behaviour":
                    console.log(antisocial);
                    antisocial++;
                case "bicycle-theft":
                    bicycletheft++;
                case "burglary":
                    burglary++;
                case "criminal-damage-arson":
                    criminaldamage++;
                case "drugs":
                    drugs++;
                case "other-theft":
                    othertheft++;
                case "possession-of-weapons":
                    possessionofweapons++;
                case "public-order":
                    publicorder++;
                case "robbery":
                    robbery++;
                case "shoplifting":
                    shoplifting++;
                case "theft-from-the-person":
                    theftfromperson++;
                case "vehicle-crime":
                    vehiclecrime++;
                case "violent-crime":
                    violentcrime++;
                case "other-crime":
                    othercrime++;
            }
        }
        let list = [allcrime, antisocial, bicycletheft, burglary, criminaldamage, drugs, othertheft, possessionofweapons, publicorder, robbery, shoplifting, theftfromperson, vehiclecrime, violentcrime, othercrime];
        return list;
    }
    /**
     * Called when react renders the component to the DOM.
     * @returns {HTMLElement} The html for the component.
     */
    render() {
        const crimes = this.state.crimes.map((crime, index) => React.createElement(CrimeEntry, Object.assign({ key: index }, crime)));
        let listOfCrimes = this.summarizeCategories(this.state.crimes);
        return React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "All crime:")),
                    React.createElement("td", null, listOfCrimes[0])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Anti-social behaviour:")),
                    React.createElement("td", null, listOfCrimes[1])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Bicycle theft:")),
                    React.createElement("td", null, listOfCrimes[2])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Burglary:")),
                    React.createElement("td", null, listOfCrimes[3])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Criminal damage and arson:")),
                    React.createElement("td", null, listOfCrimes[4])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Other theft:")),
                    React.createElement("td", null, listOfCrimes[5])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Possession of weapons:")),
                    React.createElement("td", null, listOfCrimes[6])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Public order:")),
                    React.createElement("td", null, listOfCrimes[7])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Robbery:")),
                    React.createElement("td", null, listOfCrimes[8])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Shoplifting:")),
                    React.createElement("td", null, listOfCrimes[9])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Theft from the person:")),
                    React.createElement("td", null, listOfCrimes[10])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Vehicle crime:")),
                    React.createElement("td", null, listOfCrimes[11])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Violent and sexual offences:")),
                    React.createElement("td", null, listOfCrimes[12])),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("b", null, "Other crime:")),
                    React.createElement("td", null, listOfCrimes[13]))));
    }
}
/**
 * Displays a crime, given the data for it.
 * @param {CrimeData} props The crime data for the crime.
 * @returns {HTMLElement} The markup for the crime.
 */
const CrimeEntry = (props) => {
    return (React.createElement("tr", null,
        React.createElement("td", null, props.id),
        React.createElement("td", null, props.category),
        React.createElement("td", null, props.month),
        React.createElement("td", null, props.location.street.name.replace("On or near ", "")),
        React.createElement("td", null, props.context)));
};
//# sourceMappingURL=crime.js.map