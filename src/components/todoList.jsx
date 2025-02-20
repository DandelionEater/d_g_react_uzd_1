import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Trash2 } from "lucide-react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full p-4">
      <h1 className="text-xl font-bold mb-4">Užduočių sąrašas</h1>
      <div className="flex gap-2 mb-4">
        <Input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Įveskite užduotį..."
        />
        <Button 
        onClick={addTask} 
        className="w-full md:w-auto"
        >
          Pridėti
        </Button>
      </div>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <Card key={index} className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(index)}
              />
              <span className={task.completed ? "line-through text-gray-500" : ""}>
                {task.text}
              </span>
            </div>
            <Button variant="ghost" onClick={() => removeTask(index)}>
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
