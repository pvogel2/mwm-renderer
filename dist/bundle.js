window["MWM"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/renderer.js":
/*!****************************!*\
  !*** ./src/js/renderer.js ***!
  \****************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\nclass Renderer {\r\n  constructor() {\r\n    this.running = false;\r\n\tthis.paused = false;\r\n\tthis.three = {\r\n\t\tszene : null,\r\n\t\trenderer : null,\r\n\t\tcamera : null,\r\n\t\tcontrol : null,\r\n\t\traycaster : null,\r\n\t\tclock : null\r\n\t};\r\n\r\n\tthis.geometry = {\r\n\t\tobjects : {},\r\n        intersect : []\r\n\t};\r\n\r\n\t//stuff for intersection detection\r\n\tthis.mouse = new THREE.Vector2();\r\n\tthis.frustum = new THREE.Frustum();\r\n\tthis.INTERSECTED = [];\r\n\tthis.callbacks = {\r\n\t\t\"render\": [],\r\n\t\t\"move\": [],\r\n\t\t\"keydown\": [],\r\n\t\t\"click\": []\r\n\t};\r\n\t//stuff for resource handling\r\n\tthis.res = \"/obj/\";\r\n\r\n\t//setup the three szene\r\n\t\t\tthis.parent = document.querySelector( \"#threejs-container\" );\r\n\t\t\tthis.three.scene = new THREE.Scene();\r\n            this.width = this.parent.getClientRects()[0].width;\r\n            this.height = this.parent.getClientRects()[0].height;\r\n\t\t\t//setup the three camera\r\n\t\t\tthis.three.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );\r\n\t\t\tthis.three.camera.position.set(0, 30, 80);\r\n\t\t\t//setup the used three renderer\r\n\t\t\tthis.three.renderer = new THREE.WebGLRenderer({antialias: false});\r\n\t\t\tthis.three.renderer.setSize( this.width, this.height );\r\n\t\t\tthis.three.renderer.shadowMap.enabled = false;\r\n\t\t\tthis.three.renderer.shadowMapSoft = false;\r\n\t\t\tthis.three.renderer.gammaInput = true;\r\n\t\t\tthis.three.renderer.gammaOutput = true;\r\n\r\n\t\t\tthis.three.control = new THREE.OrbitControls(this.three.camera, this.three.renderer.domElement);\r\n\t\t\t//this.three.control.userPanSpeed = 0.2;\r\n\t\t\t//this.three.controls.target.set(0,0,0);\r\n\r\n\t\t\t// initialize object to perform world/screen calculations\r\n\r\n\t\t\t//this.three.projector = new THREE.Projector();\r\n\t\t\tthis.three.raycaster = new THREE.Raycaster()\r\n\t\t\tthis.three.raycaster.params.Points.threshold = 4;\r\n\r\n\t\t\tthis.three.clock = new THREE.Clock();\r\n\t\t\tthis.three.loadingmanager = new THREE.LoadingManager();\r\n            this.three.textureLoader = new THREE.TextureLoader( this.three.loadingmanager );\r\n            this.three.loader = new THREE.JSONLoader( this.three.loadingmanager );\r\n\t\t\tthis.three.objloader = new THREE.ObjectLoader( this.three.loadingmanager );\r\n\r\n\t\t\tthis.parent.append( this.three.renderer.domElement );\r\n\r\n\t\t\tthis.three.renderer.domElement.addEventListener(\"click\", function(event) {\r\n\t\t\t\tthis.onContainerClick(event);\r\n\t\t\t}.bind(this));\r\n\t\t\tthis.three.renderer.domElement.addEventListener(\"mousemove\", function(event) {\r\n\t\t\t\tthis.onContainerMousemove(event);\r\n\t\t\t}.bind(this));\r\n\r\n\t\t\twindow.addEventListener( 'resize', this.onWindowResize.bind(this), false );\r\n\t\t\twindow.addEventListener( 'keydown', this.onKeydown.bind(this), false );\r\n  }\r\n\r\n  onWindowResize() {\r\n\t\t    this.width = this.parent.getClientRects()[0].width;\r\n            this.height = this.parent.getClientRects()[0].height;\r\n            this.three.renderer.setSize( this.width, this.height );\r\n\t\t\tthis.three.camera.aspect = this.width / this.height;\r\n\t\t\tthis.three.camera.updateProjectionMatrix();\r\n\t\t}\r\n\r\n\t\tonKeydown(event) {\r\n\t\t\tif (event.keyCode == 80) { //pP\r\n\t\t\t\tthis.paused ? this.continu() : this.pause();\r\n\t\t\t}\r\n            this.callbacks[\"keydown\"].forEach(listener => {\r\n\t\t\t\tlistener(event, this.INTERSECTED);\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tonContainerClick(event) {\r\n\t\t\tevent.preventDefault();\r\n\t\t\tthis._setIntersection(event);\r\n            this.callbacks[\"click\"].forEach(listener => {\r\n\t\t\t\tlistener(event, this.INTERSECTED);\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tonContainerMousemove(event) {\r\n            event.preventDefault();\r\n            this._setIntersection(event);\r\n\r\n            this.callbacks[\"move\"].forEach(listener => {\r\n\t\t\t\tlistener({\"type\": \"move\"}, this.INTERSECTED);\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tstart() {\r\n\t\t\tthis._setupLights();\r\n\t\t\tvar thiz = this;\r\n\r\n\t\t\tthis.paused = false;\r\n\t\t\tthis.running = true;\r\n\t\t\tthis._render();\r\n\t\t}\r\n\t\t//continue is a reserved word in javascript\r\n\t\tcontinu() {\r\n\t\t\tthis.paused = false;\r\n\t\t\tthis.three.clock.start();\r\n\t\t\tthis._render();\r\n\t\t}\r\n\r\n\t\tpause() {\r\n\t\t\tthis.paused = true;\r\n\t\t\tthis.three.clock.stop();\r\n\t\t}\r\n\t\tstop() {\r\n\t\t\tthis.running = false;\r\n\t\t\tthis.three.clock.stop();\r\n\t\t}\r\n\r\n        _setIntersection(event){\r\n            /*var offset = $(this.three.renderer.domElement).offset();\r\n\t\t\tvar scrollLeft = $(window).scrollLeft();\r\n\t\t\tvar scrollTop = $(window).scrollTop();\r\n\t\t\tthis.mouse.x = ( (event.clientX - offset.left + scrollLeft) / this.width ) * 2 - 1;\r\n\t\t\tthis.mouse.y = - ( (event.clientY - offset.top + scrollTop) / this.height ) * 2 + 1;\r\n            this.three.raycaster.setFromCamera( this.mouse, this.three.camera );\r\n\r\n\t\t\t// calculate objects intersecting the picking ray\r\n\t\t\tthis.INTERSECTED = this.three.raycaster.intersectObjects( this.geometry.intersect );*/\r\n        }\r\n\r\n        _loadObject(file, name) {\r\n\t\t\tthis.three.loader.load( this.res + file, function ( object, materials ) {\r\n\t\t\t\tvar obj = new THREE.Mesh( object, new THREE.MeshFaceMaterial( materials ));\r\n\t\t\t\tthis.geometry.objects[name] = obj;\r\n\t\t\t\tobj.castShadow = true;\r\n\t\t\t\tthis.three.scene.add( obj );\r\n\t\t\t}.bind(this), this.res);\r\n\t\t}\r\n\r\n\tgetTexture(path) {\r\n\t\treturn this.three.textureLoader.load( this.res + path )\r\n\t}\r\n\r\n\tshowObject(ids, visible) {\r\n\t\tif (!Object.prototype.toString.call( ids ) === '[object Array]'){\r\n\t\t\tids = [ids];\r\n\t\t}\r\n\t\tfor (var i = 0; i < ids.length; i++){\r\n\t\t\tvar id = ids[i];\r\n\t\t\tif (this.geometry.objects[id]) {\r\n\t\t\t\tthis.geometry.objects[id].visible = !!visible;\r\n\t\t\t} else {\r\n\t\t\t\tconsole.log(\"showObject: Object with id \" + id + \" not found.\");\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tgetObject(id) {\r\n        if (this.geometry.objects[id]) {\r\n\t\t\treturn this.geometry.objects[id];\r\n\t\t} else {\r\n\t\t\tconsole.log(\"getObject: Object with id \" + id + \" not found.\");\r\n\t\t\treturn null;\r\n\t\t}\r\n\t}\r\n\r\n    addObject(id, obj, intersect) {\r\n        if (this.geometry.objects[id]) {\r\n\t\t\tconsole.log(\"Found object id '\" + id +\"' , not adding data.\");\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tthis.geometry.objects[id] = obj;\r\n\t\tthis.three.scene.add( obj );\r\n        if (intersect) {\r\n            this.geometry.intersect.push(obj);\r\n        }\r\n\t}\r\n\r\n        _setupLights() {\r\n\t\t\tvar ambientLight = new THREE.AmbientLight( 0x333333 ); // soft white light\r\n\t\t\tthis.three.scene.add( ambientLight );\r\n\t\t}\r\n\r\n\t\t_updateIntersection(){\r\n\t\t\tthis.INTERSECTED = [];\r\n\t\t}\r\n\r\n\t\t_updateObjects(){\r\n\t\t}\r\n\r\n\t\t_render(){\r\n\t\t\tif (this.running && !this.paused) {\r\n\t\t\t\tvar thiz = this;\r\n\t\t\t\trequestAnimationFrame(function(){\r\n\t\t\t\t\tthiz._render();\r\n\t\t\t\t});\r\n\t\t\t\tthis.render();\r\n\t\t\t\tthis.update();\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\ttransition(v, time) {\r\n\t\t\tif (this.transitioning) return;\r\n\t\t\tthis.transitionVector = v.clone();\r\n\t\t\tthis.transitionTime = Math.max(time, 0.1);\r\n\t\t\tthis.transitionStart = this.three.clock.getElapsedTime();\r\n\t\t\t//this.transitionPosition = this.three.camera.position.clone();\r\n            //var v = this.transitionPosition.clone().sub(this.three.control.center);\r\n            //this.transitionDistance0 = v.length();\r\n            //this.transitionDistance1 = this.transitionVector.length();\r\n            //this.transitionScaler =  this.transitionDistance0 / this.transitionDistance1;\r\n            //this.transitionTarget = this.transitionVector.clone().sub(this.three.camera.position).setLength(this.three.camera.position.length);\r\n            //this.transitionVector.clone().setLength(this.transitionDistance1-this.transitionDistance0);\r\n            this.transitioning = true;\r\n\t\t}\r\n\r\n\t\t_transitionUpdate(){\r\n\t\t\tif (!this.transitioning) return;\r\n\t\t\tvar alpha = Math.min((this.three.clock.getElapsedTime() - this.transitionStart)/this.transitionTime, 1.0);\r\n\t\t\tif (alpha >= 1.0) {\r\n\t\t\t\tthis.transitioning = false;\r\n\t\t\t\tthis.three.control.center.copy(this.transitionVector);\r\n\t\t\t\t//this.three.camera.position.copy(this.transitionTarget);\r\n\t\t\t} else {\r\n                //this.three.camera.position.lerp(this.transitionTarget, alpha);\r\n                this.three.control.center.lerp(this.transitionVector, alpha);\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\tupdate() {\r\n\t\t\tthis.three.control.update();\r\n\r\n\t\t\tthis.frustum.setFromMatrix(\r\n\t\t\t\tnew THREE.Matrix4().multiplyMatrices(\r\n\t\t\t\t\tthis.three.camera.projectionMatrix,\r\n\t\t\t\t\tthis.three.camera.matrixWorldInverse\r\n\t\t\t\t)\r\n\t\t\t);\r\n\r\n\t\t\tconst data = {\r\n\t\t\t\tcanvasWidth: this.three.renderer.context.canvas.width,\r\n\t\t\t\tcanvasHeight: this.three.renderer.context.canvas.height\r\n\t\t\t};\r\n\r\n\t\t\tthis.callbacks[\"render\"].forEach(listener => {\r\n\t\t\t\tlistener({\"type\": \"render\"}, data);\r\n\t\t\t});\r\n\t\t\tthis._updateObjects();\r\n\t\t\tthis._updateIntersection();\r\n\t\t\tthis._transitionUpdate();\r\n\t\t}\r\n\r\n\t\tregisterEventCallback(type, listener) {\r\n\t\t\tif (!this.callbacks[type]) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\tthis.callbacks[type].push(listener);\r\n\t\t}\r\n\r\n\t\trender() {\r\n\t\t\tthis.three.renderer.render(this.three.scene, this.three.camera);\r\n\t\t}\r\n\r\n\t\taddAxes(size) {\r\n\t\t\t\r\n\t\t\tvar a_geometry = new THREE.Geometry();\r\n\t\r\n\t\t\tvar a_material = new THREE.ShaderMaterial({\r\n\t\t\t\tvertexColors: THREE.VertexColors,\r\n\t\t\t\tshading : THREE.SmoothShading,\r\n\t\t\t\tvertexShader : 'varying vec4 axColor;void main() {\\n\\taxColor = vec4( color, 1.0 );gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n}',\r\n\t\t\t\tfragmentShader : 'varying vec4 axColor;void main() {\\n\\tgl_FragColor = axColor;\\n}'\r\n\t\t    });\r\n\t\r\n\t        a_geometry.colors[ 0 ] = a_geometry.colors[ 1 ] = new THREE.Color( 1, 0, 0);\r\n\t        a_geometry.colors[ 2 ] = a_geometry.colors[ 3 ] = new THREE.Color( 0, 1, 0);\r\n\t        a_geometry.colors[ 4 ] = a_geometry.colors[ 5 ] = new THREE.Color( 0, 0, 1);\r\n\t\r\n\t\t\ta_geometry.vertices.push(\r\n\t\t\t\t\tnew THREE.Vector3(0,0,0), new THREE.Vector3(size,0,0),\r\n\t\t\t\t\tnew THREE.Vector3(0,0,0), new THREE.Vector3(0,size,0),\r\n\t\t\t\t\tnew THREE.Vector3(0,0,0), new THREE.Vector3(0,0,-size)\r\n\t\t\t);\r\n\t\t\tthis.addObject(\"axes\", new THREE.LineSegments( a_geometry, a_material) );\r\n\r\n\t\t}\r\n\r\n\t\taddGrid(size, dimension) {\r\n\t\t\t\t        /*add base grid*/\r\n\t        var gridHelper = new THREE.GridHelper( size, dimension );\r\n\t        gridHelper.setColors(\r\n\t            new THREE.Color( 0x111122 ),\r\n\t            new THREE.Color( 0x222244 )\r\n\t        );\r\n\t        gridHelper.material.opacity = 0.5;\r\n\t        gridHelper.material.transparent = true;\r\n\t\r\n\t        this.addObject(\"grid\", gridHelper);\r\n\t\t}\r\n\r\n\t\tprojectVisible(point) {\r\n\t\t\tvar vector = new THREE.Vector3(point[0],point[1],point[2]);\r\n\t\t\tif(this.frustum.containsPoint( vector )){\r\n\t\t\t   return vector.project(this.three.camera);\r\n\t\t\t}\r\n\t\t\treturn null;\r\n\t\t}\r\n\r\n\t\tcreateBufferedGeometry() {\r\n\t\t\treturn new THREE.BufferGeometry();\r\n\t\t}\r\n\r\n\t\tcreateOneDimGraphicArray(length) {\r\n\t\t\treturn new Float32Array( length );\r\n\t\t}\r\n\r\n\t\tcreateThreeDimGraphicArray(length) {\r\n\t\t\treturn new Float32Array( 3* length );\r\n\t\t}\r\n};\r\n\r\n\n\n//# sourceURL=webpack://MWM/./src/js/renderer.js?");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/js/renderer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/renderer.js */\"./src/js/renderer.js\");\n\n\n//# sourceURL=webpack://MWM/multi_./src/js/renderer.js?");

/***/ })

/******/ });