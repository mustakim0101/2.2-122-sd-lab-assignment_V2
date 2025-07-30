import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../css/kopa.module.css';

const Author = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Author Profile</h2>
      <p>Name: {name || 'Unknown Author'}</p>
      <img src={require('../images/Ass_A.png')} alt="Author Image" style={{ width: '200px', height: 'auto', margin: '10px 0' }} />
      <p>This is a minimal profile page to test routing for {name}.</p>
      <h1 className={styles.heading}>Author Details</h1>
      <p>React<br />
1. Installation<br />
(LTS Version for node.js)<br />
(Install Git from Git SCM)<br />
(Create a folder for project)<br />
(Open CMD through the folder)<br />
(Type this command : "npx create-react-app project-name" )<br />
(After creating project open the new folder)<br />
(Open CMD through the new folder)<br />
(Type this command : "code ." -> This will open the project in VSCode)<br />
(Install Extensions : Simple React Snippets)<br />
(Go to VSCode settings -> Search "emmet" -> click Add item in Emmet:Include language)<br />
(Then type "javascript" in item & "javascriptreact" in value)<br />
(Go to the CMD where you typed "code ." & type this command : "npm run start")<br />
(Go to VSCode and open "index.html" from "public" folder)<br />
2. React Components #<br />
#(All codes run in App.js)<br />
(Create a new folder "pages" in src, then create a file name home.js)<br />
(write sfc and press enter)<br />
(write your codes inside the return())<br />
3. Design Frameworks<br />
(Search react bootstrap in browser)<br />
(Type install command inside a new CMD which is opened through the project-name folder)<br />
(Copy the css link from the website and paste it inside index.html file)<br />
(create a "css" named folder in src & creates files using .module.css extension)<br />
#(After cloning friends project open CMD through that folder and Type "npm install")<br />
#(Re-useable components should be in a different folder in src)<br />
4. Routing<br />
(Go to the same CMD where we installed react bootstrap)<br />
(Type this command : "npm install react-router-dom")<br />
(use &lt;Link&gt;&lt;/Link&gt; for routing)<br />
#(Query parameter, Search parameter)<br />
5. Props (The way to transfer property from parent to a child)<br />
(We can send as many props we want)<br />
(To write multiple props, separate them using space in parent & using "comma" in child)<br />
6. Hooks<br />
(Most used are useState, useEffect)<br />
(Declare variables in useState, so that the changes made are shown instantly in webpage)<br />
(But we need to import useState)<br />
("[]" is called dependency array)<br />
(useLocation, useQuery, useQueryClient, useParams, useSearchParams, useMutation, useRef, useMemo)<br />

Assignment : Create a project and design a page with different functionalities in GitHub, atleast 2 commits.<br />
Next Lab : 2 page designs, each teammate should commit atleast 3 commits.<br />
--------------------------------------------------------<br />
Design the following page using react.<br />
Any Copy/Paste will result in zero marks for both parties.<br />

Required Functionalities:<br />
"Author Name" will be a clickable link that brings us to the Author profile page (Design a minimal Author Profile Page, just to show that your Routing is working).<br />
The "Reactions" (both post reaction and comment reaction) should be clickable icons. When I click one Icon, other icons should be in unclicked state.<br />
Implement pagination at the bottom.<br />
Use dummy data for pagination.<br />
Make other necessary design choices as you see fit.<br />
Submission details:<br />
Push the project in Github<br />
Submit a word file with your Github repo in it.<br />
Your github repo must have at least 2 commits before lab time.<br />
Please bring you laptop to show the assignment on the 4th lab."</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          onClick={() => navigate('/')}
          style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
        >
          Come Back
        </button>
      </div>
    </div>
  );
};

export default Author;
/*
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../css/kopa.module.css';

const Author = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Author Profile</h2>
      <p>Name: {name || 'Unknown Author'}</p>
      <p>This is a minimal profile page to test routing for {name}.</p>
      <h1 className={styles.heading}>Author Details</h1>
      <button
        onClick={() => navigate('/')}
        style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
      >
        Come Back
      </button>
    </div>
  );
};

export default Author;
*/
/*import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/kopa.module.css';

const Author = () => {
  const { name } = useParams();

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Author Profile</h2>
      <p>Name: {name || 'Unknown Author'}</p>
      <p>This is a minimal profile page to test routing.</p>
      <h1 className={styles.heading}>Author Details</h1>
    </div>
  );
};

export default Author;*/