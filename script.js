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
        notInPlace: {
          text: "Choose an upcoming maker activity and identify one part that may be difficult to join. Ask staff what guidance they need to offer another way to participate.",
          resource: {
            title: "Project ENABLE training for librarians",
            url: "https://projectenable.syr.edu/training/"
          }
        },
        inProgress: {
          text: "Try one accessibility strategy staff have been learning in an upcoming activity. Afterward, share what worked and identify one question to take to a trainer or community partner.",
          resource: {
            title: "Project ENABLE: Planning Inclusive Programs",
            url: "https://projectenable.syr.edu/training/modules/topics_list/module/132"
          }
        }
      },
      {
        ids: [4, 5, 6],
        title: "Review access to your makerspace",
        notInPlace: {
          text: "Before the next program, follow the route from the entrance to the maker space. Check whether participants can reach a work surface and use the tools needed for the activity. Choose one barrier to address.",
          resource: {
            title: "University of Illinois: Makerspace Accessibility Assessment",
            url: "https://publish.illinois.edu/imls-a11y/makerspace-accessibility-assessment/"
          },
          additionalResource: {
            title: "University of Washington DO-IT: Making a Makerspace?",
            url: "https://doit.uw.edu/brief/making-a-makerspace-guidelines-for-accessibility-and-universal-design/"
          }
        },
        inProgress: {
          text: "Test one access change already underway during a maker activity. Ask a participant whether it helped them use the space or tools. Continue adjusting activities as needed.",
          resource: {
            title: "University of Washington DO-IT: Making a Makerspace?",
            url: "https://doit.uw.edu/brief/making-a-makerspace-guidelines-for-accessibility-and-universal-design/"
          },
          additionalResource: {
            title: "University of Illinois: Makerspace Accessibility Assessment",
            url: "https://publish.illinois.edu/imls-a11y/makerspace-accessibility-assessment/"
          }
        }
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
        notInPlace: {
          text: "Invite youth with disabilities and caregivers to comment on an upcoming maker activity. Ask what interests them and what might make it hard for them to take part in activities. Use one answer to change the plan.",
          resource: {
            title: "ALA Accessible Conversations facilitation guide",
            url: "https://www.ala.org/sites/default/files/tools/content/230614-ppo-accessible-conversations-guide-WEB.pdf"
          }
        },
        inProgress: {
          text: "Return to youth and caregivers who shared feedback. Show one change you made, ask whether it helped, and use their response to revise the next activity.",
          resource: {
            title: "Carrie Banks: Nothing About Us Without Us (video)",
            url: "https://www.youtube.com/watch?v=XaNWRovs4LQ"
          }
        }
      },
      {
        ids: [9, 10],
        title: "Build connections that can support inclusion",
        notInPlace: {
          text: "Ask one colleague or community organization to review an upcoming activity for an access barrier staff may have missed. Agree on one change the library can make.",
          resource: {
            title: "ILRU directory of Centers for Independent Living",
            url: "https://www.ilru.org/cil-directory"
          }
        },
        inProgress: {
          text: "Before the next program, agree with a colleague or current partner on a specific role, such as reviewing materials or offering support. Debrief afterward to decide what to repeat.",
          resource: {
            title: "Programming Librarian: Partnering for Accessibility",
            url: "https://programminglibrarian.org/articles/partnering-accessibility-small-rural-libraries"
          }
        }
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
        notInPlace: {
          text: "Update the next maker program listing to describe what participants will do and how to request support. Put the contact information in the listing so families can find it before deciding to attend.",
          resource: {
            title: "ALA Accessibility as a Team Effort: event listing example",
            url: "https://www.ala.org/advocacy/diversity/odlos-blog/accessibility-team-effort"
          }
        },
        inProgress: {
          text: "Ask someone unfamiliar with the program to find its activity details and access contact in the announcement. Clarify anything they have trouble finding before you post the next one.",
          resource: {
            title: "ALA Accessibility as a Team Effort: event listing example",
            url: "https://www.ala.org/advocacy/diversity/odlos-blog/accessibility-team-effort"
          }
        }
      },
      {
        ids: [13],
        title: "Expand how you share program information",
        notInPlace: {
          text: "Ask a school or local disability organization to share the next maker program notice with families who may not see the library's usual announcements.",
          resource: {
            title: "Programming Librarian: publicity through partnerships",
            url: "https://programminglibrarian.org/articles/mutual-support-libraries-and-community-partners"
          }
        },
        inProgress: {
          text: "Ask a few participants how they heard about the last maker program. Use their answers to keep one effective channel and try a different route for the next event.",
          resource: {
            title: "ALA: Evaluating Your Outreach",
            url: "https://www.ala.org/advocacy/advleg/publicawareness/campaign%40yourlibrary/prtools/handbook/evaluation"
          }
        }
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
        notInPlace: {
          text: "Before an upcoming activity, prepare a second way to complete one key step. Decide how staff can offer individual guidance if a participant needs it during the program.",
          resource: {
            title: "ALA Children and Teens with Disabilities Toolkit",
            url: "https://www.ala.org/accessibility/children-and-teens-disabilities"
          }
        },
        inProgress: {
          text: "After the next activity, note when staff changed instructions or offered individual help. Ask participants whether those changes helped and revise one option for the next session.",
          resource: {
            title: "Project ENABLE: Planning Inclusive Programs",
            url: "https://projectenable.syr.edu/training/modules/topics_list/module/132"
          }
        }
      },
      {
        ids: [16],
        title: "Create more opportunities for youth choice",
        notInPlace: {
          text: "Offer participants a choice that changes the activity, such as which materials they use or what they create. Prepare the options before the program so either choice is possible.",
          resource: {
            title: "CAST: Optimize choice and autonomy",
            url: "https://udlguidelines.cast.org/engagement/interests-identities/choice-autonomy/"
          }
        },
        inProgress: {
          text: "Ask participants which choices they used and what they wished they could decide for themselves. Use one suggestion to change the next activity.",
          resource: {
            title: "CAST: Optimize choice and autonomy",
            url: "https://udlguidelines.cast.org/engagement/interests-identities/choice-autonomy/"
          }
        }
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

function getAreaRecommendations(area, responses) {
  let allInPlace = true;
  for (let i = 0; i < area.questions.length; i++) {
    if (responses[area.questions[i].id] !== 'in-place') {
      allInPlace = false;
    }
  }

  if (allInPlace) {
    return [area.maintenance];
  }

  const steps = [];
  for (let i = 0; i < area.recommendations.length; i++) {
    const recommendation = area.recommendations[i];
    let hasNotInPlace = false;
    let hasInProgress = false;

    for (let j = 0; j < recommendation.ids.length; j++) {
      const answer = responses[recommendation.ids[j]];
      if (answer === 'not-in-place') {
        hasNotInPlace = true;
      } else if (answer === 'in-progress') {
        hasInProgress = true;
      }
    }

    // A starting step takes priority when this group has mixed answers.
    if (hasNotInPlace || hasInProgress) {
      const choice = hasNotInPlace ? recommendation.notInPlace : recommendation.inProgress;
      steps.push({
        title: recommendation.title,
        text: choice.text,
        resource: choice.resource,
        additionalResource: choice.additionalResource
      });
    }
  }
  return steps;
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

  const steps = getAreaRecommendations(area, responses);
  for (let i = 0; i < steps.length; i++) {
    addResult(steps[i].title, steps[i].text, steps[i] === area.maintenance);
  }

  results.hidden = false;
}

function isAreaComplete(areaKey) {
  const questions = areaData[areaKey].questions;
  const responses = allResponses[areaKey] || {};

  for (let i = 0; i < questions.length; i++) {
    if (!responses[questions[i].id]) {
      return false;
    }
  }

  return true;
}

function addPrintText(parent, tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  parent.appendChild(element);
  return element;
}

function addPrintResource(parent, resource, label) {
  const resourceLine = document.createElement('p');
  resourceLine.className = 'print-resource';
  addPrintText(resourceLine, 'strong', label);
  const link = document.createElement('a');
  link.href = resource.url;
  link.textContent = resource.title;
  resourceLine.appendChild(link);
  const address = addPrintText(resourceLine, 'span', resource.url);
  address.className = 'print-url';
  parent.appendChild(resourceLine);
}

function buildPrintReport() {
  const report = document.getElementById('printReport');
  report.innerHTML = '';
  addPrintText(report, 'h1', 'Inclusive Makerspace Planner');
  addPrintText(report, 'p', 'Your responses and next steps · ' + new Date().toLocaleDateString());

  const keys = Object.keys(areaData);
  let completedAreas = 0;
  for (let i = 0; i < keys.length; i++) {
    const areaKey = keys[i];
    if (!isAreaComplete(areaKey)) {
      continue;
    }
    completedAreas++;

    const area = areaData[areaKey];
    const responses = allResponses[areaKey];
    const section = document.createElement('section');
    section.className = 'print-area';
    addPrintText(section, 'h2', area.title);
    addPrintText(section, 'h3', 'Your responses');
    const answerList = document.createElement('ul');
    answerList.className = 'print-responses';
    for (let j = 0; j < area.questions.length; j++) {
      const question = area.questions[j];
      for (let k = 0; k < responseOptions.length; k++) {
        if (responseOptions[k].value === responses[question.id]) {
          addPrintText(answerList, 'li', question.title + ': ' + responseOptions[k].label);
          break;
        }
      }
    }
    section.appendChild(answerList);

    addPrintText(section, 'h3', 'Suggested next steps');
    const steps = getAreaRecommendations(area, responses);
    for (let j = 0; j < steps.length; j++) {
      const step = document.createElement('div');
      step.className = 'print-step';
      addPrintText(step, 'h4', steps[j].title);
      addPrintText(step, 'p', steps[j].text);
      if (steps[j].resource) {
        addPrintResource(step, steps[j].resource, 'Helpful resource: ');
      }
      if (steps[j].additionalResource) {
        addPrintResource(step, steps[j].additionalResource, 'Also useful: ');
      }
      section.appendChild(step);
    }
    report.appendChild(section);
  }

  if (completedAreas === 0) {
    addPrintText(report, 'p', 'Complete an area in the planner to see your suggested next steps here.');
  }

  const action = document.getElementById('actionStep').value.trim();
  if (action) {
    const section = document.createElement('section');
    section.className = 'print-area';
    addPrintText(section, 'h2', 'My next action');
    addPrintText(section, 'p', action);
    report.appendChild(section);
  }
  addPrintText(report, 'p', 'Based on research from the IMLS-funded Making for Everyone project.');
  const projectLine = addPrintText(report, 'p', 'Project website: ');
  const projectLink = document.createElement('a');
  projectLink.href = 'https://sites.google.com/view/makingforeveryone/home';
  projectLink.textContent = projectLink.href;
  projectLine.appendChild(projectLink);

  const resourcesLine = addPrintText(report, 'p', 'More project resources: ');
  const resourcesLink = document.createElement('a');
  resourcesLink.href = 'https://sites.google.com/view/makingforeveryone/resources';
  resourcesLink.textContent = resourcesLink.href;
  resourcesLine.appendChild(resourcesLink);
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
  document.getElementById('saveReport').addEventListener('click', function () {
    buildPrintReport();
    window.print();
  });
  window.addEventListener('beforeprint', buildPrintReport);

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
