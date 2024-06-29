document.addEventListener('DOMContentLoaded', (event) => {
    const attendanceData = [
        'present', 'present', 'leave', 'absent', 'present',
        'present', 'leave', 'present', 'absent', 'present',
        'leave', 'present', 'present', 'absent', 'leave',
        'present', 'present', 'leave', 'present', 'absent',
        'present', 'leave', 'present', 'absent', 'present',
        'present', 'leave', 'present', 'absent', 'present',
        'present', 'leave', 'present', 'absent', 'present',
        'present', 'leave', 'present', 'absent', 'present',
        'present', 'leave', 'present', 'absent', 'present',
        'present', 'leave', 'present', 'absent', 'present'
    ];

    const timeline = document.querySelector('.timeline');
    attendanceData.forEach((status, index) => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add(status);
        dayDiv.textContent = index + 1;
        timeline.appendChild(dayDiv);
    });

    // Task Chart
    const ctxTask = document.getElementById('taskChart').getContext('2d');
    new Chart(ctxTask, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [{
                label: 'Task Points',
                data: [10, 12, 8, 6, 14],
                backgroundColor: '#3498db'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Assessment Chart
    const ctxAssessment = document.getElementById('assessmentChart').getContext('2d');
    new Chart(ctxAssessment, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [{
                label: 'Assessment Points',
                data: [8, 9, 7, 10, 11],
                backgroundColor: '#e74c3c'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Project Marks
    const projectMarks = [85, 90, 78, 92, 88];
    const averageMarks = projectMarks.reduce((a, b) => a + b, 0) / projectMarks.length;
    document.getElementById('averageMarks').textContent = `Average Project Marks: ${averageMarks.toFixed(2)}`;

    // Project Chart
    const ctxProject = document.getElementById('projectChart').getContext('2d');
    new Chart(ctxProject, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [{
                label: 'Project Marks',
                data: projectMarks,
                backgroundColor: '#8e44ad'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
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
        alert('Logging out...');
        // Add your logout logic here
    });
});
