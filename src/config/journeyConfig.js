export default {
  locations: [
    {
      id: 1,
      code: "udine",
      lat: 46.067972927343796,
      long: 13.223908544183098,
      detail: {
        title: "Udine, Italy",
      },
    },
    {
      id: 2,
      code: "milano",
      lat: 45.47587419475043,
      long: 9.22748120713425,
      detail: {
        title: "Milano, Italy",
      },
    },
    {
      id: 3,
      code: "valencia",
      lat: 39.480695351340025,
      long: -0.34020292438611577,
      detail: {
        title: "Valencia, Spain",
      },
    },
    {
      id: 4,
      code: "trento",
      lat: 46.06695421306352,
      long: 11.151185982747508,
      detail: {
        title: "Trento, Italy",
      },
    },
    {
      id: 5,
      code: "zurich",
      lat: 47.37,
      long: 8.55,
      detail: {
        title: "Zürich, Switzerland",
      },
    },
  ],
  periods: [
    {
      id: 2,
      code: "bachelor_1",
      from: "2013-10-01",
      to: "2016-10-01",
      intervals: [
        {
          from: "2013-10-01",
          to: "2015-09-01",
        },
        {
          from: "2016-02-01",
          to: "2016-10-01",
        },
      ],
      detail: {
        title: "B.Sc. Computer Science & Engineering",
        place: "Politecnico di Milano",
        location: "Milano, Italy",
        logo: "assets/img/journey/polimi-logo.png",
        type: "education",
        html: "\
          <p>\
            I moved from Udine, my hometown, to Milano and there I started my\
            university studies at the <i>Politecnico di Milano</i>, choosing\
            <b>Computer Science and Engineer</b> - formally\
            <i>Ingegneria Informatica</i> - as Bachelor Degree.\
          </p>\
          <p>\
            During these years I had the opportunity to study subjects related to\
            different areas, spanning from Maths and Physics, to Computer Science,\
            Electronics and Industrial Engineering.\
          </p>\
          <p>\
            For the final, in a team with other colleagues, we designed and developed\
            an existing board game in <i>Java</i>.\
          </p>\
        ",
        url: "https://www.polimi.it/",
      },
      locationId: 2,
    },
    {
      id: 3,
      code: "erasmus",
      from: "2015-09-01",
      to: "2016-02-01",
      intervals: [
        {
          from: "2015-09-01",
          to: "2016-02-01",
        },
      ],
      detail: {
        title: "Erasmus+ Study",
        place: "Universitat Politecnica de Valencia",
        location: "Valencia, Spain",
        logo: "assets/img/journey/upv-logo.png",
        type: "education",
        html: "\
          <p>\
            I participated in the <b>Erasmus+</b> programme and I stayed for five\
            months in Valencia, Spain. I studied at the\
            <i>Universitat Politècnica de València</i> where I followed both\
            theoretical and practical courses related to:\
          </p>\
          <ul>\
            <i>\
              <li>Network Design and Maintainance</li>\
              <li>Data Bases Design and Management</li>\
              <li>VPN and Tunelling</li>\
              <li>Data Structures and Algorithms</li>\
            </i>\
          </ul>\
          <p>\
            I enjoyed this period in Spain also because it was challenging! I had to\
            study and take the <b>exams in Spanish</b>, a language didn't know at the\
            beginning, and I had to change my <i>study method</i> in order to achieve\
            good results in the Spanish academic system that is focused on\
            <i>continuous assessment</i> and lots of practical sessions.\
          </p>\
        ",
        url: "http://www.upv.es/",
      },
      locationId: 3,
    },
    {
      id: 5,
      code: "master",
      from: "2016-10-01",
      to: "2019-05-01",
      intervals: [
        {
          from: "2016-10-01",
          to: "2019-05-01",
        },
      ],
      detail: {
        title: "M.Sc. Computer Science & Engineering",
        place: "Politecnico di Milano",
        location: "Milano, Italy",
        logo: "assets/img/journey/polimi-logo.png",
        type: "education",
        html: '\
          <p>\
            I studied <b>Computer Science and Engineering</b> at\
            <i>Politecnico di Milano</i> as Master degree. In this period I strengthen\
            my skills in Computer Science by choosing advanced subjects such as:\
          </p>\
          <ul>\
            <i>\
              <li>Software Engineering</li>\
              <li>Full-Stack Development</li>\
              <li>Internet of Things</li>\
              <li>Data Integration and Big Data</li>\
            </i>\
          </ul>\
          <p>\
            During my last year I worked on a project that then became the foundation\
            of my Thesis:\
            <i>\
              "A Conceptual Modeling Approach for the Rapid Development of Chatbots\
              for Conversational Data Exploration".\
            </i>\
            Thanks to this activity, I got closer to the academic world and I had the\
            opportunity to <b>publish an article</b> based on the Thesis:\
            <i>Conversational Data Exploration, Springer 2019</i>.\
          </p>\
        ',
        url: "https://www.polimi.it/",
      },
      locationId: 2,
    },
    {
      id: 6,
      code: "fbk",
      from: "2019-05-01",
      to: "2021-05-01",
      intervals: [
        {
          from: "2019-05-01",
          to: "2021-05-01",
        },
      ],
      detail: {
        title: "Data and Full Stack Engineer",
        place: "Fondazione Bruno Kessler",
        location: "Trento, Italy",
        logo: "assets/img/journey/fbk-logo.png",
        type: "work",
        html: "\
          <p>\
            I worked as a <b>Data and Full Stack Engineer</b> - formally\
            <i>Technologist</i> - in the <i>CoMuNe Lab</i> at <i>FBK</i>, an\
            interdisciplinary team focused on the research of\
            <i>Complex Multilayer Networks</i>.\
          </p>\
          <p>About me and this job:</p>\
          <ul>\
            <li>\
              I designed and developed scalable\
              <b>processing pipelines</b> to analyze, integrate and efficiently store\
              data coming from multiple sources and in different formats\
            </li>\
            <li>\
              I had the opportunity to study and put in practice\
              <b>data visualization</b> techniques in particular for the Web\
              development, exploiting open source libraries (such as <i>D3</i> and\
              <i>Leaflet</i>) to create dynamic and interactive charts\
            </li>\
            <li>\
              I experimented and applied different\
              <b>full-stack development</b> technologies, using both <i>SQL</i> and\
              <i>NoSQL</i> databases, web back-end frameworks and front-end libraries\
            </li>\
            <li>\
              I collaborated to different research projects that resulted in\
              <b>scientific papers</b>, applying Data Science techniques and\
              state-of-the-art AI technologies\
            </li>\
            <li>\
              I designed and developed a web full-stack application for the\
              <b>World Health Organization</b> to process, store and dynamically\
              visualize NLP analyzed text data with <b>interactive charts</b> and\
              <b>maps</b>\
            </li>\
            <li>\
              I designed and configured a <b>cloud infrastructure</b> to host\
              different interconnected Linux based VMs for high computing tasks\
            </li>\
          </ul>\
        ",

        url: "https://www.fbk.eu/",
      },
      locationId: 4,
    },
    {
      id: 7,
      code: "overit",
      from: "2021-05-01",
      to: "2022-09-30",
      intervals: [
        {
          from: "2021-05-01",
          to: "2022-09-30",
        },
      ],
      detail: {
        title: "Technical Analyst",
        place: "OverIT S.p.A.",
        location: "Udine, Italy",
        logo: "assets/img/journey/overit-logo.png",
        type: "work",
        html: "\
          <p>\
            I worked as a <b>Technical Analyst</b> in the\
            <i>Geocall Product Development Group</i> at <i>OverIT</i>.\
          </p>\
          <p>In particular:</p>\
          <ul>\
            <li>\
              I performed in-depth <b>technical analysis</b> of data, business logic and\
              view layers of the existing software solution\
            </li>\
            <li>\
              I worked closely with business analysts to <b>define</b> the\
              <b>requirements</b> of new software functionalities to be integrated in\
              the <i>Product</i>, applying <b>Agile</b> methodologies such as Kanban and <b>Scrum</b>\
            </li>\
            <li>\
              I collaborated with the development teams to <b>design</b> the data and\
              object models, process flows, user experience, page layouts and system\
              integration structures based on <i>SOAP</i> and <i>REST</i>\
            </li>\
            <li>\
              I defined and distribute <b>development tasks</b> among the developers\
              and I carried on <b>code reviews</b> on their outputs\
            </li>\
            <li>\
              I tested and improved technical documents and conduct\
              <b>practical sessions</b> with international partners to technically\
              introduce them to the <i>Product</i>\
            </li>\
          </ul>\
        ",
        url: "https://www.overit.it/",
      },
      locationId: 1,
    },
    {
      id: 8,
      code: "apple",
      from: "2022-10-01",
      to: null,
      intervals: [
        {
          from: "2022-10-01",
          to: null,
        },
      ],
      detail: {
        title: "Full Stack Engineer",
        place: "Apple Inc.",
        location: "Zürich, Switzerland",
        logo: "assets/img/journey/apple-logo.png",
        type: "work",
        html: "\
          <p>\
            On a new <b>adventure</b>!\
          </p>\
        ",
        url: "https://www.apple.com/",
      },
      locationId: 5,
    },
  ],
};
