import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Code, Copy, Download, Save } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast";

const INITIAL_CODE = `// Generated code will appear here
const express = require('express');
const app = express();

// Middleware setup
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'API is running' });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});`;

export function CodePreview() {
  const [code, setCode] = useState(INITIAL_CODE);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    // toast({
    //   title: "Copied to clipboard",
    //   description: "The code has been copied to your clipboard.",
    // });
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "backend-code.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSave = () => {
    setIsEditing(false);
    // toast({
    //   title: "Changes saved",
    //   description: "Your code changes have been saved successfully.",
    // });
  };

  return (
    <div className="w-96 border-l bg-background">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code className="h-4 w-4" />
          <h2 className="font-semibold">Generated Code</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleDownload}>
            <Download className="h-4 w-4" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Code</Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[80vh]">
              <DialogHeader>
                <DialogTitle>Edit Code</DialogTitle>
                <DialogDescription>
                  Make changes to your backend code directly.
                </DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="code" className="h-full">
                <TabsList>
                  <TabsTrigger value="code">Code Editor</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="code" className="h-[calc(100%-2rem)]">
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="h-full font-mono"
                    spellCheck={false}
                  />
                </TabsContent>
                <TabsContent value="preview" className="h-[calc(100%-2rem)]">
                  <pre className="h-full overflow-auto p-4 bg-secondary rounded-md">
                    <code>{code}</code>
                  </pre>
                </TabsContent>
              </Tabs>
              <div className="flex justify-end space-x-2 mt-4">
                <Button onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="p-4">
          <pre className="text-sm text-muted-foreground">
            <code>{code}</code>
          </pre>
        </div>
      </ScrollArea>
    </div>
  );
}
