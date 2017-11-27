var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import { Person } from "./person";
/**
 * The people class component.
 */
export class People extends React.Component {
    /**
     * Called when the component is instantiated.
     */
    constructor(props) {
        super(props);
        /**
         * Fetches the data asynchronously and sets the state.
         * @returns {Promise<void>}
         */
        this.fetchData = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("/api/people/");
            this.setState({ people: yield response.json() });
        });
        // set the state
        this.state = {
            people: []
        };
    }
    /**
     * Called when the component mounts on the page.
     */
    componentDidMount() {
        this.fetchData();
    }
    /**
     * The render function returns the markup for the component.
     * @returns {any}
     */
    render() {
        const people = this.state.people.map(person => React.createElement(Person, Object.assign({ key: person.id }, person)));
        return (React.createElement("section", null,
            React.createElement("h1", null, "People"),
            people));
    }
}
//# sourceMappingURL=people.js.map