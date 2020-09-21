(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["metal-ui"] = factory(require("react"), require("react-dom"));
	else
		root["metal-ui"] = factory(root["React"], root["ReactDOM"]);
})((typeof window !== 'undefined' ? window : this), function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(22)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AlgoliaSearchHelper = __webpack_require__(29);

var SearchParameters = __webpack_require__(12);
var SearchResults = __webpack_require__(14);

/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @example
 * //using the UMD build
 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
 * var helper = algoliasearchHelper(client, 'bestbuy', {
 *   facets: ['shipping'],
 *   disjunctiveFacets: ['category']
 * });
 * helper.on('result', function(event) {
 *   console.log(event.results);
 * });
 * helper
 *   .toggleFacetRefinement('category', 'Movies & TV Shows')
 *   .toggleFacetRefinement('shipping', 'Free shipping')
 *   .search();
 * @example
 * // The helper is an event emitter using the node API
 * helper.on('result', updateTheResults);
 * helper.once('result', updateTheResults);
 * helper.removeListener('result', updateTheResults);
 * helper.removeAllListeners('result');
 * @module algoliasearchHelper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the name of the index to query
 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper}
 */
function algoliasearchHelper(client, index, opts) {
  return new AlgoliaSearchHelper(client, index, opts);
}

/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */
algoliasearchHelper.version = __webpack_require__(19);

/**
 * Constructor for the Helper.
 * @member module:algoliasearchHelper.AlgoliaSearchHelper
 * @type {AlgoliaSearchHelper}
 */
algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;

/**
 * Constructor for the object containing all the parameters of the search.
 * @member module:algoliasearchHelper.SearchParameters
 * @type {SearchParameters}
 */
algoliasearchHelper.SearchParameters = SearchParameters;

/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */
algoliasearchHelper.SearchResults = SearchResults;

module.exports = algoliasearchHelper;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @MAJOR can be replaced by native Array#find when we change support
module.exports = function find(array, comparator) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return array[i];
    }
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function clone(value) {
  if (typeof value === 'object' && value !== null) {
    return _merge(Array.isArray(value) ? [] : {}, value);
  }
  return value;
}

function isObjectOrArrayOrFunction(value) {
  return (
    typeof value === 'function' ||
    Array.isArray(value) ||
    Object.prototype.toString.call(value) === '[object Object]'
  );
}

function _merge(target, source) {
  if (target === source) {
    return target;
  }

  for (var key in source) {
    if (!Object.prototype.hasOwnProperty.call(source, key)) {
      continue;
    }

    var sourceVal = source[key];
    var targetVal = target[key];

    if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') {
      continue;
    }

    if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) {
      target[key] = _merge(targetVal, sourceVal);
    } else {
      target[key] = clone(sourceVal);
    }
  }
  return target;
}

/**
 * This method is like Object.assign, but recursively merges own and inherited
 * enumerable keyed properties of source objects into the destination object.
 *
 * NOTE: this behaves like lodash/merge, but:
 * - does mutate functions if they are a source
 * - treats non-plain objects as plain
 * - does not work for circular objects
 * - treats sparse arrays as sparse
 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
 *
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */

function merge(target) {
  if (!isObjectOrArrayOrFunction(target)) {
    target = {};
  }

  for (var i = 1, l = arguments.length; i < l; i++) {
    var source = arguments[i];

    if (isObjectOrArrayOrFunction(source)) {
      _merge(target, source);
    }
  }
  return target;
}

module.exports = merge;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// NOTE: this behaves like lodash/defaults, but doesn't mutate the target
// it also preserve keys order
module.exports = function defaultsPure() {
  var sources = Array.prototype.slice.call(arguments);

  return sources.reduceRight(function(acc, source) {
    Object.keys(Object(source)).forEach(function(key) {
      if (source[key] === undefined) {
        return;
      }
      if (acc[key] !== undefined) {
        // remove if already added, so that we can add it in correct order
        delete acc[key];
      }
      acc[key] = source[key];
    });
    return acc;
  }, {});
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function objectHasKeys(obj) {
  return obj && Object.keys(obj).length > 0;
}

module.exports = objectHasKeys;


/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(8);
var defaultsPure = __webpack_require__(9);
var intersection = __webpack_require__(30);
var find = __webpack_require__(6);
var valToNumber = __webpack_require__(31);
var omit = __webpack_require__(13);
var objectHasKeys = __webpack_require__(10);

var RefinementList = __webpack_require__(32);

/**
 * isEqual, but only for numeric refinement values, possible values:
 * - 5
 * - [5]
 * - [[5]]
 * - [[5,5],[4]]
 */
function isEqualNumericRefinement(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return (
      a.length === b.length &&
      a.every(function(el, i) {
        return isEqualNumericRefinement(b[i], el);
      })
    );
  }
  return a === b;
}

/**
 * like _.find but using deep equality to be able to use it
 * to find arrays.
 * @private
 * @param {any[]} array array to search into (elements are base or array of base)
 * @param {any} searchedValue the value we're looking for (base or array of base)
 * @return {any} the searched value or undefined
 */
function findArray(array, searchedValue) {
  return find(array, function(currentValue) {
    return isEqualNumericRefinement(currentValue, searchedValue);
  });
}

/**
 * The facet list is the structure used to store the list of values used to
 * filter a single attribute.
 * @typedef {string[]} SearchParameters.FacetList
 */

/**
 * Structure to store numeric filters with the operator as the key. The supported operators
 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
 */

/**
 * SearchParameters is the data structure that contains all the information
 * usable for making a search to Algolia API. It doesn't do the search itself,
 * nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It will
 * be provided when needed. This object is documented for reference as you'll
 * get it from events generated by the {@link AlgoliaSearchHelper}.
 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
 * @constructor
 * @classdesc contains all the parameters of a search
 * @param {object|SearchParameters} newParameters existing parameters or partial object
 * for the properties of a new SearchParameters
 * @see SearchParameters.make
 * @example <caption>SearchParameters of the first query in
 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
{
   "query": "",
   "disjunctiveFacets": [
      "customerReviewCount",
      "category",
      "salePrice_range",
      "manufacturer"
  ],
   "maxValuesPerFacet": 30,
   "page": 0,
   "hitsPerPage": 10,
   "facets": [
      "type",
      "shipping"
  ]
}
 */
function SearchParameters(newParameters) {
  var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};

  /**
   * This attribute contains the list of all the conjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */
  this.facets = params.facets || [];
  /**
   * This attribute contains the list of all the disjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */
  this.disjunctiveFacets = params.disjunctiveFacets || [];
  /**
   * This attribute contains the list of all the hierarchical facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * Hierarchical facets are a sub type of disjunctive facets that
   * let you filter faceted attributes hierarchically.
   * @member {string[]|object[]}
   */
  this.hierarchicalFacets = params.hierarchicalFacets || [];

  // Refinements
  /**
   * This attribute contains all the filters that need to be
   * applied on the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.facetsRefinements = params.facetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * excluded from the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters excluded for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.facetsExcludes = params.facetsExcludes || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the disjunctive facets. Each facet must be properly
   * defined in the `disjunctiveFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the numeric attributes.
   *
   * The key is the name of the attribute, and the value is the
   * filters to apply to this attribute.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `numericFilters` attribute.
   * @member {Object.<string, SearchParameters.OperatorList>}
   */
  this.numericRefinements = params.numericRefinements || {};
  /**
   * This attribute contains all the tags used to refine the query.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `tagFilters` attribute.
   * @member {string[]}
   */
  this.tagRefinements = params.tagRefinements || [];
  /**
   * This attribute contains all the filters that need to be
   * applied on the hierarchical facets. Each facet must be properly
   * defined in the `hierarchicalFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name. The FacetList values
   * are structured as a string that contain the values for each level
   * separated by the configured separator.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};

  var self = this;
  Object.keys(params).forEach(function(paramName) {
    var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
    var isValueDefined = params[paramName] !== undefined;

    if (!isKeyKnown && isValueDefined) {
      self[paramName] = params[paramName];
    }
  });
}

/**
 * List all the properties in SearchParameters and therefore all the known Algolia properties
 * This doesn't contain any beta/hidden features.
 * @private
 */
SearchParameters.PARAMETERS = Object.keys(new SearchParameters());

/**
 * @private
 * @param {object} partialState full or part of a state
 * @return {object} a new object with the number keys as number
 */
SearchParameters._parseNumbers = function(partialState) {
  // Do not reparse numbers in SearchParameters, they ought to be parsed already
  if (partialState instanceof SearchParameters) return partialState;

  var numbers = {};

  var numberKeys = [
    'aroundPrecision',
    'aroundRadius',
    'getRankingInfo',
    'minWordSizefor2Typos',
    'minWordSizefor1Typo',
    'page',
    'maxValuesPerFacet',
    'distinct',
    'minimumAroundRadius',
    'hitsPerPage',
    'minProximity'
  ];

  numberKeys.forEach(function(k) {
    var value = partialState[k];
    if (typeof value === 'string') {
      var parsedValue = parseFloat(value);
      // global isNaN is ok to use here, value is only number or NaN
      numbers[k] = isNaN(parsedValue) ? value : parsedValue;
    }
  });

  // there's two formats of insideBoundingBox, we need to parse
  // the one which is an array of float geo rectangles
  if (Array.isArray(partialState.insideBoundingBox)) {
    numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {
      if (Array.isArray(geoRect)) {
        return geoRect.map(function(value) {
          return parseFloat(value);
        });
      }
      return geoRect;
    });
  }

  if (partialState.numericRefinements) {
    var numericRefinements = {};
    Object.keys(partialState.numericRefinements).forEach(function(attribute) {
      var operators = partialState.numericRefinements[attribute] || {};
      numericRefinements[attribute] = {};
      Object.keys(operators).forEach(function(operator) {
        var values = operators[operator];
        var parsedValues = values.map(function(v) {
          if (Array.isArray(v)) {
            return v.map(function(vPrime) {
              if (typeof vPrime === 'string') {
                return parseFloat(vPrime);
              }
              return vPrime;
            });
          } else if (typeof v === 'string') {
            return parseFloat(v);
          }
          return v;
        });
        numericRefinements[attribute][operator] = parsedValues;
      });
    });
    numbers.numericRefinements = numericRefinements;
  }

  return merge({}, partialState, numbers);
};

/**
 * Factory for SearchParameters
 * @param {object|SearchParameters} newParameters existing parameters or partial
 * object for the properties of a new SearchParameters
 * @return {SearchParameters} frozen instance of SearchParameters
 */
SearchParameters.make = function makeSearchParameters(newParameters) {
  var instance = new SearchParameters(newParameters);

  var hierarchicalFacets = newParameters.hierarchicalFacets || [];
  hierarchicalFacets.forEach(function(facet) {
    if (facet.rootPath) {
      var currentRefinement = instance.getHierarchicalRefinement(facet.name);

      if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) {
        instance = instance.clearRefinements(facet.name);
      }

      // get it again in case it has been cleared
      currentRefinement = instance.getHierarchicalRefinement(facet.name);
      if (currentRefinement.length === 0) {
        instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
      }
    }
  });

  return instance;
};

/**
 * Validates the new parameters based on the previous state
 * @param {SearchParameters} currentState the current state
 * @param {object|SearchParameters} parameters the new parameters to set
 * @return {Error|null} Error if the modification is invalid, null otherwise
 */
SearchParameters.validate = function(currentState, parameters) {
  var params = parameters || {};

  if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) {
    return new Error(
      '[Tags] Cannot switch from the managed tag API to the advanced API. It is probably ' +
      'an error, if it is really what you want, you should first clear the tags with clearTags method.');
  }

  if (currentState.tagRefinements.length > 0 && params.tagFilters) {
    return new Error(
      '[Tags] Cannot switch from the advanced tag API to the managed API. It is probably ' +
      'an error, if it is not, you should first clear the tags with clearTags method.');
  }

  if (
    currentState.numericFilters &&
    params.numericRefinements &&
    objectHasKeys(params.numericRefinements)
  ) {
    return new Error(
      "[Numeric filters] Can't switch from the advanced to the managed API. It" +
        ' is probably an error, if this is really what you want, you have to first' +
        ' clear the numeric filters.'
    );
  }

  if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) {
    return new Error(
      "[Numeric filters] Can't switch from the managed API to the advanced. It" +
      ' is probably an error, if this is really what you want, you have to first' +
      ' clear the numeric filters.');
  }

  return null;
};

SearchParameters.prototype = {
  constructor: SearchParameters,

  /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters}
   */
  clearRefinements: function clearRefinements(attribute) {
    var patch = {
      numericRefinements: this._clearNumericRefinements(attribute),
      facetsRefinements: RefinementList.clearRefinement(
        this.facetsRefinements,
        attribute,
        'conjunctiveFacet'
      ),
      facetsExcludes: RefinementList.clearRefinement(
        this.facetsExcludes,
        attribute,
        'exclude'
      ),
      disjunctiveFacetsRefinements: RefinementList.clearRefinement(
        this.disjunctiveFacetsRefinements,
        attribute,
        'disjunctiveFacet'
      ),
      hierarchicalFacetsRefinements: RefinementList.clearRefinement(
        this.hierarchicalFacetsRefinements,
        attribute,
        'hierarchicalFacet'
      )
    };
    if (
      patch.numericRefinements === this.numericRefinements &&
      patch.facetsRefinements === this.facetsRefinements &&
      patch.facetsExcludes === this.facetsExcludes &&
      patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements &&
      patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements
    ) {
      return this;
    }
    return this.setQueryParameters(patch);
  },
  /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters}
   */
  clearTags: function clearTags() {
    if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;

    return this.setQueryParameters({
      tagFilters: undefined,
      tagRefinements: []
    });
  },
  /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters}
   */
  setIndex: function setIndex(index) {
    if (index === this.index) return this;

    return this.setQueryParameters({
      index: index
    });
  },
  /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters}
   */
  setQuery: function setQuery(newQuery) {
    if (newQuery === this.query) return this;

    return this.setQueryParameters({
      query: newQuery
    });
  },
  /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters}
   */
  setPage: function setPage(newPage) {
    if (newPage === this.page) return this;

    return this.setQueryParameters({
      page: newPage
    });
  },
  /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters}
   */
  setFacets: function setFacets(facets) {
    return this.setQueryParameters({
      facets: facets
    });
  },
  /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters}
   */
  setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
    return this.setQueryParameters({
      disjunctiveFacets: facets
    });
  },
  /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters}
   */
  setHitsPerPage: function setHitsPerPage(n) {
    if (this.hitsPerPage === n) return this;

    return this.setQueryParameters({
      hitsPerPage: n
    });
  },
  /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters}
   */
  setTypoTolerance: function setTypoTolerance(typoTolerance) {
    if (this.typoTolerance === typoTolerance) return this;

    return this.setQueryParameters({
      typoTolerance: typoTolerance
    });
  },
  /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters}
   * @example
   * // for price = 50 or 40
   * searchparameter.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * searchparameter.addNumericRefinement('size', '=', 38);
   * searchparameter.addNumericRefinement('size', '=', 40);
   */
  addNumericRefinement: function(attribute, operator, v) {
    var value = valToNumber(v);

    if (this.isNumericRefined(attribute, operator, value)) return this;

    var mod = merge({}, this.numericRefinements);

    mod[attribute] = merge({}, mod[attribute]);

    if (mod[attribute][operator]) {
      // Array copy
      mod[attribute][operator] = mod[attribute][operator].slice();
      // Add the element. Concat can't be used here because value can be an array.
      mod[attribute][operator].push(value);
    } else {
      mod[attribute][operator] = [value];
    }

    return this.setQueryParameters({
      numericRefinements: mod
    });
  },
  /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getConjunctiveRefinements: function(facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      return [];
    }
    return this.facetsRefinements[facetName] || [];
  },
  /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getDisjunctiveRefinements: function(facetName) {
    if (!this.isDisjunctiveFacet(facetName)) {
      return [];
    }
    return this.disjunctiveFacetsRefinements[facetName] || [];
  },
  /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getHierarchicalRefinement: function(facetName) {
    // we send an array but we currently do not support multiple
    // hierarchicalRefinements for a hierarchicalFacet
    return this.hierarchicalFacetsRefinements[facetName] || [];
  },
  /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getExcludeRefinements: function(facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      return [];
    }
    return this.facetsExcludes[facetName] || [];
  },

  /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters}
   */
  removeNumericRefinement: function(attribute, operator, paramValue) {
    if (paramValue !== undefined) {
      if (!this.isNumericRefined(attribute, operator, paramValue)) {
        return this;
      }
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function(value, key) {
          return (
            key === attribute &&
            value.op === operator &&
            isEqualNumericRefinement(value.val, valToNumber(paramValue))
          );
        })
      });
    } else if (operator !== undefined) {
      if (!this.isNumericRefined(attribute, operator)) return this;
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function(value, key) {
          return key === attribute && value.op === operator;
        })
      });
    }

    if (!this.isNumericRefined(attribute)) return this;
    return this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(value, key) {
        return key === attribute;
      })
    });
  },
  /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList[]} list of refinements
   */
  getNumericRefinements: function(facetName) {
    return this.numericRefinements[facetName] || {};
  },
  /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */
  getNumericRefinement: function(attribute, operator) {
    return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
  },
  /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>}
   */
  _clearNumericRefinements: function _clearNumericRefinements(attribute) {
    if (attribute === undefined) {
      if (!objectHasKeys(this.numericRefinements)) {
        return this.numericRefinements;
      }
      return {};
    } else if (typeof attribute === 'string') {
      if (!objectHasKeys(this.numericRefinements[attribute])) {
        return this.numericRefinements;
      }
      return omit(this.numericRefinements, [attribute]);
    } else if (typeof attribute === 'function') {
      var hasChanged = false;
      var numericRefinements = this.numericRefinements;
      var newNumericRefinements = Object.keys(numericRefinements).reduce(function(memo, key) {
        var operators = numericRefinements[key];
        var operatorList = {};

        operators = operators || {};
        Object.keys(operators).forEach(function(operator) {
          var values = operators[operator] || [];
          var outValues = [];
          values.forEach(function(value) {
            var predicateResult = attribute({val: value, op: operator}, key, 'numeric');
            if (!predicateResult) outValues.push(value);
          });
          if (outValues.length !== values.length) {
            hasChanged = true;
          }
          operatorList[operator] = outValues;
        });

        memo[key] = operatorList;

        return memo;
      }, {});

      if (hasChanged) return newNumericRefinements;
      return this.numericRefinements;
    }
  },
  /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters}
   */
  addFacet: function addFacet(facet) {
    if (this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      facets: this.facets.concat([facet])
    });
  },
  /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters}
   */
  addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
    if (this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.concat([facet])
    });
  },
  /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters}
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */
  addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
    if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
      throw new Error(
        'Cannot declare two hierarchical facets with the same name: `' + hierarchicalFacet.name + '`');
    }

    return this.setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet])
    });
  },
  /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addFacetRefinement: function addFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
    });
  },
  /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addExcludeRefinement: function addExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;

    return this.setQueryParameters({
      facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
    });
  },
  /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(
        facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }

    if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.addRefinement(
        this.disjunctiveFacetsRefinements, facet, value)
    });
  },
  /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters}
   */
  addTagRefinement: function addTagRefinement(tag) {
    if (this.isTagRefined(tag)) return this;

    var modification = {
      tagRefinements: this.tagRefinements.concat(tag)
    };

    return this.setQueryParameters(modification);
  },
  /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters}
   */
  removeFacet: function removeFacet(facet) {
    if (!this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      facets: this.facets.filter(function(f) {
        return f !== facet;
      })
    });
  },
  /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters}
   */
  removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
    if (!this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.filter(function(f) {
        return f !== facet;
      })
    });
  },
  /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters}
   */
  removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
    if (!this.isHierarchicalFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.filter(function(f) {
        return f.name !== facet;
      })
    });
  },
  /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters}
   */
  removeFacetRefinement: function removeFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
    });
  },
  /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;

    return this.setQueryParameters({
      facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
    });
  },
  /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(
        facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }
    if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.removeRefinement(
        this.disjunctiveFacetsRefinements, facet, value)
    });
  },
  /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters}
   */
  removeTagRefinement: function removeTagRefinement(tag) {
    if (!this.isTagRefined(tag)) return this;

    var modification = {
      tagRefinements: this.tagRefinements.filter(function(t) {
        return t !== tag;
      })
    };

    return this.setQueryParameters(modification);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */
  toggleRefinement: function toggleRefinement(facet, value) {
    return this.toggleFacetRefinement(facet, value);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */
  toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
    if (this.isHierarchicalFacet(facet)) {
      return this.toggleHierarchicalFacetRefinement(facet, value);
    } else if (this.isConjunctiveFacet(facet)) {
      return this.toggleConjunctiveFacetRefinement(facet, value);
    } else if (this.isDisjunctiveFacet(facet)) {
      return this.toggleDisjunctiveFacetRefinement(facet, value);
    }

    throw new Error('Cannot refine the undeclared facet ' + facet +
      '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets');
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(
        facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.toggleRefinement(
        this.disjunctiveFacetsRefinements, facet, value)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(
        facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
    }

    var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));

    var mod = {};

    var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined &&
      this.hierarchicalFacetsRefinements[facet].length > 0 && (
      // remove current refinement:
      // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
      this.hierarchicalFacetsRefinements[facet][0] === value ||
      // remove a parent refinement of the current refinement:
      //  - refinement was 'beer > IPA > Flying dog'
      //  - call is toggleRefine('beer > IPA')
      //  - refinement should be `beer`
      this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0
    );

    if (upOneOrMultipleLevel) {
      if (value.indexOf(separator) === -1) {
        // go back to root level
        mod[facet] = [];
      } else {
        mod[facet] = [value.slice(0, value.lastIndexOf(separator))];
      }
    } else {
      mod[facet] = [value];
    }

    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
    });
  },

  /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */
  addHierarchicalFacetRefinement: function(facet, path) {
    if (this.isHierarchicalFacetRefined(facet)) {
      throw new Error(facet + ' is already refined.');
    }
    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration.');
    }
    var mod = {};
    mod[facet] = [path];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
    });
  },

  /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */
  removeHierarchicalFacetRefinement: function(facet) {
    if (!this.isHierarchicalFacetRefined(facet)) {
      return this;
    }
    var mod = {};
    mod[facet] = [];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
    });
  },
  /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters}
   */
  toggleTagRefinement: function toggleTagRefinement(tag) {
    if (this.isTagRefined(tag)) {
      return this.removeTagRefinement(tag);
    }

    return this.addTagRefinement(tag);
  },
  /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isDisjunctiveFacet: function(facet) {
    return this.disjunctiveFacets.indexOf(facet) > -1;
  },
  /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean}
   */
  isHierarchicalFacet: function(facetName) {
    return this.getHierarchicalFacetByName(facetName) !== undefined;
  },
  /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isConjunctiveFacet: function(facet) {
    return this.facets.indexOf(facet) > -1;
  },
  /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isFacetRefined: function isFacetRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      return false;
    }
    return RefinementList.isRefined(this.facetsRefinements, facet, value);
  },
  /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isExcludeRefined: function isExcludeRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      return false;
    }
    return RefinementList.isRefined(this.facetsExcludes, facet, value);
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      return false;
    }
    return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
    if (!this.isHierarchicalFacet(facet)) {
      return false;
    }

    var refinements = this.getHierarchicalRefinement(facet);

    if (!value) {
      return refinements.length > 0;
    }

    return refinements.indexOf(value) !== -1;
  },
  /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */
  isNumericRefined: function isNumericRefined(attribute, operator, value) {
    if (value === undefined && operator === undefined) {
      return !!this.numericRefinements[attribute];
    }

    var isOperatorDefined =
      this.numericRefinements[attribute] &&
      this.numericRefinements[attribute][operator] !== undefined;

    if (value === undefined || !isOperatorDefined) {
      return isOperatorDefined;
    }

    var parsedValue = valToNumber(value);
    var isAttributeValueDefined =
      findArray(this.numericRefinements[attribute][operator], parsedValue) !==
      undefined;

    return isOperatorDefined && isAttributeValueDefined;
  },
  /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean}
   */
  isTagRefined: function isTagRefined(tag) {
    return this.tagRefinements.indexOf(tag) !== -1;
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
    var self = this;

    // attributes used for numeric filter can also be disjunctive
    var disjunctiveNumericRefinedFacets = intersection(
      Object.keys(this.numericRefinements).filter(function(facet) {
        return Object.keys(self.numericRefinements[facet]).length > 0;
      }),
      this.disjunctiveFacets
    );

    return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {
      return self.disjunctiveFacetsRefinements[facet].length > 0;
    })
      .concat(disjunctiveNumericRefinedFacets)
      .concat(this.getRefinedHierarchicalFacets());
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
    var self = this;
    return intersection(
      // enforce the order between the two arrays,
      // so that refinement name index === hierarchical facet index
      this.hierarchicalFacets.map(function(facet) { return facet.name; }),
      Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {
        return self.hierarchicalFacetsRefinements[facet].length > 0;
      })
    );
  },
  /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]}
   */
  getUnrefinedDisjunctiveFacets: function() {
    var refinedFacets = this.getRefinedDisjunctiveFacets();

    return this.disjunctiveFacets.filter(function(f) {
      return refinedFacets.indexOf(f) === -1;
    });
  },

  managedParameters: [
    'index',
    'facets', 'disjunctiveFacets', 'facetsRefinements',
    'facetsExcludes', 'disjunctiveFacetsRefinements',
    'numericRefinements', 'tagRefinements', 'hierarchicalFacets', 'hierarchicalFacetsRefinements'
  ],
  getQueryParams: function getQueryParams() {
    var managedParameters = this.managedParameters;

    var queryParams = {};

    var self = this;
    Object.keys(this).forEach(function(paramName) {
      var paramValue = self[paramName];
      if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) {
        queryParams[paramName] = paramValue;
      }
    });

    return queryParams;
  },
  /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */
  setQueryParameter: function setParameter(parameter, value) {
    if (this[parameter] === value) return this;

    var modification = {};

    modification[parameter] = value;

    return this.setQueryParameters(modification);
  },
  /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */
  setQueryParameters: function setQueryParameters(params) {
    if (!params) return this;

    var error = SearchParameters.validate(this, params);

    if (error) {
      throw error;
    }

    var self = this;
    var nextWithNumbers = SearchParameters._parseNumbers(params);
    var previousPlainObject = Object.keys(this).reduce(function(acc, key) {
      acc[key] = self[key];
      return acc;
    }, {});

    var nextPlainObject = Object.keys(nextWithNumbers).reduce(
      function(previous, key) {
        var isPreviousValueDefined = previous[key] !== undefined;
        var isNextValueDefined = nextWithNumbers[key] !== undefined;

        if (isPreviousValueDefined && !isNextValueDefined) {
          return omit(previous, [key]);
        }

        if (isNextValueDefined) {
          previous[key] = nextWithNumbers[key];
        }

        return previous;
      },
      previousPlainObject
    );

    return new this.constructor(nextPlainObject);
  },

  /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */
  resetPage: function() {
    if (this.page === undefined) {
      return this;
    }

    return this.setPage(0);
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSortBy: function(hierarchicalFacet) {
    return hierarchicalFacet.sortBy || ['isRefined:desc', 'name:asc'];
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSeparator: function(hierarchicalFacet) {
    return hierarchicalFacet.separator || ' > ';
  },

  /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */
  _getHierarchicalRootPath: function(hierarchicalFacet) {
    return hierarchicalFacet.rootPath || null;
  },

  /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */
  _getHierarchicalShowParentLevel: function(hierarchicalFacet) {
    if (typeof hierarchicalFacet.showParentLevel === 'boolean') {
      return hierarchicalFacet.showParentLevel;
    }
    return true;
  },

  /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName
   * @return {object} a hierarchicalFacet
   */
  getHierarchicalFacetByName: function(hierarchicalFacetName) {
    return find(
      this.hierarchicalFacets,
      function(f) {
        return f.name === hierarchicalFacetName;
      }
    );
  },

  /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */
  getHierarchicalFacetBreadcrumb: function(facetName) {
    if (!this.isHierarchicalFacet(facetName)) {
      return [];
    }

    var refinement = this.getHierarchicalRefinement(facetName)[0];
    if (!refinement) return [];

    var separator = this._getHierarchicalFacetSeparator(
      this.getHierarchicalFacetByName(facetName)
    );
    var path = refinement.split(separator);
    return path.map(function(part) {
      return part.trim();
    });
  },

  toString: function() {
    return JSON.stringify(this, null, 2);
  }
};

/**
 * Callback used for clearRefinement method
 * @callback SearchParameters.clearCallback
 * @param {OperatorList|FacetList} value the value of the filter
 * @param {string} key the current attribute name
 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
 * depending on the type of facet
 * @return {boolean} `true` if the element should be removed. `false` otherwise.
 */
module.exports = SearchParameters;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source === null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key;
  var i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

module.exports = _objectWithoutPropertiesLoose;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(8);
var defaultsPure = __webpack_require__(9);
var orderBy = __webpack_require__(15);
var compact = __webpack_require__(33);
var find = __webpack_require__(6);
var findIndex = __webpack_require__(34);
var formatSort = __webpack_require__(16);

var generateHierarchicalTree = __webpack_require__(35);

/**
 * @typedef SearchResults.Facet
 * @type {object}
 * @property {string} name name of the attribute in the record
 * @property {object} data the faceting data: value, number of entries
 * @property {object} stats undefined unless facet_stats is retrieved from algolia
 */

/**
 * @typedef SearchResults.HierarchicalFacet
 * @type {object}
 * @property {string} name name of the current value given the hierarchical level, trimmed.
 * If root node, you get the facet name
 * @property {number} count number of objects matching this hierarchical value
 * @property {string} path the current hierarchical value full path
 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
 * @property {HierarchicalFacet[]} data sub values for the current level
 */

/**
 * @typedef SearchResults.FacetValue
 * @type {object}
 * @property {string} name the facet value itself
 * @property {number} count times this facet appears in the results
 * @property {boolean} isRefined is the facet currently selected
 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
 */

/**
 * @typedef Refinement
 * @type {object}
 * @property {string} type the type of filter used:
 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
 * @property {string} attributeName name of the attribute used for filtering
 * @property {string} name the value of the filter
 * @property {number} numericValue the value as a number. Only for numeric filters.
 * @property {string} operator the operator used. Only for numeric filters.
 * @property {number} count the number of computed hits for this filter. Only on facets.
 * @property {boolean} exhaustive if the count is exhaustive
 */

/**
 * @param {string[]} attributes
 */
function getIndices(attributes) {
  var indices = {};

  attributes.forEach(function(val, idx) {
    indices[val] = idx;
  });

  return indices;
}

function assignFacetStats(dest, facetStats, key) {
  if (facetStats && facetStats[key]) {
    dest.stats = facetStats[key];
  }
}

/**
 * @typedef {Object} HierarchicalFacet
 * @property {string} name
 * @property {string[]} attributes
 */

/**
 * @param {HierarchicalFacet[]} hierarchicalFacets
 * @param {string} hierarchicalAttributeName
 */
function findMatchingHierarchicalFacetFromAttributeName(
  hierarchicalFacets,
  hierarchicalAttributeName
) {
  return find(hierarchicalFacets, function facetKeyMatchesAttribute(
    hierarchicalFacet
  ) {
    var facetNames = hierarchicalFacet.attributes || [];
    return facetNames.indexOf(hierarchicalAttributeName) > -1;
  });
}

/*eslint-disable */
/**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @example <caption>SearchResults of the first query in
 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
  ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
  ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
  ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
 **/
/*eslint-enable */
function SearchResults(state, results) {
  var mainSubResponse = results[0];

  this._rawResults = results;

  var self = this;

  // https://www.algolia.com/doc/api-reference/api-methods/search/#response
  Object.keys(mainSubResponse).forEach(function(key) {
    self[key] = mainSubResponse[key];
  });

  /**
   * query used to generate the results
   * @name query
   * @member {string}
   * @memberof SearchResults
   * @instance
   */
  /**
   * The query as parsed by the engine given all the rules.
   * @name parsedQuery
   * @member {string}
   * @memberof SearchResults
   * @instance
   */
  /**
   * all the records that match the search parameters. Each record is
   * augmented with a new attribute `_highlightResult`
   * which is an object keyed by attribute and with the following properties:
   *  - `value` : the value of the facet highlighted (html)
   *  - `matchLevel`: full, partial or none depending on how the query terms match
   * @name hits
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */
  /**
   * index where the results come from
   * @name index
   * @member {string}
   * @memberof SearchResults
   * @instance
   */
  /**
   * number of hits per page requested
   * @name hitsPerPage
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * total number of hits of this query on the index
   * @name nbHits
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * total number of pages with respect to the number of hits per page and the total number of hits
   * @name nbPages
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * current page
   * @name page
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * The position if the position was guessed by IP.
   * @name aroundLatLng
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "48.8637,2.3615",
   */
  /**
   * The radius computed by Algolia.
   * @name automaticRadius
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "126792922",
   */
  /**
   * String identifying the server used to serve this request.
   *
   * getRankingInfo needs to be set to `true` for this to be returned
   *
   * @name serverUsed
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "c7-use-2.algolia.net",
   */
  /**
   * Boolean that indicates if the computation of the counts did time out.
   * @deprecated
   * @name timeoutCounts
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * Boolean that indicates if the computation of the hits did time out.
   * @deprecated
   * @name timeoutHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * True if the counts of the facets is exhaustive
   * @name exhaustiveFacetsCount
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * True if the number of hits is exhaustive
   * @name exhaustiveNbHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
   * @name userData
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */
  /**
   * queryID is the unique identifier of the query used to generate the current search results.
   * This value is only available if the `clickAnalytics` search parameter is set to `true`.
   * @name queryID
   * @member {string}
   * @memberof SearchResults
   * @instance
   */

  /**
   * sum of the processing time of all the queries
   * @member {number}
   */
  this.processingTimeMS = results.reduce(function(sum, result) {
    return result.processingTimeMS === undefined
      ? sum
      : sum + result.processingTimeMS;
  }, 0);

  /**
   * disjunctive facets results
   * @member {SearchResults.Facet[]}
   */
  this.disjunctiveFacets = [];
  /**
   * disjunctive facets results
   * @member {SearchResults.HierarchicalFacet[]}
   */
  this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
    return [];
  });
  /**
   * other facets results
   * @member {SearchResults.Facet[]}
   */
  this.facets = [];

  var disjunctiveFacets = state.getRefinedDisjunctiveFacets();

  var facetsIndices = getIndices(state.facets);
  var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
  var nextDisjunctiveResult = 1;

  // Since we send request only for disjunctive facets that have been refined,
  // we get the facets information from the first, general, response.

  var mainFacets = mainSubResponse.facets || {};

  Object.keys(mainFacets).forEach(function(facetKey) {
    var facetValueObject = mainFacets[facetKey];

    var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(
      state.hierarchicalFacets,
      facetKey
    );

    if (hierarchicalFacet) {
      // Place the hierarchicalFacet data at the correct index depending on
      // the attributes order that was defined at the helper initialization
      var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
      var idxAttributeName = findIndex(state.hierarchicalFacets, function(f) {
        return f.name === hierarchicalFacet.name;
      });
      self.hierarchicalFacets[idxAttributeName][facetIndex] = {
        attribute: facetKey,
        data: facetValueObject,
        exhaustive: mainSubResponse.exhaustiveFacetsCount
      };
    } else {
      var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
      var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
      var position;

      if (isFacetDisjunctive) {
        position = disjunctiveFacetsIndices[facetKey];
        self.disjunctiveFacets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
      }
      if (isFacetConjunctive) {
        position = facetsIndices[facetKey];
        self.facets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
      }
    }
  });

  // Make sure we do not keep holes within the hierarchical facets
  this.hierarchicalFacets = compact(this.hierarchicalFacets);

  // aggregate the refined disjunctive facets
  disjunctiveFacets.forEach(function(disjunctiveFacet) {
    var result = results[nextDisjunctiveResult];
    var facets = result && result.facets ? result.facets : {};
    var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);

    // There should be only item in facets.
    Object.keys(facets).forEach(function(dfacet) {
      var facetResults = facets[dfacet];

      var position;

      if (hierarchicalFacet) {
        position = findIndex(state.hierarchicalFacets, function(f) {
          return f.name === hierarchicalFacet.name;
        });
        var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
          return f.attribute === dfacet;
        });

        // previous refinements and no results so not able to find it
        if (attributeIndex === -1) {
          return;
        }

        self.hierarchicalFacets[position][attributeIndex].data = merge(
          {},
          self.hierarchicalFacets[position][attributeIndex].data,
          facetResults
        );
      } else {
        position = disjunctiveFacetsIndices[dfacet];

        var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};

        self.disjunctiveFacets[position] = {
          name: dfacet,
          data: defaultsPure({}, facetResults, dataFromMainRequest),
          exhaustive: result.exhaustiveFacetsCount
        };
        assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);

        if (state.disjunctiveFacetsRefinements[dfacet]) {
          state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {
            // add the disjunctive refinements if it is no more retrieved
            if (!self.disjunctiveFacets[position].data[refinementValue] &&
              state.disjunctiveFacetsRefinements[dfacet].indexOf(refinementValue) > -1) {
              self.disjunctiveFacets[position].data[refinementValue] = 0;
            }
          });
        }
      }
    });
    nextDisjunctiveResult++;
  });

  // if we have some root level values for hierarchical facets, merge them
  state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
    var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

    var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
    // if we are already at a root refinement (or no refinement at all), there is no
    // root level values request
    if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) {
      return;
    }

    var result = results[nextDisjunctiveResult];
    var facets = result && result.facets
      ? result.facets
      : {};
    Object.keys(facets).forEach(function(dfacet) {
      var facetResults = facets[dfacet];
      var position = findIndex(state.hierarchicalFacets, function(f) {
        return f.name === hierarchicalFacet.name;
      });
      var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
        return f.attribute === dfacet;
      });

      // previous refinements and no results so not able to find it
      if (attributeIndex === -1) {
        return;
      }

      // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
      // then the disjunctive values will be `beers` (count: 100),
      // but we do not want to display
      //   | beers (100)
      //     > IPA (5)
      // We want
      //   | beers (5)
      //     > IPA (5)
      var defaultData = {};

      if (currentRefinement.length > 0) {
        var root = currentRefinement[0].split(separator)[0];
        defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
      }

      self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(
        defaultData,
        facetResults,
        self.hierarchicalFacets[position][attributeIndex].data
      );
    });

    nextDisjunctiveResult++;
  });

  // add the excludes
  Object.keys(state.facetsExcludes).forEach(function(facetName) {
    var excludes = state.facetsExcludes[facetName];
    var position = facetsIndices[facetName];

    self.facets[position] = {
      name: facetName,
      data: mainSubResponse.facets[facetName],
      exhaustive: mainSubResponse.exhaustiveFacetsCount
    };
    excludes.forEach(function(facetValue) {
      self.facets[position] = self.facets[position] || {name: facetName};
      self.facets[position].data = self.facets[position].data || {};
      self.facets[position].data[facetValue] = 0;
    });
  });

  /**
   * @type {Array}
   */
  this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));

  /**
   * @type {Array}
   */
  this.facets = compact(this.facets);
  /**
   * @type {Array}
   */
  this.disjunctiveFacets = compact(this.disjunctiveFacets);

  this._state = state;
}

