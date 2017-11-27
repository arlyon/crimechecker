import * as React from "react";
/**
 * A stateless, classless component.
 * @param {IPerson} props
 * @constructor
 */
export const Person = (props) => React.createElement("article", null,
    React.createElement("h1", null, props.name),
    React.createElement("dl", null,
        React.createElement("dt", null, "Born at"),
        React.createElement("dd", null, props.birthday),
        React.createElement("dt", null, "Relative"),
        React.createElement("dd", null, props.is_relative.toString())));
//# sourceMappingURL=person.js.map