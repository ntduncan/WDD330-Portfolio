const assignmentList = document.getElementById("assignment-links");
const assignments = [
  {
    label: "Week1 Notes",
    url: "Week1/index.html",
  },
  {
    label: "Week4 Notes",
    url: "Week4/index.html",
  },
  {
    label: "Week5 Notes",
    url: "Week5/index.html",
  },
  {
    label: "Todo App",
    url: "week6/index.html",
  },
  {
    label: "Week7 Notes",
    url: "Week7/index.html",
  },
  {
    label: "Week8 Notes",
    url: "Week8/index.html",
  },
  {
    label: "Week9 Notes",
    url: "Week9/index.html",
  },
  {
    label: "Week10 Notes",
    url: "Week10/index.html",
  },
];

assignments.forEach((assignment) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");

  link.textContent = assignment.label;
  link.href = assignment.url;

  listItem.appendChild(link);
  assignmentList.appendChild(listItem);
});
