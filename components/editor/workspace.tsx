"use client";

import { useDroppable } from "@dnd-kit/core";
import { Grid, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Component {
  id: string;
  type: string;
}

interface EditorWorkspaceProps {
  components: Component[];
  onSave: () => void;
}

export function EditorWorkspace({ components, onSave }: EditorWorkspaceProps) {
  const { setNodeRef } = useDroppable({
    id: "workspace",
  });

  return (
    <div
      ref={setNodeRef}
      className="relative flex-1 bg-grid-pattern overflow-hidden p-4"
    >
      {components.length === 0 ? (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <div className="flex flex-col items-center space-y-4">
            <Grid className="h-12 w-12" />
            <p className="text-lg">Drag components here to start building</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button onClick={onSave} className="flex items-center space-x-2">
              <Save className="h-4 w-4" />
              <span>Save Backend</span>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {components.map((component) => (
              <div
                key={component.id}
                className="p-4 border rounded-lg bg-white shadow-sm"
              >
                <h3 className="font-medium">{component.type}</h3>
                <p className="text-sm text-muted-foreground">
                  {getComponentDescription(component.type)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function getComponentDescription(type: string): string {
  switch (type) {
    case "Models":
      return "MongoDB Schema Model";
    case "Controllers":
      return "Express Controller";
    case "Middleware":
      return "Express Middleware";
    case "Routes":
      return "Express Route";
    default:
      return "Component";
  }
}
