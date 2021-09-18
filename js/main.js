const assignmentList = document.getElementById('assignment-links');
const assignments = [
    {
        label: 'Week1 Notes',
        url: 'Week1/index.html'
    }
]

assignments.forEach(assignment => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.textContent = assignment.label;
    link.href = assignment.url;

    listItem.appendChild(link); 
    assignmentList.appendChild(listItem);
})