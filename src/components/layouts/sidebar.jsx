import {
  Bell,
  CircleUser,
  Home,
  List,
  Menu,
  Package2,
  Plus,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink, Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Prompt Manager</span>
            </a>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                <Home className="h-4 w-4" />
                Home
              </NavLink>
              <NavLink
                to="/prompts"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                <List className="h-4 w-4" />
                Prompts
              </NavLink>
              <NavLink
                to="/prompts/new"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                <Plus className="h-4 w-4" />
                Add Prompt
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-semibold ${
                      isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Prompt Manager</span>
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                      isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Home className="h-5 w-5" />
                  Home
                </NavLink>
                <NavLink
                  to="/prompts"
                  className={({ isActive }) =>
                    `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                      isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <List className="h-5 w-5" />
                  Prompts
                </NavLink>
                <NavLink
                  to="/prompts/new"
                  className={({ isActive }) =>
                    `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                      isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Plus className="h-5 w-5" />
                  Add Prompt
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* Add nav bar items here! */}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SharedLayout;