import {
  ANGULAR_SKILL,
  CLOUDANT_SKILL,
  CSS_SKILL,
  DB2_SKILL,
  FASTAPI_SKILL,
  FLASK_SKILL,
  HTML_SKILL,
  PYTHON_SKILL,
  SVELTE_SKILL,
  TYPESCRIPT_SKILL,
} from '../education-and-courses/courses/constants';
import { ICompany, IExperienceInfo } from './interfaces';

export const IBM_COMPANY: ICompany = {
  name: 'IBM',
  logoPath: 'assets/icons/ibm-icon.svg',
  color: '#3E85C2',
};

export const UNICEN_COMPANY: ICompany = {
  name: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
  logoPath: 'assets/images/UNICEN_Logo.png',
  color: '#043E6A',
};

export const EXPERIENCES: IExperienceInfo[] = [
  {
    company: IBM_COMPANY,
    role: 'Software Engineer',
    date: 'November 2021 - Present',
    description:
      'I work as a software engineer in Human-Centered AI (HCAI) research, focusing on the interaction between humans and AI agents in areas such as collaborative AI, mutual theory of mind, and group ideation with AI tools. I lead frontend development tasks and am responsible for implementing key features in that area, while also contributing to backend functionalities.',
    descriptionBullets: [],
    experienceDetails: [
      {
        role: 'Software Engineer',
        duration: 'IBM Research | Jul 2023 - Dec 2023',
        isPrivateProject: false,
        projectName: 'Collaboration Canvas',
        projectDescription: `
The Collaboration Canvas is a prototype tool for exploring ways for groups to interact with large language models (LLMs) in ideation tasks. Collaboration Canvas provides a shared, graphical canvas in which multiple parties - human and LLM - can share ideas in the form of virtual “sticky notes” that can be moved around the canvas. As we aimed not to replicate a commercial product, it possesses a minimally-useful set of functionality commonly found in shared canvas tools:

- Multiple users are able to join the shared canvas environment and interact with it in real time. A list of connected users shows who is currently in the environment.
- Users are able to add, select, and remove sticky notes.
- Users are able to change the size, color, and position of sticky notes.
- Users are able to zoom in and out within the canvas.

<figure id="user_interface">
  <img class="project-description-image" src="assets/images/collaboration_canvas/Canvas_User_Interface.png" alt="Collaborative Canvas User Interface"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 1: Collaborative Canvas user interface.</strong> The shared canvas provides a space for multiple users to add, remove, and move around virtual sticky notes. <strong>(A)</strong> A sidebar provides users with the ability to add new sticky notes in various colors. <strong>(B)</strong> Sticky notes can be placed and moved around the canvas. <strong>(C)</strong> A separate panel can be revealed to show a private scratchpad for generating new sticky notes with an LLM off of the main canvas. <strong>(D)</strong> User profile images represent the users who are currently connected to the canvas.
  </figcaption>
</figure>

In addition to providing core shared canvas functionality, Collaborative Canvas also offers several different ways to invoke a large language model to generate new content:

- New sticky notes can be generated and added to the main canvas from a textual prompt in a modal (Figure 2). These notes are visible to all users when they are generated.

<figure id="generative_ai_capabilities">
  <img class="project-description-image" src="assets/images/collaboration_canvas/In_Canvas_Tools.png" alt="Generative AI capabilities within the shared canvas"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 2: Generative AI capabilities within the shared canvas.</strong> Users can generate sticky notes directly in the shared canvas view. <strong>(A)</strong> By right-clicking on the canvas and choosing “Generate” from the contextual menu, a user can access a dialog for generating sticky notes. The dialog allows the user to specify their prompt and request that a specific number of sticky notes are generated. <strong>(B)</strong> After clicking the “Generate Notes” button, new sticky notes are created (with an interstitial animation to hide LLM inference latency) in the main canvas. <strong>(C)</strong> When selecting one or more sticky notes, a pop-up toolbar allows users to re-generate the selected sticky notes with a new prompt. In this way, users are able to make refinements to their own (or generated) sticky notes, such as “provide a condensed summary” or “come up with new ideas.”
  </figcaption>
</figure>

- New sticky notes can be generated within a private scratchpad (Figure 3A & Figure 3B). Users are then able to drag sticky notes from the scratchpad into the shared canvas space (Figure 3C).
- Users can progressively refine the content of generated sticky notes through follow-up requests. The sequence of requests are preserved so that notes can be regenerated in the context of previous requests (Figure 3D).

<figure id="personal_scratchpad">
  <img class="project-description-image" src="assets/images/collaboration_canvas/Personal_Scratchpad.png" alt="Personal scratchpad"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 3: Personal scratchpad.</strong> As an alternative to generating public sticky notes on the shared canvas, we also developed a personal scratchpad for generating sticky notes, enabling users to review their content before sharing them with the group. <strong>(A)</strong> The scratchpad provides a separate space to prompt the LLM and generate new sticky notes. <strong>(B)</strong> The current state of the scratchpad is preserved between subsequent prompts, so a user can request that the sticky notes that were previously generated “say that with less text.” <strong>(C)</strong> Users can choose which sticky notes in their scratchpad they would like to share with the group by dragging them from the scratchpad to the main canvas. <strong>(D)</strong> Users can view their progressive prompts and regenerated responses in a chat-like sequential view that can be clicked to navigate back to older versions of generated note sets.
  </figcaption>
</figure>

In addition to these core features, the Collaboration Canvas also includes proactive capabilities designed to assist users in ideation:

- Medium-level proactivity: In this version of the tool, the LLM automatically suggests sticky notes based on the user's input. Once the user finishes typing their idea on a sticky note, the LLM will generate suggested notes related to the user's idea (Figure 4).

<figure id="medium_level_proactivity">
  <img class="project-description-image" src="assets/images/collaboration_canvas/Medium_Level_Proactivity.png" alt="Medium-level Proactivity"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 4: Medium-level Proactivity</strong> The user will see a "Launch AI" icon replace the loading icon <strong>(A)</strong> once the suggestions are ready. When the user clicks on this icon, the suggestions in the form of sticky notes will appear in a dark box, visible only to the user who wrote the original sticky note <strong>(B)</strong>. If the user finds a suggestion useful, they can simply drag it onto the main board.
  </figcaption>
</figure>

- Full proactivity: In this mode, the LLM acts as a virtual brainstorming partner, creating sticky notes autonomously. It remains context-aware, meaning it knows the content of the other sticky notes and generates new ideas without overlapping existing ones. The notes will be placed in empty spaces near other related ideas (Figure 5).

<figure id="full_proactivity">
  <img class="project-description-image full-proactivity-description-image" src="assets/images/collaboration_canvas/Full_Proactivity.png" alt="Full Proactivity"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 5: Full Proactivity</strong>  This mode includes additional controls, such as:
   - A toggle switch to activate or deactivate LLM-generated note creation <strong>(A)</strong>.
   - A slider to control the frequency of AI-generated notes, with options ranging from every 30 seconds to every 3 minutes <strong>(B)</strong>.
   - A slider to set the number of sticky notes generated each time, from 1 to 10 notes per cycle <strong>(C)</strong>.
  </figcaption>
</figure>

We implemented the Collaborativon Canvas using the Svelte framework for the front-end UI and Python with FastAPI for the back end. The back end was responsible for communicating with an internal version of the IBM watsonx.ai platform where the LLM was hosted. While this platform provides API access to a number of state-of-the-art LLMs, we chose the Llama 2 model for our prototyping and experiments. We developed a prompt for this model to set the context for users' actions, including generating sticky notes and progressively refining generated responses. This prompt also instructed the model to format its responses in a way that was easy to parse into separable chucks by the front end. In Figure 6, it is illustrated the flow that occurs from the moment a user requests the LLM to generate a group of sticky notes until they are generated.

<figure id="sticky_notes_generation_flow">
  <img class="project-description-image" src="assets/images/collaboration_canvas/Canvas_Sticky_Notes_Generation_Flow.png" alt="Sticky Notes Generation Flow"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 6: Sticky Notes Generation Flow.</strong> The diagram shows the activity flow for generating sticky notes. First, the user enters a query in their personal scratchpad. Next, the front-end UX calls an API endpoint in the back end, which looks up the user's canvas session information from the database. Then, if the user is making a refinement to existing sticky notes, the system retrieves the request/response history for those sticky notes. Next, the system loads the prompt template and fills it in with the user's query and any retrieved refinement history. Finally, the system calls the LLM (via API) with the prompt to obtain a response, parses that response into a set of individual sticky notes, and adds them to the scratchpad UI.
  </figcaption>
</figure>
`,
        contribution: `In this project, I was the lead developer contributing to the project, both on the frontend (100% implemented) and the backend. The implementation of the canvas allowed us to conduct user studies where we evaluated Group Brainstorming with an AI Agent. The results were presented in two papers:
- "AI and the Future of Collaborative Work: Group Ideation with an LLM in a Virtual Canvas" presented at CHIWORK '24: Annual Symposium on Human-Computer Interaction for Work. The paper received an honorable mention.
- "Collaborative Canvas: A Tool for Exploring LLM Use in Group Ideation Tasks" presented at the ACM International Conference on Intelligent User Interfaces 2024: 5th Workshop on Human-AI Co-Creation with Generative Models. I had the opportunity to be the first author of this paper and present it at the IUI conference held in Greenville, South Carolina, 🇺🇸.
`,
        skills: [
          SVELTE_SKILL,
          CSS_SKILL,
          HTML_SKILL,
          TYPESCRIPT_SKILL,
          FASTAPI_SKILL,
          PYTHON_SKILL,
          CLOUDANT_SKILL,
        ],
      },
      {
        role: 'Software Engineer',
        duration: 'IBM Research | Feb 2023 - Jun 2023',
        isPrivateProject: true,
        contribution:
          'I was responsible for frontend development across three research initiatives. I conducted exploratory work to assess the feasibility of integrating new design components into existing products. I designed and implemented complete UIs for multiple demo applications showcased within these initiatives. In addition, I contributed to backend-related development tasks. Beyond these projects, I also developed a full UI and recorded a demo video that was presented at IBM Think 2023.',
        skills: [
          ANGULAR_SKILL,
          CSS_SKILL,
          HTML_SKILL,
          TYPESCRIPT_SKILL,
          PYTHON_SKILL,
        ],
      },
      {
        role: 'Software Engineer',
        duration: 'Chief Analytics Office | Nov 2021 - Dec 2022',
        isPrivateProject: true,
        contribution:
          "I led and developed the frontend side of the project using the Angular framework, which allowed me to take on a significant role within the team and be involved in all aspects of the UI. I worked closely with the backend developers and the team's data scientists to incorporate all the necessary requirements for showcasing specific functionalities in the UI.\n\n When I joined these projects, they had already been in existence for a few years. One of the actions I took was restructuring the HTML code to use semantic HTML. This code restructuring not only served to apply better programming techniques in the frontend, but also led to an improvement in the UI design by, for example, enhancing the way text was displayed on the screen.\n\n In addition, I implemented essential features on the backend side, building REST API services with Flask using Python and a DB2 database. Additionally, I was also responsible for carrying out a paradigm shift that the product stakeholders were looking for by stopping offering the information through a web page and starting to send that information to users in personalized insights by email.",
        skills: [
          ANGULAR_SKILL,
          CSS_SKILL,
          HTML_SKILL,
          TYPESCRIPT_SKILL,
          FLASK_SKILL,
          PYTHON_SKILL,
          DB2_SKILL,
        ],
      },
    ],
  },
  {
    company: UNICEN_COMPANY,
    role: 'Assistant Professor',
    date: 'April 2021 - September 2021',
    description:
      "I assisted the principal professor of the subject, being in charge of answering the student's questions, teaching them how to carry out practical exercises to apply the knowledge learned in theory, and correcting the students' practical work.",
    descriptionBullets: [
      'Subject: Software Development Methodologies. This subject corresponds to the 3rd year of the Software Engineer degree.',
      'Subject: Introduction to Software Development Methodologies. This subject corresponds to the University Technician degree in Computer Application Development.',
    ],
    experienceDetails: [],
  },
];
