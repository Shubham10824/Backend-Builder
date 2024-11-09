import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Activity, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const projects = [
    {
      id: 1,
      name: "E-commerce API",
      status: "Active",
      lastModified: "2 hours ago",
      collaborators: 3,
    },
    {
      id: 2,
      name: "Blog Backend",
      status: "Draft",
      lastModified: "1 day ago",
      collaborators: 2,
    },
    {
      id: 3,
      name: "Auth Service",
      status: "Active",
      lastModified: "3 days ago",
      collaborators: 4,
    },
  ];

  return (
    <div className="container mx-auto p-6 pt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button asChild>
          <Link href="/editor">
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{project.name}</span>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Activity className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{project.lastModified}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{project.collaborators} collaborators</span>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/editor/${project.id}`}>Edit</Link>
                  </Button>
                  <Button size="sm">Open</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}