document.addEventListener('DOMContentLoaded', (event) => {
    const profileButton = document.getElementById('profileButton');
    const dropdownContent = document.getElementById('dropdownContent');
    profileButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', () => {
        window.location.href = "index.html";
    });

    document.addEventListener('click', function (event) {
        if (!profileButton.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    // Default highlight and show timeline for "Class"
    const classOption = document.getElementById('classOption');
    highlightOption(classOption);
    generateTimeline();
    showSessionDetails(1); // Default to session 1
});

function highlightOption(element) {
    const options = document.querySelectorAll('.sidebar ul li');
    options.forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
}

function generateTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    timelineContainer.innerHTML = `<div class="timeline-header">Sessions</div>`;
    const timeline = document.createElement('div');
    timeline.className = 'timeline';
    for (let i = 1; i <=50; i++) {
        const button = document.createElement('button');
        button.className = 'timeline-button';
        button.textContent = i;
        if (i === 1) {
            button.classList.add('selected'); // Highlight session 1 by default
        }
        button.onclick = () => {
            document.querySelectorAll('.timeline-button').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            showSessionDetails(i);
        };
        timeline.appendChild(button);
    }
    timelineContainer.appendChild(timeline);
}

function showTimeline(optionName) {
    const timelineContainer = document.getElementById('timelineContainer');
    timelineContainer.style.display = 'none';
    if (optionName === 'Class') {
        generateTimeline();
        timelineContainer.style.display = 'block';
    }
}

function showTimeline(optionName) {
    const timelineContainer = document.getElementById('timelineContainer');
    timelineContainer.style.display = 'none';
    if (optionName === 'Class') {
        generateTimeline();
        timelineContainer.style.display = 'block';
    }
}

function showSessionDetails(sessionNumber) {
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = `
        <h2 class="bold">Session ${sessionNumber}</h2>
        <div class="button-container">
            <button class="feedback-button">Play recording</button>
            <div>
                <span class="timeline-details">Date: ${new Date().toLocaleDateString()}</span>
                <span class="timeline-details">Time: ${new Date().toLocaleTimeString()}</span>
            </div>
        </div>
        <h3>Subtopics</h3>
        <ul>
            <li>Subtopic 1 for Session ${sessionNumber}</li>
            <li>Subtopic 2 for Session ${sessionNumber}</li>
            <li>Subtopic 3 for Session ${sessionNumber}</li>
        </ul>
        <h3>Assessment Links</h3>
        <ul>
            <li><a href="#">Assessment 1 for Session ${sessionNumber}</a></li>
            <li><a href="#">Assessment 2 for Session ${sessionNumber}</a></li>
        </ul>
        <h3>Material Links</h3>
        <ul>
            <li><a href="#">Material 1 for Session ${sessionNumber}</a></li>
            <li><a href="#">Material 2 for Session ${sessionNumber}</a></li>
        </ul>
        <div class="button-container">
            <button class="feedback-button">Give feedback</button>
        </div>
        <p>Give me the feedback for our session's quality improvement</p>
    `;
}

function handleSidebarClick(event, optionId, optionName) {
    event.preventDefault();
    const clickedOption = document.getElementById(optionId);
    highlightOption(clickedOption);
    showTimeline(optionName);
}