<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseApi;
use App\Http\Requests\TaskStoreRequest;
use App\Repositories\TasksRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class TasksController extends Controller
{
    protected $taskRepository;

    public function __construct(TasksRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    public function index()
    {
        try {
            $tasks = $this->taskRepository->getTasks();
            count($tasks) > 0 ? $message = 'Tasks listed successfully' : $message = 'No tasks found';
            return ResponseApi::response_success($message, $tasks);
        } catch (\Exception $e) {
            return ResponseApi::response_error('The task list fails', $e->getMessage());
        }
        
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'status' => 'required|in:pending,completed',
            ]);
            $task = $this->taskRepository->createTask($request->all());
            return ResponseApi::response_success('Successfully created task', $task);
        } catch (\Exception $e) {
            if ($e instanceof ValidationException) {
                return ResponseApi::response_error('Validation failed',$e->errors(), 422);
            }
            return ResponseApi::response_error('task creation failure', $e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $task = $this->taskRepository->deleteTask($id);
            isset($task) ? $message = 'Task successfully deleted.' : $message = 'Task has not been found';
            return ResponseApi::response_success($message, $task);
        } catch (\Exception $e) {
            return ResponseApi::response_error('An error occurred while deleting the task', $e->getMessage());
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255|min:1',
                'description' => 'required|string',
                'status' => 'required|in:pending,completed',
            ]);
            $task = $this->taskRepository->updateTask($request->all() ,$id);
            isset($task) ? $message = 'Task successfully updated.' : $message = 'Task has not been found';
            return ResponseApi::response_success($message, $task);
        } catch (\Exception $e) {
            if ($e instanceof ValidationException) {
                return ResponseApi::response_error('Validation failed',$e->errors(), 422);
            }
            return ResponseApi::response_error('An error occurred while updating the task', $e->getMessage());
        }
    }

    public function show($id) 
    {
        try {
            $task = $this->taskRepository->findTask($id);
            !is_null($task) ? $message = 'Task found successful' : $message = 'Task not found';
            return ResponseApi::response_success($message, $task);
        } catch (\Exception $e) {
            return ResponseApi::response_error('An error has occurred searching for the task', $e->getMessage());
        }
    }



    
}
