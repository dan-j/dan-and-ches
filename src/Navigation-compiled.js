'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactBootstrap = require('react-bootstrap');

require('./Navigation.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Navigation).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        _reactBootstrap.Navbar,
        { fluid: true, id: 'nav_center' },
        React.createElement(
          _reactBootstrap.Nav,
          null,
          React.createElement(
            _reactBootstrap.NavItem,
            { disabled: true, href: '#' },
            'Their Story'
          ),
          React.createElement(
            _reactBootstrap.NavItem,
            { disabled: true, href: '#' },
            'Where & When'
          ),
          React.createElement(
            _reactBootstrap.NavDropdown,
            { title: 'Invitations', id: 'basic-nav-dropdown' },
            React.createElement(
              _reactBootstrap.MenuItem,
              { disabled: true },
              'Your Invitations'
            ),
            React.createElement(
              _reactBootstrap.MenuItem,
              { disabled: true },
              'Attendee List'
            )
          ),
          React.createElement(
            _reactBootstrap.NavDropdown,
            { title: 'Useful Info', id: 'basic-nav-dropdown' },
            React.createElement(
              _reactBootstrap.MenuItem,
              { disabled: true },
              'Accommodation'
            ),
            React.createElement(
              _reactBootstrap.MenuItem,
              { disabled: true },
              'Parking'
            ),
            React.createElement(
              _reactBootstrap.MenuItem,
              { disabled: true },
              'Menus'
            ),
            React.createElement(
              _reactBootstrap.MenuItem,
              { disabled: true },
              'Contacts'
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = Navigation;

//# sourceMappingURL=Navigation-compiled.js.map