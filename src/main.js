import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./colladge/taggingimages.png",
  "./colladge/taggingimages2.png",
  "./colladge/citations.png",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      CADAVRE EXQUIS//
        <div class="three-model">
          <a href="./colladge/colladgefinal.png" target="new">
              <img src="./colladge/colladgefinal.png" alt="random image" width="400" height="300" id="model1">
            </a>
        </div>
        <div id="images-description">
          <div id="images">
          <a href="./colladge/taggingimages.png" target="new">
              <img src="./colladge/taggingimages.png" alt="random image" width="400" height="300">
            </a>
          <a href="./colladge/taggingimages2.png" target="new">
              <img src="./colladge/taggingimages2.png" alt="random image" width="400" height="300">
            </a>
          <a href="./colladge/citations.png" target="new">
              <img src="./colladge/citations.png" alt="random image" width="400" height="300">
            </a>
             <img src="./colladge/animation.gif"> 
          </div>
          <h4 id="description">WORLDS APART// How does climate change disproportionately affect marginalized communities? //MANIFESTO // Design and the built environment serves as a physical manifestation of our societal values and attitudes. As a result, many global biases make their way into design. Something I am passionate about is being able to acknowledge and address the biases that exist within our society and strive to make a more fair and equitable future. Particularly, I am passionate about climate change, particularly as to how marginalized communities experience the worst of the effects of climate change despite not being the main contributors. Within my Cadavre Exquis, I aimed to explore these ideas as well as the fact that inevitably climate change will impact us all, regardless of wealth or social status.</h4>
        </div>
      </div>

      <div id="project-row">
      INTEROPERABILITY//
        <div class="three-model">
          <div id="model2"></div>
        </div>
         <div id="images-description">
          <div id="images">
          <a href="./Interoperability/313_Boards_Page_1.png" target="new">
              <img src="./Interoperability/313_Boards_Page_1.png" alt="random image" width="300" height="300">
            </a>
          <a href="./Interoperability/313_Boards_Page_2.png" target="new">
              <img src="./Interoperability/313_Boards_Page_2.png" alt="random image" width="300" height="300">
            </a>
          <a href="./Interoperability/313_Boards_Page_3.png" target="new">
              <img src="./Interoperability/313_Boards_Page_3.png" alt="random image" width="300" height="300">
            </a>
            <a href="./Interoperability/313_Boards_Page_4.png" target="new">
              <img src="./Interoperability/313_Boards_Page_4.png" alt="random image" width="300" height="300">
            </a>
          </div>
          <div id="images-description">
          <div id="images">
          <a href="./Interoperability/sub_d_front.png" target="new">
              <img src="./Interoperability/sub_d_front.png" alt="random image" width="400" height="300">
            </a>
          <a href="./Interoperability/sub_d_side.png" target="new">
              <img src="./Interoperability/sub_d_side.png" alt="random image" width="400" height="300">
            </a>
          <a href="./Interoperability/paper_model_front.png" target="new">
              <img src="./Interoperability/paper_model_front.png" alt="random image" width="400" height="300">
            </a>
          <a href="./Interoperability/paper_model_side.png" target="new">
              <img src="./Interoperability/paper_model_side.png" alt="random image" width="400" height="300">
            </a>
          </div>
          <h4 id="description">INTEROPERABILITY AND GEOMETRY// An exploration of interoperability between different 3D modelling softwares. A study and analysis on various types of geometries, undertaken on three unique 3D models, a simple pavillion, a closed geometry, and a character model.</h4>
        </div>
      </div>
${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
        */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/combined_models.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
