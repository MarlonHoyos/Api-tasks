<?php
namespace App\Repositories;

use App\Models\Tasks;

class TasksRepository 
{
    public function getTasks() 
    {
        return Tasks::all();
    }

    public function findTask($id)
    {
        return Tasks::find($id);
    }

    public function deleteTask($id)
    {
        $task = Tasks::find($id);
        if ($task) {
            $task->delete(); 
        }
        return $task;
    }

    public function createTask(array $data) 
    {
        
        return Tasks::create($data);
    }

    public function updateTask(array $data, $id)
    {
        $task = Tasks::find($id);
        if ($task) {
            $task->update($data); 
        }
        return $task;
    }
}