/**
 * Get a facet object with its name
 * @deprecated
 * @param {string} name name of the faceted attribute
 * @return {SearchResults.Facet} the facet object
 */
SearchResults.prototype.getFacetByName = function(name) {
  function predicate(facet) {
    return facet.name === name;
  }

  return find(this.facets, predicate) ||
    find(this.disjunctiveFacets, predicate) ||
    find(this.hierarchicalFacets, predicate);
};

/**
 * Get the facet values of a specified attribute from a SearchResults object.
 * @private
 * @param {SearchResults} results the search results to search in
 * @param {string} attribute name of the faceted attribute to search for
 * @return {array|object} facet values. For the hierarchical facets it is an object.
 */
function extractNormalizedFacetValues(results, attribute) {
  function predicate(facet) {
    return facet.name === attribute;
  }

  if (results._state.isConjunctiveFacet(attribute)) {
    var facet = find(results.facets, predicate);
    if (!facet) return [];

    return Object.keys(facet.data).map(function(name) {
      return {
        name: name,
        count: facet.data[name],
        isRefined: results._state.isFacetRefined(attribute, name),
        isExcluded: results._state.isExcludeRefined(attribute, name)
      };
    });
  } else if (results._state.isDisjunctiveFacet(attribute)) {
    var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
    if (!disjunctiveFacet) return [];

    return Object.keys(disjunctiveFacet.data).map(function(name) {
      return {
        name: name,
        count: disjunctiveFacet.data[name],
        isRefined: results._state.isDisjunctiveFacetRefined(attribute, name)
      };
    });
  } else if (results._state.isHierarchicalFacet(attribute)) {
    return find(results.hierarchicalFacets, predicate);
  }
}

/**
 * Sort nodes of a hierarchical facet results
 * @private
 * @param {HierarchicalFacet} node node to upon which we want to apply the sort
 */
function recSort(sortFn, node) {
  if (!node.data || node.data.length === 0) {
    return node;
  }

  var children = node.data.map(function(childNode) {
    return recSort(sortFn, childNode);
  });
  var sortedChildren = sortFn(children);
  var newNode = merge({}, node, {data: sortedChildren});
  return newNode;
}

SearchResults.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc'];

function vanillaSortFn(order, data) {
  return data.sort(order);
}

/**
 * Get a the list of values for a given facet attribute. Those values are sorted
 * refinement first, descending count (bigger value on top), and name ascending
 * (alphabetical order). The sort formula can overridden using either string based
 * predicates or a function.
 *
 * This method will return all the values returned by the Algolia engine plus all
 * the values already refined. This means that it can happen that the
 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
 * might not be respected if you have facet values that are already refined.
 * @param {string} attribute attribute name
 * @param {object} opts configuration options.
 * @param {Array.<string> | function} opts.sortBy
 * When using strings, it consists of
 * the name of the [FacetValue](#SearchResults.FacetValue) or the
 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
 * order (`asc` or `desc`). For example to order the value by count, the
 * argument would be `['count:asc']`.
 *
 * If only the attribute name is specified, the ordering defaults to the one
 * specified in the default value for this attribute.
 *
 * When not specified, the order is
 * ascending.  This parameter can also be a function which takes two facet
 * values and should return a number, 0 if equal, 1 if the first argument is
 * bigger or -1 otherwise.
 *
 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
 * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
 * the attribute requested (hierarchical, disjunctive or conjunctive)
 * @example
 * helper.on('result', function(event){
 *   //get values ordered only by name ascending using the string predicate
 *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
 *   //get values  ordered only by count ascending using a function
 *   event.results.getFacetValues('city', {
 *     // this is equivalent to ['count:asc']
 *     sortBy: function(a, b) {
 *       if (a.count === b.count) return 0;
 *       if (a.count > b.count)   return 1;
 *       if (b.count > a.count)   return -1;
 *     }
 *   });
 * });
 */
SearchResults.prototype.getFacetValues = function(attribute, opts) {
  var facetValues = extractNormalizedFacetValues(this, attribute);
  if (!facetValues) {
    return undefined;
  }

  var options = defaultsPure({}, opts, {sortBy: SearchResults.DEFAULT_SORT});

  if (Array.isArray(options.sortBy)) {
    var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
    if (Array.isArray(facetValues)) {
      return orderBy(facetValues, order[0], order[1]);
    }
    // If facetValues is not an array, it's an object thus a hierarchical facet object
    return recSort(function(hierarchicalFacetValues) {
      return orderBy(hierarchicalFacetValues, order[0], order[1]);
    }, facetValues);
  } else if (typeof options.sortBy === 'function') {
    if (Array.isArray(facetValues)) {
      return facetValues.sort(options.sortBy);
    }
    // If facetValues is not an array, it's an object thus a hierarchical facet object
    return recSort(function(data) {
      return vanillaSortFn(options.sortBy, data);
    }, facetValues);
  }
  throw new Error(
    'options.sortBy is optional but if defined it must be ' +
    'either an array of string (predicates) or a sorting function'
  );
};

/**
 * Returns the facet stats if attribute is defined and the facet contains some.
 * Otherwise returns undefined.
 * @param {string} attribute name of the faceted attribute
 * @return {object} The stats of the facet
 */
SearchResults.prototype.getFacetStats = function(attribute) {
  if (this._state.isConjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.facets, attribute);
  } else if (this._state.isDisjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
  }

  return undefined;
};

/**
 * @typedef {Object} FacetListItem
 * @property {string} name
 */

/**
 * @param {FacetListItem[]} facetList (has more items, but enough for here)
 * @param {string} facetName
 */
function getFacetStatsIfAvailable(facetList, facetName) {
  var data = find(facetList, function(facet) {
    return facet.name === facetName;
  });
  return data && data.stats;
}

/**
 * Returns all refinements for all filters + tags. It also provides
 * additional information: count and exhaustiveness for each filter.
 *
 * See the [refinement type](#Refinement) for an exhaustive view of the available
 * data.
 *
 * Note that for a numeric refinement, results are grouped per operator, this
 * means that it will return responses for operators which are empty.
 *
 * @return {Array.<Refinement>} all the refinements
 */
SearchResults.prototype.getRefinements = function() {
  var state = this._state;
  var results = this;
  var res = [];

  Object.keys(state.facetsRefinements).forEach(function(attributeName) {
    state.facetsRefinements[attributeName].forEach(function(name) {
      res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
    });
  });

  Object.keys(state.facetsExcludes).forEach(function(attributeName) {
    state.facetsExcludes[attributeName].forEach(function(name) {
      res.push(getRefinement(state, 'exclude', attributeName, name, results.facets));
    });
  });

  Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {
    state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {
      res.push(getRefinement(state, 'disjunctive', attributeName, name, results.disjunctiveFacets));
    });
  });

  Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {
    state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {
      res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
    });
  });


  Object.keys(state.numericRefinements).forEach(function(attributeName) {
    var operators = state.numericRefinements[attributeName];
    Object.keys(operators).forEach(function(operator) {
      operators[operator].forEach(function(value) {
        res.push({
          type: 'numeric',
          attributeName: attributeName,
          name: value,
          numericValue: value,
          operator: operator
        });
      });
    });
  });

  state.tagRefinements.forEach(function(name) {
    res.push({type: 'tag', attributeName: '_tags', name: name});
  });

  return res;
};

/**
 * @typedef {Object} Facet
 * @property {string} name
 * @property {Object} data
 * @property {boolean} exhaustive
 */

/**
 * @param {*} state
 * @param {*} type
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */
function getRefinement(state, type, attributeName, name, resultsFacets) {
  var facet = find(resultsFacets, function(f) {
    return f.name === attributeName;
  });
  var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
  var exhaustive = (facet && facet.exhaustive) || false;

  return {
    type: type,
    attributeName: attributeName,
    name: name,
    count: count,
    exhaustive: exhaustive
  };
}

/**
 * @param {*} state
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */
function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
  var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
  var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
  var split = name.split(separator);
  var rootFacet = find(resultsFacets, function(facet) {
    return facet.name === attributeName;
  });

  var facet = split.reduce(function(intermediateFacet, part) {
    var newFacet =
      intermediateFacet && find(intermediateFacet.data, function(f) {
        return f.name === part;
      });
    return newFacet !== undefined ? newFacet : intermediateFacet;
  }, rootFacet);

  var count = (facet && facet.count) || 0;
  var exhaustive = (facet && facet.exhaustive) || false;
  var path = (facet && facet.path) || '';

  return {
    type: 'hierarchical',
    attributeName: attributeName,
    name: path,
    count: count,
    exhaustive: exhaustive
  };
}

module.exports = SearchResults;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined;
    var valIsNull = value === null;

    var othIsDefined = other !== undefined;
    var othIsNull = other === null;

    if (
      (!othIsNull && value > other) ||
      (valIsNull && othIsDefined) ||
      !valIsDefined
    ) {
      return 1;
    }
    if (
      (!valIsNull && value < other) ||
      (othIsNull && valIsDefined) ||
      !othIsDefined
    ) {
      return -1;
    }
  }
  return 0;
}

/**
 * @param {Array<object>} collection object with keys in attributes
 * @param {Array<string>} iteratees attributes
 * @param {Array<string>} orders asc | desc
 */
function orderBy(collection, iteratees, orders) {
  if (!Array.isArray(collection)) {
    return [];
  }

  if (!Array.isArray(orders)) {
    orders = [];
  }

  var result = collection.map(function(value, index) {
    return {
      criteria: iteratees.map(function(iteratee) {
        return value[iteratee];
      }),
      index: index,
      value: value
    };
  });

  result.sort(function comparer(object, other) {
    var index = -1;

    while (++index < object.criteria.length) {
      var res = compareAscending(object.criteria[index], other.criteria[index]);
      if (res) {
        if (index >= orders.length) {
          return res;
        }
        if (orders[index] === 'desc') {
          return -res;
        }
        return res;
      }
    }

    // This ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
  });

  return result.map(function(res) {
    return res.value;
  });
}

module.exports = orderBy;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var find = __webpack_require__(6);

/**
 * Transform sort format from user friendly notation to lodash format
 * @param {string[]} sortBy array of predicate of the form "attribute:order"
 * @param {string[]} [defaults] array of predicate of the form "attribute:order"
 * @return {array.<string[]>} array containing 2 elements : attributes, orders
 */
module.exports = function formatSort(sortBy, defaults) {
  var defaultInstructions = (defaults || []).map(function(sort) {
    return sort.split(':');
  });

  return sortBy.reduce(
    function preparePredicate(out, sort) {
      var sortInstruction = sort.split(':');

      var matchingDefault = find(defaultInstructions, function(
        defaultInstruction
      ) {
        return defaultInstruction[0] === sortInstruction[0];
      });

      if (sortInstruction.length > 1 || !matchingDefault) {
        out[0].push(sortInstruction[0]);
        out[1].push(sortInstruction[1]);
        return out;
      }

      out[0].push(matchingDefault[0]);
      out[1].push(matchingDefault[1]);
      return out;
    },
    [[], []]
  );
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function inherits(ctor, superCtor) {
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

module.exports = inherits;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = '3.2.2';


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24)


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*! algoliasearch-lite.umd.js | 4.5.1 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},a=function(){return JSON.parse(n().getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),n=a()[r];return Promise.all([n||t(),void 0!==n])})).then((function(e){var t=o(e,2),n=t[0],a=t[1];return Promise.all([n,a||r.miss(n)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var o=a();return o[JSON.stringify(e)]=t,n().setItem(r,JSON.stringify(o)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=a();delete t[JSON.stringify(e)],n().setItem(r,JSON.stringify(t))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function i(e){var t=a(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=t();return n.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,o).catch((function(){return i({caches:t}).get(e,n,o)}))},set:function(e,n){return r.set(e,n).catch((function(){return i({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return i({caches:t}).delete(e)}))},clear:function(){return r.clear().catch((function(){return i({caches:t}).clear()}))}}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);var u=n(),i=o&&o.miss||function(){return Promise.resolve()};return u.then((function(e){return i(e)})).then((function(){return u}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function c(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function l(e,t){return Object.keys(void 0!==t?t:{}).forEach((function(r){e[r]=t[r](e)})),e}function f(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[o++])}))}var h={WithinQueryParameters:0,WithinHeaders:1};function d(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var m={Read:1,Write:2,Any:3},p=1,v=2,y=3;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return r(r({},e),{},{status:t,lastUpdate:Date.now()})}function b(e){return"string"==typeof e?{protocol:"https",url:e,accept:m.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||m.Any}}var O="GET",P="POST";function q(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(g(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return e.status===p||Date.now()-e.lastUpdate>12e4}(e)})),n=e.filter((function(e){return function(e){return e.status===y&&Date.now()-e.lastUpdate<=12e4}(e)})),o=[].concat(a(r),a(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return b(e)})):t}}))}function j(e,t,n,o){var u=[],i=function(e,t){if(e.method===O||void 0===e.data&&void 0===t.data)return;var n=Array.isArray(e.data)?e.data:r(r({},e.data),t.data);return JSON.stringify(n)}(n,o),s=function(e,t){var n=r(r({},e.headers),t.headers),o={};return Object.keys(n).forEach((function(e){var t=n[e];o[e.toLowerCase()]=t})),o}(e,o),c=n.method,l=n.method!==O?{}:r(r({},n.data),o.data),f=r(r(r({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),o.queryParameters),h=0,d=function t(r,a){var l=r.pop();if(void 0===l)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:A(u)};var d={data:i,headers:s,method:c,url:w(l,n.path,f),connectTimeout:a(h,e.timeouts.connect),responseTimeout:a(h,o.timeout)},m=function(e){var t={request:d,response:e,host:l,triesLeft:r.length};return u.push(t),t},p={onSucess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var o=m(n);return n.isTimedOut&&h++,Promise.all([e.logger.info("Retryable failure",x(o)),e.hostsCache.set(l,g(l,n.isTimedOut?y:v))]).then((function(){return t(r,a)}))},onFail:function(e){throw m(e),function(e,t){var r=e.content,n=e.status,o=r;try{o=JSON.parse(r).message}catch(e){}return function(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}(o,n,t)}(e,A(u))}};return e.requester.send(d).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSucess(e):t.onFail(e)}(e,p)}))};return q(e.hostsCache,t).then((function(e){return d(a(e.statelessHosts).reverse(),e.getTimeout)}))}function S(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function w(e,t,r){var n=T(r),o="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(o+="?".concat(n)),o}function T(e){return Object.keys(e).map((function(t){return f("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function A(e){return e.map((function(e){return x(e)}))}function x(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},e),{},{request:r(r({},e.request),{},{headers:r(r({},e.request.headers),t)})})}var C=function(e){var t=e.appId,n=function(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===h.WithinHeaders?n:{}},queryParameters:function(){return e===h.WithinQueryParameters?n:{}}}}(void 0!==e.authMode?e.authMode:h.WithinHeaders,t,e.apiKey),a=function(e){var t=e.hostsCache,r=e.logger,n=e.requester,a=e.requestsCache,u=e.responsesCache,i=e.timeouts,s=e.userAgent,c=e.hosts,l=e.queryParameters,f={hostsCache:t,logger:r,requester:n,requestsCache:a,responsesCache:u,timeouts:i,userAgent:s,headers:e.headers,queryParameters:l,hosts:c.map((function(e){return b(e)})),read:function(e,t){var r=d(t,f.timeouts.read),n=function(){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Read)})),e,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return n();var a={request:e,mappedRequestOptions:r,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(a,(function(){return f.requestsCache.get(a,(function(){return f.requestsCache.set(a,n()).then((function(e){return Promise.all([f.requestsCache.delete(a),e])}),(function(e){return Promise.all([f.requestsCache.delete(a),Promise.reject(e)])})).then((function(e){var t=o(e,2);t[0];return t[1]}))}))}),{miss:function(e){return f.responsesCache.set(a,e)}})},write:function(e,t){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Write)})),e,d(t,f.timeouts.write))}};return f}(r(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:m.Read},{url:"".concat(t,".algolia.net"),accept:m.Write}].concat(c([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return l({transporter:a,appId:t,addAlgoliaAgent:function(e,t){a.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},e.methods)},N=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return l(n,r.methods)}},k=function(e){return function(t,n){var o=t.map((function(e){return r(r({},e),{},{params:T(e.params||{})})}));return e.transporter.read({method:P,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},n)}},J=function(e){return function(t,o){return Promise.all(t.map((function(t){var a=t.params,u=a.facetName,i=a.facetQuery,s=n(a,["facetName","facetQuery"]);return N(e)(t.indexName,{methods:{searchForFacetValues:I}}).searchForFacetValues(u,i,r(r({},o),s))})))}},E=function(e){return function(t,r){return e.transporter.read({method:P,path:f("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},I=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},F=1,R=2,D=3;function W(e,t,n){var o,a={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,o=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},a=o(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(a),n=o(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(a),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(a),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:(o=D,{debug:function(e,t){return F>=o&&console.debug(e,t),Promise.resolve()},info:function(e,t){return R>=o&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:i({caches:[u({key:"".concat("4.5.1","-").concat(e)}),s()]}),userAgent:S("4.5.1").add({segment:"Browser",version:"lite"}),authMode:h.WithinQueryParameters};return C(r(r(r({},a),n),{},{methods:{search:k,searchForFacetValues:J,multipleQueries:k,multipleSearchForFacetValues:J,initIndex:function(e){return function(t){return N(e)(t,{methods:{search:E,searchForFacetValues:I}})}}}}))}return W.version="4.5.1",W}));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(23);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(0);

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(26));

var _stylesheet = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SearchParameters = __webpack_require__(12);
var SearchResults = __webpack_require__(14);
var DerivedHelper = __webpack_require__(36);
var requestBuilder = __webpack_require__(37);

var events = __webpack_require__(17);
var inherits = __webpack_require__(18);
var objectHasKeys = __webpack_require__(10);

var version = __webpack_require__(19);

/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {object} event
 * @property {SearchParameters} event.state the current parameters with the latest changes applied
 * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
 * @example
 * helper.on('change', function(event) {
 *   console.log('The parameters have changed');
 * });
 */

/**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search
 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
 * @example
 * helper.on('search', function(event) {
 *   console.log('Search sent');
 * });
 */

/**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @property {string} event.facet the facet searched into
 * @property {string} event.query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(event) {
 *   console.log('searchForFacetValues sent');
 * });
 */

/**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @example
 * helper.on('searchOnce', function(event) {
 *   console.log('searchOnce sent');
 * });
 */

/**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {object} event
 * @property {SearchResults} event.results the results received from Algolia
 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(event) {
 *   console.log('Search results received');
 * });
 */

/**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {object} event
 * @property {Error} event.error the error returned by the Algolia.
 * @example
 * helper.on('error', function(event) {
 *   console.log('Houston we got a problem.');
 * });
 */

/**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */

/**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 */
function AlgoliaSearchHelper(client, index, options) {
  if (typeof client.addAlgoliaAgent === 'function') {
    client.addAlgoliaAgent('JS Helper (' + version + ')');
  }

  this.setClient(client);
  var opts = options || {};
  opts.index = index;
  this.state = SearchParameters.make(opts);
  this.lastResults = null;
  this._queryId = 0;
  this._lastQueryIdReceived = -1;
  this.derivedHelpers = [];
  this._currentNbQueries = 0;
}

inherits(AlgoliaSearchHelper, events.EventEmitter);

/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper}
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */
AlgoliaSearchHelper.prototype.search = function() {
  this._search({onlyWithDerivedHelpers: false});
  return this;
};

AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {
  this._search({onlyWithDerivedHelpers: true});
  return this;
};

/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */
AlgoliaSearchHelper.prototype.getQuery = function() {
  var state = this.state;
  return requestBuilder._getHitsSearchParams(state);
};

/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [callback] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */
AlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {
  var tempState = !options ? this.state : this.state.setQueryParameters(options);
  var queries = requestBuilder._getQueries(tempState.index, tempState);
  var self = this;

  this._currentNbQueries++;

  this.emit('searchOnce', {
    state: tempState
  });

  if (cb) {
    this.client
      .search(queries)
      .then(function(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(null, new SearchResults(tempState, content.results), tempState);
      })
      .catch(function(err) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(err, null, tempState);
      });

    return undefined;
  }

  return this.client.search(queries).then(function(content) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    return {
      content: new SearchResults(tempState, content.results),
      state: tempState,
      _originalResponse: content
    };
  }, function(e) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    throw e;
  });
};

/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */

/**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */

/**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */
AlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {
  var clientHasSFFV = typeof this.client.searchForFacetValues === 'function';
  if (
    !clientHasSFFV &&
    typeof this.client.initIndex !== 'function'
  ) {
    throw new Error(
      'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues'
    );
  }
  var state = this.state.setQueryParameters(userState || {});
  var isDisjunctive = state.isDisjunctiveFacet(facet);
  var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);

  this._currentNbQueries++;
  var self = this;

  this.emit('searchForFacetValues', {
    state: state,
    facet: facet,
    query: query
  });

  var searchForFacetValuesPromise = clientHasSFFV
    ? this.client.searchForFacetValues([{indexName: state.index, params: algoliaQuery}])
    : this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);

  return searchForFacetValuesPromise.then(function addIsRefined(content) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');

    content = Array.isArray(content) ? content[0] : content;

    content.facetHits.forEach(function(f) {
      f.isRefined = isDisjunctive
        ? state.isDisjunctiveFacetRefined(facet, f.value)
        : state.isFacetRefined(facet, f.value);
    });

    return content;
  }, function(e) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    throw e;
  });
};

