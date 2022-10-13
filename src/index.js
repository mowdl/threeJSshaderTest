import * as THREE from "three";

let app = {
  el: document.getElementById("app"),
  scene: null,
  renderer: null,
  camera: null
};

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

const init = () => {
  app.renderer = new THREE.WebGLRenderer();
  console.log(app.renderer);
  app.renderer.setSize(window.innerWidth, window.innerHeight);
  app.el.appendChild(app.renderer.domElement);

  app.scene = new THREE.Scene();

  app.camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  app.scene.add(cube);
  app.camera.position.z = 5;
};

const render = () => {
  requestAnimationFrame(render);

  cube.rotation.z += 0.01;
  cube.rotation.y += 0.01;

  app.renderer.render(app.scene, app.camera);
};

init();

render();


let uniforms = {

  'amplitude': { value: 1.0 },
  'color': { value: new THREE.Color( 0xff2200 ) },
  // 'colorTexture': { value: new THREE.TextureLoader().load( 'textures/water.jpg' ) }

};

const shaderMaterial = new THREE.ShaderMaterial( {

  uniforms: uniforms,
  vertexShader: document.getElementById( 'vertexshader' ).textContent,
  fragmentShader: document.getElementById( 'fragmentshader' ).textContent

} );