// A new key prevents old test answers from being attached to renumbered practices.
const STORAGE_KEY = "makingForEveryoneResponsesV2";
const ACTION_KEY = "makingForEveryoneAction";

const areaData = {
  "getting-ready": {
    title: "Getting Ready",
    intro: "",
    questions: [
      {
        id: 1,
        title: "Staff Mindset",
        text: "Staff consider how youth with disabilities can participate when planning maker activities.",
        help: "For example, staff may adapt activities or offer different ways to participate."
      },
      {
        id: 2,
        title: "Access to accessibility knowledge and support",
        text: "Staff know where to seek accessibility guidance or support when needed."
      },
      {
        id: 3,
        title: "Staff training",
        text: "Staff have opportunities to build knowledge and skills to support youth with disabilities in maker programming."
      },
      {
        id: 4,
        title: "Access to the space",
        text: "Youth with disabilities can physically access the space where maker activities take place.",
        help: "Trace a participant's route to the program space, starting at the parking area or entrance. Can they use the doorways and any ramps or elevators along the way? Are the signs clear enough to help them find the room?"
      },
      {
        id: 5,
        title: "Space and furnishings",
        text: "The makerspace and its furnishings are arranged to support participants with different access needs.",
        help: "Can participants move through the room comfortably and reach the materials they need? Check whether they can use the seating and work surfaces."
      },
      {
        id: 6,
        title: "Tools and equipment",
        text: "Participants can use maker tools and equipment with assistance or alternatives when needed."
      }
    ],
    maintenance: {
      title: "Keep reviewing access and readiness",
      text: "Based on your responses, these practices are currently in place at your library. Keep checking that staff have the support they need and that the space and equipment work for participants as programs change."
    },
    recommendations: [
      {
        ids: [1, 2, 3],
        title: "Build staff readiness and knowledge",
        text: "Find one source of accessibility guidance for staff. It could be a local partner or a training opportunity."
      },
      {
        ids: [4, 5, 6],
        title: "Review access to your makerspace",
        text: "Walk through one upcoming maker activity from a participant's perspective and identify one access barrier you could address."
      }
    ]
  },

  "program-design": {
    title: "Program Design",
    intro: "Inclusive maker programming starts with listening to the community. Staff can use what they learn to revise activities and work with others to make them more accessible.",
    questions: [
      {
        id: 7,
        title: "Understanding community needs",
        text: "Staff ask youth with disabilities and their caregivers what they want from maker activities and what has helped or hindered their participation."
      },
      {
        id: 8,
        title: "Responding to community needs",
        text: "Staff use feedback from participants and community members to shape or revise maker programming."
      },
      {
        id: 9,
        title: "Community collaboration",
        text: "Staff work with community partners when planning or providing inclusive maker programming.",
        help: "A school or disability organization might be a partner. Youth and caregivers can be partners too."
      },
      {
        id: 10,
        title: "Internal collaboration",
        text: "Staff collaborate across library departments or roles when planning or supporting inclusive maker programming."
      }
    ],
    maintenance: {
      title: "Keep listening and adapting",
      text: "Based on your responses, these practices are currently in place at your library. Continue checking that programming reflects community interests and needs."
    },
    recommendations: [
      {
        ids: [7, 8],
        title: "Learn directly from youth and caregivers",
        text: "Ask youth and caregivers what interests them and what would help them take part in an upcoming maker activity. Use their feedback to make one change."
      },
      {
        ids: [9, 10],
        title: "Build connections that can support inclusion",
        text: "Ask a colleague or community partner for help with an upcoming maker program. They may know what would make it more accessible or what participants need."
      }
    ]
  },

  "promotion": {
    title: "Promotion",
    intro: "Outreach helps people learn about maker programs and decide whether they can take part. Program descriptions should make accessibility information easy to find.",
    questions: [
      {
        id: 11,
        title: "Communicating welcome and access",
        text: "Library outreach for maker programming communicates that youth with disabilities are welcome and explains where to find accessibility or accommodation information."
      },
      {
        id: 12,
        title: "Program accessibility information",
        text: "Program descriptions include information that can help participants decide whether an activity will meet their accessibility needs."
      },
      {
        id: 13,
        title: "Reaching the community",
        text: "Information about maker programs is shared through multiple channels to reach youth with disabilities and their families."
      }
    ],
    maintenance: {
      title: "Keep outreach and accessibility information current",
      text: "Based on your responses, these practices are currently in place at your library. Continue reviewing how program information is shared and updating accessibility information as programs and available supports change."
    },
    recommendations: [
      {
        ids: [11, 12],
        title: "Make accessibility information easier to find",
        text: "Review one upcoming program announcement and add or clarify one piece of information that could help participants understand its accessibility."
      },
      {
        ids: [13],
        title: "Expand how you share program information",
        text: "Find one more way to tell youth with disabilities and their families about your maker programs. A community partner could help share your next announcement."
      }
    ]
  },

  "engagement": {
    title: "Engagement",
    intro: "Accessibility does not end when a program begins. Participant needs and interests may differ from what staff anticipated, making communication and flexibility important during maker activities.",
    questions: [
      {
        id: 14,
        title: "Communication and flexibility",
        text: "Staff communicate with participants and adapt activities when their interests or support needs differ from what was planned."
      },
      {
        id: 15,
        title: "Individualized support",
        text: "Participants can receive individualized guidance or support during maker activities when needed."
      },
      {
        id: 16,
        title: "Youth choice and agency",
        text: "Participants have opportunities to make meaningful choices about how they participate and what they create."
      }
    ],
    maintenance: {
      title: "Maintain flexibility and choice",
      text: "Based on your responses, these practices are currently in place at your library. Continue responding to participants as their interests and support needs change."
    },
    recommendations: [
      {
        ids: [14, 15],
        title: "Build flexibility into participation",
        text: "Choose a maker activity and identify one way that it could be adapted if a participant needs a different way to engage."
      },
      {
        ids: [16],
        title: "Create more opportunities for youth choice",
        text: "Identify one part of an upcoming activity where participants could have more control over how they participate or what they create."
      }
    ]
  }
};

