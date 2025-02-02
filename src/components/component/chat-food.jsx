import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function ChatFood() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chat</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-primary-foreground">
              <FilterIcon className="w-5 h-5 mr-2" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value="recent">
              <DropdownMenuRadioItem value="recent">
                Most Recent
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="popular">
                Most Popular
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="unanswered">
                Unanswered
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-sm">
              <div className="flex items-center gap-2">
                <div className="font-bold">John Doe</div>
                <div className="text-muted-foreground">2:39 PM</div>
              </div>
              <div>
                <p>
                  Hey, I have a question about the new product features. Can you
                  help me understand how they work?
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-sm">
              <div className="flex items-center gap-2">
                <div className="font-bold">Jane Smith</div>
                <div className="text-muted-foreground">2:41 PM</div>
              </div>
              <div>
                <p>
                  Sure, I&apos;d be happy to help. What specific features are
                  you interested in?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background border-t px-6 py-4 flex items-center gap-2">
        <Input
          type="text"
          placeholder="Type your question..."
          className="flex-1"
        />
        <Button type="submit">Send</Button>
      </div>
    </div>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
