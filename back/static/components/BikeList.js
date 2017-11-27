var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
//import * as ReactDOM from "react-dom";
import { TextField } from 'react-md';
import { Card, CardTitle, CardText } from 'react-md';
export class BikeList extends React.Component {
    constructor(props) {
        super(props);
        this.updateSearch = (value, event) => {
            this.setState({ search: value });
        };
        this.state = {
            bikes: [],
            search: "",
        };
        // this.fetchData()
    }
    /**
     * Fetches the data from the server and sets the received data in the state.
     * @returns {Promise<void>} Returns nothing.
     */
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("/api/bikes/");
            this.setState({ bikes: yield response.json() });
        });
    }
    render() {
        const bikeFilter = (bike) => {
            if (this.state.search === "") {
                return true; //Display all if search is empty
            }
            for (let key of Object.keys(bike)) {
                try {
                    if (bike[key].toLowerCase().includes(this.state.search)) {
                        return true;
                    }
                }
                catch (_a) {
                }
            }
            return false;
        };
        const bikeMarkUp = this.state.bikes
            .filter(bikeFilter) //passes bike as parameter to function BikeFilter
            .map((stolenbike, index) => React.createElement(CardForBikes, Object.assign({}, stolenbike)));
        return React.createElement("section", null,
            React.createElement("h1", null, " Stolen bikes "),
            React.createElement(TextField, { id: "floating-center-title", label: "Bikes", lineDirection: "center", placeholder: "Search for bike model...", className: "md-cell md-cell--bottom", value: this.state.search, onChange: this.updateSearch, customSize: "title" }),
            React.createElement("section", { style: {
                    marginTop: "3em",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                } }, bikeMarkUp));
    }
}
function CardForBikes(props) {
    const style = { maxWidth: 320, minWidth: 320 };
    const propsNew = {};
    for (let x of Object.keys(props)) {
        propsNew[x] = props[x] || "N/A";
    }
    return (React.createElement(Card, { style: style },
        React.createElement(CardTitle, { title: propsNew.model, subtitle: propsNew.make }),
        React.createElement(CardText, null,
            React.createElement("article", null,
                React.createElement("b", null, "Latitude:"),
                " ",
                propsNew.latitude),
            React.createElement("article", null,
                " ",
                React.createElement("b", null, "longitude: "),
                " ",
                propsNew.longitude),
            React.createElement("article", null,
                React.createElement("b", null, "Frame number: "),
                " ",
                propsNew.frame_number),
            React.createElement("article", null,
                React.createElement("b", null, "Colour: "),
                " ",
                propsNew.colour),
            React.createElement("article", null,
                React.createElement("b", null, "Description: "),
                " ",
                propsNew.description),
            React.createElement("article", null,
                React.createElement("b", null, "Reported at: "),
                " ",
                propsNew.reported_at))));
}
//# sourceMappingURL=BikeList.js.map