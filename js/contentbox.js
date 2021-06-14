'use strict';

//const e = React.createElement;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentBox = function (_React$Component) {
    _inherits(ContentBox, _React$Component);

    function ContentBox(props) {
        _classCallCheck(this, ContentBox);

        var _this = _possibleConstructorReturn(this, (ContentBox.__proto__ || Object.getPrototypeOf(ContentBox)).call(this, props));

        _this.state = {
            text: props.text,
            image: props.image
        };
        return _this;
    }

    _createClass(ContentBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'design' },
                React.createElement('img', { src: this.state.image }),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        this.state.text
                    )
                )
            );
        }
    }]);

    return ContentBox;
}(React.Component);

document.querySelectorAll('.contentbox').forEach(function (domContainer) {
    // Read the comment ID from a data-* attribute.
    ReactDOM.render(React.createElement(ContentBox, { text: domContainer.dataset.text, image: domContainer.dataset.image }), domContainer);
});