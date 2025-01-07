import './style.css';
import data from './data/data';
import { cube } from './3DModel/cube';

const cubes = [
  './cubeDrawings/cube1.webp',
  './cubeDrawings/cube2.webp',
  './cubeDrawings/cube3.webp',
  './cubeDrawings/cube4.webp',
]

document.querySelector('#app').innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
        <div id="model1"></div>
        <div id="images">
          <div>
            ${cubes.map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>

      <div id="project-row">
        <div id="model2"></div>
        <div id="images">
          <div>
            ${cubes.map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>

      <div id="project-row">
        <div id="model3"></div>
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

cube('model1');
cube('model2');
cube('model3');