const responseOptions = [
  { value: "in-place", label: "In place" },
  { value: "in-progress", label: "In progress" },
  { value: "not-in-place", label: "Not in place" }
];

let activeAreaKey = null;
let allResponses = {};

function getStoredResponses() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return {};
  }

  try {
    const responses = JSON.parse(saved);
    return responses && typeof responses === 'object' ? responses : {};
  } catch (error) {
    return {};
  }
}

function updateAreaStatus(areaKey) {
  const questions = areaData[areaKey].questions;
  const responses = allResponses[areaKey] || {};
  const status = document.querySelector('[data-area-status="' + areaKey + '"]');
  let answered = 0;

  for (let i = 0; i < questions.length; i++) {
    if (responses[questions[i].id]) {
      answered++;
    }
  }

  if (answered === questions.length) {
    status.textContent = 'Completed';
    status.className = 'area-status completed';
  } else if (answered > 0) {
    status.textContent = answered + ' of ' + questions.length + ' answered';
    status.className = 'area-status';
  } else {
    status.textContent = 'Not started';
    status.className = 'area-status';
  }

  return answered;
}

function addQuestion(question, savedResponses) {
  const card = document.createElement('div');
  card.className = 'question-card';

  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = question.id + '. ' + question.title;
  fieldset.appendChild(legend);

  const content = document.createElement('div');
  content.className = 'question-content';
  const copy = document.createElement('div');
  copy.className = 'question-copy';

  const description = document.createElement('p');
  description.className = 'practice-text';
  description.id = 'practice-' + question.id;
  description.textContent = question.text;
  copy.appendChild(description);

  let descriptionIds = description.id;

  if (question.help) {
    const help = document.createElement('p');
    help.className = 'practice-help';
    help.id = 'help-' + question.id;
    help.textContent = question.help;
    copy.appendChild(help);
    descriptionIds += ' ' + help.id;
  }

  fieldset.setAttribute('aria-describedby', descriptionIds);

  const choices = document.createElement('div');
  choices.className = 'choice-row';

  for (let i = 0; i < responseOptions.length; i++) {
    const option = responseOptions[i];
    const label = document.createElement('label');
    label.className = 'choice';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'q' + question.id;
    input.value = option.value;
    input.checked = savedResponses[question.id] === option.value;
    if (input.checked) {
      label.classList.add('selected');
    }

    const text = document.createElement('span');
    text.textContent = option.label;
    label.appendChild(input);
    label.appendChild(text);
    choices.appendChild(label);

    input.addEventListener('change', function () {
      const labels = choices.querySelectorAll('.choice');
      for (let j = 0; j < labels.length; j++) {
        labels[j].classList.remove('selected');
      }
      label.classList.add('selected');

      if (!allResponses[activeAreaKey]) {
        allResponses[activeAreaKey] = {};
      }
      allResponses[activeAreaKey][question.id] = option.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allResponses));
      updateProgressAndResults();
    });
  }

  content.appendChild(copy);
  content.appendChild(choices);
  fieldset.appendChild(content);
  card.appendChild(fieldset);
  document.getElementById('questionList').appendChild(card);
}

function addResult(title, description, maintenance) {
  const card = document.createElement('article');
  card.className = maintenance ? 'result-card maintenance' : 'result-card';

  const heading = document.createElement('h4');
  heading.textContent = title;
  const paragraph = document.createElement('p');
  paragraph.textContent = description;

  card.appendChild(heading);
  card.appendChild(paragraph);
  document.getElementById('resultsList').appendChild(card);
}