/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setQuery = function(q) {
  this._change({
    state: this.state.resetPage().setQuery(q),
    isPageReset: true
  });

  return this;
};

/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */
AlgoliaSearchHelper.prototype.clearRefinements = function(name) {
  this._change({
    state: this.state.resetPage().clearRefinements(name),
    isPageReset: true
  });

  return this;
};

/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.clearTags = function() {
  this._change({
    state: this.state.resetPage().clearTags(),
    isPageReset: true
  });

  return this;
};

/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */
AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().addHierarchicalFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {
  this._change({
    state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
    isPageReset: true
  });

  return this;
};

/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().addFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addRefine = function() {
  return this.addFacetRefinement.apply(this, arguments);
};


/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {
  this._change({
    state: this.state.resetPage().addExcludeRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */
AlgoliaSearchHelper.prototype.addExclude = function() {
  return this.addFacetExclusion.apply(this, arguments);
};

/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addTag = function(tag) {
  this._change({
    state: this.state.resetPage().addTagRefinement(tag),
    isPageReset: true
  });

  return this;
};

/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {
  this._change({
    state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
    isPageReset: true
  });

  return this;
};

/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {
  this._change({
    state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
    isPageReset: true
  });

  return this;
};

/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().removeFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeRefine = function() {
  return this.removeFacetRefinement.apply(this, arguments);
};

/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {
  this._change({
    state: this.state.resetPage().removeExcludeRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */
AlgoliaSearchHelper.prototype.removeExclude = function() {
  return this.removeFacetExclusion.apply(this, arguments);
};

/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeTag = function(tag) {
  this._change({
    state: this.state.resetPage().removeTagRefinement(tag),
    isPageReset: true
  });

  return this;
};

/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {
  this._change({
    state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */
AlgoliaSearchHelper.prototype.toggleExclude = function() {
  return this.toggleFacetExclusion.apply(this, arguments);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {
  return this.toggleFacetRefinement(facet, value);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().toggleFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefine = function() {
  return this.toggleFacetRefinement.apply(this, arguments);
};

/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleTag = function(tag) {
  this._change({
    state: this.state.resetPage().toggleTagRefinement(tag),
    isPageReset: true
  });

  return this;
};

/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */
AlgoliaSearchHelper.prototype.nextPage = function() {
  var page = this.state.page || 0;
  return this.setPage(page + 1);
};

/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper}
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */
AlgoliaSearchHelper.prototype.previousPage = function() {
  var page = this.state.page || 0;
  return this.setPage(page - 1);
};

/**
 * @private
 */
function setCurrentPage(page) {
  if (page < 0) throw new Error('Page requested below 0.');

  this._change({
    state: this.state.setPage(page),
    isPageReset: false
  });

  return this;
}

/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;

/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setPage = setCurrentPage;

/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setIndex = function(name) {
  this._change({
    state: this.state.resetPage().setIndex(name),
    isPageReset: true
  });

  return this;
};

/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */
AlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {
  this._change({
    state: this.state.resetPage().setQueryParameter(parameter, value),
    isPageReset: true
  });

  return this;
};

/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setState = function(newState) {
  this._change({
    state: SearchParameters.make(newState),
    isPageReset: false
  });

  return this;
};

/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */
AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {
  this.state = new SearchParameters(newState);
  return this;
};

/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */
AlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {
  if (objectHasKeys(this.state.getNumericRefinements(attribute))) {
    return true;
  } else if (this.state.isConjunctiveFacet(attribute)) {
    return this.state.isFacetRefined(attribute);
  } else if (this.state.isDisjunctiveFacet(attribute)) {
    return this.state.isDisjunctiveFacetRefined(attribute);
  } else if (this.state.isHierarchicalFacet(attribute)) {
    return this.state.isHierarchicalFacetRefined(attribute);
  }

  // there's currently no way to know that the user did call `addNumericRefinement` at some point
  // thus we cannot distinguish if there once was a numeric refinement that was cleared
  // so we will return false in every other situations to be consistent
  // while what we should do here is throw because we did not find the attribute in any type
  // of refinement
  return false;
};

/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
   * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */
AlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {
  return this.state.isExcludeRefined(facet, value);
};

/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */
AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {
  return this.state.isDisjunctiveFacetRefined(facet, value);
};

/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean}
 */
AlgoliaSearchHelper.prototype.hasTag = function(tag) {
  return this.state.isTagRefined(tag);
};

/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */
AlgoliaSearchHelper.prototype.isTagRefined = function() {
  return this.hasTagRefinements.apply(this, arguments);
};


/**
 * Get the name of the currently used index.
 * @return {string}
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */
AlgoliaSearchHelper.prototype.getIndex = function() {
  return this.state.index;
};

function getCurrentPage() {
  return this.state.page;
}

/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getPage = getCurrentPage;

/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */
AlgoliaSearchHelper.prototype.getTags = function() {
  return this.state.tagRefinements;
};

/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */
AlgoliaSearchHelper.prototype.getRefinements = function(facetName) {
  var refinements = [];

  if (this.state.isConjunctiveFacet(facetName)) {
    var conjRefinements = this.state.getConjunctiveRefinements(facetName);

    conjRefinements.forEach(function(r) {
      refinements.push({
        value: r,
        type: 'conjunctive'
      });
    });

    var excludeRefinements = this.state.getExcludeRefinements(facetName);

    excludeRefinements.forEach(function(r) {
      refinements.push({
        value: r,
        type: 'exclude'
      });
    });
  } else if (this.state.isDisjunctiveFacet(facetName)) {
    var disjRefinements = this.state.getDisjunctiveRefinements(facetName);

    disjRefinements.forEach(function(r) {
      refinements.push({
        value: r,
        type: 'disjunctive'
      });
    });
  }

  var numericRefinements = this.state.getNumericRefinements(facetName);

  Object.keys(numericRefinements).forEach(function(operator) {
    var value = numericRefinements[operator];

    refinements.push({
      value: value,
      operator: operator,
      type: 'numeric'
    });
  });

  return refinements;
};

/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute attribute in the record
 * @param {string} operator operator applied on the refined values
 * @return {Array.<number|number[]>} refined values
 */
AlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {
  return this.state.getNumericRefinement(attribute, operator);
};

/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */
AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {
  return this.state.getHierarchicalFacetBreadcrumb(facetName);
};

// /////////// PRIVATE

/**
 * Perform the underlying queries
 * @private
 * @return {undefined}
 * @fires search
 * @fires result
 * @fires error
 */
AlgoliaSearchHelper.prototype._search = function(options) {
  var state = this.state;
  var states = [];
  var mainQueries = [];

  if (!options.onlyWithDerivedHelpers) {
    mainQueries = requestBuilder._getQueries(state.index, state);

    states.push({
      state: state,
      queriesCount: mainQueries.length,
      helper: this
    });

    this.emit('search', {
      state: state,
      results: this.lastResults
    });
  }

  var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
    var derivedState = derivedHelper.getModifiedState(state);
    var derivedStateQueries = requestBuilder._getQueries(derivedState.index, derivedState);

    states.push({
      state: derivedState,
      queriesCount: derivedStateQueries.length,
      helper: derivedHelper
    });

    derivedHelper.emit('search', {
      state: derivedState,
      results: derivedHelper.lastResults
    });

    return derivedStateQueries;
  });

  var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
  var queryId = this._queryId++;

  this._currentNbQueries++;

  try {
    this.client.search(queries)
      .then(this._dispatchAlgoliaResponse.bind(this, states, queryId))
      .catch(this._dispatchAlgoliaError.bind(this, queryId));
  } catch (error) {
    // If we reach this part, we're in an internal error state
    this.emit('error', {
      error: error
    });
  }
};

/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>}
 *  state state used for to generate the request
 * @param {number} queryId id of the current request
 * @param {object} content content of the response
 * @return {undefined}
 */
AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {
  // FIXME remove the number of outdated queries discarded instead of just one

  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= (queryId - this._lastQueryIdReceived);
  this._lastQueryIdReceived = queryId;

  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');

  var results = content.results.slice();

  states.forEach(function(s) {
    var state = s.state;
    var queriesCount = s.queriesCount;
    var helper = s.helper;
    var specificResults = results.splice(0, queriesCount);

    var formattedResponse = helper.lastResults = new SearchResults(state, specificResults);

    helper.emit('result', {
      results: formattedResponse,
      state: state
    });
  });
};

AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {
  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= queryId - this._lastQueryIdReceived;
  this._lastQueryIdReceived = queryId;

  this.emit('error', {
    error: error
  });

  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
};

AlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {
  return query ||
    facetFilters.length !== 0 ||
    numericFilters.length !== 0 ||
    tagFilters.length !== 0;
};

/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean}
 */
AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {
  return this.state.disjunctiveRefinements[facet] &&
    this.state.disjunctiveRefinements[facet].length > 0;
};

AlgoliaSearchHelper.prototype._change = function(event) {
  var state = event.state;
  var isPageReset = event.isPageReset;

  if (state !== this.state) {
    this.state = state;

    this.emit('change', {
      state: this.state,
      results: this.lastResults,
      isPageReset: isPageReset
    });
  }
};

/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper}
 */
AlgoliaSearchHelper.prototype.clearCache = function() {
  this.client.clearCache && this.client.clearCache();
  return this;
};

/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper}
 */
AlgoliaSearchHelper.prototype.setClient = function(newClient) {
  if (this.client === newClient) return this;

  if (typeof newClient.addAlgoliaAgent === 'function') {
    newClient.addAlgoliaAgent('JS Helper (' + version + ')');
  }
  this.client = newClient;

  return this;
};

/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch}
 */
AlgoliaSearchHelper.prototype.getClient = function() {
  return this.client;
};

/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @return {DerivedHelper}
 */
AlgoliaSearchHelper.prototype.derive = function(fn) {
  var derivedHelper = new DerivedHelper(this, fn);
  this.derivedHelpers.push(derivedHelper);
  return derivedHelper;
};

/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @return {undefined}
 * @throws Error
 */
AlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {
  var pos = this.derivedHelpers.indexOf(derivedHelper);
  if (pos === -1) throw new Error('Derived helper already detached');
  this.derivedHelpers.splice(pos, 1);
};

/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */
AlgoliaSearchHelper.prototype.hasPendingRequests = function() {
  return this._currentNbQueries > 0;
};

/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */

/**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */

module.exports = AlgoliaSearchHelper;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function intersection(arr1, arr2) {
  return arr1.filter(function(value, index) {
    return (
      arr2.indexOf(value) > -1 &&
      arr1.indexOf(value) === index /* skips duplicates */
    );
  });
}

module.exports = intersection;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function valToNumber(v) {
  if (typeof v === 'number') {
    return v;
  } else if (typeof v === 'string') {
    return parseFloat(v);
  } else if (Array.isArray(v)) {
    return v.map(valToNumber);
  }

  throw new Error('The value should be a number, a parsable string or an array of those.');
}

module.exports = valToNumber;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Functions to manipulate refinement lists
 *
 * The RefinementList is not formally defined through a prototype but is based
 * on a specific structure.
 *
 * @module SearchParameters.refinementList
 *
 * @typedef {string[]} SearchParameters.refinementList.Refinements
 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
 */

var defaultsPure = __webpack_require__(9);
var omit = __webpack_require__(13);
var objectHasKeys = __webpack_require__(10);

var lib = {
  /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */
  addRefinement: function addRefinement(refinementList, attribute, value) {
    if (lib.isRefined(refinementList, attribute, value)) {
      return refinementList;
    }

    var valueAsString = '' + value;

    var facetRefinement = !refinementList[attribute] ?
      [valueAsString] :
      refinementList[attribute].concat(valueAsString);

    var mod = {};

    mod[attribute] = facetRefinement;

    return defaultsPure({}, mod, refinementList);
  },
  /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */
  removeRefinement: function removeRefinement(refinementList, attribute, value) {
    if (value === undefined) {
      // we use the "filter" form of clearRefinement, since it leaves empty values as-is
      // the form with a string will remove the attribute completely
      return lib.clearRefinement(refinementList, function(v, f) {
        return attribute === f;
      });
    }

    var valueAsString = '' + value;

    return lib.clearRefinement(refinementList, function(v, f) {
      return attribute === f && valueAsString === v;
    });
  },
  /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */
  toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
    if (value === undefined) throw new Error('toggleRefinement should be used with a value');

    if (lib.isRefined(refinementList, attribute, value)) {
      return lib.removeRefinement(refinementList, attribute, value);
    }

    return lib.addRefinement(refinementList, attribute, value);
  },
  /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */
  clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
    if (attribute === undefined) {
      if (!objectHasKeys(refinementList)) {
        return refinementList;
      }
      return {};
    } else if (typeof attribute === 'string') {
      return omit(refinementList, [attribute]);
    } else if (typeof attribute === 'function') {
      var hasChanged = false;

      var newRefinementList = Object.keys(refinementList).reduce(function(memo, key) {
        var values = refinementList[key] || [];
        var facetList = values.filter(function(value) {
          return !attribute(value, key, refinementType);
        });

        if (facetList.length !== values.length) {
          hasChanged = true;
        }
        memo[key] = facetList;

        return memo;
      }, {});

      if (hasChanged) return newRefinementList;
      return refinementList;
    }
  },
  /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean}
   */
  isRefined: function isRefined(refinementList, attribute, refinementValue) {
    var containsRefinements = !!refinementList[attribute] &&
      refinementList[attribute].length > 0;

    if (refinementValue === undefined || !containsRefinements) {
      return containsRefinements;
    }

    var refinementValueAsString = '' + refinementValue;

    return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
  }
};

module.exports = lib;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function compact(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter(Boolean);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @MAJOR can be replaced by native Array#findIndex when we change support
module.exports = function find(array, comparator) {
  if (!Array.isArray(array)) {
    return -1;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return i;
    }
  }
  return -1;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = generateTrees;

var orderBy = __webpack_require__(15);
var find = __webpack_require__(6);
var prepareHierarchicalFacetSortBy = __webpack_require__(16);

function generateTrees(state) {
  return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
    var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
    var hierarchicalFacetRefinement =
      (state.hierarchicalFacetsRefinements[hierarchicalFacet.name] &&
        state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0]) ||
      '';
    var hierarchicalSeparator = state._getHierarchicalFacetSeparator(
      hierarchicalFacet
    );
    var hierarchicalRootPath = state._getHierarchicalRootPath(
      hierarchicalFacet
    );
    var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(
      hierarchicalFacet
    );
    var sortBy = prepareHierarchicalFacetSortBy(
      state._getHierarchicalFacetSortBy(hierarchicalFacet)
    );

    var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {
      return facetResult.exhaustive;
    });

    var generateTreeFn = generateHierarchicalTree(
      sortBy,
      hierarchicalSeparator,
      hierarchicalRootPath,
      hierarchicalShowParentLevel,
      hierarchicalFacetRefinement
    );

    var results = hierarchicalFacetResult;

    if (hierarchicalRootPath) {
      results = hierarchicalFacetResult.slice(
        hierarchicalRootPath.split(hierarchicalSeparator).length
      );
    }

    return results.reduce(generateTreeFn, {
      name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
      count: null, // root level, no count
      isRefined: true, // root level, always refined
      path: null, // root level, no path
      exhaustive: rootExhaustive,
      data: null
    });
  };
}

function generateHierarchicalTree(
  sortBy,
  hierarchicalSeparator,
  hierarchicalRootPath,
  hierarchicalShowParentLevel,
  currentRefinement
) {
  return function generateTree(
    hierarchicalTree,
    hierarchicalFacetResult,
    currentHierarchicalLevel
  ) {
    var parent = hierarchicalTree;

    if (currentHierarchicalLevel > 0) {
      var level = 0;

      parent = hierarchicalTree;

      while (level < currentHierarchicalLevel) {
        /**
         * @type {object[]]} hierarchical data
         */
        var data = parent && Array.isArray(parent.data) ? parent.data : [];
        parent = find(data, function(subtree) {
          return subtree.isRefined;
        });
        level++;
      }
    }

    // we found a refined parent, let's add current level data under it
    if (parent) {
      // filter values in case an object has multiple categories:
      //   {
      //     categories: {
      //       level0: ['beers', 'bières'],
      //       level1: ['beers > IPA', 'bières > Belges']
      //     }
      //   }
      //
      // If parent refinement is `beers`, then we do not want to have `bières > Belges`
      // showing up

      var picked = Object.keys(hierarchicalFacetResult.data)
        .map(function(facetValue) {
          return [facetValue, hierarchicalFacetResult.data[facetValue]];
        })
        .filter(function(tuple) {
          var facetValue = tuple[0];
          return onlyMatchingTree(
            facetValue,
            parent.path || hierarchicalRootPath,
            currentRefinement,
            hierarchicalSeparator,
            hierarchicalRootPath,
            hierarchicalShowParentLevel
          );
        });

      parent.data = orderBy(
        picked.map(function(tuple) {
          var facetValue = tuple[0];
          var facetCount = tuple[1];

          return format(
            facetCount,
            facetValue,
            hierarchicalSeparator,
            currentRefinement,
            hierarchicalFacetResult.exhaustive
          );
        }),
        sortBy[0],
        sortBy[1]
      );
    }

    return hierarchicalTree;
  };
}

function onlyMatchingTree(
  facetValue,
  parentPath,
  currentRefinement,
  hierarchicalSeparator,
  hierarchicalRootPath,
  hierarchicalShowParentLevel
) {
  // we want the facetValue is a child of hierarchicalRootPath
  if (
    hierarchicalRootPath &&
    (facetValue.indexOf(hierarchicalRootPath) !== 0 ||
      hierarchicalRootPath === facetValue)
  ) {
    return false;
  }

  // we always want root levels (only when there is no prefix path)
  return (
    (!hierarchicalRootPath &&
      facetValue.indexOf(hierarchicalSeparator) === -1) ||
    // if there is a rootPath, being root level mean 1 level under rootPath
    (hierarchicalRootPath &&
      facetValue.split(hierarchicalSeparator).length -
        hierarchicalRootPath.split(hierarchicalSeparator).length ===
        1) ||
    // if current refinement is a root level and current facetValue is a root level,
    // keep the facetValue
    (facetValue.indexOf(hierarchicalSeparator) === -1 &&
      currentRefinement.indexOf(hierarchicalSeparator) === -1) ||
    // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 ||
    // facetValue is a child of the current parent, add it
    (facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 &&
      (hierarchicalShowParentLevel ||
        facetValue.indexOf(currentRefinement) === 0))
  );
}

function format(
  facetCount,
  facetValue,
  hierarchicalSeparator,
  currentRefinement,
  exhaustive
) {
  var parts = facetValue.split(hierarchicalSeparator);
  return {
    name: parts[parts.length - 1].trim(),
    path: facetValue,
    count: facetCount,
    isRefined:
      currentRefinement === facetValue ||
      currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
    exhaustive: exhaustive,
    data: null
  };
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var events = __webpack_require__(17);
var inherits = __webpack_require__(18);

/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 */
function DerivedHelper(mainHelper, fn) {
  this.main = mainHelper;
  this.fn = fn;
  this.lastResults = null;
}

inherits(DerivedHelper, events.EventEmitter);

/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */
DerivedHelper.prototype.detach = function() {
  this.removeAllListeners();
  this.main.detachDerivedHelper(this);
};

DerivedHelper.prototype.getModifiedState = function(parameters) {
  return this.fn(parameters);
};

module.exports = DerivedHelper;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(8);

var requestBuilder = {
  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @return {object[]} The queries
   */
  _getQueries: function getQueries(index, state) {
    var queries = [];

    // One query for the hits
    queries.push({
      indexName: index,
      params: requestBuilder._getHitsSearchParams(state)
    });

    // One for each disjunctive facets
    state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {
      queries.push({
        indexName: index,
        params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
      });
    });

    // maybe more to get the root level of hierarchical facets when activated
    state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
      var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);

      var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
      // if we are deeper than level 0 (starting from `beer > IPA`)
      // we want to get the root values
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
      if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
        queries.push({
          indexName: index,
          params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet, true)
        });
      }
    });

    return queries;
  },

  /**
   * Build search parameters used to fetch hits
   * @private
   * @return {object.<string, any>}
   */
  _getHitsSearchParams: function(state) {
    var facets = state.facets
      .concat(state.disjunctiveFacets)
      .concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state));


    var facetFilters = requestBuilder._getFacetFilters(state);
    var numericFilters = requestBuilder._getNumericFilters(state);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {
      facets: facets,
      tagFilters: tagFilters
    };

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    return merge({}, state.getQueryParams(), additionalParams);
  },

  /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object}
   */
  _getDisjunctiveFacetSearchParams: function(state, facet, hierarchicalRootLevel) {
    var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);
    var numericFilters = requestBuilder._getNumericFilters(state, facet);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {
      hitsPerPage: 1,
      page: 0,
      attributesToRetrieve: [],
      attributesToHighlight: [],
      attributesToSnippet: [],
      tagFilters: tagFilters,
      analytics: false,
      clickAnalytics: false
    };

    var hierarchicalFacet = state.getHierarchicalFacetByName(facet);

    if (hierarchicalFacet) {
      additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(
        state,
        hierarchicalFacet,
        hierarchicalRootLevel
      );
    } else {
      additionalParams.facets = facet;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    return merge({}, state.getQueryParams(), additionalParams);
  },

  /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */
  _getNumericFilters: function(state, facetName) {
    if (state.numericFilters) {
      return state.numericFilters;
    }

    var numericFilters = [];

    Object.keys(state.numericRefinements).forEach(function(attribute) {
      var operators = state.numericRefinements[attribute] || {};
      Object.keys(operators).forEach(function(operator) {
        var values = operators[operator] || [];
        if (facetName !== attribute) {
          values.forEach(function(value) {
            if (Array.isArray(value)) {
              var vs = value.map(function(v) {
                return attribute + operator + v;
              });
              numericFilters.push(vs);
            } else {
              numericFilters.push(attribute + operator + value);
            }
          });
        }
      });
    });

    return numericFilters;
  },

  /**
   * Return the tags filters depending
   * @private
   * @return {string}
   */
  _getTagFilters: function(state) {
    if (state.tagFilters) {
      return state.tagFilters;
    }

    return state.tagRefinements.join(',');
  },


  /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {string} [facet] if set, the current disjunctive facet
   * @return {array.<string>}
   */
  _getFacetFilters: function(state, facet, hierarchicalRootLevel) {
    var facetFilters = [];

    var facetsRefinements = state.facetsRefinements || {};
    Object.keys(facetsRefinements).forEach(function(facetName) {
      var facetValues = facetsRefinements[facetName] || [];
      facetValues.forEach(function(facetValue) {
        facetFilters.push(facetName + ':' + facetValue);
      });
    });

    var facetsExcludes = state.facetsExcludes || {};
    Object.keys(facetsExcludes).forEach(function(facetName) {
      var facetValues = facetsExcludes[facetName] || [];
      facetValues.forEach(function(facetValue) {
        facetFilters.push(facetName + ':-' + facetValue);
      });
    });

    var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
    Object.keys(disjunctiveFacetsRefinements).forEach(function(facetName) {
      var facetValues = disjunctiveFacetsRefinements[facetName] || [];
      if (facetName === facet || !facetValues || facetValues.length === 0) {
        return;
      }
      var orFilters = [];

      facetValues.forEach(function(facetValue) {
        orFilters.push(facetName + ':' + facetValue);
      });

      facetFilters.push(orFilters);
    });

    var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};
    Object.keys(hierarchicalFacetsRefinements).forEach(function(facetName) {
      var facetValues = hierarchicalFacetsRefinements[facetName] || [];
      var facetValue = facetValues[0];

      if (facetValue === undefined) {
        return;
      }

      var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
      var attributeToRefine;
      var attributesIndex;

      // we ask for parent facet values only when the `facet` is the current hierarchical facet
      if (facet === facetName) {
        // if we are at the root level already, no need to ask for facet values, we get them from
        // the hits query
        if (facetValue.indexOf(separator) === -1 || (!rootPath && hierarchicalRootLevel === true) ||
          (rootPath && rootPath.split(separator).length === facetValue.split(separator).length)) {
          return;
        }

        if (!rootPath) {
          attributesIndex = facetValue.split(separator).length - 2;
          facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
        } else {
          attributesIndex = rootPath.split(separator).length - 1;
          facetValue = rootPath;
        }

        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
      } else {
        attributesIndex = facetValue.split(separator).length - 1;

        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
      }

      if (attributeToRefine) {
        facetFilters.push([attributeToRefine + ':' + facetValue]);
      }
    });

    return facetFilters;
  },

  _getHitsHierarchicalFacetsAttributes: function(state) {
    var out = [];

    return state.hierarchicalFacets.reduce(
      // ask for as much levels as there's hierarchical refinements
      function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
        var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];

        // if no refinement, ask for root level
        if (!hierarchicalRefinement) {
          allAttributes.push(hierarchicalFacet.attributes[0]);
          return allAttributes;
        }

        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var level = hierarchicalRefinement.split(separator).length;
        var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);

        return allAttributes.concat(newAttributes);
      }, out);
  },

  _getDisjunctiveHierarchicalFacetAttribute: function(state, hierarchicalFacet, rootLevel) {
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
    if (rootLevel === true) {
      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
      var attributeIndex = 0;

      if (rootPath) {
        attributeIndex = rootPath.split(separator).length;
      }
      return [hierarchicalFacet.attributes[attributeIndex]];
    }

    var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';
    // if refinement is 'beers > IPA > Flying dog',
    // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)

    var parentLevel = hierarchicalRefinement.split(separator).length - 1;
    return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
  },

  getSearchForFacetQuery: function(facetName, query, maxFacetHits, state) {
    var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ?
      state.clearRefinements(facetName) :
      state;
    var searchForFacetSearchParameters = {
      facetQuery: query,
      facetName: facetName
    };
    if (typeof maxFacetHits === 'number') {
      searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
    }
    return merge(
      {},
      requestBuilder._getHitsSearchParams(stateForSearchForFacetValues),
      searchForFacetSearchParameters
    );
  }
};

module.exports = requestBuilder;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Table", function() { return /* reexport */ src_Table; });
__webpack_require__.d(__webpack_exports__, "Header", function() { return /* reexport */ src_Header; });
__webpack_require__.d(__webpack_exports__, "Content", function() { return /* reexport */ src_Content; });
__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return /* reexport */ src_Dropdown; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ src_Button; });
__webpack_require__.d(__webpack_exports__, "Box", function() { return /* reexport */ src_Box; });
__webpack_require__.d(__webpack_exports__, "Menu", function() { return /* reexport */ src_Menu; });
__webpack_require__.d(__webpack_exports__, "Sidesheet", function() { return /* reexport */ src_Sidesheet; });
__webpack_require__.d(__webpack_exports__, "Skeleton", function() { return /* reexport */ src_Skeleton; });
__webpack_require__.d(__webpack_exports__, "Toast", function() { return /* reexport */ src_Toast; });
__webpack_require__.d(__webpack_exports__, "Input", function() { return /* reexport */ src_Input; });
__webpack_require__.d(__webpack_exports__, "Textarea", function() { return /* reexport */ src_Textarea; });
__webpack_require__.d(__webpack_exports__, "Select", function() { return /* reexport */ src_Select; });
__webpack_require__.d(__webpack_exports__, "Avatar", function() { return /* reexport */ src_Avatar_Avatar; });
__webpack_require__.d(__webpack_exports__, "AlgoliaSearch", function() { return /* reexport */ src_AlgoliaSearch; });
__webpack_require__.d(__webpack_exports__, "BRFlag", function() { return /* reexport */ Flags_BRFlag; });
__webpack_require__.d(__webpack_exports__, "AUFlag", function() { return /* reexport */ Flags_AUFlag; });
__webpack_require__.d(__webpack_exports__, "USFlag", function() { return /* reexport */ Flags_USFlag; });
__webpack_require__.d(__webpack_exports__, "CentOS", function() { return /* reexport */ OperatingSystems_CentOS; });
__webpack_require__.d(__webpack_exports__, "UbuntuOS", function() { return /* reexport */ OperatingSystems_UbuntuOS; });
__webpack_require__.d(__webpack_exports__, "WindowsOS", function() { return /* reexport */ OperatingSystems_WindowsOS; });
__webpack_require__.d(__webpack_exports__, "DebianOS", function() { return /* reexport */ OperatingSystems_DebianOS; });
__webpack_require__.d(__webpack_exports__, "EsxiOS", function() { return /* reexport */ OperatingSystems_EsxiOS; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ Typography_Text; });
__webpack_require__.d(__webpack_exports__, "Heading", function() { return /* reexport */ Typography_Heading; });
__webpack_require__.d(__webpack_exports__, "UnorderedList", function() { return /* reexport */ UnorderedList_UnorderedList; });
__webpack_require__.d(__webpack_exports__, "ListItem", function() { return /* reexport */ ListItem_ListItem; });

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/Table/index.js




