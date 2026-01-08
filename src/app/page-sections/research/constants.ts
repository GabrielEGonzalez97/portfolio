import { IPublication } from "@common/interfaces";

export const PUBLICATIONS: IPublication[] = [
  {
    title:
      'Bridging the Gap: Unifying HCI & ML Perspectives on Mutual Theory of Mind',
    bestPaperAwards: [],
    abstract: `Within the machine learning community, the notion of theory of mind is commonly understood as an emergent property of models that are able to make predictions about the behavior of others. Within the HCI community, the notion of "mental models" incorporates information about the knowledge, skills, and intentions of an AI agent. In this technical position paper, we synthesize these two views and offer a single point of view on mutual theory of mind (MToM): what it is and how it can be achieved between one (or more) humans and one (or more) AI agents. Specifically, we argue that uni-directional, first-order models (e.g., a human's mental model of an AI agent) are not enough to achieve MToM; rather, at least second-order models (e.g., an AI agent explicitly models a human's understanding of the AI's knowledge and skills in addition to the human's knowledge and skills) are required to fully see the benefits of MToM. Our analysis aims to provide a roadmap for the design of MToM within human-AI collaborative scenarios and identifies the complexities of its implementation and evaluation.`,
    publicationLink:
      'https://tomworkshop.github.io/assets/acceptedPapers/3_Bridging_Gap_HCI_ML.pdf',
    publicationDate: 'August 16, 2025',
    presentedAt:
      'Workshop on Theory-of-Mind at International Joint Conference on Artificial Intelligence (IJCAI) 2025',
    authors: [
      {
        name: 'Zahra Ashktorab',
        highlightName: false,
      },
      {
        name: 'Djallel Bouneffouf',
        highlightName: false,
      },
      {
        name: 'Kristina Brimijoin',
        highlightName: false,
      },
      {
        name: 'Rachel Bellamy',
        highlightName: false,
      },
      {
        name: 'Murray Campbell',
        highlightName: false,
      },
      {
        name: 'Arielle Goldberg',
        highlightName: false,
      },
      {
        name: 'Gabriel Enrique Gonzalez',
        highlightName: true,
      },
      {
        name: 'Stephanie Houde',
        highlightName: false,
      },
      {
        name: 'Miao Liu',
        highlightName: false,
      },
      {
        name: 'Darío Andrés Silva Moran',
        highlightName: false,
      },
      {
        name: 'Matt Riemer',
        highlightName: false,
      },
      {
        name: 'Justin D. Weisz',
        highlightName: false,
      },
    ],
  },
  {
    title:
      'Controlling AI Agent Participation in Group Conversations: A Human-Centered Approach',
    bestPaperAwards: [],
    abstract: `Conversational AI agents are commonly applied within single-user, turn-taking scenarios. The interaction mechanics of these scenarios are trivial: when the user enters a message, the AI agent produces a response. However, the interaction dynamics are more complex within group settings. How should an agent behave in these settings? We report on two experiments aimed at uncovering users' experiences of an AI agent's participation within a group, in the context of group ideation (brainstorming). In the first study, participants benefited from and preferred having the AI agent in the group, but participants disliked when the agent seemed to dominate the conversation and they desired various controls over its interactive behaviors. In the second study, we created functional controls over the agent's behavior, operable by group members, to validate their utility and probe for additional requirements. Integrating our findings across both studies, we developed a taxonomy of controls for when, what, and where a conversational AI agent in a group should respond, who can control its behavior, and how those controls are specified and implemented. Our taxonomy is intended to aid AI creators to think through important considerations in the design of mixed-initiative conversational agents.`,
    publicationLink: 'https://dl.acm.org/doi/full/10.1145/3708359.3712089',
    publicationDate: 'March 24, 2025',
    presentedAt:
      'ACM International Conference on Intelligent User Interfaces 2025',
    authors: [
      {
        name: 'Stephanie Houde',
        highlightName: false,
      },
      {
        name: 'Kristina Brimijoin',
        highlightName: false,
      },
      {
        name: 'Michael Muller',
        highlightName: false,
      },
      {
        name: 'Steven I. Ross',
        highlightName: false,
      },
      {
        name: 'Darío Andrés Silva Moran',
        highlightName: false,
      },
      {
        name: 'Gabriel Enrique Gonzalez',
        highlightName: true,
      },
      {
        name: 'Siya Kunde',
        highlightName: false,
      },
      {
        name: 'Morgan A. Foreman',
        highlightName: false,
      },
      {
        name: 'Justin D. Weisz',
        highlightName: false,
      },
    ],
  },
  {
    title: 'ACE: Moving toward Co-Investigation with the Agentic Code Explorer',
    bestPaperAwards: [],
    abstract: `In this workshop demonstration paper, we present ACE -- the Agentic Code Explorer -- a prototype agentic system designed to help software developers conduct sensemaking tasks within large code repositories. The design of this system was motivated by the observation that software developers often use AI coding assistants to help understand and ask questions about source code prior to planning and implementing code changes. Using ACE as a testbed, we present initial steps to explore whether a large language model (LLM)-based agent that is capable of invoking external tools and iteratively refining its own outputs (per the agentic design pattern) might be able to robustly support such a code discovery process. In this way, we use ACE as a means to explore more generally how generative models need not solely focus on the artifact production aspects of co-creative tasks; instead they might focus on the co-investigative activities where initial understanding and plans are formed.`,
    publicationLink:
      'https://hai-gen.github.io/2025/papers/P3-HAI-GEN-2025%20Silva%20Moran%20et%20al.pdf',
    publicationDate: 'March 24, 2025',
    presentedAt:
      'ACM International Conference on Intelligent User Interfaces 2025: 6th Workshop on Human-AI Co-Creation with Generative Models',
    authors: [
      {
        name: 'Darío Andrés Silva Moran',
        highlightName: false,
      },
      {
        name: 'Kristina Brimijoin',
        highlightName: false,
      },
      {
        name: 'Gabriel Enrique Gonzalez',
        highlightName: true,
      },
      {
        name: 'Stephanie Houde',
        highlightName: false,
      },
      {
        name: 'Michael Muller',
        highlightName: false,
      },
      {
        name: 'Michelle Brachman',
        highlightName: false,
      },
      {
        name: 'Justin D. Weisz',
        highlightName: false,
      },
    ],
  },
  {
    title:
      'Establishing the Cooperative Game Wavelength as a Testbed to Explore Mutual Theory of Mind',
    bestPaperAwards: [],
    abstract: `Machine learning (ML) and human-centered AI (HCAI) researchers have considered numerous methods to evaluate Theory of Mind (ToM)-like capabilities in artificial intelligence (AI). These methods have independently captured multiple aspects of ToM capabilities (i.e., beliefs, goals, knowledge). Recent research has proposed exploring the Mutual Theory of Mind (MToM) as a way to understand how a human's mental model and an AI’s user model can be mutually shaped to benefit future interactions. However, there is a lack of methods for understanding the development and impact of MToM-like capabilities in human-AI teams. We propose using a collaborative party game called Wavelength as a testbed to explore the complexities of MToM-like capabilities in human-AI teams. We compare Wavelength to other methods (i.e., Overcooked and Hanabi) and discuss how game mechanics help players mutually construct, recognize, and revise their models of their teammates. Lastly, we briefly suggest how future work can explore MToM with Wavelength.`,
    publicationLink: 'https://arxiv.org/abs/2505.03770',
    publicationDate: 'February 25, 2025',
    presentedAt:
      'AAAI 2025: Theory of Mind for Artificial Intelligence Workshop',
    authors: [
      {
        name: 'Katelyn Morrison',
        highlightName: false,
      },
      {
        name: 'Zahra Ashktorab',
        highlightName: false,
      },
      {
        name: 'Djallel Bouneffouf',
        highlightName: false,
      },
      {
        name: 'Gabriel Enrique Gonzalez',
        highlightName: true,
      },
      {
        name: 'Justin D. Weisz',
        highlightName: false,
      },
    ],
  },
  {
    title:
      'AI and the Future of Collaborative Work: Group Ideation with an LLM in a Virtual Canvas',
    bestPaperAwards: [
      {
        award: 'Honorable Mention',
        link: 'https://www.acm.org/conferences/best-paper-awards',
      },
    ],
    abstract:
      'The introduction of generative AI into multi-user applications raises novel considerations for the future of collaborative work. How might collaborative work practices change? How might we incorporate generative AI into shared tools with users’ needs at the forefront? We examine these questions in the context of a remote team conducting ideation tasks – an example of collaborative work enabled by a shared digital workspace. We conducted a user study with 17 professionals experienced with virtual group ideation workshops. Our study examined their use of the Collaborative Canvas, a virtual canvas tool with integrated generative AI capabilities that we created as a probe. Participants saw value in using generative AI to assist with group facilitation and to augment perspectives and ideas. However, they worried about losing human perspectives and critical thinking, as well as reputational harms resulting from harmful AI outputs. Participants shared suggestions for appropriate ways to incorporate generative AI capabilities within multi-user applications and identified needs for transparency of content ownership, private digital spaces, and specialized AI capabilities. Based on participants’ insights, we share implications and opportunities for the incorporation of generative AI into collaborative work in ways that place user needs at the forefront.',
    publicationLink: 'https://dl.acm.org/doi/10.1145/3663384.3663398',
    publicationDate: 'June 25, 2024',
    presentedAt:
      "CHIWORK '24: Annual Symposium on Human-Computer Interaction for Work",
    authors: [
      {
        name: 'Jessica He',
        highlightName: false,
      },
      {
        name: 'Stephanie Houde',
        highlightName: false,
      },
      {
        name: 'Gabriel Enrique Gonzalez',
        highlightName: true,
      },
      {
        name: 'Darío Andrés Silva Moran',
        highlightName: false,
      },
      {
        name: 'Steven I. Ross',
        highlightName: false,
      },
      {
        name: 'Michael Muller',
        highlightName: false,
      },
      {
        name: 'Justin D. Weisz',
        highlightName: false,
      },
    ],
  },
  {
    title: 'Group Brainstorming with an AI Agent: Creating and Selecting Ideas',
    bestPaperAwards: [],
    abstract: `Researchers have experimented with ways of providing computer assistance to the co-creative task of brainstorming. Now, large language models (LLMs) present new opportunities and challenges to bring an AI agent directly into a brainstorming session. 
    We built an AI agent to act as an interactive participant in online conversational brainstorming for a distributed workforce. Eighteen colleagues participated in 6 brainstorming experiences (3 people per replication, 3 topics across 3 sessions, counterbalanced) with an AI as a “fourth participant.” At the end of each session, participants chose 3 ideas as “final” i.e., to be recommended to an imagined client. Humans and AI collaborated in creating, evaluating, refining, and selecting a larger number ideas through five different patterns of idea-development.
    Using frameworks from mixed initiative interfaces, we analyze five types of actions taken by humans and by AI, and we begin to answer the research question: How does an idea become final?`,
    publicationLink:
      'https://computationalcreativity.net/iccc24/papers/ICCC24_paper_18.pdf',
    publicationDate: 'June 17, 2024',
    presentedAt:
      'International Conference on Computational Creativity, ICCC’24',
    authors: [
      {
        name: 'Michael Muller',
        highlightName: false,
      },
      {
        name: 'Stephanie Houde',
        highlightName: false,
      },
      {
        name: 'Gabriel Enrique Gonzalez',
        highlightName: true,
      },
      {
        name: 'Kristina Brimijoin',
        highlightName: false,
      },
      {
        name: 'Steven I. Ross',
        highlightName: false,
      },
      {
        name: 'Darío Andrés Silva Moran',
        highlightName: false,
      },
      {
        name: 'Justin D. Weisz',
        highlightName: false,
      },
    ],
  },
  {
    title:
      'Collaborative Canvas: A Tool for Exploring LLM Use in Group Ideation Tasks',
    bestPaperAwards: [],
    abstract:
      'We present the Collaborative Canvas, a prototype tool for exploring ways for groups to interact with large language models (LLMs) in ideation tasks. Collaborative Canvas provides a shared, graphical canvas in which multiple parties – human and LLM – can share ideas in the form of virtual “sticky notes” that can be moved around the canvas. The development of Collaborative Canvas raised numerous issues about the role of an LLM in group interactions: is it useful, what role does it play within the group’s workflow, and how do people interact with generated content? A preliminary examination of the Collaborative Canvas shows that users found the generative capabilities to be useful, although they preferred to review and filter generated content before sharing it with the group. Users also speculated that the role of the AI could extend into facilitating group brainstorming rather than being confined to idea generation. Our work motivates the study of human-AI co-creation in group settings beyond dyadic interactions.',
    publicationLink: 'https://hai-gen.github.io/2024/papers/1541-Gonzalez.pdf',
    publicationDate: 'March 18, 2024',
    presentedAt:
      'ACM International Conference on Intelligent User Interfaces 2024: 5th Workshop on Human-AI Co-Creation with Generative Models',
    authors: [
      {
        name: 'Gabriel Enrique Gonzalez',
        highlightName: true,
      },
      {
        name: 'Darío Andrés Silva Moran',
        highlightName: false,
      },
      {
        name: 'Stephanie Houde',
        highlightName: false,
      },
      {
        name: 'Jessica He',
        highlightName: false,
      },
      {
        name: 'Steven I. Ross',
        highlightName: false,
      },
      {
        name: 'Michael Muller',
        highlightName: false,
      },
      {
        name: 'Siya Kunde',
        highlightName: false,
      },
      {
        name: 'Justin D. Weisz',
        highlightName: false,
      },
    ],
  },
  {
    title:
      'Datos Abiertos Integrados a la Gestión de Residuos de Aparatos Eléctricos y Electrónicos',
    bestPaperAwards: [],
    abstract:
      'Las montañas de aparatos eléctricos y electrónicos (AEEs) que se desechan están a la vista en todas las ciudades del mundo y eso impide un desarrollo que pueda calificarse como sostenible. Sin embargo, es necesario cuantificar la evolución en la generación y tratamiento de RAEEs (residuos de aparatos eléctricos y electrónicos, e-waste, en inglés). Para cualquier tipo de gestión y planificación, hacen falta datos fiables sobre los RAEEs de manera sostenida a lo largo del tiempo, desde su ingreso a los puntos de recepción hasta la salida de productos reutilizados, elementos reciclados y materiales. Pero esa tarea requiere de un esfuerzo que va desde la decisión política, pasando por aspectos metodológicos, generación de capacidades y competencias en las personas, hasta una implementación y procesamiento que se pueda sostener en el tiempo. La dificultad en el contexto real es tal, que solamente hay casos aislados donde se recopilan estadísticas en materia de RAEEs. Y cuando se tienen datos, es importante que sean comparables a nivel internacional y nacional. Por ello, aquí se propone una tabla de equivalencias con un sistema de categorías aceptado internacionalmente.',
    publicationLink:
      'https://rtyc.utn.edu.ar/index.php/ajea/article/view/1146/1059',
    publicationDate: 'December 23, 2022',
    presentedAt:
      '10mo Congreso Nacional de Ingeniería Informática y Sistemas de Información (CoNaIISI)',
    authors: [
      {
        name: 'Gabriel Enrique Gonzalez',
        highlightName: true,
      },
      {
        name: 'Sebastián Barbieri',
        highlightName: false,
      },
      {
        name: 'Gastón Montaruli',
        highlightName: false,
      },
      {
        name: 'Elías Todorovich',
        highlightName: false,
      },
    ],
  },
];