function updateProgressAndResults() {
  const area = areaData[activeAreaKey];
  const responses = allResponses[activeAreaKey] || {};
  const answered = updateAreaStatus(activeAreaKey);
  const progress = document.getElementById('progressMessage');
  const results = document.getElementById('resultsSection');

  if (answered < area.questions.length) {
    progress.textContent = answered + ' of ' + area.questions.length + ' practices answered. Next steps will appear when all are answered.';
    results.hidden = true;
    document.getElementById('resultsList').innerHTML = '';
    return;
  }

  progress.textContent = 'All practices answered. Your next steps are below.';
  document.getElementById('resultsTitle').textContent = area.title + ': Next Steps';
  document.getElementById('resultsList').innerHTML = '';

  let allInPlace = true;
  for (let i = 0; i < area.questions.length; i++) {
    if (responses[area.questions[i].id] !== 'in-place') {
      allInPlace = false;
    }
  }

  if (allInPlace) {
    addResult(area.maintenance.title, area.maintenance.text, true);
  } else {
    for (let i = 0; i < area.recommendations.length; i++) {
      const recommendation = area.recommendations[i];
      let relevant = false;

      for (let j = 0; j < recommendation.ids.length; j++) {
        const answer = responses[recommendation.ids[j]];
        if (answer === 'in-progress' || answer === 'not-in-place') {
          relevant = true;
        }
      }

      if (relevant) {
        addResult(recommendation.title, recommendation.text, false);
      }
    }
  }

  results.hidden = false;
}

function openArea(areaKey) {
  activeAreaKey = areaKey;
  const area = areaData[areaKey];
  const panel = document.getElementById('areaPanel');
  const buttons = document.querySelectorAll('[data-area-target]');

  for (let i = 0; i < buttons.length; i++) {
    const selected = buttons[i].getAttribute('data-area-target') === areaKey;
    buttons[i].setAttribute('aria-expanded', selected ? 'true' : 'false');
    if (selected) {
      buttons[i].classList.add('selected');
    } else {
      buttons[i].classList.remove('selected');
    }
  }

  document.getElementById('areaTitle').textContent = area.title;
  const intro = document.getElementById('areaIntro');
  intro.textContent = area.intro;
  intro.hidden = !area.intro;

  const questionList = document.getElementById('questionList');
  questionList.innerHTML = '';
  const savedResponses = allResponses[areaKey] || {};
  for (let i = 0; i < area.questions.length; i++) {
    addQuestion(area.questions[i], savedResponses);
  }

  const nextAreaButtons = document.getElementById('nextAreaButtons');
  nextAreaButtons.innerHTML = '';
  const areaKeys = Object.keys(areaData);
  for (let i = 0; i < areaKeys.length; i++) {
    if (areaKeys[i] !== areaKey) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = areaData[areaKeys[i]].title;
      button.addEventListener('click', function () {
        openArea(areaKeys[i]);
      });
      nextAreaButtons.appendChild(button);
    }
  }

  panel.hidden = false;
  updateProgressAndResults();
  document.getElementById('areaTitle').focus();
  panel.scrollIntoView();
}

function closeArea() {
  const currentButton = document.querySelector('[data-area-target="' + activeAreaKey + '"]');
  document.getElementById('areaPanel').hidden = true;
  currentButton.setAttribute('aria-expanded', 'false');
  currentButton.classList.remove('selected');
  activeAreaKey = null;
  currentButton.focus();
}

document.addEventListener('DOMContentLoaded', function () {
  const diagram = document.getElementById('diagramImage');
  function showMissingDiagram() {
    diagram.parentElement.hidden = true;
    document.getElementById('diagramCaption').hidden = true;
    document.getElementById('diagramFallback').hidden = false;
  }
  diagram.addEventListener('error', showMissingDiagram);
  if (diagram.complete && diagram.naturalWidth === 0) {
    showMissingDiagram();
  }

  allResponses = getStoredResponses();
  const keys = Object.keys(areaData);
  for (let i = 0; i < keys.length; i++) {
    updateAreaStatus(keys[i]);
  }

  const buttons = document.querySelectorAll('[data-area-target]');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      const areaKey = this.getAttribute('data-area-target');
      if (activeAreaKey === areaKey) {
        closeArea();
      } else {
        openArea(areaKey);
      }
    });
  }

  document.getElementById('closeArea').addEventListener('click', closeArea);

  const action = document.getElementById('actionStep');
  const saveMessage = document.getElementById('saveMessage');
  const savedAction = localStorage.getItem(ACTION_KEY);
  if (savedAction) {
    action.value = savedAction;
    saveMessage.hidden = false;
  }
  action.addEventListener('input', function () {
    if (action.value.trim()) {
      localStorage.setItem(ACTION_KEY, action.value);
      saveMessage.hidden = false;
    } else {
      localStorage.removeItem(ACTION_KEY);
      saveMessage.hidden = true;
    }
  });
});
