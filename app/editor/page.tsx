"use client";

import { EditorWorkspace } from "@/components/editor/workspace";
import { ComponentSidebar } from "@/components/editor/component-sidebar";
import { CodePreview } from "@/components/editor/code-preview";

export default function EditorPage() {
  return (
    <div className="flex h-screen pt-16">
      <ComponentSidebar onDragEnd={() => {}} />
      <EditorWorkspace components={[]} onSave={() => {}} />
      <CodePreview />
    </div>
  );
}
