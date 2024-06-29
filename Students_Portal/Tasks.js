document.addEventListener('DOMContentLoaded', (event) => {
    const tasks = [
        { name: 'Task 1', number: 10, topics: 'Math, Science', completed: 5, total: 10 },
        { name: 'Task 2', number: 8, topics: 'English, History', completed: 4, total: 8 },
        // Add more task objects as needed to reach at least 50
    ];

    // Fill the tasks array with dummy data for demonstration purposes
    for (let i = tasks.length; i < 50; i++) {
        tasks.push({ name: `Task ${i + 1}`, number: 5 + i % 5, topics: 'Various', completed: Math.floor(Math.random() * 5), total: 5 + i % 5 });
    }

    const bigContainer = document.querySelector('.big-container');

    tasks.forEach(task => {
        const taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';

        const taskName = document.createElement('h3');
        taskName.textContent = task.name;
        taskContainer.appendChild(taskName);

        const taskNumber = document.createElement('p');
        taskNumber.textContent = `Number of Tasks: ${task.number}`;
        taskContainer.appendChild(taskNumber);

        const taskTopics = document.createElement('p');
        taskTopics.textContent = `Task Topics: ${task.topics}`;
        taskContainer.appendChild(taskTopics);

        const taskProgress = document.createElement('p');
        taskProgress.className = 'task-progress';
        taskProgress.textContent = `Completed: ${task.completed} / ${task.total}`;
        taskContainer.appendChild(taskProgress);

        const startButton = document.createElement('button');
        startButton.className = 'start-button';
        startButton.textContent = 'Start';
        startButton.addEventListener('click', () => {
            alert(`Starting ${task.name}`);
        });
        taskContainer.appendChild(startButton);

        bigContainer.appendChild(taskContainer);
    });

    // Profile dropdown
    const profileButton = document.getElementById('profileButton');
    const dropdownContent = document.getElementById('dropdownContent');

    profileButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('#profileButton') && !event.target.closest('.dropdown-content')) {
            dropdownContent.classList.remove('show');
        }
    });

    // Logout functionality (you need to implement this according to your backend logic)
    document.getElementById('logout').addEventListener('click', () => {
        // Perform logout operation here
        alert('Logged out');
    });
});
