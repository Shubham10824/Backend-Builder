import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Database, Server, Shield, Workflow } from "lucide-react";

const components = [
  {
    name: "Models",
    icon: Database,
    template: `// Model template
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  // Add your schema fields here
});

module.exports = mongoose.model('ModelName', Schema);`,
  },
  {
    name: "Controllers",
    icon: Server,
    template: `// Controller template
const controller = {
  async getAll(req, res) {
    try {
      // Add your logic here
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = controller;`,
  },
  {
    name: "Middleware",
    icon: Shield,
    template: `// Middleware template
const middleware = (req, res, next) => {
  // Add your middleware logic here
  next();
};

module.exports = middleware;`,
  },
  {
    name: "Routes",
    icon: Workflow,
    template: `// Route template
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Add your route logic here
});

module.exports = router;`,
  },
];

function DraggableComponent({ component }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: component.name,
  });

  return (
    <Button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      variant="outline"
      className="w-full flex items-center justify-start space-x-2 text-sm font-medium"
      style={
        transform
          ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            }
          : undefined
      }
    >
      <component.icon className="h-4 w-4" />
      <span>{component.name}</span>
    </Button>
  );
}

export function ComponentSidebar({ onDragEnd }) {
  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className="w-64 border-r bg-background">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Components</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="p-4 space-y-4">
            {components.map((component) => (
              <div key={component.name} className="space-y-2">
                <DraggableComponent component={component} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </DndContext>
  );
}
