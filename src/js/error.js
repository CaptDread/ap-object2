"use strict";

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

var ErrorHandler = /*#__PURE__*/function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);

    _defineProperty(this, "errors", {});

    this.setup();
  }

  _createClass(ErrorHandler, [{
    key: "setup",
    value: function setup() {
      document.addEventListener("validation-error", function (evt) {
        console.log("invalid input data", evt);
        globalErrors[evt.detail.key] = evt.detail.value;
        var errMessage = Object.values(gloablErrors).join("<br />");
        var errEl = document.querySelector(".global-error");
        errEl.querySelector(".message").innerHTML = errMessage;
        var invalidElement = evt.detail.element;
        var errors = {};

        if (invalidElement.dataset.errors) {
          try {
            errors = json.parse(invalidElement.dataset.errors);
          } catch (err) {
            console.log("error!", err);
            errors = {};
          }
        }

        errors[evt.detail.key] = evt.detail.value;
        invalidElement.dataset.errors = json.stringify(errors);
      });
    }
  }]);

  return ErrorHandler;
}();
//# sourceMappingURL=error.js.map
