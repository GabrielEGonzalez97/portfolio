import {
  AI_AGENTS_SKILL,
  ANGULAR_SKILL,
  CARBON_SKILL,
  CLOUDANT_SKILL,
  CSS_SKILL,
  DB2_SKILL,
  FASTAPI_SKILL,
  FLASK_SKILL,
  HTML_SKILL,
  LLM_SKILL,
  OPENSHIFT_SKILL,
  PYTHON_SKILL,
  SASS_SKILL,
  SLACK_SKILL,
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
        duration: 'IBM Research | Jan 2025 - Nov 2025',
        isPrivateProject: false,
        projectName: 'Agentic Code Explorer',
        projectDescription: `
ACE - the Agentic Code Explorer - is a prototype agentic system designed to help software developers conduct sensemaking tasks within large code repositories. The design of this system was motivated by the observation that software developers often use AI coding assistants to help understand and ask questions about source code prior to planning and implementing code changes. Using ACE as a testbed, we present initial steps to explore whether a large language model (LLM)-based agent that is capable of invoking external tools and iteratively refining its own outputs (per the agentic design pattern) might be able to robustly support such a code discovery process. In this way, we use ACE as a means to explore more generally how generative models need not solely focus on the artifact production aspects of co-creative tasks; instead they might focus on the co-investigative activities where initial understanding and plans are formed.

Our initial prototype was built as a standalone web application, rather than as a plugin for existing developer IDEs, to allow us the freedom to control all aspects of interaction design, model prompting, agentic tool design, interaction design, and usage data collection during the early stages of our research.

ACE's front end (Figure 1) was built using the Svelte framework and its back end was implemented in Python using FastAPI.

<figure id="ace_user_interface">
  <img class="project-description-image" src="assets/images/ace/ace_user_interface.png" alt="ACE User Interface"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 1: ACE User Interface.</strong> Three interface panels allow the user to (A) browse all files in a GitHub code repository, (B) view either the raw source code or an AI-generated summary of a selected code file (shown above), and (C) converse with an LLM-based agent that has access to the full code repository and can answer general programming questions and targeted questions about a file, a code summary, or selected lines of code.
  </figcaption>
</figure>

ACE presents a code repository's files in a tree structure (Figure 1A), mirroring how they are typically presented in developer IDEs. When a file is selected, ACE generates a natural language overview of the file in the central panel (Figure 1B). The overview provides a high-level description of the file's functionality, summarizing the purpose of the code and all of the classes and methods defined in it. Within the same panel, the user can switch to the “Code” view to see the raw source code.

Users can converse with ACE in the right sidebar (Figure 1C). ACE uses the user's current context - which file they have open and any text they have selected in the interface - to answer questions. Users can also select text in the interface and press a keyboard shortcut to open a chat input, allowing them to ask ACE a question about anything they see on the screen.

As ACE uses an agentic workflow, the latency of its responses may be high. Therefore, ACE delivers its responses to the chat UI via a streaming API, enabling the user to follow its progress as it processes the query. Users can view or hide ACE's processing steps, which show information about ACE's reasoning, observations, tool invocations and outputs.

We equipped ACE with tools tailored for summarizing and explaining code (Figure 1B), understanding code dependencies and querying the repository. Since
these features operate at the level of a code repository, ACE first performs a preprocessing stage that divides the repository into manageable chunks, embeds them using an embedding model, and stores the resulting vectors in an ElasticSearch database. This setup enables ACE to perform retrieval-augmented generation (RAG) in response to a user's query.

For code summarization, the agent pre-generates natural language summaries at multiple granularities: one for each function or method within the repository, one for each class, and one for each source file.

As an initial step toward operationalizing mutual theory of mind, our ACE prototype modifies agent responses with prompts derived from an editable profile representing the user's expertise (Figure 2).

<figure id="ace_user_profile">
  <img class="project-description-image" src="assets/images/ace/ace_user_profile.png" alt="User Profile"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 2: User Profile.</strong> Information in this profile is used by ACE to adapt its responses to the user. For this user, ACE will provide more direct and succinct responses to questions about Python, and longer and more explanatory responses to questions about CSS.
  </figcaption>
</figure>
        `,
        contribution: `In this research project, I was deeply involved in the implementation of ACE, contributing both to the frontend (which I fully implemented) and to several areas of the backend. My backend work included developing user profile generation based on their GitHub activity as well as their professional information available on the company's platform.

I also implemented the functionality for summarizing repository code—both at the file and function levels—enabling retrieval-augmented generation (RAG) based on these code summaries. Additionally, I participated in developing a Slack bot that allowed users to interact with ACE within group environments.

Part of the research conducted through this project was presented at the ACM International Conference on Intelligent User Interfaces 2025: 6th Workshop on Human-AI Co-Creation with Generative Models, in the paper “ACE: Moving Toward Co-Investigation with the Agentic Code Explorer,” which I presented in person at the IUI 2025 conference held in Cagliari 🇮🇹.`,
        skills: [
          SVELTE_SKILL,
          SASS_SKILL,
          HTML_SKILL,
          TYPESCRIPT_SKILL,
          CARBON_SKILL,
          FASTAPI_SKILL,
          PYTHON_SKILL,
          SLACK_SKILL,
          CLOUDANT_SKILL,
          AI_AGENTS_SKILL,
          LLM_SKILL,
          OPENSHIFT_SKILL,
        ],
      },
      {
        role: 'Software Engineer',
        duration: 'IBM Research | Jan 2024 - Dec 2024',
        isPrivateProject: true,
        contribution: `My research contributions focused on advancing human-AI collaboration across domains such as generative AI, group brainstorming, cooperative games, and mutual theory of mind.

My work involved developing technological prototypes, conducting user studies, and co-authoring papers that explored these areas. In each project, I sought innovative solutions to emerging challenges, effectively collaborating with interdisciplinary teams and adapting to the evolving needs of the research process.

Over the year, I contributed to multiple publications submitted to leading research conferences (e.g., CHIWORK, IUI, ICCC, IJCAI).

During the summer, I played a proactive role in supporting research interns. I developed a prototype that was central to a user study on mutual theory of mind in cooperative games, which later became the basis for a co-authored paper. Additionally, I provided guidance on a project within the mutual theory of mind in code understanding research stream.

I also collaborated on a master's thesis project investigating human-AI co-creativity with generative AI, providing research and technical support throughout the study.
          `,
        skills: [
          SVELTE_SKILL,
          SASS_SKILL,
          HTML_SKILL,
          TYPESCRIPT_SKILL,
          CARBON_SKILL,
          FASTAPI_SKILL,
          PYTHON_SKILL,
          CLOUDANT_SKILL,
          LLM_SKILL,
          OPENSHIFT_SKILL,
        ],
      },
      {
        role: 'Software Engineer',
        duration: 'IBM Research | Jul 2023 - Dec 2023',
        isPrivateProject: false,
        projectName: 'Koala',
        projectDescription: `
To understand the challenges of designing an agent that “fts in” to a group setting, we built an LLM-based conversational agent prototype called “Koala.” Koala is an AI-based group discussion participant, situated in Slack and implemented as a bot application. Given our desire to experiment with proactive ways of participating, we developed two confgurable variants of Koala (Figure 1): a reactive variant that only responds when directly addressed (by either “@Koala” or “Koala”), and a proactive variant that responds when it determines that it has something valuable to say. Koala can contribute to the conversation in the same manner as other human users, by sending textual messages as well as emoji-based reactions to existing messages.

<figure id="koala_proactive_variants">
  <img class="project-description-image" src="assets/images/koala/reactive_and_proactive_koala.png" alt="Koala as an AI participant in Slack"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 1: Koala as an AI participant in Slack.</strong> These screenshots (with human participant names redacted) show examples of Koala participating in a Slack channel. (A) The reactive variant of Koala replies to a user's question addressed to “Koala” (A.1) or to “@Koala” (A.2). (B) The proactive variant of Koala generates a proactive reply (B.1) to the conversation and a reactive reply (B.2) in response to a direct request.”
  </figcaption>
</figure>

In developing the proactive variant of Koala, we knew that writing imperative decision logic to determine what constitutes a valuable contribution would prove impossible; therefore, we relied on
the underlying LLM to not only produce conversational responses in response to users' messages, but also to score those responses for the extent to which they made a valuable contribution to the
conversation. We outline this process in Figure 2; at a high level, Koala is instructed to not reply to messages where it is clearly not the intended recipient, and to reply to messages when it estimates that the response it generated makes a valuable contribution to the conversation. We note that our proactive variant of Koala represents a limited form of proactivity as it’s process is triggered by the receipt of a message from a human user; a truly proactive variant of Koala would also be able to send messages to the group even when the human participants remain silent.

During Koala's development, we noticed that the underlying LLM was unreliable in identifying the intended target for a chat utterance. Thus, we incorporated additional, external control logic to force Koala to reply if it's name was detected in a user's message, and suppress Koala from replying under other circumstances, such as when the names of one of the other participants were mentioned, regardless of how the LLM scored the value of the reply's content.

<figure id="koala_operational_logic">
  <img class="project-description-image" src="assets/images/koala/koala_operational_logic.png" alt="Koala operational logic"/>
  <figcaption class="project-description-image-caption">
    <strong>Figure 2: Koala operational logic.</strong> When users post a message in a Slack (A), the post triggers an event that is handled by the Koala backend (B) where control logic determines whether Koala should either immediately pass on replying or hand of for further evaluation in the autonomy control logic (C) where the LLM (D) generates a response that is further evaluated for potential posting in the channel.”
  </figcaption>
</figure>
        `,
        contribution: `In this research project, in addition to contributing to the implementation of Koala, I also participated as a note-taker during the user studies we conducted to understand Koala's impact on the dynamics of an ideation activity and to explore the design space for its interactive behaviors. The results were presented in two papers:
- "Group Brainstorming with an AI Agent: Creating and Selecting Ideas," presented at the International Conference on Computational Creativity (ICCC'24).
- "Controlling AI Agent Participation in Group Conversations: A Human-Centered Approach," presented at the ACM International Conference on Intelligent User Interfaces 2025.
        `,
        skills: [
          FASTAPI_SKILL,
          PYTHON_SKILL,
          SLACK_SKILL,
          CLOUDANT_SKILL,
          LLM_SKILL,
          OPENSHIFT_SKILL,
        ],
      },
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
        contribution: `In this research project, I was the lead developer contributing to the project, both on the frontend (100% implemented) and the backend. The implementation of the canvas allowed us to conduct user studies where we evaluated Group Brainstorming with an AI Agent. The results were presented in two papers:
- "AI and the Future of Collaborative Work: Group Ideation with an LLM in a Virtual Canvas" presented at CHIWORK '24: Annual Symposium on Human-Computer Interaction for Work. The paper received an honorable mention.
- "Collaborative Canvas: A Tool for Exploring LLM Use in Group Ideation Tasks" presented at the ACM International Conference on Intelligent User Interfaces 2024: 5th Workshop on Human-AI Co-Creation with Generative Models. I had the opportunity to be the first author of this paper and to present it in person at the IUI 2024 conference held in Greenville, South Carolina 🇺🇸.
`,
        skills: [
          SVELTE_SKILL,
          SASS_SKILL,
          HTML_SKILL,
          TYPESCRIPT_SKILL,
          CARBON_SKILL,
          FASTAPI_SKILL,
          PYTHON_SKILL,
          CLOUDANT_SKILL,
          LLM_SKILL,
          OPENSHIFT_SKILL,
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
          CARBON_SKILL,
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
          CARBON_SKILL,
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
