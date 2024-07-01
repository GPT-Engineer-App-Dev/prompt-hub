import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function PromptDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState({
    id,
    title: "Sample Prompt",
    description: "Sample description",
    content: "Sample content",
  });

  const handleDelete = () => {
    // Delete logic here
    navigate("/prompts");
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>{prompt.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{prompt.description}</p>
          <p className="mt-4">{prompt.content}</p>
          <div className="flex gap-2 mt-4">
            <Button as={Link} to={`/prompts/${prompt.id}/edit`}>
              Edit
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PromptDetails;