var Table_Table = function Table(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("table", {
    className: classnames_default()("min-w-full", className)
  }, children);
};

Table_Table.Head = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("thead", {
    className: className
  }, children);
};

Table_Table.Body = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("tbody", {
    className: classnames_default()("bg-white", className)
  }, children);
};

Table_Table.HeaderCell = function (_ref4) {
  var children = _ref4.children,
      className = _ref4.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("th", {
    className: classnames_default()("px-6 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider", className)
  }, children);
};

Table_Table.Row = function (_ref5) {
  var children = _ref5.children,
      className = _ref5.className,
      onSelect = _ref5.onSelect;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("tr", {
    onSelect: onSelect,
    className: classnames_default()(className)
  }, children);
};

Table_Table.Cell = function (_ref6) {
  var children = _ref6.children,
      className = _ref6.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("td", {
    className: classnames_default()("px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500", className)
  }, children);
};

Table_Table.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table_Table.Head.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table_Table.Body.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table_Table.HeaderCell.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table_Table.Row.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string,
  onSelect: prop_types_default.a.func
};
Table_Table.Cell.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
/* harmony default export */ var src_Table = (Table_Table);
// CONCATENATED MODULE: ./src/Header/index.js



var Header_Header = function Header(_ref) {
  var leftContent = _ref.leftContent,
      centerContent = _ref.centerContent,
      rightContent = _ref.rightContent;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "relative w-full bg-white shadow"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex p-4 px-8 flex-no-wrap justify-between items-center relative flex-row flex-grow h-16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex flex-1 flex-grow flex-shrink-0 min-w-0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex items-center flex-grow-0 flex-row"
  }, leftContent)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex flex-shrink p-0 w-auto items-center justify-between"
  }, centerContent), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex flex-grow p-0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex flex-grow flex-row items-center justify-end max-w-full"
  }, rightContent))));
};

Header_Header.propTypes = {
  leftContent: prop_types_default.a.node,
  centerContent: prop_types_default.a.node,
  rightContent: prop_types_default.a.node
};
/* harmony default export */ var src_Header = (Header_Header);
// CONCATENATED MODULE: ./src/Content/index.js




var Content_Content = function Content(_ref) {
  var children = _ref.children,
      size = _ref.size,
      className = _ref.className;
  var base = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: classnames_default()("mx-auto px-4 sm:px-6 md:px-8", {
      "max-w-3xl": size === "small",
      "max-w-5xl": size === "default" || !size,
      "max-w-full": size === "full"
    }, className)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "py-8"
  }, children));
  return base;
};

Content_Content.propTypes = {
  children: prop_types_default.a.node,
  size: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var src_Content = (Content_Content);
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/classnames/bind.js
var bind = __webpack_require__(3);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind);

// CONCATENATED MODULE: ./src/Dropdown/index.js
function Dropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Dropdown_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Dropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Dropdown_DropdownContent = function DropdownContent(_ref) {
  var id = _ref.id,
      children = _ref.children;
  if (typeof window === "undefined") return null;
  var element = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(document.getElementById(id) || document.createElement("div"));
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }

    return function () {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);
  return Object(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_["createPortal"])(children, element.current);
};

var Dropdown_Dropdown = function Dropdown(_ref2) {
  var content = _ref2.content,
      position = _ref2.position,
      children = _ref2.children,
      className = _ref2.className;
  var dropdown = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  var portal = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])({
    top: 0,
    left: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      dropdownPosition = _useState4[0],
      setDropdownPosition = _useState4[1];

  var onOutSideClick = function onOutSideClick(event) {
    if (dropdown.current.contains(event.target) || portal.current && portal.current.contains(event.target)) {
      return;
    } else {
      setOpen(false);
    }
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (open) {
      var button = dropdown.current.getBoundingClientRect();

      var _content = portal.current.getBoundingClientRect();

      var paddingTop = 8;

      if (position === "LeftTop") {
        setDropdownPosition({
          left: button.left,
          top: button.top - (_content.height + paddingTop)
        });
      } else if (position === "RightTop") {
        setDropdownPosition({
          left: button.right - _content.width,
          top: button.top - (_content.height + paddingTop)
        });
      } else if (position === "LeftBottom") {
        setDropdownPosition({
          left: button.left,
          top: button.bottom + paddingTop
        });
      } else {
        setDropdownPosition({
          left: button.right - _content.width,
          top: button.bottom + paddingTop
        });
      }
    }
  }, [open]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    document.addEventListener("mousedown", onOutSideClick);
    return function () {
      document.removeEventListener("mousedown", onOutSideClick);
    };
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    ref: dropdown,
    className: bind_default()("relative inline-block text-left z-50", className)
  }, Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(children, {
    onClick: function onClick(e) {
      e.stopPropagation();
      setOpen(!open);
    }
  }), open && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Dropdown_DropdownContent, {
    id: "dropdown-content"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    ref: portal,
    style: _objectSpread({}, dropdownPosition),
    className: "fixed z-50 w-56 min-w-0 shadow-lg"
  }, content)));
};

Dropdown_Dropdown.propTypes = {
  content: prop_types_default.a.element,
  position: prop_types_default.a.string,
  children: prop_types_default.a.element,
  className: prop_types_default.a.string
};
/* harmony default export */ var src_Dropdown = (Dropdown_Dropdown);
// CONCATENATED MODULE: ./src/Button/index.js
function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var buttonTypes = {
  "default": "border-transparent text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-700 focus:shadow-outline-indigo",
  secondary: "border-gray-300 text-gray-800 bg-white hover:bg-gray-100 active:bg-gray-100 focus:shadow-outline-blue",
  danger: "border-none text-white bg-red-600 hover:bg-red-700 active:bg-red-700 focus:shadow-outline-red",
  disabled: "opacity-50 cursor-default hover:bg-transparent",
  minimal: "border-transparent text-gray-700 bg-white hover:bg-gray-100 active:bg-gray-100"
};

var Button_Button = function Button(_ref) {
  var _cx;

  var disabled = _ref.disabled,
      iconBefore = _ref.iconBefore,
      iconAfter = _ref.iconAfter,
      onClick = _ref.onClick,
      label = _ref.label,
      type = _ref.type,
      component = _ref.component,
      block = _ref.block,
      large = _ref.large;
  var cx = bind_default.a.bind(buttonTypes);
  var ButtonContent = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, iconBefore && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    className: "mr-2"
  }, Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconBefore)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", null, label), iconAfter && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    className: "ml-2"
  }, Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconAfter)));
  var ButtonClasses = cx("Button items-center border font-medium rounded-lg focus:outline-none transition ease-in-out duration-150 justify-center", (_cx = {
    disabled: disabled,
    "default": !type
  }, Button_defineProperty(_cx, type, Boolean(type)), Button_defineProperty(_cx, "px-5 h-9 leading-9 inline-flex text-sm", !Boolean(block)), Button_defineProperty(_cx, "w-full h-12 leading-12 text-base block", Boolean(block)), Button_defineProperty(_cx, "px-10 h-10 leading-10 inline-flex", Boolean(large)), _cx));

  var RenderComponent = function RenderComponent() {
    if (component.props.children && typeof component.props.children !== "string") {
      var children = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component.props.children, {
        className: ButtonClasses
      });
      return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {}, children);
    } else {
      return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {
        className: ButtonClasses
      });
    }
  };

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, component ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(RenderComponent, null) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    className: ButtonClasses
  }, ButtonContent));
};

Button_Button.propTypes = {
  disabled: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  iconBefore: prop_types_default.a.element,
  iconAfter: prop_types_default.a.element,
  label: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  type: prop_types_default.a.string,
  component: prop_types_default.a.element
};
/* harmony default export */ var src_Button = (Button_Button);
// CONCATENATED MODULE: ./src/Box/index.js
function Box_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Box_Box = function Box(_ref) {
  var _classNames;

  var flex = _ref.flex,
      alignItems = _ref.alignItems,
      justifyContent = _ref.justifyContent,
      backgroundColor = _ref.backgroundColor,
      flexDirection = _ref.flexDirection,
      flexWrap = _ref.flexWrap,
      children = _ref.children,
      className = _ref.className,
      rootCard = _ref.rootCard,
      noPadding = _ref.noPadding;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: classnames_default()("overflow-hidden", className, (_classNames = {
      flex: Boolean(flex),
      "bg-white": !Boolean(backgroundColor)
    }, Box_defineProperty(_classNames, "items-".concat(alignItems), Boolean(alignItems)), Box_defineProperty(_classNames, "justify-".concat(justifyContent), Boolean(justifyContent)), Box_defineProperty(_classNames, "bg-".concat(backgroundColor), Boolean(backgroundColor)), Box_defineProperty(_classNames, "flex-".concat(flexDirection), Boolean(flexDirection)), Box_defineProperty(_classNames, "mb-4 shadow rounded", Boolean(rootCard)), Box_defineProperty(_classNames, "px-6 py-4", !Boolean(noPadding)), Box_defineProperty(_classNames, "flex-".concat(flexWrap), Boolean(flexWrap)), _classNames))
  }, children);
};

Box_Box.propTypes = {
  flex: prop_types_default.a.bool,
  alignItems: prop_types_default.a.string,
  justifyContent: prop_types_default.a.string,
  backgroundColor: prop_types_default.a.string,
  flexDirection: prop_types_default.a.string,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  rootCard: prop_types_default.a.bool,
  noPadding: prop_types_default.a.bool,
  flexWrap: prop_types_default.a.string
};
/* harmony default export */ var src_Box = (Box_Box);
// CONCATENATED MODULE: ./src/Menu/index.js
function Menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var itemType = {
  iconAfter: "justify-between",
  disabled: "opacity-50",
  danger: "text-red-600 hover:text-red-600 focus:text-red-600",
  "default": "text-gray-700 hover:text-gray-900 focus:text-gray-900",
  dark: "bg-gray-900 focus:text-white text-white focus:bg-gray-900 hover:bg-gray-700"
};

var Menu_Menu = function Menu(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: bind_default()("rounded bg-white shadow-xs overflow-hidden", className)
  }, children);
};

Menu_Menu.Group = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: className
  }, children);
};

Menu_Menu.Divider = function () {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "border-t border-gray-100"
  });
};

Menu_Menu.Item = function (_ref3) {
  var iconBefore = _ref3.iconBefore,
      iconAfter = _ref3.iconAfter,
      disabled = _ref3.disabled,
      onSelect = _ref3.onSelect,
      className = _ref3.className,
      type = _ref3.type,
      children = _ref3.children,
      component = _ref3.component;
  var cx = bind_default.a.bind(itemType);
  var content = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, iconBefore && Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconBefore, {
    className: "mr-2 transition ease-in-out duration-150"
  }), children, iconAfter && Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconAfter, {
    className: "ml-2 transition ease-in-out duration-150"
  }));
  var classes = cx("flex text-left min-w-full px-4 py-2 text-sm leading-5 focus:outline-none focus:bg-gray-100 hover:bg-gray-100", Menu_defineProperty({
    iconAfter: iconAfter,
    disabled: disabled && onSelect,
    "default": !type
  }, type, Boolean(type)), className);

  if (component) {
    if (component.props.children && typeof component.props.children !== "string") {
      var _children = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component.props.children, {
        className: classes
      });

      return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {}, _children);
    } else {
      return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {
        className: classes
      });
    }
  } else {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", {
      disabled: disabled,
      onClick: onSelect,
      className: classes
    }, content);
  }
};

/* harmony default export */ var src_Menu = (Menu_Menu);
// CONCATENATED MODULE: ./src/Sidesheet/index.js
function Sidesheet_slicedToArray(arr, i) { return Sidesheet_arrayWithHoles(arr) || Sidesheet_iterableToArrayLimit(arr, i) || Sidesheet_unsupportedIterableToArray(arr, i) || Sidesheet_nonIterableRest(); }

function Sidesheet_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Sidesheet_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Sidesheet_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Sidesheet_arrayLikeToArray(o, minLen); }

function Sidesheet_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Sidesheet_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Sidesheet_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function XIcon() {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    fill: "none",
    className: "text-gray-600",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

var Sidesheet_SidesheetContent = function SidesheetContent(_ref) {
  var id = _ref.id,
      children = _ref.children;
  if (typeof window === "undefined") return null;
  var element = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(document.getElementById(id) || document.createElement("div"));
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }

    return function () {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);
  return Object(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_["createPortal"])(children, element.current);
};

var Sidesheet_Sidesheet = function Sidesheet(_ref2) {
  var title = _ref2.title,
      children = _ref2.children,
      className = _ref2.className,
      action = _ref2.action,
      content = _ref2.content,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 400 : _ref2$width,
      onClose = _ref2.onClose,
      _ref2$isShown = _ref2.isShown,
      isShown = _ref2$isShown === void 0 ? false : _ref2$isShown;
  var sideSheet = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  var portal = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState2 = Sidesheet_slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState4 = Sidesheet_slicedToArray(_useState3, 2),
      transition = _useState4[0],
      setTransition = _useState4[1];

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (!isShown) {
      setTransition(false);
      setTimeout(function () {
        return setIsOpened(false);
      }, 500);
    } else {
      setIsOpened(true);
      setTimeout(function () {
        return setTransition(true);
      }, 100);
    }
  }, [isShown]);

  var closeTransition = function closeTransition() {
    if (isOpened) {
      onClose();
      setTransition(false);
      setTimeout(function () {
        return setIsOpened(false);
      }, 500);
    }
  };

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    ref: sideSheet,
    className: bind_default()("relative inline-block text-left", className)
  }, children, isOpened && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Sidesheet_SidesheetContent, {
    id: "sidesheet"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    onClick: function onClick() {
      return closeTransition();
    },
    className: bind_default()("fixed z-40 inset-0 opacity-25 duration-300 delay-200 transition", {
      "bg-gray-800": transition,
      "bg-transparent": !transition
    })
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    ref: portal,
    style: {
      transition: "transform .4s cubic-bezier(.3,0,0,1)",
      transform: transition ? "translateX(calc(100vw - ".concat(width, "px - 20px))") : "translateX(100vw)",
      top: 0,
      bottom: 0,
      width: width,
      height: "calc(100% - 20px)"
    },
    className: "fixed z-50 min-w-0 bg-white duration-300 delay-200 h-full flex flex-col shadow-xl m-2 rounded"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    flex: true,
    alignItems: "center",
    className: "relative border-b border-gray-200 rounded rounded-b-none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "text-gray-600 flex-auto truncate leading-6"
  }, title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    flex: true,
    backgroundColor: "transparent",
    className: "cursor-pointer",
    noPadding: true
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    onClick: function onClick() {
      return closeTransition();
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(XIcon, null)))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    flex: true,
    flexDirection: "col",
    className: "sidesheet-content relative overflow-y-auto flex-1 rounded"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    noPadding: true,
    flex: true,
    flexDirection: "col",
    className: "h-full"
  }, content)), action && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    flex: true,
    justifyContent: "center",
    alignItems: "center",
    className: "sidesheet-action h-16 border-t border-gray-200 relative flex-initial rounded rounded-t-none"
  }, action))));
};

Sidesheet_Sidesheet.propTypes = {
  content: prop_types_default.a.element,
  children: prop_types_default.a.element,
  className: prop_types_default.a.string,
  width: prop_types_default.a.string,
  action: prop_types_default.a.element,
  onClose: prop_types_default.a.func,
  isShown: prop_types_default.a.bool,
  title: prop_types_default.a.string
};
/* harmony default export */ var src_Sidesheet = (Sidesheet_Sidesheet);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(20);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./src/Skeleton/styles.js
var _defaultExport = new String("@-webkit-keyframes skeleton-jsx-309491756{0%{background-position:200% 0;}to{background-position:-200% 0;}}@keyframes skeleton-jsx-309491756{0%{background-position:200% 0;}to{background-position:-200% 0;}}.skeleton.jsx-309491756{display:block;border-radius:5px;background-image:linear-gradient( 270deg, #fafafa, #eaeaea, #eaeaea, #fafafa );background-size:400% 100%;-webkit-animation:skeleton-jsx-309491756 8s ease-in-out infinite;animation:skeleton-jsx-309491756 8s ease-in-out infinite;}");

_defaultExport.__hash = "309491756";
/* harmony default export */ var styles = (_defaultExport);
// CONCATENATED MODULE: ./src/Skeleton/index.js






var Skeleton_Skeleton = function Skeleton(_ref) {
  var width = _ref.width,
      height = _ref.height,
      className = _ref.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    style: {
      width: width,
      minHeight: height
    },
    className: "jsx-".concat(styles.__hash) + " " + (classnames_default()("skeleton", className) || "")
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(style_default.a, {
    id: styles.__hash
  }, styles)));
};

Skeleton_Skeleton.propTypes = {
  width: prop_types_default.a.number,
  height: prop_types_default.a.number
};
Skeleton_Skeleton.defaultProps = {
  width: 160,
  height: 24
};
/* harmony default export */ var src_Skeleton = (Skeleton_Skeleton);
// CONCATENATED MODULE: ./src/Typography/Text.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Text_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Text_Text = /*#__PURE__*/function (_PureComponent) {
  _inherits(Text, _PureComponent);

  var _super = _createSuper(Text);

  function Text() {
    _classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          bold = _this$props.bold,
          color = _this$props.color,
          small = _this$props.small,
          is = _this$props.is,
          margin = _this$props.margin,
          props = _objectWithoutProperties(_this$props, ["className", "bold", "color", "small", "is", "margin"]);

      var Tag = is;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Tag, _extends({
        className: classnames_default()("leading-normal", margin, color, {
          "font-semibold": Boolean(bold),
          "font-normal": !Boolean(bold),
          "text-base": !Boolean(small),
          "text-sm": Boolean(small)
        })
      }, props));
    }
  }]);

  return Text;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

Text_defineProperty(Text_Text, "propTypes", {
  /**
   * When true, makes Text semi-bold.
   */
  bold: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  is: prop_types_default.a.oneOf(['span', 'p', 'li']).isRequired,
  margin: prop_types_default.a.string
});

Text_defineProperty(Text_Text, "defaultProps", {
  color: "text-gray-700",
  is: "span",
  margin: ""
});

/* harmony default export */ var Typography_Text = (Text_Text);
// CONCATENATED MODULE: ./src/Toast/index.js
function Toast_slicedToArray(arr, i) { return Toast_arrayWithHoles(arr) || Toast_iterableToArrayLimit(arr, i) || Toast_unsupportedIterableToArray(arr, i) || Toast_nonIterableRest(); }

function Toast_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Toast_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Toast_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Toast_arrayLikeToArray(o, minLen); }

function Toast_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Toast_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Toast_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Toast_XIcon() {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    fill: "none",
    className: "text-gray-600",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    role: "button",
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

var Toast_ToastContent = function ToastContent(_ref) {
  var id = _ref.id,
      children = _ref.children;
  if (typeof window === "undefined") return null;
  var element = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(document.getElementById(id) || document.createElement("div"));
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }

    return function () {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);
  return Object(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_["createPortal"])(children, element.current);
};

var Toast_Toast = function Toast(_ref2) {
  var text = _ref2.text,
      error = _ref2.error,
      success = _ref2.success,
      showCloseIcon = _ref2.showCloseIcon,
      hide = _ref2.hide,
      _ref2$dismissTime = _ref2.dismissTime,
      dismissTime = _ref2$dismissTime === void 0 ? 6000 : _ref2$dismissTime,
      onCloseToast = _ref2.onCloseToast;

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(true),
      _useState2 = Toast_slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(hide),
      _useState4 = Toast_slicedToArray(_useState3, 2),
      showToast = _useState4[0],
      setShowToast = _useState4[1];

  var closeToast = function closeToast() {
    setShowToast(false);
    setOpen(false);

    if (onCloseToast) {
      onCloseToast();
    }
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (dismissTime) {
      var interval = setInterval(function () {
        closeToast();
      }, dismissTime);
      return function () {
        clearInterval(interval);
      };
    }
  }, [dismissTime]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setTimeout(function () {
      setShowToast(true);
    }, 10);
  }, []);

  if (open) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Toast_ToastContent, {
      id: "toast-content"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: bind_default()("fixed z-50 w-1/4 max-w-full p-5 bg-white bottom-0 rounded-md shadow-xl opacity-0", {
        "text-white bg-red-600": error,
        "text-white bg-indigo-600": success,
        "opacity-100": showToast
      }),
      style: {
        right: 20,
        transition: "all .4s cubic-bezier(.3,0,0,1)",
        transform: showToast && "translate(0, -20px)"
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "w-11/12"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Typography_Text, {
      small: true,
      color: (success || error) && "text-white"
    }, text)), showCloseIcon && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      onClick: function onClick() {
        return closeToast();
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Toast_XIcon, null)))));
  } else {
    return null;
  }
};

Toast_Toast.propTypes = {
  success: prop_types_default.a.bool,
  showCloseIcon: prop_types_default.a.bool,
  hide: prop_types_default.a.bool,
  error: prop_types_default.a.bool,
  text: prop_types_default.a.string,
  dismissTime: prop_types_default.a.number
};
/* harmony default export */ var src_Toast = (Toast_Toast);
// CONCATENATED MODULE: ./src/Input/index.js
function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

function Input_slicedToArray(arr, i) { return Input_arrayWithHoles(arr) || Input_iterableToArrayLimit(arr, i) || Input_unsupportedIterableToArray(arr, i) || Input_nonIterableRest(); }

function Input_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Input_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Input_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Input_arrayLikeToArray(o, minLen); }

function Input_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Input_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Input_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Input = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      inputClassName = _ref.inputClassName,
      className = _ref.className,
      value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      error = _ref.error,
      disabled = _ref.disabled,
      rest = Input_objectWithoutProperties(_ref, ["onChange", "inputClassName", "className", "value", "label", "id", "error", "disabled"]);

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(),
      _useState2 = Input_slicedToArray(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setInternalValue(value);
  }, [value]);
  var handleChange = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (event) {
    setInternalValue(event.target.value);

    if (onChange) {
      onChange(event.target.value, event);
    }
  }, [setInternalValue, onChange]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: className
  }, label && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", {
    className: "block text-sm leading-5 font-medium text-gray-700",
    htmlFor: id
  }, label), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "mt-1 relative rounded-md shadow-sm"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("input", Input_extends({
    id: id,
    ref: ref,
    onChange: handleChange,
    defaultValue: internalValue,
    "aria-label": label,
    "aria-required": label ? true : false,
    "aria-invalid": error ? true : false,
    disabled: disabled,
    className: classnames_default()("form-input block w-full sm:text-sm sm:leading-5", inputClassName, {
      "bg-red-100 border border-red-400 focus:border-red-300 focus:shadow-outline-red": error,
      "bg-gray-100 cursor-not-allowed": disabled
    })
  }, rest))));
});
Input.propTypes = {
  onChange: prop_types_default.a.func,
  inputClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  value: prop_types_default.a.string,
  label: prop_types_default.a.string,
  id: prop_types_default.a.string.isRequired,
  error: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool
};
/* harmony default export */ var src_Input = (Input);
// CONCATENATED MODULE: ./src/Textarea/index.js
function Textarea_extends() { Textarea_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Textarea_extends.apply(this, arguments); }

function Textarea_slicedToArray(arr, i) { return Textarea_arrayWithHoles(arr) || Textarea_iterableToArrayLimit(arr, i) || Textarea_unsupportedIterableToArray(arr, i) || Textarea_nonIterableRest(); }

function Textarea_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Textarea_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Textarea_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Textarea_arrayLikeToArray(o, minLen); }

function Textarea_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Textarea_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Textarea_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Textarea_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Textarea_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Textarea_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Textarea = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      textareaClassName = _ref.textareaClassName,
      className = _ref.className,
      value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      error = _ref.error,
      disabled = _ref.disabled,
      rows = _ref.rows,
      rest = Textarea_objectWithoutProperties(_ref, ["onChange", "textareaClassName", "className", "value", "label", "id", "error", "disabled", "rows"]);

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(),
      _useState2 = Textarea_slicedToArray(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setInternalValue(value);
  }, [value]);
  var handleChange = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (event) {
    setInternalValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  }, [setInternalValue, onChange]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: className
  }, label && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", {
    className: "block text-sm leading-5 font-medium text-gray-700",
    htmlFor: id
  }, label), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("textarea", Textarea_extends({
    id: id,
    ref: ref,
    rows: rows,
    onChange: handleChange,
    defaultValue: internalValue,
    "aria-label": label,
    "aria-required": label ? true : false,
    "aria-invalid": error ? true : false,
    disabled: disabled,
    className: classnames_default()("form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5", textareaClassName, {
      "bg-red-100 border border-red-400 focus:border-red-300 focus:shadow-outline-red": error,
      "bg-gray-100 cursor-not-allowed": disabled
    })
  }, rest)));
});
Textarea.defaultProps = {
  rows: 3
};
Textarea.propTypes = {
  onChange: prop_types_default.a.func,
  textareaClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  value: prop_types_default.a.string,
  label: prop_types_default.a.string,
  id: prop_types_default.a.string.isRequired,
  error: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  rows: prop_types_default.a.number
};
/* harmony default export */ var src_Textarea = (Textarea);
// CONCATENATED MODULE: ./src/Select/index.js
function Select_extends() { Select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_extends.apply(this, arguments); }

function Select_slicedToArray(arr, i) { return Select_arrayWithHoles(arr) || Select_iterableToArrayLimit(arr, i) || Select_unsupportedIterableToArray(arr, i) || Select_nonIterableRest(); }

function Select_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Select_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Select_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Select_arrayLikeToArray(o, minLen); }

function Select_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Select_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Select_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Select_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Select_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Select = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      selectClassName = _ref.selectClassName,
      options = _ref.options,
      className = _ref.className,
      value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      disabled = _ref.disabled,
      error = _ref.error,
      rest = Select_objectWithoutProperties(_ref, ["onChange", "selectClassName", "options", "className", "value", "label", "id", "disabled", "error"]);

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(""),
      _useState2 = Select_slicedToArray(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setInternalValue(value);
  }, [value]);
  var handleChange = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (event) {
    setInternalValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  }, [setInternalValue, onChange]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: className
  }, label && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", {
    className: "block text-sm font-medium leading-5 text-gray-700",
    htmlFor: id
  }, label), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "mt-1 relative rounded-md shadow-sm"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("select", Select_extends({
    id: id,
    ref: ref,
    onChange: handleChange,
    value: internalValue,
    disabled: disabled,
    className: classnames_default()("mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5", selectClassName, {
      "bg-red-100 border border-red-400 focus:border-red-300 focus:shadow-outline-red": error,
      "bg-gray-100 cursor-not-allowed": disabled
    })
  }, rest), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("option", {
    value: "",
    disabled: true
  }, "Choose one"), options.map(function (item, index) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("option", {
      key: "".concat(item.value, "-").concat(index),
      value: item.value
    }, item.name);
  }))));
});
Select.defaultProps = {
  options: []
};
Select.propTypes = {
  onChange: prop_types_default.a.func,
  selectClassName: prop_types_default.a.string,
  options: prop_types_default.a.array,
  className: prop_types_default.a.string,
  value: prop_types_default.a.string,
  label: prop_types_default.a.string,
  id: prop_types_default.a.string.isRequired,
  error: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool
};
/* harmony default export */ var src_Select = (Select);
// CONCATENATED MODULE: ./src/Avatar/utils/getInitials.js
function getInitials_getInitials(name) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '?';
  if (!name || typeof name !== 'string') return fallback;
  return name.replace(/\s+/, ' ').split(' ') // Repeated spaces results in empty strings
  .slice(0, 2).map(function (v) {
    return v && v[0].toUpperCase();
  }) // Watch out for empty strings
  .join('');
}
// CONCATENATED MODULE: ./src/Avatar/utils/hash.js
// http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
function hashCode(s) {
  var str = String(s);
  var hash = 0;

  var _char;

  if (str.trim().length === 0) return hash;

  for (var i = 0; i < str.length; i++) {
    _char = str.charCodeAt(i);
    hash = (hash << 5) - hash + _char; // Convert to 32bit integer

    hash &= hash;
  }

  return Math.abs(hash);
}
// CONCATENATED MODULE: ./src/Avatar/styles/scales.js
/**
 * Neutrals and Blue are special.
 * They need more variations to properly express all of our UI.
 */
/* harmony default export */ var scales = ({
  neutral: {
    N1: '#F9F9FB',
    N2: '#F5F6F7',
    N3: '#EDF0F2',
    N4: '#E4E7EB',
    N5: '#C7CED4',
    N6: '#A6B1BB',
    N7: '#7B8B9A',
    // Large Text AA
    N8: '#66788A',
    // Normal Text AA
    N9: '#425A70',
    // Normal Text AAA
    N10: '#234361',
    // Normal Text AAA
    // Transparent variants.
    N1A: 'rgba(67, 90, 111, 0.04)',
    N2A: 'rgba(67, 90, 111, 0.06)',
    N3A: 'rgba(67, 90, 111, 0.09)',
    N4A: 'rgba(67, 90, 111, 0.14)',
    N5A: 'rgba(67, 90, 111, 0.3)',
    N6A: 'rgba(67, 90, 111, 0.47)',
    N7A: 'rgba(67, 90, 111, 0.7)',
    N8A: 'rgba(67, 90, 111, 0.81)'
  },
  blue: {
    B1: '#f7f9fd',
    B2: '#f1f7fc',
    B3: '#e9f2fa',
    B4: '#ddebf7',
    B5: '#b7d4ef',
    B6: '#8fbce6',
    B7: '#579ad9',
    // Large Text AA
    B8: '#3d8bd4',
    // Normal Text AA
    B9: '#1070ca',
    // Normal Text AAA
    B10: '#084b8a',
    // Normal Text AAA
    // Transparent variants.
    B1A: 'rgba(16, 112, 202, 0.04)',
    B2A: 'rgba(16, 112, 202, 0.06)',
    B3A: 'rgba(16, 112, 202, 0.09)',
    B4A: 'rgba(16, 112, 202, 0.14)',
    B5A: 'rgba(16, 112, 202, 0.3)',
    B6A: 'rgba(16, 112, 202, 0.47)',
    B7A: 'rgba(16, 112, 202, 0.7)',
    B8A: 'rgba(16, 112, 202, 0.81)'
  }
});
// CONCATENATED MODULE: ./src/Avatar/styles/palette.js

