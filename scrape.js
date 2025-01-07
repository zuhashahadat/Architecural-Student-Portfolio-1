import './style.css';
import data from './data/data';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const cubes = [
  './cubeDrawings/cube1.webp',
  './cubeDrawings/cube2.webp',
  './cubeDrawings/cube3.webp',
  './cubeDrawings/cube4.webp',
];

document.querySelector('#app').innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <div id="model1"></div>
        </div>
        <div id="images">
          <div>
            ${cubes.map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>

      <div id="project-row">
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images">
          <div>
            ${cubes.map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>

      <div id="project-row">
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images">
          <div>
            ${cubes.map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
    </ul>
  </main>
`;

// Target container for the 3D model
const container = document.querySelector('#model1');

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xd3d3d3);

const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(2, 2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Add grid helper
const gridHelper = new THREE.GridHelper(10, 10, 0x000000, 0x808080); // Size: 10, Divisions: 10
scene.add(gridHelper);

// Add lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft ambient light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
pointLight.position.set(2, 5, 5);
scene.add(pointLight);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth rotation
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0); // Focus the controls on the origin
controls.update();

// Load MTL and OBJ
const mtlLoader = new MTLLoader();
const objLoader = new OBJLoader();

mtlLoader.load('./src/3DModels/project1/cube.mtl', (materials) => {
  materials.preload(); // Prepare the material for OBJLoader
  objLoader.setMaterials(materials);

  objLoader.load(
    './src/3DModels/project1/cube.obj',
    (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          // Optional: modify material or add effects
          child.geometry.computeVertexNormals();
        }
      });

      // Adjust object position and scaling
      object.position.set(0, 0, 0);
      object.scale.set(1, 1, 1);

      // Add the loaded object to the scene
      scene.add(object);
    },
    (xhr) => {
      console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    (error) => {
      console.error('An error occurred while loading the model:', error);
    }
  );
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Update OrbitControls on each frame
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});




