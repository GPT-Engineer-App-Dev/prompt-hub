import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PromptList from "./pages/PromptList.jsx";
import AddEditPrompt from "./pages/AddEditPrompt.jsx";
import PromptDetails from "./pages/PromptDetails.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner.jsx";
import SharedLayout from "./components/layouts/sidebar.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Index />} />
                <Route path="prompts" element={<PromptList />} />
                <Route path="prompts/new" element={<AddEditPrompt />} />
                <Route path="prompts/:id" element={<PromptDetails />} />
                <Route path="prompts/:id/edit" element={<AddEditPrompt />} />
              </Route>
            </Routes>
          </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;