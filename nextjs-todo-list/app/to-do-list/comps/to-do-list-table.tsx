
// "use client"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import AddOrEditTask from './add-or-edit-task'
import DeleteTask from './delete-task'
import { TodoListProps } from '../page'

const ToDoListTable = ({ onAddOrEditTask, todoList, onDeleteTask,onTaskComplete }: {
  onAddOrEditTask: (task: TodoListProps) => void,
  onDeleteTask: (taskId: number) => void,
  onTaskComplete: (taskId:number) => void,
  todoList: TodoListProps[]
}) => {

  return (
    <div className='w-full flex justify-center '>
      <Table className='w-3/4  mx-auto'>
        <TableHeader>
          <TableRow>
            <TableHead>Sr. No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Team Members</TableHead>
            <TableHead>Actions</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todoList.map((task) => (
            <TableRow key={task.id} className={task.completed ? 'bg-green-300/20' : ''}>
              <TableCell className="font-medium">{task.id}</TableCell>
              <TableCell className="font-medium">{task.title.slice(0, 10)}...
              </TableCell>
              <TableCell>{task.description.slice(0, 25)}...</TableCell>
              <TableCell>
                <div className='flex'>
                        {
                            task.team.map((member) => (
                                <div key={member.id} className='border border-gray-500 rounded-full m-1 w-8 h-8 flex justify-center items-center'>
                                    <span>{member.firstName.slice(0, 1)}{member.lastName.slice(0, 1)}</span>
                                </div>
                            ))
                        }
                    </div>
              </TableCell>
              <TableCell>
                <span className='flex gap-2'>
                  <AddOrEditTask taskType='edit' taskToEdit={task} onAddOrEditTask={onAddOrEditTask} />
                  <DeleteTask task={task} onDeleteTask={onDeleteTask} />
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Checkbox id="task-checkbox" onClick={() => onTaskComplete(task.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  )
}

export default ToDoListTable