import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { TeamMember } from '../data/team-members'

const TeamMembersTable = ({team}:{team:TeamMember[]}) => {
    return (
        <div>
            <div className='flex'>
                {/* {
                            task.team.map((member) => (
                                <div key={member.id} className='border border-gray-500 rounded-full m-1 w-8 h-8 flex justify-center items-center'>
                                    <span>{member.firstName.slice(0, 1)}{member.lastName.slice(0, 1)}</span>
                                </div>
                            ))
                        } */}
            </div>


            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >Id</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {team.map((member) => (
                        <TableRow key={member.id}>
                            <TableCell className="font-medium">{member.id}</TableCell>
                            <TableCell>{member.role}</TableCell>
                            <TableCell>{member.firstName} {member.lastName} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                
            </Table>



        </div>
    )
}

export default TeamMembersTable