/* harmony default export */ var palette = ({
  neutral: {
    lightest: scales.neutral.N1,
    light: scales.neutral.N4,
    base: scales.neutral.N9,
    dark: scales.neutral.N10
  },
  blue: {
    lightest: scales.blue.B1,
    light: scales.blue.B4,
    base: scales.blue.B9,
    dark: scales.blue.B10
  },
  red: {
    lightest: '#fef6f6',
    light: '#fae2e2',
    base: '#ec4c47',
    dark: '#bf0e08'
  },
  orange: {
    lightest: '#fdf8f3',
    light: '#fae3cd',
    base: '#d9822b',
    dark: '#95591e'
  },
  yellow: {
    lightest: '#fef8e7',
    light: '#fbe6a2',
    base: '#f7d154',
    dark: '#7e6514'
  },
  green: {
    lightest: '#f1faf5',
    light: '#d4eee2',
    base: '#47b881',
    dark: '#00783e'
  },
  teal: {
    lightest: '#f1fbfc',
    light: '#d2eef3',
    base: '#14b5d0',
    dark: '#007489'
  },
  purple: {
    lightest: '#f8f7fc',
    light: '#eae7f8',
    base: '#735dd0',
    dark: '#37248f'
  }
});
// CONCATENATED MODULE: ./src/Avatar/styles/colors.js


/**
 * This object are functional colors being used the default theme.
 * A required property is required by the default theme NOT by Evergreen itself.
 */

/* harmony default export */ var colors = ({
  /**
   * Available on Pane as `<Pane background="tint1" />`
   * @property {string} background.tint1 - Lightest tinted background color. Required property.
   * @property {string} background.tint2 - Slightly darker tinted background color. Required property.
   * @property {string} background.overlay - color used for the overlay
   */
  background: {
    tint1: scales.neutral.N1,
    tint2: scales.neutral.N2,
    overlay: scales.neutral.N7A,
    // Non required.
    yellowTint: palette.yellow.lightest,
    greenTint: palette.green.lightest,
    orangeTint: palette.orange.lightest,
    redTint: palette.red.lightest,
    blueTint: palette.blue.lightest,
    purpleTint: palette.purple.lightest,
    tealTint: palette.teal.lightest
  },

  /**
   * Available on Pane as `<Pane borderBottom borderRight="muted" />`
   * @property {string} text.default - Required property.
   * @property {string} text.muted - Slightly lighter color than default. Required property.
   */
  border: {
    "default": scales.neutral.N4,
    // Was BorderColors.muted in v3 and under.
    muted: scales.neutral.N3 // Was BorderColors.extraMuted in v3 and under

  },

  /**
   * Text colors available on Text as `<Text color="muted" />`.
   * @property {string} text.muted - Required property.
   * @property {string} text.default - Required property. Default for text.
   * @property {string} text.dark - Required property. Default for headings.
   */
  text: {
    muted: scales.neutral.N8,
    "default": scales.neutral.N9,
    dark: scales.neutral.N10,
    selected: palette.blue.base,
    // Intent.
    success: palette.green.dark,
    info: palette.blue.dark,
    danger: palette.red.dark,
    warning: palette.orange.dark
  },

  /**
   * Icon colors available on Icon.
   * @property {string} icon.default - Required property.
   * @property {string} icon.muted - Required property.
   * @property {string} icon.selected - Required property.
   */
  icon: {
    "default": scales.neutral.N8,
    muted: scales.neutral.N7,
    disabled: scales.neutral.N5A,
    selected: palette.blue.base,
    // Intent.
    success: palette.green.base,
    info: palette.blue.base,
    danger: palette.red.base,
    warning: palette.orange.base
  },

  /**
   * Used for Alerts and other (future) componentes that express intent.
   * @property {string} intent.none - Required property.
   * @property {string} intent.success - Required property.
   * @property {string} intent.danger - Required property.
   * @property {string} intent.warning - Required property.
   */
  intent: {
    none: palette.blue.base,
    success: palette.green.base,
    danger: palette.red.base,
    warning: palette.orange.base
  }
});
// CONCATENATED MODULE: ./src/Avatar/styles/fills.js


/**
 * Fills are used in Avatars and Badges.
 */

var fills = {};
fills.solid = {
  neutral: {
    color: 'white',
    backgroundColor: palette.neutral.base
  },
  blue: {
    color: 'white',
    backgroundColor: palette.blue.base
  },
  red: {
    color: 'white',
    backgroundColor: palette.red.base
  },
  orange: {
    color: 'white',
    backgroundColor: palette.orange.base
  },
  yellow: {
    color: palette.yellow.dark,
    backgroundColor: palette.yellow.base
  },
  green: {
    color: 'white',
    backgroundColor: palette.green.base
  },
  teal: {
    color: 'white',
    backgroundColor: palette.teal.base
  },
  purple: {
    color: 'white',
    backgroundColor: palette.purple.base
  }
};
fills.subtle = {
  neutral: {
    color: colors.text["default"],
    backgroundColor: palette.neutral.light
  },
  blue: {
    color: palette.blue.dark,
    backgroundColor: palette.blue.light
  },
  red: {
    color: palette.red.dark,
    backgroundColor: palette.red.light
  },
  orange: {
    color: palette.orange.dark,
    backgroundColor: palette.orange.light
  },
  yellow: {
    color: palette.yellow.dark,
    backgroundColor: palette.yellow.light
  },
  green: {
    color: palette.green.dark,
    backgroundColor: palette.green.light
  },
  teal: {
    color: palette.teal.dark,
    backgroundColor: palette.teal.light
  },
  purple: {
    color: palette.purple.dark,
    backgroundColor: palette.purple.light
  }
};
fills.options = Object.keys(fills.solid);
/* harmony default export */ var styles_fills = (fills);
// CONCATENATED MODULE: ./src/Avatar/utils/getAvatarProps.js

/**
 * @param {boolean} isSolid
 * @param {string} color — automatic or actual color
 * @param {number} hashValue
 * @return {Object} { color, backgroundColor }
 */

var getAvatarProps_getAvatarProps = function getAvatarProps(_ref) {
  var isSolid = _ref.isSolid,
      color = _ref.color,
      hashValue = _ref.hashValue;
  var appearances = styles_fills[isSolid ? 'solid' : 'subtle'];

  if (color === 'automatic') {
    var keys = Object.keys(appearances);
    var key = keys[hashValue % keys.length];
    return appearances[key];
  }

  return appearances[color];
};

/* harmony default export */ var utils_getAvatarProps = (getAvatarProps_getAvatarProps);
// CONCATENATED MODULE: ./src/Avatar/utils/getInitialsFontSize.js
/**
 * @param {number} size
 * @param {number} sizeLimitOneCharacter
 * @return {number} font size
 */
var getAvatarInitialsFontSize = function getAvatarInitialsFontSize(size, sizeLimitOneCharacter) {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2);
  }

  return Math.ceil(size / 2.6);
};

/* harmony default export */ var getInitialsFontSize = (getAvatarInitialsFontSize);
// CONCATENATED MODULE: ./src/Avatar/Avatar.js
function Avatar_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Avatar_typeof = function _typeof(obj) { return typeof obj; }; } else { Avatar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Avatar_typeof(obj); }

function Avatar_extends() { Avatar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Avatar_extends.apply(this, arguments); }

function Avatar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Avatar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Avatar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Avatar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Avatar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Avatar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Avatar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Avatar_defineProperties(Constructor, staticProps); return Constructor; }

function Avatar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Avatar_setPrototypeOf(subClass, superClass); }

function Avatar_setPrototypeOf(o, p) { Avatar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Avatar_setPrototypeOf(o, p); }

function Avatar_createSuper(Derived) { var hasNativeReflectConstruct = Avatar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Avatar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Avatar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Avatar_possibleConstructorReturn(this, result); }; }

function Avatar_possibleConstructorReturn(self, call) { if (call && (Avatar_typeof(call) === "object" || typeof call === "function")) { return call; } return Avatar_assertThisInitialized(self); }

function Avatar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Avatar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Avatar_getPrototypeOf(o) { Avatar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Avatar_getPrototypeOf(o); }

function Avatar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Avatar_Avatar = /*#__PURE__*/function (_PureComponent) {
  Avatar_inherits(Avatar, _PureComponent);

  var _super = Avatar_createSuper(Avatar);

  function Avatar(props, context) {
    var _this;

    Avatar_classCallCheck(this, Avatar);

    _this = _super.call(this, props, context);

    Avatar_defineProperty(Avatar_assertThisInitialized(_this), "getColorProps", function () {
      var _this$props = _this.props,
          isSolid = _this$props.isSolid,
          color = _this$props.color,
          propsHashValue = _this$props.hashValue,
          name = _this$props.name;

      if (color === "automatic") {
        var hashValue = hashCode(propsHashValue || name);
        return utils_getAvatarProps({
          isSolid: isSolid,
          color: color,
          hashValue: hashValue
        });
      }

      return utils_getAvatarProps({
        isSolid: isSolid,
        color: color
      });
    });

    return _this;
  }

  Avatar_createClass(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          size = _this$props2.size,
          name = _this$props2.name,
          isSolid = _this$props2.isSolid,
          isDashed = _this$props2.isDashed,
          propsHashValue = _this$props2.hashValue,
          getInitials = _this$props2.getInitials,
          propsColor = _this$props2.color,
          sizeLimitOneCharacter = _this$props2.sizeLimitOneCharacter,
          props = Avatar_objectWithoutProperties(_this$props2, ["className", "size", "name", "isSolid", "isDashed", "hashValue", "getInitials", "color", "sizeLimitOneCharacter"]);

      var initialsFontSize = "".concat(getInitialsFontSize(size, sizeLimitOneCharacter), "px");
      var initials = getInitials(name);

      if (size <= sizeLimitOneCharacter) {
        initials = initials.slice(0, 1);
      }

      var colorProps = this.getColorProps();
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", Avatar_extends({
        className: classnames_default()("overflow-hidden relative inline-flex flex-shrink-0 justify-center", className, {
          "rounded-full": !Boolean(isDashed),
          "rounded border-2 border-dashed border-gray-300": Boolean(isDashed)
        }),
        style: {
          backgroundColor: isDashed ? 'transparent' : colorProps.backgroundColor,
          width: size,
          height: size
        },
        title: name
      }, props), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
        className: classnames_default()("relative flex justify-center items-center", {
          "text-gray-300": Boolean(isDashed)
        }),
        style: {
          color: !isDashed && colorProps.color,
          fontSize: initialsFontSize,
          lineHeight: initialsFontSize,
          width: size,
          height: isDashed ? size - 4 : size
        }
      }, initials));
    }
  }]);

  return Avatar;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

Avatar_defineProperty(Avatar_Avatar, "propTypes", {
  /**
   * The size of the avatar.
   */
  size: prop_types_default.a.number,

  /**
   * The name used for the initials and title attribute.
   */
  name: prop_types_default.a.string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: prop_types_default.a.string,

  /**
   * When true, render a solid avatar.
   */
  isSolid: prop_types_default.a.bool,

  /**
   * When true, renders a square avatar with dashed borders.
   * Overrides isSolid and color.
   */
  isDashed: prop_types_default.a.bool,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: prop_types_default.a.string.isRequired,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: prop_types_default.a.func,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: prop_types_default.a.number
});

Avatar_defineProperty(Avatar_Avatar, "defaultProps", {
  color: "automatic",
  size: 24,
  isSolid: false,
  isDashed: false,
  getInitials: getInitials_getInitials,
  sizeLimitOneCharacter: 20
});

/* harmony default export */ var src_Avatar_Avatar = (Avatar_Avatar);
// CONCATENATED MODULE: ./src/AlgoliaSearch/providers/TabController/index.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || TabController_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return TabController_arrayLikeToArray(arr); }

function TabController_slicedToArray(arr, i) { return TabController_arrayWithHoles(arr) || TabController_iterableToArrayLimit(arr, i) || TabController_unsupportedIterableToArray(arr, i) || TabController_nonIterableRest(); }

function TabController_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TabController_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TabController_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TabController_arrayLikeToArray(o, minLen); }

function TabController_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TabController_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function TabController_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var TabControllerContext = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"])({});
var TabController_useTabController = function useTabController() {
  return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])(TabControllerContext);
};
var navigationKeyTypes = {
  CURSOR: 'cursor',
  ARROW_DOWN: 'arrowDown',
  ARROW_UP: 'arrowUp',
  ENTER: 'enter'
};

var TabController_TabController = function TabController(props) {
  var children = props.children; // keeps track of the currently focused element in the results panel

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0),
      _useState2 = TabController_slicedToArray(_useState, 2),
      activeElementIndex = _useState2[0],
      setActiveElementIndex = _useState2[1]; // keeps track of the total number of elements that have been rendered


  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0),
      _useState4 = TabController_slicedToArray(_useState3, 2),
      totalElementsCount = _useState4[0],
      setTotalElementsCount = _useState4[1]; // an array of integers, the number of results per section


  var _useState5 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])([0]),
      _useState6 = TabController_slicedToArray(_useState5, 2),
      sectionLengthsArray = _useState6[0],
      setSectionLengthsArray = _useState6[1]; // height of the scrollable container


  var _useState7 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(300),
      _useState8 = TabController_slicedToArray(_useState7, 2),
      scrollableWindowHeight = _useState8[0],
      setScrollableWindowHeight = _useState8[1]; // distance to top of the page from the scrollable container


  var _useState9 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0),
      _useState10 = TabController_slicedToArray(_useState9, 2),
      scrollableWindowTopOffset = _useState10[0],
      setScrollableWindowTopOffset = _useState10[1]; // scroll distance to be set and read from


  var _useState11 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0),
      _useState12 = TabController_slicedToArray(_useState11, 2),
      scrollDistance = _useState12[0],
      setScrollDistance = _useState12[1]; // boolean to set whether or not the search box has text


  var _useState13 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState14 = TabController_slicedToArray(_useState13, 2),
      isResultsWindowOpen = _useState14[0],
      setIsResultsWindowOpen = _useState14[1];

  var _useState15 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null),
      _useState16 = TabController_slicedToArray(_useState15, 2),
      scrollWindowRef = _useState16[0],
      setScrollWindowRef = _useState16[1];

  var _useState17 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(true),
      _useState18 = TabController_slicedToArray(_useState17, 2),
      shouldBypassSearch = _useState18[0],
      setShouldBypassSearch = _useState18[1];

  var _useState19 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState20 = TabController_slicedToArray(_useState19, 2),
      enterKeyWasPressed = _useState20[0],
      setEnterKeyWasPressed = _useState20[1]; // allows for manual scroll disabling


  var _useState21 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState22 = TabController_slicedToArray(_useState21, 2),
      isScrollDisabled = _useState22[0],
      setIsScrollDisabled = _useState22[1];

  var handleKeyNavigation = function handleKeyNavigation(key) {
    switch (key) {
      case navigationKeyTypes.ARROW_UP:
        decrementActiveElementIndex();
        setShouldBypassSearch(true);
        break;

      case navigationKeyTypes.ARROW_DOWN:
        incrementActiveElementIndex();
        setShouldBypassSearch(true);
        break;

      case navigationKeyTypes.ENTER:
        setEnterKeyWasPressed(true);
        setShouldBypassSearch(true);
        break;

      default:
        break;
    }
  };

  var manuallySetActiveIndex = function manuallySetActiveIndex(index) {
    setIsScrollDisabled(true);
    setActiveElementIndex(index);
  }; // resets the active element to the first one


  var resetActiveElementIndex = function resetActiveElementIndex() {
    setActiveElementIndex(0);
  }; // adds section results length


  var appendNewSectionLength = function appendNewSectionLength(sectionIndex, length) {
    var copyOfSectionLengthsArray = _toConsumableArray(sectionLengthsArray);

    copyOfSectionLengthsArray[sectionIndex] = length;
    setSectionLengthsArray(copyOfSectionLengthsArray);
    setTotalElementsCount(copyOfSectionLengthsArray.reduce(function (a, b) {
      return a + b;
    }, 0));
  }; // increments the active index by 1 or resets to 0 if past total number of elements


  var incrementActiveElementIndex = function incrementActiveElementIndex() {
    var nextIndex = activeElementIndex + 1;
    if (nextIndex >= totalElementsCount) nextIndex = 0;
    setIsScrollDisabled(false);
    setActiveElementIndex(nextIndex);
  }; // decrements the active index by 1 or resets to "totalElementsCount - 1" if index < 0


  var decrementActiveElementIndex = function decrementActiveElementIndex() {
    var prevIndex = activeElementIndex - 1;
    if (prevIndex < 0) prevIndex = totalElementsCount - 1;
    setIsScrollDisabled(false);
    setActiveElementIndex(prevIndex);
  };

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(TabControllerContext.Provider, {
    value: {
      activeElementIndex: activeElementIndex,
      resetActiveElementIndex: resetActiveElementIndex,
      appendNewSectionLength: appendNewSectionLength,
      sectionLengthsArray: sectionLengthsArray,
      manuallySetActiveIndex: manuallySetActiveIndex,
      setActiveElementIndex: setActiveElementIndex,
      totalElementsCount: totalElementsCount,
      scrollableWindowHeight: scrollableWindowHeight,
      setScrollableWindowHeight: setScrollableWindowHeight,
      scrollableWindowTopOffset: scrollableWindowTopOffset,
      setScrollableWindowTopOffset: setScrollableWindowTopOffset,
      scrollDistance: scrollDistance,
      setScrollDistance: setScrollDistance,
      isResultsWindowOpen: isResultsWindowOpen,
      setIsResultsWindowOpen: setIsResultsWindowOpen,
      setScrollWindowRef: setScrollWindowRef,
      scrollWindowRef: scrollWindowRef,
      shouldBypassSearch: shouldBypassSearch,
      setShouldBypassSearch: setShouldBypassSearch,
      setEnterKeyWasPressed: setEnterKeyWasPressed,
      enterKeyWasPressed: enterKeyWasPressed,
      isScrollDisabled: isScrollDisabled,
      handleKeyNavigation: handleKeyNavigation
    }
  }, children);
};

/* harmony default export */ var providers_TabController = (TabController_TabController);
// EXTERNAL MODULE: ./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js
var algoliasearch_lite_umd = __webpack_require__(21);
var algoliasearch_lite_umd_default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite_umd);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function defineProperty_defineProperty(obj, key, value) {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function objectSpread_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty_defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function classCallCheck_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function typeof_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function assertThisInitialized_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function possibleConstructorReturn_possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized_assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function createClass_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function createClass_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) createClass_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) createClass_defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function setPrototypeOf_setPrototypeOf(o, p) {
  setPrototypeOf_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return setPrototypeOf_setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function inherits_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf_setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(7);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function objectWithoutProperties_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/algoliasearch-helper/index.js
var algoliasearch_helper = __webpack_require__(5);
var algoliasearch_helper_default = /*#__PURE__*/__webpack_require__.n(algoliasearch_helper);

// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/utils.js


// From https://github.com/reactjs/react-redux/blob/master/src/utils/shallowEqual.js
var shallowEqual = function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  var hasOwn = Object.prototype.hasOwnProperty;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
};
var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'UnknownComponent';
};
var resolved = Promise.resolve();
var defer = function defer(f) {
  resolved.then(f);
};

var utils_isPlainObject = function isPlainObject(value) {
  return typeof_typeof(value) === 'object' && value !== null && !Array.isArray(value);
};

var removeEmptyKey = function removeEmptyKey(obj) {
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];

    if (!utils_isPlainObject(value)) {
      return;
    }

    if (!objectHasKeys(value)) {
      delete obj[key];
    } else {
      removeEmptyKey(value);
    }
  });
  return obj;
};
var removeEmptyArraysFromObject = function removeEmptyArraysFromObject(obj) {
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];

    if (Array.isArray(value) && value.length === 0) {
      delete obj[key];
    }
  });
  return obj;
};
function addAbsolutePositions(hits, hitsPerPage, page) {
  return hits.map(function (hit, index) {
    return objectSpread_objectSpread({}, hit, {
      __position: hitsPerPage * page + index + 1
    });
  });
}
function addQueryID(hits, queryID) {
  if (!queryID) {
    return hits;
  }

  return hits.map(function (hit) {
    return objectSpread_objectSpread({}, hit, {
      __queryID: queryID
    });
  });
}
function find(array, comparator) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return array[i];
    }
  }

  return undefined;
}
function objectHasKeys(object) {
  return object && Object.keys(object).length > 0;
} // https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620

function omit(source, excluded) {
  if (source === null || source === undefined) {
    return {};
  }

  var target = {};
  var sourceKeys = Object.keys(source);

  for (var i = 0; i < sourceKeys.length; i++) {
    var _key = sourceKeys[i];

    if (excluded.indexOf(_key) >= 0) {
      // eslint-disable-next-line no-continue
      continue;
    }

    target[_key] = source[_key];
  }

  return target;
}
/**
 * Retrieve the value at a path of the object:
 *
 * @example
 * getPropertyByPath(
 *   { test: { this: { function: [{ now: { everyone: true } }] } } },
 *   'test.this.function[0].now.everyone'
 * ); // true
 *
 * getPropertyByPath(
 *   { test: { this: { function: [{ now: { everyone: true } }] } } },
 *   ['test', 'this', 'function', 0, 'now', 'everyone']
 * ); // true
 *
 * @param object Source object to query
 * @param path either an array of properties, or a string form of the properties, separated by .
 */

var getPropertyByPath = function getPropertyByPath(object, path) {
  return (Array.isArray(path) ? path : path.replace(/\[(\d+)]/g, '.$1').split('.')).reduce(function (current, key) {
    return current ? current[key] : undefined;
  }, object);
};
function getObjectType(object) {
  return Object.prototype.toString.call(object).slice(8, -1);
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createWidgetsManager.js

function createWidgetsManager(onWidgetsUpdate) {
  var widgets = []; // Is an update scheduled?

  var scheduled = false; // The state manager's updates need to be batched since more than one
  // component can register or unregister widgets during the same tick.

  function scheduleUpdate() {
    if (scheduled) {
      return;
    }

    scheduled = true;
    defer(function () {
      scheduled = false;
      onWidgetsUpdate();
    });
  }

  return {
    registerWidget: function registerWidget(widget) {
      widgets.push(widget);
      scheduleUpdate();
      return function unregisterWidget() {
        widgets.splice(widgets.indexOf(widget), 1);
        scheduleUpdate();
      };
    },
    update: scheduleUpdate,
    getWidgets: function getWidgets() {
      return widgets;
    }
  };
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createStore.js
function createStore(initialState) {
  var state = initialState;
  var listeners = [];
  return {
    getState: function getState() {
      return state;
    },
    setState: function setState(nextState) {
      state = nextState;
      listeners.forEach(function (listener) {
        return listener();
      });
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);
      return function unsubscribe() {
        listeners.splice(listeners.indexOf(listener), 1);
      };
    }
  };
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/highlight.js

var HIGHLIGHT_TAGS = {
  highlightPreTag: "<ais-highlight-0000000000>",
  highlightPostTag: "</ais-highlight-0000000000>"
};
/**
 * Parses an highlighted attribute into an array of objects with the string value, and
 * a boolean that indicated if this part is highlighted.
 *
 * @param {string} preTag - string used to identify the start of an highlighted value
 * @param {string} postTag - string used to identify the end of an highlighted value
 * @param {string} highlightedValue - highlighted attribute as returned by Algolia highlight feature
 * @return {object[]} - An array of {value: string, isHighlighted: boolean}.
 */

function parseHighlightedAttribute(_ref) {
  var preTag = _ref.preTag,
      postTag = _ref.postTag,
      _ref$highlightedValue = _ref.highlightedValue,
      highlightedValue = _ref$highlightedValue === void 0 ? '' : _ref$highlightedValue;
  var splitByPreTag = highlightedValue.split(preTag);
  var firstValue = splitByPreTag.shift();
  var elements = firstValue === '' ? [] : [{
    value: firstValue,
    isHighlighted: false
  }];

  if (postTag === preTag) {
    var isHighlighted = true;
    splitByPreTag.forEach(function (split) {
      elements.push({
        value: split,
        isHighlighted: isHighlighted
      });
      isHighlighted = !isHighlighted;
    });
  } else {
    splitByPreTag.forEach(function (split) {
      var splitByPostTag = split.split(postTag);
      elements.push({
        value: splitByPostTag[0],
        isHighlighted: true
      });

      if (splitByPostTag[1] !== '') {
        elements.push({
          value: splitByPostTag[1],
          isHighlighted: false
        });
      }
    });
  }

  return elements;
}
/**
 * Find an highlighted attribute given an `attribute` and an `highlightProperty`, parses it,
 * and provided an array of objects with the string value and a boolean if this
 * value is highlighted.
 *
 * In order to use this feature, highlight must be activated in the configuration of
 * the index. The `preTag` and `postTag` attributes are respectively highlightPreTag and
 * highlightPostTag in Algolia configuration.
 *
 * @param {string} preTag - string used to identify the start of an highlighted value
 * @param {string} postTag - string used to identify the end of an highlighted value
 * @param {string} highlightProperty - the property that contains the highlight structure in the results
 * @param {string} attribute - the highlighted attribute to look for
 * @param {object} hit - the actual hit returned by Algolia.
 * @return {object[]} - An array of {value: string, isHighlighted: boolean}.
 */


function parseAlgoliaHit(_ref2) {
  var _ref2$preTag = _ref2.preTag,
      preTag = _ref2$preTag === void 0 ? '<em>' : _ref2$preTag,
      _ref2$postTag = _ref2.postTag,
      postTag = _ref2$postTag === void 0 ? '</em>' : _ref2$postTag,
      highlightProperty = _ref2.highlightProperty,
      attribute = _ref2.attribute,
      hit = _ref2.hit;
  if (!hit) throw new Error('`hit`, the matching record, must be provided');
  var highlightObject = getPropertyByPath(hit[highlightProperty], attribute) || {};

  if (Array.isArray(highlightObject)) {
    return highlightObject.map(function (item) {
      return parseHighlightedAttribute({
        preTag: preTag,
        postTag: postTag,
        highlightedValue: item.value
      });
    });
  }

  return parseHighlightedAttribute({
    preTag: preTag,
    postTag: postTag,
    highlightedValue: highlightObject.value
  });
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/indexUtils.js



function getIndexId(context) {
  return hasMultipleIndices(context) ? context.multiIndexContext.targetedIndex : context.ais.mainTargetedIndex;
}
function getResults(searchResults, context) {
  if (searchResults.results) {
    if (searchResults.results.hits) {
      return searchResults.results;
    }

    var indexId = getIndexId(context);

    if (searchResults.results[indexId]) {
      return searchResults.results[indexId];
    }
  }

  return null;
}
function hasMultipleIndices(context) {
  return context && context.multiIndexContext;
} // eslint-disable-next-line max-params

function refineValue(searchState, nextRefinement, context, resetPage, namespace) {
  if (hasMultipleIndices(context)) {
    var indexId = getIndexId(context);
    return namespace ? refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) : refineMultiIndex(searchState, nextRefinement, indexId, resetPage);
  } else {
    // When we have a multi index page with shared widgets we should also
    // reset their page to 1 if the resetPage is provided. Otherwise the
    // indices will always be reset
    // see: https://github.com/algolia/react-instantsearch/issues/310
    // see: https://github.com/algolia/react-instantsearch/issues/637
    if (searchState.indices && resetPage) {
      Object.keys(searchState.indices).forEach(function (targetedIndex) {
        searchState = refineValue(searchState, {
          page: 1
        }, {
          multiIndexContext: {
            targetedIndex: targetedIndex
          }
        }, true, namespace);
      });
    }

    return namespace ? refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) : refineSingleIndex(searchState, nextRefinement, resetPage);
  }
}

function refineMultiIndex(searchState, nextRefinement, indexId, resetPage) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  var state = searchState.indices && searchState.indices[indexId] ? objectSpread_objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, objectSpread_objectSpread({}, searchState.indices[indexId], nextRefinement, page))) : objectSpread_objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, objectSpread_objectSpread({}, nextRefinement, page)));
  return objectSpread_objectSpread({}, searchState, {
    indices: state
  });
}

function refineSingleIndex(searchState, nextRefinement, resetPage) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  return objectSpread_objectSpread({}, searchState, nextRefinement, page);
} // eslint-disable-next-line max-params


function refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) {
  var _objectSpread4;

  var page = resetPage ? {
    page: 1
  } : undefined;
  var state = searchState.indices && searchState.indices[indexId] ? objectSpread_objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, objectSpread_objectSpread({}, searchState.indices[indexId], (_objectSpread4 = {}, defineProperty_defineProperty(_objectSpread4, namespace, objectSpread_objectSpread({}, searchState.indices[indexId][namespace], nextRefinement)), defineProperty_defineProperty(_objectSpread4, "page", 1), _objectSpread4)))) : objectSpread_objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, objectSpread_objectSpread(defineProperty_defineProperty({}, namespace, nextRefinement), page)));
  return objectSpread_objectSpread({}, searchState, {
    indices: state
  });
}

function refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  return objectSpread_objectSpread({}, searchState, defineProperty_defineProperty({}, namespace, objectSpread_objectSpread({}, searchState[namespace], nextRefinement)), page);
}

function getNamespaceAndAttributeName(id) {
  var parts = id.match(/^([^.]*)\.(.*)/);
  var namespace = parts && parts[1];
  var attributeName = parts && parts[2];
  return {
    namespace: namespace,
    attributeName: attributeName
  };
}

function hasRefinements(_ref) {
  var multiIndex = _ref.multiIndex,
      indexId = _ref.indexId,
      namespace = _ref.namespace,
      attributeName = _ref.attributeName,
      id = _ref.id,
      searchState = _ref.searchState;

  if (multiIndex && namespace) {
    return searchState.indices && searchState.indices[indexId] && searchState.indices[indexId][namespace] && Object.hasOwnProperty.call(searchState.indices[indexId][namespace], attributeName);
  }

  if (multiIndex) {
    return searchState.indices && searchState.indices[indexId] && Object.hasOwnProperty.call(searchState.indices[indexId], id);
  }

  if (namespace) {
    return searchState[namespace] && Object.hasOwnProperty.call(searchState[namespace], attributeName);
  }

  return Object.hasOwnProperty.call(searchState, id);
}

function getRefinements(_ref2) {
  var multiIndex = _ref2.multiIndex,
      indexId = _ref2.indexId,
      namespace = _ref2.namespace,
      attributeName = _ref2.attributeName,
      id = _ref2.id,
      searchState = _ref2.searchState;

  if (multiIndex && namespace) {
    return searchState.indices[indexId][namespace][attributeName];
  }

  if (multiIndex) {
    return searchState.indices[indexId][id];
  }

  if (namespace) {
    return searchState[namespace][attributeName];
  }

  return searchState[id];
}

function getCurrentRefinementValue(props, searchState, context, id, defaultValue) {
  var indexId = getIndexId(context);

  var _getNamespaceAndAttri = getNamespaceAndAttributeName(id),
      namespace = _getNamespaceAndAttri.namespace,
      attributeName = _getNamespaceAndAttri.attributeName;

  var multiIndex = hasMultipleIndices(context);
  var args = {
    multiIndex: multiIndex,
    indexId: indexId,
    namespace: namespace,
    attributeName: attributeName,
    id: id,
    searchState: searchState
  };
  var hasRefinementsValue = hasRefinements(args);

  if (hasRefinementsValue) {
    return getRefinements(args);
  }

  if (props.defaultRefinement) {
    return props.defaultRefinement;
  }

  return defaultValue;
}
function cleanUpValue(searchState, context, id) {
  var indexId = getIndexId(context);

  var _getNamespaceAndAttri2 = getNamespaceAndAttributeName(id),
      namespace = _getNamespaceAndAttri2.namespace,
      attributeName = _getNamespaceAndAttri2.attributeName;

  if (hasMultipleIndices(context) && Boolean(searchState.indices)) {
    return cleanUpValueWithMultiIndex({
      attribute: attributeName,
      searchState: searchState,
      indexId: indexId,
      id: id,
      namespace: namespace
    });
  }

  return cleanUpValueWithSingleIndex({
    attribute: attributeName,
    searchState: searchState,
    id: id,
    namespace: namespace
  });
}

function cleanUpValueWithSingleIndex(_ref3) {
  var searchState = _ref3.searchState,
      id = _ref3.id,
      namespace = _ref3.namespace,
      attribute = _ref3.attribute;

  if (namespace) {
    return objectSpread_objectSpread({}, searchState, defineProperty_defineProperty({}, namespace, omit(searchState[namespace], [attribute])));
  }

  return omit(searchState, [id]);
}

function cleanUpValueWithMultiIndex(_ref4) {
  var searchState = _ref4.searchState,
      indexId = _ref4.indexId,
      id = _ref4.id,
      namespace = _ref4.namespace,
      attribute = _ref4.attribute;
  var indexSearchState = searchState.indices[indexId];

  if (namespace && indexSearchState) {
    return objectSpread_objectSpread({}, searchState, {
      indices: objectSpread_objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, objectSpread_objectSpread({}, indexSearchState, defineProperty_defineProperty({}, namespace, omit(indexSearchState[namespace], [attribute])))))
    });
  }

  if (indexSearchState) {
    return objectSpread_objectSpread({}, searchState, {
      indices: objectSpread_objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, omit(indexSearchState, [id])))
    });
  }

  return searchState;
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/version.js
/* harmony default export */ var version = ('6.7.0');
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createInstantSearchManager.js











function addAlgoliaAgents(searchClient) {
  if (typeof searchClient.addAlgoliaAgent === 'function') {
    searchClient.addAlgoliaAgent("react (".concat(external_root_React_commonjs2_react_commonjs_react_amd_react_["version"], ")"));
    searchClient.addAlgoliaAgent("react-instantsearch (".concat(version, ")"));
  }
}

var createInstantSearchManager_isMultiIndexContext = function isMultiIndexContext(widget) {
  return hasMultipleIndices({
    ais: widget.props.contextValue,
    multiIndexContext: widget.props.indexContextValue
  });
};

var isTargetedIndexEqualIndex = function isTargetedIndexEqualIndex(widget, indexId) {
  return widget.props.indexContextValue.targetedIndex === indexId;
}; // Relying on the `indexId` is a bit brittle to detect the `Index` widget.
// Since it's a class we could rely on `instanceof` or similar. We never
// had an issue though. Works for now.


var isIndexWidget = function isIndexWidget(widget) {
  return Boolean(widget.props.indexId);
};

var isIndexWidgetEqualIndex = function isIndexWidgetEqualIndex(widget, indexId) {
  return widget.props.indexId === indexId;
};

var sortIndexWidgetsFirst = function sortIndexWidgetsFirst(firstWidget, secondWidget) {
  var isFirstWidgetIndex = isIndexWidget(firstWidget);
  var isSecondWidgetIndex = isIndexWidget(secondWidget);

  if (isFirstWidgetIndex && !isSecondWidgetIndex) {
    return -1;
  }

  if (!isFirstWidgetIndex && isSecondWidgetIndex) {
    return 1;
  }

  return 0;
}; // This function is copied from the algoliasearch v4 API Client. If modified,
// consider updating it also in `serializeQueryParameters` from `@algolia/transporter`.


function serializeQueryParameters(parameters) {
  var isObjectOrArray = function isObjectOrArray(value) {
    return Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]';
  };

  var encode = function encode(format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var i = 0;
    return format.replace(/%s/g, function () {
      return encodeURIComponent(args[i++]);
    });
  };

  return Object.keys(parameters).map(function (key) {
    return encode('%s=%s', key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]);
  }).join('&');
}
/**
 * Creates a new instance of the InstantSearchManager which controls the widgets and
 * trigger the search when the widgets are updated.
 * @param {string} indexName - the main index name
 * @param {object} initialState - initial widget state
 * @param {object} SearchParameters - optional additional parameters to send to the algolia API
 * @param {number} stalledSearchDelay - time (in ms) after the search is stalled
 * @return {InstantSearchManager} a new instance of InstantSearchManager
 */


function createInstantSearchManager(_ref) {
  var indexName = _ref.indexName,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
      searchClient = _ref.searchClient,
      resultsState = _ref.resultsState,
      stalledSearchDelay = _ref.stalledSearchDelay;
  var helper = algoliasearch_helper_default()(searchClient, indexName, objectSpread_objectSpread({}, HIGHLIGHT_TAGS));
  addAlgoliaAgents(searchClient);
  helper.on('search', handleNewSearch).on('result', handleSearchSuccess({
    indexId: indexName
  })).on('error', handleSearchError);
  var skip = false;
  var stalledSearchTimer = null;
  var initialSearchParameters = helper.state;
  var widgetsManager = createWidgetsManager(onWidgetsUpdate);
  hydrateSearchClient(searchClient, resultsState);
  var store = createStore({
    widgets: initialState,
    metadata: [],
    results: hydrateResultsState(resultsState),
    error: null,
    searching: false,
    isSearchStalled: true,
    searchingForFacetValues: false
  });

  function skipSearch() {
    skip = true;
  }

  function updateClient(client) {
    addAlgoliaAgents(client);
    helper.setClient(client);
    search();
  }

  function clearCache() {
    helper.clearCache();
    search();
  }

  function getMetadata(state) {
    return widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getMetadata);
    }).map(function (widget) {
      return widget.getMetadata(state);
    });
  }

  function getSearchParameters() {
    var sharedParameters = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      return !createInstantSearchManager_isMultiIndexContext(widget) && !isIndexWidget(widget);
    }).reduce(function (res, widget) {
      return widget.getSearchParameters(res);
    }, initialSearchParameters);
    var mainParameters = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      var targetedIndexEqualMainIndex = createInstantSearchManager_isMultiIndexContext(widget) && isTargetedIndexEqualIndex(widget, indexName);
      var subIndexEqualMainIndex = isIndexWidget(widget) && isIndexWidgetEqualIndex(widget, indexName);
      return targetedIndexEqualMainIndex || subIndexEqualMainIndex;
    }) // We have to sort the `Index` widgets first so the `index` parameter
    // is correctly set in the `reduce` function for the following widgets
    .sort(sortIndexWidgetsFirst).reduce(function (res, widget) {
      return widget.getSearchParameters(res);
    }, sharedParameters);
    var derivedIndices = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      var targetedIndexNotEqualMainIndex = createInstantSearchManager_isMultiIndexContext(widget) && !isTargetedIndexEqualIndex(widget, indexName);
      var subIndexNotEqualMainIndex = isIndexWidget(widget) && !isIndexWidgetEqualIndex(widget, indexName);
      return targetedIndexNotEqualMainIndex || subIndexNotEqualMainIndex;
    }) // We have to sort the `Index` widgets first so the `index` parameter
    // is correctly set in the `reduce` function for the following widgets
    .sort(sortIndexWidgetsFirst).reduce(function (indices, widget) {
      var indexId = createInstantSearchManager_isMultiIndexContext(widget) ? widget.props.indexContextValue.targetedIndex : widget.props.indexId;
      var widgets = indices[indexId] || [];
      return objectSpread_objectSpread({}, indices, defineProperty_defineProperty({}, indexId, widgets.concat(widget)));
    }, {});
    var derivedParameters = Object.keys(derivedIndices).map(function (indexId) {
      return {
        parameters: derivedIndices[indexId].reduce(function (res, widget) {
          return widget.getSearchParameters(res);
        }, sharedParameters),
        indexId: indexId
      };
    });
    return {
      mainParameters: mainParameters,
      derivedParameters: derivedParameters
    };
  }

  function search() {
    if (!skip) {
      var _getSearchParameters = getSearchParameters(helper.state),
          mainParameters = _getSearchParameters.mainParameters,
          derivedParameters = _getSearchParameters.derivedParameters; // We have to call `slice` because the method `detach` on the derived
      // helpers mutates the value `derivedHelpers`. The `forEach` loop does
      // not iterate on each value and we're not able to correctly clear the
      // previous derived helpers (memory leak + useless requests).


      helper.derivedHelpers.slice().forEach(function (derivedHelper) {
        // Since we detach the derived helpers on **every** new search they
        // won't receive intermediate results in case of a stalled search.
        // Only the last result is dispatched by the derived helper because
        // they are not detached yet:
        //
        // - a -> main helper receives results
        // - ap -> main helper receives results
        // - app -> main helper + derived helpers receive results
        //
        // The quick fix is to avoid to detach them on search but only once they
        // received the results. But it means that in case of a stalled search
        // all the derived helpers not detached yet register a new search inside
        // the helper. The number grows fast in case of a bad network and it's
        // not deterministic.
        derivedHelper.detach();
      });
      derivedParameters.forEach(function (_ref2) {
        var indexId = _ref2.indexId,
            parameters = _ref2.parameters;
        var derivedHelper = helper.derive(function () {
          return parameters;
        });
        derivedHelper.on('result', handleSearchSuccess({
          indexId: indexId
        })).on('error', handleSearchError);
      });
      helper.setState(mainParameters);
      helper.search();
    }
  }

  function handleSearchSuccess(_ref3) {
    var indexId = _ref3.indexId;
    return function (event) {
      var state = store.getState();
      var isDerivedHelpersEmpty = !helper.derivedHelpers.length;
      var results = state.results ? state.results : {}; // Switching from mono index to multi index and vice versa must reset the
      // results to an empty object, otherwise we keep reference of stalled and
      // unused results.

      results = !isDerivedHelpersEmpty && results.getFacetByName ? {} : results;

      if (!isDerivedHelpersEmpty) {
        results = objectSpread_objectSpread({}, results, defineProperty_defineProperty({}, indexId, event.results));
      } else {
        results = event.results;
      }

      var currentState = store.getState();
      var nextIsSearchStalled = currentState.isSearchStalled;

      if (!helper.hasPendingRequests()) {
        clearTimeout(stalledSearchTimer);
        stalledSearchTimer = null;
        nextIsSearchStalled = false;
      }

      var resultsFacetValues = currentState.resultsFacetValues,
          partialState = objectWithoutProperties_objectWithoutProperties(currentState, ["resultsFacetValues"]);

      store.setState(objectSpread_objectSpread({}, partialState, {
        results: results,
        isSearchStalled: nextIsSearchStalled,
        searching: false,
        error: null
      }));
    };
  }

  function handleSearchError(_ref4) {
    var error = _ref4.error;
    var currentState = store.getState();
    var nextIsSearchStalled = currentState.isSearchStalled;

    if (!helper.hasPendingRequests()) {
      clearTimeout(stalledSearchTimer);
      nextIsSearchStalled = false;
    }

    var resultsFacetValues = currentState.resultsFacetValues,
        partialState = objectWithoutProperties_objectWithoutProperties(currentState, ["resultsFacetValues"]);

    store.setState(objectSpread_objectSpread({}, partialState, {
      isSearchStalled: nextIsSearchStalled,
      error: error,
      searching: false
    }));
  }

  function handleNewSearch() {
    if (!stalledSearchTimer) {
      stalledSearchTimer = setTimeout(function () {
        var _store$getState = store.getState(),
            resultsFacetValues = _store$getState.resultsFacetValues,
            partialState = objectWithoutProperties_objectWithoutProperties(_store$getState, ["resultsFacetValues"]);

        store.setState(objectSpread_objectSpread({}, partialState, {
          isSearchStalled: true
        }));
      }, stalledSearchDelay);
    }
  }

  function hydrateSearchClient(client, results) {
    if (!results) {
      return;
    } // Disable cache hydration on:
    // - Algoliasearch API Client < v4 with cache disabled
    // - Third party clients (detected by the `addAlgoliaAgent` function missing)


    if ((!client.transporter || client._cacheHydrated) && (!client._useCache || typeof client.addAlgoliaAgent !== 'function')) {
      return;
    } // Algoliasearch API Client >= v4
    // To hydrate the client we need to populate the cache with the data from
    // the server (done in `hydrateSearchClientWithMultiIndexRequest` or
    // `hydrateSearchClientWithSingleIndexRequest`). But since there is no way
    // for us to compute the key the same way as `algoliasearch-client` we need
    // to populate it on a custom key and override the `search` method to
    // search on it first.


    if (client.transporter && !client._cacheHydrated) {
      client._cacheHydrated = true;
      var baseMethod = client.search;

      client.search = function (requests) {
        for (var _len2 = arguments.length, methodArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          methodArgs[_key2 - 1] = arguments[_key2];
        }

        var requestsWithSerializedParams = requests.map(function (request) {
          return objectSpread_objectSpread({}, request, {
            params: serializeQueryParameters(request.params)
          });
        });
        return client.transporter.responsesCache.get({
          method: 'search',
          args: [requestsWithSerializedParams].concat(methodArgs)
        }, function () {
          return baseMethod.apply(void 0, [requests].concat(methodArgs));
        });
      };
    }

    if (Array.isArray(results)) {
      hydrateSearchClientWithMultiIndexRequest(client, results);
      return;
    }

    hydrateSearchClientWithSingleIndexRequest(client, results);
  }

  function hydrateSearchClientWithMultiIndexRequest(client, results) {
    // Algoliasearch API Client >= v4
    // Populate the cache with the data from the server
    if (client.transporter) {
      client.transporter.responsesCache.set({
        method: 'search',
        args: [results.reduce(function (acc, result) {
          return acc.concat(result.rawResults.map(function (request) {
            return {
              indexName: request.index,
              params: request.params
            };
          }));
        }, [])]
      }, {
        results: results.reduce(function (acc, result) {
          return acc.concat(result.rawResults);
        }, [])
      });
      return;
    } // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240


    var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: results.reduce(function (acc, result) {
        return acc.concat(result.rawResults.map(function (request) {
          return {
            indexName: request.index,
            params: request.params
          };
        }));
      }, [])
    }));
    client.cache = objectSpread_objectSpread({}, client.cache, defineProperty_defineProperty({}, key, JSON.stringify({
      results: results.reduce(function (acc, result) {
        return acc.concat(result.rawResults);
      }, [])
    })));
  }

  function hydrateSearchClientWithSingleIndexRequest(client, results) {
    // Algoliasearch API Client >= v4
    // Populate the cache with the data from the server
    if (client.transporter) {
      client.transporter.responsesCache.set({
        method: 'search',
        args: [results.rawResults.map(function (request) {
          return {
            indexName: request.index,
            params: request.params
          };
        })]
      }, {
        results: results.rawResults
      });
      return;
    } // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240


    var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: results.rawResults.map(function (request) {
        return {
          indexName: request.index,
          params: request.params
        };
      })
    }));
    client.cache = objectSpread_objectSpread({}, client.cache, defineProperty_defineProperty({}, key, JSON.stringify({
      results: results.rawResults
    })));
  }

  function hydrateResultsState(results) {
    if (!results) {
      return null;
    }

    if (Array.isArray(results)) {
      return results.reduce(function (acc, result) {
        return objectSpread_objectSpread({}, acc, defineProperty_defineProperty({}, result._internalIndexId, new algoliasearch_helper_default.a.SearchResults(new algoliasearch_helper_default.a.SearchParameters(result.state), result.rawResults)));
      }, {});
    }

    return new algoliasearch_helper_default.a.SearchResults(new algoliasearch_helper_default.a.SearchParameters(results.state), results.rawResults);
  } // Called whenever a widget has been rendered with new props.


  function onWidgetsUpdate() {
    var metadata = getMetadata(store.getState().widgets);
    store.setState(objectSpread_objectSpread({}, store.getState(), {
      metadata: metadata,
      searching: true
    })); // Since the `getSearchParameters` method of widgets also depends on props,
    // the result search parameters might have changed.

    search();
  }

  function transitionState(nextSearchState) {
    var searchState = store.getState().widgets;
    return widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.transitionState);
    }).reduce(function (res, widget) {
      return widget.transitionState(searchState, res);
    }, nextSearchState);
  }

  function onExternalStateUpdate(nextSearchState) {
    var metadata = getMetadata(nextSearchState);
    store.setState(objectSpread_objectSpread({}, store.getState(), {
      widgets: nextSearchState,
      metadata: metadata,
      searching: true
    }));
    search();
  }

  function onSearchForFacetValues(_ref5) {
    var facetName = _ref5.facetName,
        query = _ref5.query,
        _ref5$maxFacetHits = _ref5.maxFacetHits,
        maxFacetHits = _ref5$maxFacetHits === void 0 ? 10 : _ref5$maxFacetHits;
    // The values 1, 100 are the min / max values that the engine accepts.
    // see: https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits
    var maxFacetHitsWithinRange = Math.max(1, Math.min(maxFacetHits, 100));
    store.setState(objectSpread_objectSpread({}, store.getState(), {
      searchingForFacetValues: true
    }));
    helper.searchForFacetValues(facetName, query, maxFacetHitsWithinRange).then(function (content) {
      var _objectSpread7;

      store.setState(objectSpread_objectSpread({}, store.getState(), {
        error: null,
        searchingForFacetValues: false,
        resultsFacetValues: objectSpread_objectSpread({}, store.getState().resultsFacetValues, (_objectSpread7 = {}, defineProperty_defineProperty(_objectSpread7, facetName, content.facetHits), defineProperty_defineProperty(_objectSpread7, "query", query), _objectSpread7))
      }));
    }, function (error) {
      store.setState(objectSpread_objectSpread({}, store.getState(), {
        searchingForFacetValues: false,
        error: error
      }));
    }).catch(function (error) {
      // Since setState is synchronous, any error that occurs in the render of a
      // component will be swallowed by this promise.
      // This is a trick to make the error show up correctly in the console.
      // See http://stackoverflow.com/a/30741722/969302
      setTimeout(function () {
        throw error;
      });
    });
  }

  function updateIndex(newIndex) {
    initialSearchParameters = initialSearchParameters.setIndex(newIndex); // No need to trigger a new search here as the widgets will also update and trigger it if needed.
  }

  function getWidgetsIds() {
    return store.getState().metadata.reduce(function (res, meta) {
      return typeof meta.id !== 'undefined' ? res.concat(meta.id) : res;
    }, []);
  }

  return {
    store: store,
    widgetsManager: widgetsManager,
    getWidgetsIds: getWidgetsIds,
    getSearchParameters: getSearchParameters,
    onSearchForFacetValues: onSearchForFacetValues,
    onExternalStateUpdate: onExternalStateUpdate,
    transitionState: transitionState,
    updateClient: updateClient,
    updateIndex: updateIndex,
    clearCache: clearCache,
    skipSearch: skipSearch
  };
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/context.js


var _createContext = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"])({
  onInternalStateUpdate: function onInternalStateUpdate() {
    return undefined;
  },
  createHrefForState: function createHrefForState() {
    return '#';
  },
  onSearchForFacetValues: function onSearchForFacetValues() {
    return undefined;
  },
  onSearchStateChange: function onSearchStateChange() {
    return undefined;
  },
  onSearchParameters: function onSearchParameters() {
    return undefined;
  },
  store: {},
  widgetsManager: {},
  mainTargetedIndex: ''
}),
    InstantSearchConsumer = _createContext.Consumer,
    InstantSearchProvider = _createContext.Provider;



var _createContext2 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"])(undefined),
    IndexConsumer = _createContext2.Consumer,
    IndexProvider = _createContext2.Provider;


// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/widgets/InstantSearch.js














function isControlled(props) {
  return Boolean(props.searchState);
}
/**
 * @description
 * `<InstantSearch>` is the root component of all React InstantSearch implementations.
 * It provides all the connected components (aka widgets) a means to interact
 * with the searchState.
 * @kind widget
 * @name <InstantSearch>
 * @requirements You will need to have an Algolia account to be able to use this widget.
 * [Create one now](https://www.algolia.com/users/sign_up).
 * @propType {string} indexName - Main index in which to search.
 * @propType {boolean} [refresh=false] - Flag to activate when the cache needs to be cleared so that the front-end is updated when a change occurs in the index.
 * @propType {object} [searchClient] - Provide a custom search client.
 * @propType {func} [onSearchStateChange] - Function to be called everytime a new search is done. Useful for [URL Routing](guide/Routing.html).
 * @propType {object} [searchState] - Object to inject some search state. Switches the InstantSearch component in controlled mode. Useful for [URL Routing](guide/Routing.html).
 * @propType {func} [createURL] - Function to call when creating links, useful for [URL Routing](guide/Routing.html).
 * @propType {SearchResults|SearchResults[]} [resultsState] - Use this to inject the results that will be used at first rendering. Those results are found by using the `findResultsState` function. Useful for [Server Side Rendering](guide/Server-side_rendering.html).
 * @propType {number} [stalledSearchDelay=200] - The amount of time before considering that the search takes too much time. The time is expressed in milliseconds.
 * @propType {{ Root: string|function, props: object }} [root] - Use this to customize the root element. Default value: `{ Root: 'div' }`
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox />
 *     <Hits />
 *   </InstantSearch>
 * );
 */


var InstantSearch_InstantSearch =
/*#__PURE__*/
function (_Component) {
  inherits_inherits(InstantSearch, _Component);

  createClass_createClass(InstantSearch, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextIsControlled = isControlled(nextProps);
      var previousSearchState = prevState.instantSearchManager.store.getState().widgets;
      var nextSearchState = nextProps.searchState;

      if (nextIsControlled && !react_fast_compare_default()(previousSearchState, nextSearchState)) {
        prevState.instantSearchManager.onExternalStateUpdate(nextProps.searchState);
      }

      return {
        isControlled: nextIsControlled,
        contextValue: objectSpread_objectSpread({}, prevState.contextValue, {
          mainTargetedIndex: nextProps.indexName
        })
      };
    }
  }]);

  function InstantSearch(props) {
    var _this;

    classCallCheck_classCallCheck(this, InstantSearch);

    _this = possibleConstructorReturn_possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(InstantSearch).call(this, props));

    defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isUnmounting", false);

    var instantSearchManager = createInstantSearchManager({
      indexName: _this.props.indexName,
      searchClient: _this.props.searchClient,
      initialState: _this.props.searchState || {},
      resultsState: _this.props.resultsState,
      stalledSearchDelay: _this.props.stalledSearchDelay
    });
    var contextValue = {
      store: instantSearchManager.store,
      widgetsManager: instantSearchManager.widgetsManager,
      mainTargetedIndex: _this.props.indexName,
      onInternalStateUpdate: _this.onWidgetsInternalStateUpdate.bind(assertThisInitialized_assertThisInitialized(_this)),
      createHrefForState: _this.createHrefForState.bind(assertThisInitialized_assertThisInitialized(_this)),
      onSearchForFacetValues: _this.onSearchForFacetValues.bind(assertThisInitialized_assertThisInitialized(_this)),
      onSearchStateChange: _this.onSearchStateChange.bind(assertThisInitialized_assertThisInitialized(_this)),
      onSearchParameters: _this.onSearchParameters.bind(assertThisInitialized_assertThisInitialized(_this))
    };
    _this.state = {
      isControlled: isControlled(_this.props),
      instantSearchManager: instantSearchManager,
      contextValue: contextValue
    };
    return _this;
  }

  createClass_createClass(InstantSearch, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevIsControlled = isControlled(prevProps);

      if (prevIsControlled && !this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being controlled to uncontrolled");
      }

      if (!prevIsControlled && this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being uncontrolled to controlled");
      }

      if (this.props.refresh !== prevProps.refresh && this.props.refresh) {
        this.state.instantSearchManager.clearCache();
      }

      if (prevProps.indexName !== this.props.indexName) {
        this.state.instantSearchManager.updateIndex(this.props.indexName);
      }

      if (prevProps.searchClient !== this.props.searchClient) {
        this.state.instantSearchManager.updateClient(this.props.searchClient);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounting = true;
      this.state.instantSearchManager.skipSearch();
    }
  }, {
    key: "createHrefForState",
    value: function createHrefForState(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      return this.state.isControlled && this.props.createURL ? this.props.createURL(searchState, this.getKnownKeys()) : '#';
    }
  }, {
    key: "onWidgetsInternalStateUpdate",
    value: function onWidgetsInternalStateUpdate(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      this.onSearchStateChange(searchState);

      if (!this.state.isControlled) {
        this.state.instantSearchManager.onExternalStateUpdate(searchState);
      }
    }
  }, {
    key: "onSearchStateChange",
    value: function onSearchStateChange(searchState) {
      if (this.props.onSearchStateChange && !this.isUnmounting) {
        this.props.onSearchStateChange(searchState);
      }
    }
  }, {
    key: "onSearchParameters",
    value: function onSearchParameters(getSearchParameters, context, props) {
      if (this.props.onSearchParameters) {
        var _searchState = this.props.searchState ? this.props.searchState : {};

        this.props.onSearchParameters(getSearchParameters, context, props, _searchState);
      }
    }
  }, {
    key: "onSearchForFacetValues",
    value: function onSearchForFacetValues(searchState) {
      this.state.instantSearchManager.onSearchForFacetValues(searchState);
    }
  }, {
    key: "getKnownKeys",
    value: function getKnownKeys() {
      return this.state.instantSearchManager.getWidgetsIds();
    }
  }, {
    key: "render",
    value: function render() {
      if (external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].count(this.props.children) === 0) {
        return null;
      }

      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(InstantSearchProvider, {
        value: this.state.contextValue
      }, this.props.children);
    }
  }]);

  return InstantSearch;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

defineProperty_defineProperty(InstantSearch_InstantSearch, "defaultProps", {
  stalledSearchDelay: 200,
  refresh: false
});

defineProperty_defineProperty(InstantSearch_InstantSearch, "propTypes", {
  // @TODO: These props are currently constant.
  indexName: prop_types_default.a.string.isRequired,
  searchClient: prop_types_default.a.shape({
    search: prop_types_default.a.func.isRequired,
    searchForFacetValues: prop_types_default.a.func,
    addAlgoliaAgent: prop_types_default.a.func,
    clearCache: prop_types_default.a.func
  }).isRequired,
  createURL: prop_types_default.a.func,
  refresh: prop_types_default.a.bool,
  searchState: prop_types_default.a.object,
  onSearchStateChange: prop_types_default.a.func,
  onSearchParameters: prop_types_default.a.func,
  resultsState: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.array]),
  children: prop_types_default.a.node,
  stalledSearchDelay: prop_types_default.a.number
});

/* harmony default export */ var widgets_InstantSearch = (InstantSearch_InstantSearch);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return extends_extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/widgets/Index.js












function getIndexContext(props) {
  return {
    targetedIndex: props.indexId
  };
}

/**
 * The component that allows you to apply widgets to a dedicated index. It's
 * useful if you want to build an interface that targets multiple indices.
 *
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Index, SearchBox, Hits, Configure } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Configure hitsPerPage={5} />
 *     <SearchBox />
 *     <Index indexName="instant_search">
 *       <Hits />
 *     </Index>
 *     <Index indexName="bestbuy">
 *       <Hits />
 *     </Index>
 *   </InstantSearch>
 * );
 */
