import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.138.3/build/three.module.js';
import { ARButton } from 'https://cdn.jsdelivr.net/npm/three@0.138.3/examples/jsm/webxr/ARButton.js';

let camera, scene, renderer;
let controller;

init();
animate();

function init() {
  console.log("Initializing scene...");

  const container = document.createElement('div');
  document.body.appendChild(container);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);

  // Ensure the background color is transparent for AR
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;
  container.appendChild(renderer.domElement);

  // Add AR button
  document.body.appendChild(ARButton.createButton(renderer));

  // Hemisphere light to simulate environment lighting
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  light.position.set(0.5, 1, 0.25);
  scene.add(light);

  // Initial green cube
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, -0.5);
  scene.add(mesh);

  // Controller for AR interactions
  controller = renderer.xr.getController(0);
  controller.addEventListener('selectstart', onSelectStart);
  controller.addEventListener('selectend', onSelectEnd);
  scene.add(controller);

  window.addEventListener('resize', onWindowResize, false);

  console.log("Scene initialized.");
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onSelectStart(event) {
  // Create a green cube on interaction
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, -0.5).applyMatrix4(controller.matrixWorld);
  cube.quaternion.setFromRotationMatrix(controller.matrixWorld);
  scene.add(cube);
}

function onSelectEnd(event) {
  // Optionally handle end of selection
}

function animate() {
  renderer.setAnimationLoop(render);
}

function render() {
  renderer.render(scene, camera);
}