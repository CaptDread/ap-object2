"use strict";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var CharLimiter = /*#__PURE__*/function () {
  /**
   * Params:
   * 
   * 
   * -elements: dom element to impose a limit
   * -options:objects of optional parameters
   * -limit: numeric limit
   * -messageColor: color of the "x chars left" message
   * -
   * 
   * should be called on a single input field, 
   * rather than a generic selector
   * 
   * 
   */
  function CharLimiter(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CharLimiter);

    _defineProperty(this, "options", {});

    _defineProperty(this, "DEFAULTS", {
      limit: 10,
      messageColor: "red",
      warningColor: "yellow"
    });

    _defineProperty(this, "handleKeyUp", function (evt) {
      // console.log(`keyup`, evt, this)
      var curValue = _this.element.value;
      var curCount = curValue.length;
      var charLeft = options.limit - curCount;
      var warnValue = options.limit / 10;
      console.log("charLeft", charLeft);
      console.log("warning at ", warnValue);
      warnValue = Math.ceil(warnValue);

      if (charLeft < warnValue) {
        console.log("This is your limit warning");
      }

      if (charLeft < 1) {
        console.log("You've reached the limit");
      }
    });

    this.element = element;
    this.options = _objectSpread(_objectSpread({}, this.DEFAULTS), options);
    this.options.limit = parseInt(this.options.limit); // smart to do this right away, this makes the value always equal an interger.

    console.log('CharLimiter', element, options, this.options);
    console.log("input", element.name);
    this.setup();
  }

  _createClass(CharLimiter, [{
    key: "setup",
    value: function setup() {
      // add a new message feild to the Dom
      var message = document.createElement("span");
      message.classList.add(this.element.name);
      message.textContent = "".concat(this.options.limit, " chars left");
      this.element.parentNode.appendChild(message); // setup an event listener on the input element

      this.element.addEventListener("keyup", this.handleKeyUp);
    }
  }]);

  return CharLimiter;
}();
//# sourceMappingURL=char-limiter.js.map
