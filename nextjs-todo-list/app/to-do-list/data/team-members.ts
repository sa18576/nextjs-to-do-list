export const teamMembers = [
    {
        id: 1,
        firstName: 'Alice',
        lastName: 'Johnson',
        role: 'Project Manager'
    },
    {
        id: 2,
        firstName: 'Bob',
        lastName: 'Smith',
        role: 'Frontend Developer'
    },
    {
        id: 3,
        firstName: 'Charlie',
        lastName: 'Brown',
        role: 'Backend Developer'
    },
    {
        id: 4,
        firstName: 'Diana',
        lastName: 'Miller',
        role: 'UI/UX Designer'
    },
    {
        id: 5,
        firstName: 'Ethan',
        lastName: 'Wilson',
        role: 'QA Engineer'
    }
];

export type TeamMember = typeof teamMembers[number];