var Index_Index =
/*#__PURE__*/
function (_Component) {
  inherits_inherits(Index, _Component);

  createClass_createClass(Index, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      return {
        indexContext: getIndexContext(props)
      };
    }
  }]);

  function Index(props) {
    var _this;

    classCallCheck_classCallCheck(this, Index);

    _this = possibleConstructorReturn_possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Index).call(this, props));

    defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "state", {
      indexContext: getIndexContext(_this.props)
    });

    defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "unregisterWidget", void 0);

    _this.props.contextValue.onSearchParameters(_this.getSearchParameters.bind(assertThisInitialized_assertThisInitialized(_this)), {
      ais: _this.props.contextValue,
      multiIndexContext: _this.state.indexContext
    }, _this.props);

    return _this;
  }

  createClass_createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.indexName !== prevProps.indexName) {
        this.props.contextValue.widgetsManager.update();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof this.unregisterWidget === 'function') {
        this.unregisterWidget();
      }
    }
  }, {
    key: "getSearchParameters",
    value: function getSearchParameters(searchParameters, props) {
      return searchParameters.setIndex(this.props ? this.props.indexName : props.indexName);
    }
  }, {
    key: "render",
    value: function render() {
      var childrenCount = external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].count(this.props.children);

      if (childrenCount === 0) {
        return null;
      }

      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IndexProvider, {
        value: this.state.indexContext
      }, this.props.children);
    }
  }]);

  return Index;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

defineProperty_defineProperty(Index_Index, "propTypes", {
  indexName: prop_types_default.a.string.isRequired,
  indexId: prop_types_default.a.string.isRequired,
  children: prop_types_default.a.node
});

var Index_IndexWrapper = function IndexWrapper(props) {
  var inferredIndexId = props.indexName;
  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(InstantSearchConsumer, null, function (contextValue) {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Index_Index, extends_extends({
      contextValue: contextValue,
      indexId: inferredIndexId
    }, props));
  });
};

Index_IndexWrapper.propTypes = {
  indexName: prop_types_default.a.string.isRequired,
  indexId: prop_types_default.a.string
};
var IndexComponentWithoutContext = Index_Index;
/* harmony default export */ var widgets_Index = (Index_IndexWrapper);
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createConnector.js















/**
 * Connectors are the HOC used to transform React components
 * into InstantSearch widgets.
 * In order to simplify the construction of such connectors
 * `createConnector` takes a description and transform it into
 * a connector.
 * @param {ConnectorDescription} connectorDesc the description of the connector
 * @return {Connector} a function that wraps a component into
 * an instantsearch connected one.
 */
function createConnectorWithoutContext(connectorDesc) {
  if (!connectorDesc.displayName) {
    throw new Error('`createConnector` requires you to provide a `displayName` property.');
  }

  var isWidget = typeof connectorDesc.getSearchParameters === 'function' || typeof connectorDesc.getMetadata === 'function' || typeof connectorDesc.transitionState === 'function';
  return function (Composed) {
    var Connector =
    /*#__PURE__*/
    function (_Component) {
      inherits_inherits(Connector, _Component);

      function Connector(props) {
        var _this;

        classCallCheck_classCallCheck(this, Connector);

        _this = possibleConstructorReturn_possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Connector).call(this, props));

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "unsubscribe", void 0);

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "unregisterWidget", void 0);

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isUnmounting", false);

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "state", {
          providedProps: _this.getProvidedProps(_this.props)
        });

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "refine", function () {
          var _ref;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.props.contextValue.onInternalStateUpdate( // refine will always be defined here because the prop is only given conditionally
          (_ref = connectorDesc.refine).call.apply(_ref, [assertThisInitialized_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "createURL", function () {
          var _ref2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _this.props.contextValue.createHrefForState( // refine will always be defined here because the prop is only given conditionally
          (_ref2 = connectorDesc.refine).call.apply(_ref2, [assertThisInitialized_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "searchForFacetValues", function () {
          var _ref3;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _this.props.contextValue.onSearchForFacetValues( // searchForFacetValues will always be defined here because the prop is only given conditionally
          (_ref3 = connectorDesc.searchForFacetValues).call.apply(_ref3, [assertThisInitialized_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        if (connectorDesc.getSearchParameters) {
          _this.props.contextValue.onSearchParameters(connectorDesc.getSearchParameters.bind(assertThisInitialized_assertThisInitialized(_this)), {
            ais: _this.props.contextValue,
            multiIndexContext: _this.props.indexContextValue
          }, _this.props);
        }

        return _this;
      }

      createClass_createClass(Connector, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribe = this.props.contextValue.store.subscribe(function () {
            if (!_this2.isUnmounting) {
              _this2.setState({
                providedProps: _this2.getProvidedProps(_this2.props)
              });
            }
          });

          if (isWidget) {
            this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          if (typeof connectorDesc.shouldComponentUpdate === 'function') {
            return connectorDesc.shouldComponentUpdate.call(this, this.props, nextProps, this.state, nextState);
          }

          var propsEqual = shallowEqual(this.props, nextProps);

          if (this.state.providedProps === null || nextState.providedProps === null) {
            if (this.state.providedProps === nextState.providedProps) {
              return !propsEqual;
            }

            return true;
          }

          return !propsEqual || !shallowEqual(this.state.providedProps, nextState.providedProps);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (!react_fast_compare_default()(prevProps, this.props)) {
            this.setState({
              providedProps: this.getProvidedProps(this.props)
            });

            if (isWidget) {
              this.props.contextValue.widgetsManager.update();

              if (typeof connectorDesc.transitionState === 'function') {
                this.props.contextValue.onSearchStateChange(connectorDesc.transitionState.call(this, this.props, this.props.contextValue.store.getState().widgets, this.props.contextValue.store.getState().widgets));
              }
            }
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.isUnmounting = true;

          if (this.unsubscribe) {
            this.unsubscribe();
          }

          if (this.unregisterWidget) {
            this.unregisterWidget();

            if (typeof connectorDesc.cleanUp === 'function') {
              var nextState = connectorDesc.cleanUp.call(this, this.props, this.props.contextValue.store.getState().widgets);
              this.props.contextValue.store.setState(objectSpread_objectSpread({}, this.props.contextValue.store.getState(), {
                widgets: nextState
              }));
              this.props.contextValue.onSearchStateChange(removeEmptyKey(nextState));
            }
          }
        }
      }, {
        key: "getProvidedProps",
        value: function getProvidedProps(props) {
          var _this$props$contextVa = this.props.contextValue.store.getState(),
              widgets = _this$props$contextVa.widgets,
              results = _this$props$contextVa.results,
              resultsFacetValues = _this$props$contextVa.resultsFacetValues,
              searching = _this$props$contextVa.searching,
              searchingForFacetValues = _this$props$contextVa.searchingForFacetValues,
              isSearchStalled = _this$props$contextVa.isSearchStalled,
              metadata = _this$props$contextVa.metadata,
              error = _this$props$contextVa.error;

          var searchResults = {
            results: results,
            searching: searching,
            searchingForFacetValues: searchingForFacetValues,
            isSearchStalled: isSearchStalled,
            error: error
          };
          return connectorDesc.getProvidedProps.call(this, props, widgets, searchResults, metadata, // @MAJOR: move this attribute on the `searchResults` it doesn't
          // makes sense to have it into a separate argument. The search
          // flags are on the object why not the results?
          resultsFacetValues);
        }
      }, {
        key: "getSearchParameters",
        value: function getSearchParameters(searchParameters) {
          if (typeof connectorDesc.getSearchParameters === 'function') {
            return connectorDesc.getSearchParameters.call(this, searchParameters, this.props, this.props.contextValue.store.getState().widgets);
          }

          return null;
        }
      }, {
        key: "getMetadata",
        value: function getMetadata(nextWidgetsState) {
          if (typeof connectorDesc.getMetadata === 'function') {
            return connectorDesc.getMetadata.call(this, this.props, nextWidgetsState);
          }

          return {};
        }
      }, {
        key: "transitionState",
        value: function transitionState(prevWidgetsState, nextWidgetsState) {
          if (typeof connectorDesc.transitionState === 'function') {
            return connectorDesc.transitionState.call(this, this.props, prevWidgetsState, nextWidgetsState);
          }

          return nextWidgetsState;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              contextValue = _this$props.contextValue,
              props = objectWithoutProperties_objectWithoutProperties(_this$props, ["contextValue"]);

          var providedProps = this.state.providedProps;

          if (providedProps === null) {
            return null;
          }

          var refineProps = typeof connectorDesc.refine === 'function' ? {
            refine: this.refine,
            createURL: this.createURL
          } : {};
          var searchForFacetValuesProps = typeof connectorDesc.searchForFacetValues === 'function' ? {
            searchForItems: this.searchForFacetValues
          } : {};
          return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Composed, extends_extends({}, props, providedProps, refineProps, searchForFacetValuesProps));
        }
      }]);

      return Connector;
    }(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

    defineProperty_defineProperty(Connector, "displayName", "".concat(connectorDesc.displayName, "(").concat(getDisplayName(Composed), ")"));

    defineProperty_defineProperty(Connector, "propTypes", connectorDesc.propTypes);

    defineProperty_defineProperty(Connector, "defaultProps", connectorDesc.defaultProps);

    return Connector;
  };
}

var createConnector_createConnectorWithContext = function createConnectorWithContext(connectorDesc) {
  return function (Composed) {
    var Connector = createConnectorWithoutContext(connectorDesc)(Composed);

    var ConnectorWrapper = function ConnectorWrapper(props) {
      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(InstantSearchConsumer, null, function (contextValue) {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IndexConsumer, null, function (indexContextValue) {
          return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Connector, extends_extends({
            contextValue: contextValue,
            indexContextValue: indexContextValue
          }, props));
        });
      });
    };

    return ConnectorWrapper;
  };
};

/* harmony default export */ var createConnector = (createConnector_createConnectorWithContext);
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectConfigure.js







function getId() {
  return 'configure';
}

/* harmony default export */ var connectConfigure = (createConnector({
  displayName: 'AlgoliaConfigure',
  getProvidedProps: function getProvidedProps() {
    return {};
  },
  getSearchParameters: function getSearchParameters(searchParameters, props) {
    var children = props.children,
        contextValue = props.contextValue,
        indexContextValue = props.indexContextValue,
        items = objectWithoutProperties_objectWithoutProperties(props, ["children", "contextValue", "indexContextValue"]);

    return searchParameters.setQueryParameters(items);
  },
  transitionState: function transitionState(props, prevSearchState, nextSearchState) {
    var id = getId();

    var children = props.children,
        contextValue = props.contextValue,
        indexContextValue = props.indexContextValue,
        items = objectWithoutProperties_objectWithoutProperties(props, ["children", "contextValue", "indexContextValue"]);

    var propKeys = Object.keys(props);
    var nonPresentKeys = this._props ? Object.keys(this._props).filter(function (prop) {
      return propKeys.indexOf(prop) === -1;
    }) : [];
    this._props = props;

    var nextValue = defineProperty_defineProperty({}, id, objectSpread_objectSpread({}, omit(nextSearchState[id], nonPresentKeys), items));

    return refineValue(nextSearchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    var id = getId();
    var indexId = getIndexId({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var subState = hasMultipleIndices({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }) && searchState.indices ? searchState.indices[indexId] : searchState;
    var configureKeys = subState && subState[id] ? Object.keys(subState[id]) : [];
    var configureState = configureKeys.reduce(function (acc, item) {
      if (!props[item]) {
        acc[item] = subState[id][item];
      }

      return acc;
    }, {});

    var nextValue = defineProperty_defineProperty({}, id, configureState);

    return refineValue(searchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  }
}));
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/widgets/Configure.js

/**
 * Configure is a widget that lets you provide raw search parameters
 * to the Algolia API.
 *
 * Any of the props added to this widget will be forwarded to Algolia. For more information
 * on the different parameters that can be set, have a look at the
 * [reference](https://www.algolia.com/doc/api-client/javascript/search#search-parameters).
 *
 * This widget can be used either with react-dom and react-native. It will not render anything
 * on screen, only configure some parameters.
 *
 * Read more in the [Search parameters](guide/Search_parameters.html) guide.
 * @name Configure
 * @kind widget
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Configure, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Configure hitsPerPage={5} />
 *     <Hits />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ var Configure = (connectConfigure(function Configure() {
  return null;
}));
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectSearchBox.js





function connectSearchBox_getId() {
  return 'query';
}

function getCurrentRefinement(props, searchState, context) {
  var id = connectSearchBox_getId(props);
  var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, '');

  if (currentRefinement) {
    return currentRefinement;
  }

  return '';
}

function _refine(props, searchState, nextRefinement, context) {
  var id = connectSearchBox_getId();

  var nextValue = defineProperty_defineProperty({}, id, nextRefinement);

  var resetPage = true;
  return refineValue(searchState, nextValue, context, resetPage);
}

function _cleanUp(props, searchState, context) {
  return cleanUpValue(searchState, context, connectSearchBox_getId());
}
/**
 * connectSearchBox connector provides the logic to build a widget that will
 * let the user search for a query
 * @name connectSearchBox
 * @kind connector
 * @propType {string} [defaultRefinement] - Provide a default value for the query
 * @providedPropType {function} refine - a function to change the current query
 * @providedPropType {string} currentRefinement - the current query used
 * @providedPropType {boolean} isSearchStalled - a flag that indicates if InstantSearch has detected that searches are stalled
 */


/* harmony default export */ var connectSearchBox = (createConnector({
  displayName: 'AlgoliaSearchBox',
  propTypes: {
    defaultRefinement: prop_types_default.a.string
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    return {
      currentRefinement: getCurrentRefinement(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      isSearchStalled: searchResults.isSearchStalled
    };
  },
  refine: function refine(props, searchState, nextRefinement) {
    return _refine(props, searchState, nextRefinement, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    return _cleanUp(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    return searchParameters.setQuery(getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }));
  },
  getMetadata: function getMetadata(props, searchState) {
    var id = connectSearchBox_getId(props);
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    return {
      id: id,
      index: getIndexId({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      items: currentRefinement === null ? [] : [{
        label: "".concat(id, ": ").concat(currentRefinement),
        value: function value(nextState) {
          return _refine(props, nextState, '', {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          });
        },
        currentRefinement: currentRefinement
      }]
    };
  }
}));
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/SearchBox/index.js






var valHasLength = function valHasLength(value) {
  if (value.length >= 1) return true;
  return false;
};

var SearchBox_SearchBox = function SearchBox(props) {
  var currentRefinement = props.currentRefinement,
      refine = props.refine,
      id = props.id;

  var _useTabController = TabController_useTabController(),
      resetActiveElementIndex = _useTabController.resetActiveElementIndex,
      isResultsWindowOpen = _useTabController.isResultsWindowOpen,
      setIsResultsWindowOpen = _useTabController.setIsResultsWindowOpen;

  var handleOnChange = function handleOnChange(value, e) {
    if (e.keyCode !== 40 && e.keyCode !== 38) {
      resetActiveElementIndex();
      refine(value);
    } else {
      e.preventDefault();
    }

    setIsResultsWindowOpen(valHasLength(value));
  };

  var checkIfResultsWindowShouldOpen = function checkIfResultsWindowShouldOpen(e) {
    var value = e.target.value;
    setIsResultsWindowOpen(valHasLength(value));
  };

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "ais-SearchBox"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("form", {
    className: "ais-SearchBox-form m-0",
    noValidate: true,
    role: "search"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Input, {
    inputClassName: "".concat(isResultsWindowOpen ? 'focused' : '', " -mt-1 ais-SearchBox-input w-full border-gray-200 shadow-none"),
    value: currentRefinement,
    onChange: handleOnChange,
    onFocus: checkIfResultsWindowShouldOpen,
    type: "search",
    "aria-label": "Search for a resource by typing here",
    placeholder: "Search...",
    id: "search-box-".concat(id)
  })));
};

SearchBox_SearchBox.propTypes = {
  currentRefinement: prop_types_default.a.string.isRequired,
  refine: prop_types_default.a.func.isRequired,
  id: prop_types_default.a.string.isRequired
};
/* harmony default export */ var elements_SearchBox = (connectSearchBox(SearchBox_SearchBox));
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectHits.js



/**
 * connectHits connector provides the logic to create connected
 * components that will render the results retrieved from
 * Algolia.
 *
 * To configure the number of hits retrieved, use [HitsPerPage widget](widgets/HitsPerPage.html),
 * [connectHitsPerPage connector](connectors/connectHitsPerPage.html) or pass the hitsPerPage
 * prop to a [Configure](guide/Search_parameters.html) widget.
 *
 * **Warning:** you will need to use the **objectID** property available on every hit as a key
 * when iterating over them. This will ensure you have the best possible UI experience
 * especially on slow networks.
 * @name connectHits
 * @kind connector
 * @providedPropType {array.<object>} hits - the records that matched the search state
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Highlight, connectHits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 * const CustomHits = connectHits(({ hits }) => (
 *   <div>
 *     {hits.map(hit =>
 *       <p key={hit.objectID}>
 *         <Highlight attribute="name" hit={hit} />
 *       </p>
 *     )}
 *   </div>
 * ));
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <CustomHits />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ var connectHits = (createConnector({
  displayName: 'AlgoliaHits',
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var results = getResults(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });

    if (!results) {
      return {
        hits: []
      };
    }

    var hitsWithPositions = addAbsolutePositions(results.hits, results.hitsPerPage, results.page);
    var hitsWithPositionsAndQueryID = addQueryID(hitsWithPositions, results.queryID);
    return {
      hits: hitsWithPositionsAndQueryID
    };
  },

  /**
   * Hits needs to be considered as a widget to trigger a search,
   * even if no other widgets are used.
   *
   * To be considered as a widget you need either:
   * - getSearchParameters
   * - getMetadata
   * - transitionState
   *
   * See: createConnector.tsx
   */
  getSearchParameters: function getSearchParameters(searchParameters) {
    return searchParameters;
  }
}));
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/ResultPill/style.js
/* harmony default export */ var ResultPill_style = ({
  resultPill: {
    display: 'block',
    cursor: 'pointer'
  },
  resultPillLink: {
    display: 'block'
  }
});
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/ResultPill/index.js
function ResultPill_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ResultPill_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ResultPill_ownKeys(Object(source), true).forEach(function (key) { ResultPill_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ResultPill_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ResultPill_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ResultPill_ResultPill = function ResultPill(props) {
  var children = props.children,
      elementIndex = props.elementIndex,
      sectionIndex = props.sectionIndex,
      formattedHitURL = props.formattedHitURL,
      noResults = props.noResults;

  var _useTabController = TabController_useTabController(),
      activeElementIndex = _useTabController.activeElementIndex,
      sectionLengthsArray = _useTabController.sectionLengthsArray,
      isResultsWindowOpen = _useTabController.isResultsWindowOpen,
      scrollWindowRef = _useTabController.scrollWindowRef,
      scrollableWindowHeight = _useTabController.scrollableWindowHeight,
      scrollableWindowTopOffset = _useTabController.scrollableWindowTopOffset,
      setScrollDistance = _useTabController.setScrollDistance,
      enterKeyWasPressed = _useTabController.enterKeyWasPressed,
      setEnterKeyWasPressed = _useTabController.setEnterKeyWasPressed,
      manuallySetActiveIndex = _useTabController.manuallySetActiveIndex;

  var resultPillRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  var clickableLink = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  var currentElementIndex = (sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex;
  var isCurrentElement = activeElementIndex === currentElementIndex && isResultsWindowOpen && !noResults;
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (isCurrentElement && enterKeyWasPressed) {
      if (formattedHitURL) {
        clickableLink.current.click();
      } else {
        alert('The formattedHitURL prop was not found, it is used to format the url for the pill! Without it, we dont know where to send you :)');
      }

      setEnterKeyWasPressed(false);
    }

    if (isCurrentElement) {
      var activePillBoundingRect = resultPillRef.current.getBoundingClientRect();
      var resultPillOffset = activePillBoundingRect.top + activePillBoundingRect.height;
      var distToScroll = 0;

      if (resultPillOffset - scrollableWindowTopOffset + scrollWindowRef.current.scrollTop > scrollableWindowHeight) {
        distToScroll = resultPillOffset - scrollableWindowTopOffset + scrollWindowRef.current.scrollTop - scrollableWindowHeight;
      }

      setScrollDistance(distToScroll);
    }
  }, [isCurrentElement, scrollableWindowHeight, scrollableWindowTopOffset, scrollWindowRef, setScrollDistance, setEnterKeyWasPressed, enterKeyWasPressed]);

  var handleHoverSelection = function handleHoverSelection() {
    manuallySetActiveIndex((sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex);
  };

  if (noResults) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", {
      ref: resultPillRef,
      className: "mb-1",
      style: ResultPill_objectSpread({}, ResultPill_style.resultPill),
      tabIndex: 0,
      role: "option",
      "aria-selected": isCurrentElement,
      onMouseEnter: handleHoverSelection
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      ref: clickableLink,
      className: "px-2 border rounded text-gray-800",
      style: ResultPill_objectSpread({}, ResultPill_style.resultPillLink)
    }, children));
  }

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", {
    className: "mb-1",
    style: ResultPill_objectSpread({}, ResultPill_style.resultPill),
    tabIndex: 0,
    role: "option",
    "aria-selected": isCurrentElement,
    ref: resultPillRef,
    onMouseEnter: handleHoverSelection
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("a", {
    ref: clickableLink,
    href: formattedHitURL,
    className: "px-2 border border-white rounded outline-none ".concat(isCurrentElement ? 'bg-indigo-600 text-white' : 'text-gray-800'),
    style: ResultPill_objectSpread({}, ResultPill_style.resultPillLink)
  }, children));
};

ResultPill_ResultPill.defaultProps = {
  elementIndex: null,
  sectionIndex: null,
  noResults: false
};
ResultPill_ResultPill.propTypes = {
  children: prop_types_default.a.node.isRequired,
  elementIndex: prop_types_default.a.number,
  sectionIndex: prop_types_default.a.number,
  formattedHitURL: prop_types_default.a.string.isRequired,
  noResults: prop_types_default.a.bool
};
/* harmony default export */ var ResultsList_ResultPill = (ResultPill_ResultPill);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/SectionTitle/index.js




var SectionTitle_SectionTitle = function SectionTitle(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "py-2 mb-2 top-0 bg-white border-b border-gray-200"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Typography_Text, {
    is: "p"
  }, title));
};

SectionTitle_SectionTitle.propTypes = {
  title: prop_types_default.a.string.isRequired
};
/* harmony default export */ var ResultsList_SectionTitle = (SectionTitle_SectionTitle);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/index.js







var ResultsList_ResultsList = function ResultsList(props) {
  var hits = props.hits,
      sectionTitle = props.sectionTitle,
      sectionIndex = props.sectionIndex,
      renderCardInfo = props.renderCardInfo,
      formatHitURL = props.formatHitURL;

  var _useTabController = TabController_useTabController(),
      appendNewSectionLength = _useTabController.appendNewSectionLength,
      shouldHideResults = _useTabController.shouldHideResults;

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (hits.length > 0) {
      appendNewSectionLength(sectionIndex, hits.length);
    } else {
      appendNewSectionLength(sectionIndex, 0);
    }
  }, [hits.length]); // eslint-disable-line

  var formattedHitURL = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (hit) {
    return formatHitURL(hit);
  }, []);

  if (Array.isArray(hits) && hits.length > 0 && !shouldHideResults) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(ResultsList_SectionTitle, {
      title: sectionTitle
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ul", {
      role: "listbox"
    }, typeof renderCardInfo === 'function' && hits.map(function (hit, index) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(ResultsList_ResultPill, {
        key: index,
        elementIndex: index,
        sectionIndex: sectionIndex,
        formattedHitURL: formattedHitURL(hit)
      }, renderCardInfo(hit));
    })));
  }

  return null;
};

ResultsList_ResultsList.propTypes = {
  hits: prop_types_default.a.arrayOf(prop_types_default.a.shape({})).isRequired,
  sectionTitle: prop_types_default.a.string.isRequired,
  sectionIndex: prop_types_default.a.number.isRequired,
  renderCardInfo: prop_types_default.a.func.isRequired,
  formatHitURL: prop_types_default.a.func.isRequired
};
/* harmony default export */ var elements_ResultsList = (connectHits(ResultsList_ResultsList));
// CONCATENATED MODULE: ./src/AlgoliaSearch/assets/ArrowDown/index.js


var ArrowDown_ArrowDown = function ArrowDown() {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    width: "15",
    height: "15"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"
  })));
};

/* harmony default export */ var assets_ArrowDown = (ArrowDown_ArrowDown);
// CONCATENATED MODULE: ./src/AlgoliaSearch/assets/ArrowUp/index.js


var ArrowUp_ArrowUp = function ArrowUp() {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    width: "15",
    height: "15"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"
  })));
};

/* harmony default export */ var assets_ArrowUp = (ArrowUp_ArrowUp);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/Controls/style.js
/* harmony default export */ var Controls_style = ({
  controlBar: {
    boxShadow: '0 -1px 0 0 #E2E8F0, 0 -3px 6px 0 #E2E8F0',
    display: 'flex',
    alignItems: 'center'
  },
  controlKey: {
    display: 'inline-block',
    boxShadow: 'inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4)',
    background: 'linear-gradient(-225deg,#d5dbe4,#f8f8f8)',
    padding: '.15rem'
  }
});
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/Controls/index.js
function Controls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Controls_ownKeys(Object(source), true).forEach(function (key) { Controls_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Controls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Controls_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Controls_Controls = function Controls() {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sticky bottom-0 p-3 -ml-2 -mr-2 bg-white rounded-b-md",
    style: Controls_objectSpread({}, Controls_style.controlBar)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    className: "mr-2 rounded-sm text-gray-400",
    style: Controls_objectSpread({}, Controls_style.controlKey)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(assets_ArrowDown, null)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    className: "mr-2 rounded-sm text-gray-400",
    style: Controls_objectSpread({}, Controls_style.controlKey)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(assets_ArrowUp, null)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("small", {
    className: "text-gray-400"
  }, "to navigate"));
};

/* harmony default export */ var elements_Controls = (Controls_Controls);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/Loader/index.js


var Loader_Loader = function Loader() {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    className: "animate-spin mt-2 mb-2 ml-auto mr-auto h-8 w-8 text-purple-600",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
};

/* harmony default export */ var elements_Loader = (Loader_Loader);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/NoResults/index.js


var NoResults_NoResults = function NoResults() {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", {
    className: "pb-2 pt-2",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("p", {
    className: "p-2 border shadow-sm rounded border-red-600 text-red-700"
  }, "No results were found..."));
};

/* harmony default export */ var elements_NoResults = (NoResults_NoResults);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/SearchComponent/index.js
function SearchComponent_slicedToArray(arr, i) { return SearchComponent_arrayWithHoles(arr) || SearchComponent_iterableToArrayLimit(arr, i) || SearchComponent_unsupportedIterableToArray(arr, i) || SearchComponent_nonIterableRest(); }

function SearchComponent_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SearchComponent_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SearchComponent_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SearchComponent_arrayLikeToArray(o, minLen); }

