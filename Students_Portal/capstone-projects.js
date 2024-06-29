document.addEventListener('DOMContentLoaded', (event) => {
    const projects = [
        {
            studentName: "John Doe",
            projectName: "AI Research",
            assignedDate: "2024-01-15",
            assignedTime: "10:00 AM",
            submissionDate: "2024-03-15",
            submissionTime: "03:00 PM",
            marks: 85
        },
        {
            studentName: "Jane Smith",
            projectName: "Web Development",
            assignedDate: "2024-01-20",
            assignedTime: "11:00 AM",
            submissionDate: "2024-03-20",
            submissionTime: "02:00 PM",
            marks: 90
        },
        {
            studentName: "Alice Johnson",
            projectName: "Data Analysis",
            assignedDate: "2024-01-18",
            assignedTime: "09:30 AM",
            submissionDate: "2024-03-18",
            submissionTime: "04:00 PM",
            marks: 88
        },
        {
            studentName: "Bob Brown",
            projectName: "Machine Learning",
            assignedDate: "2024-01-22",
            assignedTime: "01:00 PM",
            submissionDate: "2024-03-22",
            submissionTime: "05:00 PM",
            marks: 92
        },
        {
            studentName: "Charlie Davis",
            projectName: "Cloud Computing",
            assignedDate: "2024-01-25",
            assignedTime: "08:00 AM",
            submissionDate: "2024-03-25",
            submissionTime: "11:00 AM",
            marks: 87
        },
        {
            studentName: "Dana White",
            projectName: "Cybersecurity",
            assignedDate: "2024-01-28",
            assignedTime: "12:00 PM",
            submissionDate: "2024-03-28",
            submissionTime: "01:00 PM",
            marks: 89
        },
        {
            studentName: "Eve Martin",
            projectName: "Mobile App Development",
            assignedDate: "2024-01-30",
            assignedTime: "03:00 PM",
            submissionDate: "2024-03-30",
            submissionTime: "04:00 PM",
            marks: 91
        }
    ];

    const contentContainer = document.querySelector('.content-container');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');

        const studentName = document.createElement('span');
        studentName.textContent = `Student: ${project.studentName}`;
        cardInfo.appendChild(studentName);

        const projectName = document.createElement('span');
        projectName.textContent = `Project: ${project.projectName}`;
        cardInfo.appendChild(projectName);

        const assignedDate = document.createElement('span');
        assignedDate.textContent = `Assigned: ${project.assignedDate} at ${project.assignedTime}`;
        cardInfo.appendChild(assignedDate);

        const submissionDate = document.createElement('span');
        submissionDate.textContent = `Submission: ${project.submissionDate} at ${project.submissionTime}`;
        cardInfo.appendChild(submissionDate);

        card.appendChild(cardInfo);

        const cardMarks = document.createElement('div');
        cardMarks.classList.add('card-marks');
        cardMarks.textContent = `${project.marks}`;

        card.appendChild(cardMarks);

        contentContainer.appendChild(card);
    });
});
