import { TodoListProps } from "../page";
import { teamMembers } from "./team-members";

export const todos: TodoListProps[] = [
  {
    id: 1,
    title: "Learn React Basics",
    description: "Understand components, JSX, props, and state.",
    completed: false,
    team: teamMembers
  },
  {
    id: 2,
    title: "Practice JavaScript",
    description: "Solve array and object-based problems daily.",
    completed: true,
    team: teamMembers
  },
  {
    id: 3,
    title: "Build a Todo App",
    description: "Create a CRUD todo app using React hooks.",
    completed: false,
    team: teamMembers
  },
  {
    id: 4,
    title: "Revise CSS",
    description: "Practice Flexbox, Grid, and responsive layouts.",
    completed: true,
    team: teamMembers
  },
  {
    id: 5,
    title: "Learn Git",
    description: "Understand git commands like commit, push, pull, and merge.",
    completed: false,
    team: teamMembers
  },
  {
    id: 6,
    title: "Explore TypeScript",
    description: "Learn types, interfaces, and generics.",
    completed: false,
    team: teamMembers
  },
  {
    id: 7,
    title: "Prepare for Interviews",
    description: "Revise core JavaScript and React interview questions.",
    completed: true,
    team: teamMembers
  },
  {
    id: 8,
    title: "Optimize React App",
    description: "Improve performance using memoization and lazy loading.",
    completed: false,
    team: teamMembers
  },
  {
    id: 9,
    title: "Read Documentation",
    description: "Go through official React and TypeScript docs.",
    completed: true,
    team: teamMembers
  },
  {
    id: 10,
    title: "Build Portfolio",
    description: "Create a personal portfolio website with projects.",
    completed: false,
    team: teamMembers
  },
];