function SearchComponent_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SearchComponent_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SearchComponent_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var SearchComponent_SearchComponent = function SearchComponent(props) {
  var ALGOLIA_APP_ID = props.ALGOLIA_APP_ID,
      ALGOLIA_API_SEARCH_KEY = props.ALGOLIA_API_SEARCH_KEY,
      indices = props.indices,
      searchOperators = props.searchOperators,
      specialChar = props.specialChar,
      scrollWindowHeight = props.scrollWindowHeight,
      customLoader = props.customLoader,
      customNoResults = props.customNoResults,
      indexResultsLimit = props.indexResultsLimit;

  var _useTabController = TabController_useTabController(),
      scrollableWindowHeight = _useTabController.scrollableWindowHeight,
      setScrollableWindowTopOffset = _useTabController.setScrollableWindowTopOffset,
      scrollDistance = _useTabController.scrollDistance,
      setScrollWindowRef = _useTabController.setScrollWindowRef,
      shouldBypassSearch = _useTabController.shouldBypassSearch,
      setShouldBypassSearch = _useTabController.setShouldBypassSearch,
      setScrollableWindowHeight = _useTabController.setScrollableWindowHeight,
      isScrollDisabled = _useTabController.isScrollDisabled,
      handleKeyNavigation = _useTabController.handleKeyNavigation,
      totalElementsCount = _useTabController.totalElementsCount,
      isResultsWindowOpen = _useTabController.isResultsWindowOpen,
      setIsResultsWindowOpen = _useTabController.setIsResultsWindowOpen;

  var algoliaClient = algoliasearch_lite_umd_default()(ALGOLIA_APP_ID, ALGOLIA_API_SEARCH_KEY);
  var searchClient = {
    search: function search(requests) {
      if (shouldBypassSearch === true) return null;
      return algoliaClient.search(requests);
    }
  };
  var scrollWindowRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  var searchComponentRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(''),
      _useState2 = SearchComponent_slicedToArray(_useState, 2),
      filterState = _useState2[0],
      setFilterState = _useState2[1];

  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null),
      _useState4 = SearchComponent_slicedToArray(_useState3, 2),
      conditionalOperands = _useState4[0],
      setConditionalOperands = _useState4[1];

  var _useState5 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState6 = SearchComponent_slicedToArray(_useState5, 2),
      isSearchEmpty = _useState6[0],
      setIsSearchEmpty = _useState6[1];

  var handleClickOutside = function handleClickOutside(e) {
    if (searchComponentRef.current.contains(e.target)) {
      return;
    }

    setIsResultsWindowOpen(false);
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setScrollWindowRef(scrollWindowRef);
  }, [setScrollWindowRef]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setScrollableWindowHeight(scrollWindowHeight);
  }, [scrollWindowHeight]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (Array.isArray(searchOperators) && searchOperators.length > 0) {
      var sortedSearchOperators = searchOperators.sort(function (a, b) {
        return a.length - b.length;
      });
      var adjustedSearchOperators = sortedSearchOperators.map(function (condition) {
        return "".concat(specialChar).concat(condition);
      });
      setConditionalOperands(adjustedSearchOperators);
    }
  }, [specialChar, searchOperators]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    var scrollableResultsBoundingRect = scrollWindowRef.current.getBoundingClientRect();
    setScrollableWindowTopOffset(scrollableResultsBoundingRect.top);
  }, [setScrollableWindowTopOffset]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (typeof scrollDistance === 'number' && isResultsWindowOpen && !isScrollDisabled) {
      scrollWindowRef.current.scrollTo(0, scrollDistance);
    }
  }, [scrollDistance, isResultsWindowOpen, isScrollDisabled]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    var interval = null;

    if (totalElementsCount === 0) {
      setTimeout(function () {
        if (totalElementsCount === 0) {
          setIsSearchEmpty(true);
        }
      }, 800);
    } else {
      setIsSearchEmpty(false);
    }

    return clearInterval(interval);
  }, [totalElementsCount]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (isResultsWindowOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isResultsWindowOpen]);

  var handleOnSearchStateChange = function handleOnSearchStateChange(_ref) {
    var query = _ref.query;
    var filter = '';
    var operandFound = false;

    if (query) {
      conditionalOperands.forEach(function (operand) {
        var operandIndex = query.indexOf(operand);

        if (operandIndex !== -1) {
          var _query$split = query.split(operand),
              _query$split2 = SearchComponent_slicedToArray(_query$split, 2),
              fieldName = _query$split2[0],
              compareValue = _query$split2[1];

          filter = "".concat(fieldName, " ").concat(operand.substr(specialChar.length), " ").concat(compareValue);
          operandFound = true;
        }
      });

      if (!operandFound && query.indexOf(specialChar) !== -1) {
        var _query$split3 = query.split(specialChar),
            _query$split4 = SearchComponent_slicedToArray(_query$split3, 2),
            fieldName = _query$split4[0],
            compareValue = _query$split4[1];

        filter = "".concat(fieldName, " = ").concat(compareValue);
        operandFound = true;
      }

      setFilterState(operandFound ? filter : '');
    }
  };

  var configureFilterState = function configureFilterState() {
    var searchConditions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (Array.isArray(searchConditions) && searchConditions.length > 0) {
      var conditionalFilterState = searchConditions.reduce(function (acc, condition, index) {
        var conditionType = condition.conditionType,
            conditionString = condition.conditionString;

        if (index === 0) {
          if (filterState) return "".concat(filterState, " ").concat(conditionType || 'AND', " ").concat(conditionString);
          return "".concat(conditionString);
        }

        return "".concat(acc, " ").concat(conditionType || 'AND', " ").concat(conditionString);
      }, '');
      return conditionalFilterState;
    }

    return filterState;
  };

  var handleOnKeyDown = function handleOnKeyDown(e) {
    switch (e.keyCode) {
      case 40:
        handleKeyNavigation(navigationKeyTypes.ARROW_DOWN);
        break;

      case 38:
        handleKeyNavigation(navigationKeyTypes.ARROW_UP);
        break;

      case 13:
        handleKeyNavigation(navigationKeyTypes.ENTER);
        break;

      default:
        setShouldBypassSearch(false);
        break;
    }
  };

  var LoaderToRender = customLoader ? customLoader : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(elements_Loader, null);
  var NoResultsToRender = customNoResults ? customNoResults : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(elements_NoResults, null);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    ref: searchComponentRef
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(widgets_InstantSearch, {
    searchClient: searchClient,
    indexName: indices[0].indexName,
    onSearchStateChange: handleOnSearchStateChange
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    onKeyDown: handleOnKeyDown,
    role: "listbox",
    className: "relative"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(elements_SearchBox, {
    id: ALGOLIA_APP_ID
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "shadow-xl rounded absolute w-full bg-white border border-gray-200 mt-2",
    style: {
      visibility: "".concat(isResultsWindowOpen ? 'visible' : 'hidden')
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "overflow-y-auto pl-2 pr-2",
    style: {
      maxHeight: "".concat(scrollableWindowHeight, "px")
    },
    ref: scrollWindowRef
  }, indices.map(function (algoliaIndice, sectionIndex) {
    var indexName = algoliaIndice.indexName,
        displayName = algoliaIndice.displayName,
        renderCardInfo = algoliaIndice.renderCardInfo,
        formatHitURL = algoliaIndice.formatHitURL,
        searchConditions = algoliaIndice.searchConditions;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(widgets_Index, {
      key: sectionIndex,
      indexName: indexName,
      limit: 4
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Configure, {
      filters: configureFilterState(searchConditions),
      hitsPerPage: indexResultsLimit
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(elements_ResultsList, {
      sectionTitle: displayName,
      renderCardInfo: renderCardInfo,
      sectionIndex: sectionIndex,
      formatHitURL: formatHitURL
    }));
  }), totalElementsCount === 0 && isSearchEmpty && NoResultsToRender, totalElementsCount === 0 && !isSearchEmpty && LoaderToRender, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(elements_Controls, null))))));
};

SearchComponent_SearchComponent.defaultProps = {
  scrollWindowHeight: 400,
  customLoader: null,
  customNoResults: null
};
SearchComponent_SearchComponent.propTypes = {
  ALGOLIA_APP_ID: prop_types_default.a.string.isRequired,
  ALGOLIA_API_SEARCH_KEY: prop_types_default.a.string.isRequired,
  specialChar: prop_types_default.a.string.isRequired,
  searchOperators: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,
  indices: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    indexName: prop_types_default.a.string,
    displayName: prop_types_default.a.string,
    renderCardInfo: prop_types_default.a.func,
    formatHitURL: prop_types_default.a.func,
    searchConditions: prop_types_default.a.arrayOf(prop_types_default.a.shape({
      conditionType: prop_types_default.a.oneOf(['OR', 'AND']),
      conditionString: prop_types_default.a.string
    }))
  })).isRequired,
  scrollWindowHeight: prop_types_default.a.number,
  customLoader: prop_types_default.a.node,
  customNoResults: prop_types_default.a.node,
  indexResultsLimit: prop_types_default.a.number.isRequired
};
/* harmony default export */ var elements_SearchComponent = (SearchComponent_SearchComponent);
// CONCATENATED MODULE: ./src/AlgoliaSearch/index.js





var AlgoliaSearch_AlgoliaSearch = function AlgoliaSearch(props) {
  var ALGOLIA_APP_ID = props.ALGOLIA_APP_ID,
      ALGOLIA_API_SEARCH_KEY = props.ALGOLIA_API_SEARCH_KEY;

  if (!ALGOLIA_APP_ID || !ALGOLIA_API_SEARCH_KEY) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, !ALGOLIA_APP_ID && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("h1", null, "ALGOLIA_APP_ID prop was not found and is required."), !ALGOLIA_API_SEARCH_KEY && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("h1", null, "ALGOLIA_API_SEARCH_KEY prop was not found and is required."));
  }

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(providers_TabController, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(elements_SearchComponent, props));
};

AlgoliaSearch_AlgoliaSearch.defaultProps = {
  indexResultsLimit: 8,
  scrollWindowHeight: 400
};
AlgoliaSearch_AlgoliaSearch.propTypes = {
  ALGOLIA_APP_ID: prop_types_default.a.string.isRequired,
  ALGOLIA_API_SEARCH_KEY: prop_types_default.a.string.isRequired,
  specialChar: prop_types_default.a.string.isRequired,
  searchOperators: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,
  indices: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    indexName: prop_types_default.a.string,
    displayName: prop_types_default.a.string,
    renderCardInfo: prop_types_default.a.func,
    formatHitURL: prop_types_default.a.func,
    searchConditions: prop_types_default.a.arrayOf(prop_types_default.a.shape({
      conditionType: prop_types_default.a.oneOf(['OR', 'AND']),
      conditionString: prop_types_default.a.string
    }))
  })).isRequired,
  indexResultsLimit: prop_types_default.a.number,
  scrollWindowHeight: prop_types_default.a.number,
  customLoader: prop_types_default.a.node,
  customNoResults: prop_types_default.a.node
};
/* harmony default export */ var src_AlgoliaSearch = (AlgoliaSearch_AlgoliaSearch);
// CONCATENATED MODULE: ./src/Flags/Flag.js



var Flag_Flag = function Flag(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      children = _ref.children;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, children);
};

Flag_Flag.propTypes = {
  size: prop_types_default.a.number
};
/* harmony default export */ var Flags_Flag = (Flag_Flag);
// CONCATENATED MODULE: ./src/Flags/BRFlag.js




var BRFlag_BRFlag = function BRFlag(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Flags_Flag, {
    size: size
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "256",
    fill: "#6DA544"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    fill: "#FFDA44",
    d: "M256 100.174L467.478 256 256 411.826 44.522 256z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "89.043",
    fill: "#F0F0F0"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#0052B4"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 001.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0137.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"
  })));
};

BRFlag_BRFlag.propTypes = {
  size: prop_types_default.a.number
};
/* harmony default export */ var Flags_BRFlag = (BRFlag_BRFlag);
// CONCATENATED MODULE: ./src/Flags/AUFlag.js




var AUFlag_AUFlag = function AUFlag(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Flags_Flag, {
    size: size
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    fill: "#0052B4",
    d: "M512 256c0 141.384-114.616 256-256 256S0 397.384 0 256C0 256.06 256 .029 256 0c141.384 0 256 114.616 256 256z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#F0F0F0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M256 0l-.043.001L256 0zM255.315 256H256v-.685l-.685.685z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M256 133.566V.001h-.043C114.592.024 0 114.629 0 256h133.565v-75.212L208.777 256h46.539l.685-.685v-46.536l-75.213-75.213H256z"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#D80027"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M129.515 33.391a257.222 257.222 0 00-96.124 96.124V256h66.783V100.174H256V33.391H129.515z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M256 224.519l-90.953-90.952h-31.481c0-.001 0 0 0 0L255.999 256H256v-31.481z"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#F0F0F0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M154.395 300.522L168.445 329.9 200.172 322.567 185.964 351.869 211.478 372.102 179.711 379.262 179.8 411.826 154.395 391.453 128.991 411.826 129.08 379.262 97.312 372.102 122.827 351.869 108.617 322.567 140.346 329.9z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M383.284 356.174L390.309 370.863 406.173 367.196 399.068 381.847 411.826 391.964 395.942 395.544 395.986 411.826 383.284 401.639 370.582 411.826 370.626 395.544 354.743 391.964 367.5 381.847 360.396 367.196 376.259 370.863z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M317.933 200.348L324.957 215.038 340.821 211.37 333.717 226.021 346.474 236.138 330.591 239.718 330.634 256 317.933 245.813 305.231 256 305.274 239.718 289.391 236.138 302.148 226.021 295.044 211.37 310.908 215.038z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M383.284 111.304L390.309 125.994 406.173 122.327 399.069 136.978 411.825 147.094 395.942 150.675 395.986 166.957 383.284 156.77 370.582 166.957 370.626 150.675 354.743 147.094 367.499 136.978 360.396 122.327 376.259 125.994z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M440.368 178.087L447.392 192.777 463.256 189.109 456.152 203.76 468.909 213.877 453.025 217.458 453.069 233.739 440.368 223.553 427.666 233.739 427.709 217.458 411.826 213.877 424.583 203.76 417.479 189.109 433.342 192.777z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M399.55 256L405.075 273.006 422.957 273.006 408.49 283.517 414.017 300.522 399.55 290.012 385.084 300.522 390.609 283.517 376.143 273.006 394.024 273.006z"
  })));
};

AUFlag_AUFlag.propTypes = {
  size: prop_types_default.a.number
};
/* harmony default export */ var Flags_AUFlag = (AUFlag_AUFlag);
// CONCATENATED MODULE: ./src/Flags/USFlag.js




var USFlag_USFlag = function USFlag(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Flags_Flag, {
    size: size
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "256",
    fill: "#F0F0F0"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#D80027"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256zM244.87 122.435h229.556a257.35 257.35 0 00-59.07-66.783H244.87v66.783zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.751 512 256 512zM37.574 389.565h436.852a254.474 254.474 0 0028.755-66.783H8.819a254.474 254.474 0 0028.755 66.783z"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    fill: "#0052B4",
    d: "M118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 00-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 00-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 00-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 000 256h256V0c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422l-21.699-15.765L85.104 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zM220.328 230.4l-21.699-15.765L176.93 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm0-74.574l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765z"
  }));
};

USFlag_USFlag.propTypes = {
  size: prop_types_default.a.number
};
/* harmony default export */ var Flags_USFlag = (USFlag_USFlag);
// CONCATENATED MODULE: ./src/Flags/index.js



// CONCATENATED MODULE: ./src/OperatingSystems/OperatingSystem.js



var OperatingSystem_OperatingSystem = function OperatingSystem(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 60 60' : _ref$viewBox,
      children = _ref.children;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    x: "0",
    y: "0",
    viewBox: viewBox,
    enableBackground: "accumulate"
  }, children);
};

OperatingSystem_OperatingSystem.propTypes = {
  color: prop_types_default.a.string,
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_OperatingSystem = (OperatingSystem_OperatingSystem);
// CONCATENATED MODULE: ./src/OperatingSystems/CentOS.js




var CentOS_CentOS = function CentOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: viewBox,
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M51.6 27.1H37.4c3.2-3.2 6.7-6.6 10.1-10.1 1 1 2.4 2.5 4.1 4.4v5.7zM12.9 16.8L23.1 27H8.5v-5.9c1.4-1.4 2.9-2.9 4.4-4.3zm10.3 15.8c-3.6 3.6-7.1 7-10.5 10.5-1.3-1.4-2.6-2.9-4.2-4.6v-5.9h14.7zm4.1 18.6H21l-4.1-4.1c3.5-3.4 7-6.8 10.4-10.2v14.3zm9.8-18.6h14.5v5.6c-1.6 1.5-3.1 3-4.5 4.4-3.3-3.3-6.6-6.7-10-10zm-9.8-9.8C24 19.4 20.5 16 17 12.4c1.2-1.1 2.6-2.4 4.4-3.9h5.9v14.3zm15.3 24.5c-1 .9-2.5 2.3-4.3 3.9h-5.4V37.5c3 3 6.4 6.4 9.7 9.8zM32.8 8.5h5.8c1.6 1.5 3.1 2.9 4.3 4L32.8 22.6V8.5z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M30.5 33.8c.1.7.4 1.3.4 2v17.4h5.6c-2.4 2.3-4.6 4.4-6.7 6.4-1.8-1.9-4.1-4.2-6.2-6.4h5.5c0-.9.1-1.5.1-2.1V35.8c0-.7.2-1.3.3-2h1zm-4.4-3.6c-.7.1-1.3.4-2 .4H6.5v5.8L0 29.9c2-2 4.2-4.1 6.4-6.3V29c.8 0 1.4.1 2 .1h15.7c.6 0 1.3.2 1.9.3 0 .3.1.5.1.8zM47 45.6c1.5-1.3 2.9-2.6 4.5-4.1v9.6h-9.6c1.3-1.4 2.5-2.8 3.8-4.2-.6-.6-1-1.1-1.4-1.5L33.7 34.8c-.5-.5-.8-1.1-1.3-1.7 1.3-.8 1.8 0 2.3.5 3.6 3.6 7.2 7.2 10.9 10.8.5.3.9.7 1.4 1.2zM29.2 6.4h-5.7C25.7 4.2 27.8 2 29.8 0c2 2 4.1 4.2 6.3 6.4h-5.2c0 .9-.1 1.5-.1 2.1v15.2c0 .7-.3 1.5-.4 2.2-1.5-.3-1.2-1.2-1.2-1.9V6.4zM13 13.9c-1.5 1.4-2.9 2.7-4.5 4.3V8.6h9.6c-1.3 1.4-2.5 2.7-3.9 4.1.4.5.8.9 1.2 1.3 3.7 3.7 7.4 7.4 11 11.2.4.5.8 1 1.2 1.6-1.3.8-1.7-.1-2.3-.6L14.2 15.1 13 13.9zm47 15.9c-2 2-4.2 4.2-6.4 6.5v-5.7H36c-.7 0-1.3-.2-2-.3v-.7c.7-.1 1.4-.3 2-.3h17.5v-5.9c2.3 2.1 4.4 4.2 6.5 6.4zm-27-2.5c-.7-1.3.1-1.7.6-2.2L44.7 14c.4-.4.8-.8 1.3-1.4-1.3-1.3-2.5-2.6-3.9-4.1h9.5v9.4c-1.5-1.4-2.9-2.8-4.4-4.2-.6.5-1 .9-1.5 1.4L34.6 26.2c-.4.5-1 .8-1.6 1.1zM12.9 45.9c3.3-3.4 6.6-6.6 9.8-9.8l3-3c.4-.4 1-.5 1.6-.5-.8 2.2-2.6 3.4-4.1 4.9-1.5 1.6-3.1 3.1-4.6 4.6-1.5 1.5-3.1 3.1-4.8 4.7 1.3 1.4 2.6 2.7 4 4.2H8.4v-9.4c1.6 1.5 2.9 2.8 4.5 4.3z"
  }));
};

CentOS_CentOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_CentOS = (CentOS_CentOS);
// CONCATENATED MODULE: ./src/OperatingSystems/UbuntuOS.js




var UbuntuOS_UbuntuOS = function UbuntuOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: viewBox,
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M7.565 24.556c3.092 0 5.565 2.573 5.565 5.59 0 3.104-2.562 5.588-5.565 5.588C4.473 35.734 2 33.16 2 30.145c0-3.105 2.562-5.589 5.565-5.589zm25.44-16.5c1.325 0 2.738.09 3.975.355v.71c0 4.258 3.445 7.718 7.685 7.718 1.59 0 3.268-.533 4.505-1.42 3.003 3.371 4.77 7.275 5.212 11.976l-8.834.266c-.706-6.387-6.183-10.911-12.72-10.911-1.855 0-3.621.355-5.123 1.065l-4.328-7.54a21.94 21.94 0 019.628-2.219z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M45.548 46.468c3.092 0 5.565 2.572 5.565 5.588 0 3.105-2.561 5.59-5.565 5.59-3.091 0-5.565-2.573-5.565-5.59 0-3.104 2.562-5.588 5.565-5.588zm-24.821.976c-3.71-2.662-6.625-6.388-8.127-10.823 2.12-1.33 3.357-3.726 3.357-6.476S14.543 25 12.335 23.581a21.327 21.327 0 018.127-11.444l4.593 7.452a12.85 12.85 0 00-4.858 10.113c0 4.08 1.943 7.629 4.77 10.024l-4.24 7.718z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M54.47 31.21c-.353 5.145-2.562 9.846-5.918 13.395-1.06-.532-2.297-.887-3.534-.887-4.063 0-7.42 3.193-7.685 7.185-1.325.266-2.826.444-4.24.444-3.356 0-6.536-.799-9.451-2.218L27.97 41.5c1.502.621 3.268.976 5.035.976 6.625 0 12.013-4.968 12.72-11.444l8.745.178zM45.107 3c3.091 0 5.565 2.573 5.565 5.589 0 3.105-2.562 5.588-5.565 5.588-3.092 0-5.565-2.572-5.565-5.588S42.015 3 45.107 3z"
  })));
};

UbuntuOS_UbuntuOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_UbuntuOS = (UbuntuOS_UbuntuOS);
// CONCATENATED MODULE: ./src/OperatingSystems/WindowsOS.js




var WindowsOS_WindowsOS = function WindowsOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: "0 0 480 480",
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M.176 224L.001 67.963l192-26.072V224H.176zM224.001 37.241L479.937 0v224H224.001V37.241zM479.999 256l-.062 224-255.936-36.008V256h255.998zM192.001 439.918L.157 413.621.147 256h191.854v183.918z"
  })));
};

WindowsOS_WindowsOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_WindowsOS = (WindowsOS_WindowsOS);
// CONCATENATED MODULE: ./src/OperatingSystems/DebianOS.js




var DebianOS_DebianOS = function DebianOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: viewBox,
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M33.508 59.115c-9.049-3.246-14.36-7.18-20.262-16.131-1.476-2.46-4.131-7.87-4.033-15.05-.197-7.082 3.344-15.245 10.033-19.672 6.492-4.623 14.852-4.721 19.77-2.852 6 2.36 10.033 7.377 11.312 12.688 1.475 5.115 0 13.574-7.082 17.017-3.246 1.77-7.476 2.065-10.721.787-3.345-1.377-5.705-4.23-6.492-7.279-1.77-6.787 3.344-10.426 5.606-10.82 9.148-3.049 13.87 11.312 3.05 12.492 4.918 1.672 9.934-3.344 8.95-8.459 0-5.016-6.196-10.131-13.082-8.066-1.77.492-4.524 1.771-6.59 4.525-2.164 2.754-3.147 7.18-2.065 11.41 1.082 4.328 4.426 8.36 9.049 10.23 4.721 1.77 9.934 1.278 14.262-.984 9.246-4.525 11.115-15.64 9.246-21.836-1.574-6.59-5.213-9.541-5.016-9.64-.099.197-2.656-3.737-8.951-6.098C34.295-.885 24.557-.689 16.885 4.721 9.016 9.934 4.69 19.87 4.984 27.934c-.099 8.164 2.95 14.46 4.623 17.214 6.688 10.229 14.36 13.475 23.901 13.967"
  }));
};

DebianOS_DebianOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_DebianOS = (DebianOS_DebianOS);
// CONCATENATED MODULE: ./src/OperatingSystems/EsxiOS.js




var EsxiOS_EsxiOS = function EsxiOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: "0 0 24 10",
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fillRule: "nonzero",
    transform: "translate(-1 -1)"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M2.016.988a1.007 1.007 0 00-.871.469c-.188.3-.2.676-.04.988l4 8.004a1 1 0 001.766.043l3.75-6.625c.004-.004.004-.008.004-.015 0 .003.484-.852 1.375-.852h.016s.289.008.543.133c.254.129.441.18.441.867v6c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V4.5a1.5 1.5 0 013 0V10c-.008.523.395.965.918 1.012.031 0 .062.004.098.004.55-.012.992-.465.984-1.016V4.5a1.5 1.5 0 013 0V10c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V4.5c0-1.793-1.395-3.238-3.14-3.43A1.015 1.015 0 0021.5 1 3.49 3.49 0 0019 2.063 3.49 3.49 0 0016.5 1a1.018 1.018 0 00-.36.074 3.555 3.555 0 00-1.937.856 2.642 2.642 0 00-.762-.586C12.7.977 12 1 11.992 1c-2.105.008-3.117 1.898-3.117 1.898l.004-.015-2.824 4.992-3.16-6.32a1 1 0 00-.88-.567h.001z"
  })));
};

EsxiOS_EsxiOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_EsxiOS = (EsxiOS_EsxiOS);
// CONCATENATED MODULE: ./src/OperatingSystems/index.js





// CONCATENATED MODULE: ./src/Typography/Heading.js
function Heading_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Heading_typeof = function _typeof(obj) { return typeof obj; }; } else { Heading_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Heading_typeof(obj); }

function Heading_extends() { Heading_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Heading_extends.apply(this, arguments); }

function Heading_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Heading_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Heading_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Heading_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Heading_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Heading_createClass(Constructor, protoProps, staticProps) { if (protoProps) Heading_defineProperties(Constructor.prototype, protoProps); if (staticProps) Heading_defineProperties(Constructor, staticProps); return Constructor; }

function Heading_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Heading_setPrototypeOf(subClass, superClass); }

function Heading_setPrototypeOf(o, p) { Heading_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Heading_setPrototypeOf(o, p); }

function Heading_createSuper(Derived) { var hasNativeReflectConstruct = Heading_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Heading_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Heading_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Heading_possibleConstructorReturn(this, result); }; }

function Heading_possibleConstructorReturn(self, call) { if (call && (Heading_typeof(call) === "object" || typeof call === "function")) { return call; } return Heading_assertThisInitialized(self); }

function Heading_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Heading_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Heading_getPrototypeOf(o) { Heading_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Heading_getPrototypeOf(o); }

function Heading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Heading_Heading = /*#__PURE__*/function (_PureComponent) {
  Heading_inherits(Heading, _PureComponent);

  var _super = Heading_createSuper(Heading);

  function Heading() {
    Heading_classCallCheck(this, Heading);

    return _super.apply(this, arguments);
  }

  Heading_createClass(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          size = _this$props.size,
          props = Heading_objectWithoutProperties(_this$props, ["className", "color", "size"]);

      var HTag = "h".concat(this.props.size);
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(HTag, Heading_extends({
        className: classnames_default()("font-medium leading-normal", className, {
          "text-4xl tracking-tighter": size == 1,
          "text-3xl tracking-tighter": size == 2,
          "text-xl tracking-tight": size == 3,
          "text-lg": size == 4,
          "text-base": size == 5,
          "text-sm": size == 6,
          "text-gray-800": color == "default",
          "text-red-700": color == "danger"
        })
      }, props));
    }
  }]);

  return Heading;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

Heading_defineProperty(Heading_Heading, "propTypes", {
  /**
   * Can be: 1, 2, 3, 4, 5, 6
   */
  size: prop_types_default.a.oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /**
   * The only options are default and danger.
   */
  color: prop_types_default.a.oneOf(["default", "danger"]).isRequired
});

Heading_defineProperty(Heading_Heading, "defaultProps", {
  size: 1,
  color: "default"
});

/* harmony default export */ var Typography_Heading = (Heading_Heading);
// CONCATENATED MODULE: ./src/Typography/UnorderedList.js
function UnorderedList_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UnorderedList_typeof = function _typeof(obj) { return typeof obj; }; } else { UnorderedList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UnorderedList_typeof(obj); }

function UnorderedList_extends() { UnorderedList_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UnorderedList_extends.apply(this, arguments); }

function UnorderedList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UnorderedList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UnorderedList_ownKeys(Object(source), true).forEach(function (key) { UnorderedList_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UnorderedList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UnorderedList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UnorderedList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = UnorderedList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function UnorderedList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function UnorderedList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UnorderedList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UnorderedList_createClass(Constructor, protoProps, staticProps) { if (protoProps) UnorderedList_defineProperties(Constructor.prototype, protoProps); if (staticProps) UnorderedList_defineProperties(Constructor, staticProps); return Constructor; }

function UnorderedList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UnorderedList_setPrototypeOf(subClass, superClass); }

function UnorderedList_setPrototypeOf(o, p) { UnorderedList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UnorderedList_setPrototypeOf(o, p); }

function UnorderedList_createSuper(Derived) { var hasNativeReflectConstruct = UnorderedList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = UnorderedList_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = UnorderedList_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return UnorderedList_possibleConstructorReturn(this, result); }; }

function UnorderedList_possibleConstructorReturn(self, call) { if (call && (UnorderedList_typeof(call) === "object" || typeof call === "function")) { return call; } return UnorderedList_assertThisInitialized(self); }

function UnorderedList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UnorderedList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function UnorderedList_getPrototypeOf(o) { UnorderedList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UnorderedList_getPrototypeOf(o); }




var UnorderedList_UnorderedList = /*#__PURE__*/function (_PureComponent) {
  UnorderedList_inherits(UnorderedList, _PureComponent);

  var _super = UnorderedList_createSuper(UnorderedList);

  function UnorderedList() {
    UnorderedList_classCallCheck(this, UnorderedList);

    return _super.apply(this, arguments);
  }

  UnorderedList_createClass(UnorderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = UnorderedList_objectWithoutProperties(_this$props, ["children"]);

      var finalChildren = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.map(children, function (child) {
        if (!external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
          return child;
        }

        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, UnorderedList_objectSpread({}, child.props));
      });
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ul", UnorderedList_extends({
        className: classnames_default()("leading-normal list-disc p-0 m-0 ml-4", {})
      }, props), finalChildren);
    }
  }]);

  return UnorderedList;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);


// CONCATENATED MODULE: ./src/Typography/ListItem.js
function ListItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ListItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ListItem_ownKeys(Object(source), true).forEach(function (key) { ListItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ListItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ListItem_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ListItem_typeof = function _typeof(obj) { return typeof obj; }; } else { ListItem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ListItem_typeof(obj); }

function ListItem_extends() { ListItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ListItem_extends.apply(this, arguments); }

function ListItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ListItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ListItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ListItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ListItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ListItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) ListItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) ListItem_defineProperties(Constructor, staticProps); return Constructor; }

function ListItem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ListItem_setPrototypeOf(subClass, superClass); }

function ListItem_setPrototypeOf(o, p) { ListItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ListItem_setPrototypeOf(o, p); }

function ListItem_createSuper(Derived) { var hasNativeReflectConstruct = ListItem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ListItem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ListItem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ListItem_possibleConstructorReturn(this, result); }; }

function ListItem_possibleConstructorReturn(self, call) { if (call && (ListItem_typeof(call) === "object" || typeof call === "function")) { return call; } return ListItem_assertThisInitialized(self); }

function ListItem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ListItem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ListItem_getPrototypeOf(o) { ListItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ListItem_getPrototypeOf(o); }

function ListItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ListItem_ListItem = /*#__PURE__*/function (_PureComponent) {
  ListItem_inherits(ListItem, _PureComponent);

  var _super = ListItem_createSuper(ListItem);

  function ListItem() {
    ListItem_classCallCheck(this, ListItem);

    return _super.apply(this, arguments);
  }

  ListItem_createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = ListItem_objectWithoutProperties(_this$props, ["children"]);

      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Typography_Text, ListItem_extends({
        is: "li"
      }, props), children);
    }
  }]);

  return ListItem;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

ListItem_defineProperty(ListItem_ListItem, "propTypes", ListItem_objectSpread({}, Typography_Text.propTypes));


// CONCATENATED MODULE: ./src/index.js






















/***/ })
/******/ ]);
});