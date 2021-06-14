'use strict';

//const e = React.createElement;

function Header(props) {
    return React.createElement(
        "header",
        null,
        React.createElement(
            "a",
            { href: "index.html" },
            React.createElement(
                "h1",
                { id: "title" },
                "Isabel Datars"
            )
        ),
        React.createElement(
            "nav",
            null,
            React.createElement(
                "ul",
                { id: "nav" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "coding.html" },
                        "Coding"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    "|"
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "design.html" },
                        "Art + Design"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    "|"
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "resume.html" },
                        "Resume"
                    )
                )
            )
        )
    );
}

var domContainer = document.querySelector('#header');
ReactDOM.render(React.createElement(Header), domContainer);