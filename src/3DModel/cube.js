import * as THREE from 'three';

export function cube(elementId) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(20, 450 / 400, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(200, 200);
  renderer.setClearColor(0x000000, 0);

  // Append renderer to the provided elementId
  const container = document.getElementById(elementId);
  if (!container) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    opacity: 0,
    transparent: true,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    linewidth: 2,
  });
  const line = new THREE.LineSegments(edges, lineMaterial);
  scene.add(line);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    line.rotation.x += 0.001;
    line.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(200, 200);
    camera.aspect = 200 / 200;
    camera.updateProjectionMatrix();
  });
}
