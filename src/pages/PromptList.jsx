import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function PromptList() {
  const [prompts, setPrompts] = useState([
    { id: 1, title: "Prompt 1", description: "Description for prompt 1" },
    { id: 2, title: "Prompt 2", description: "Description for prompt 2" },
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Prompts</h1>
        <Button as={Link} to="/prompts/new">
          Add New Prompt
        </Button>
      </div>
      <div className="grid gap-4">
        {prompts.map((prompt) => (
          <Card key={prompt.id}>
            <CardHeader>
              <CardTitle>{prompt.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{prompt.description}</p>
              <Button as={Link} to={`/prompts/${prompt.id}`} className="mt-2">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PromptList;