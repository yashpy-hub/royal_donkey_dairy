import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Trust from "./pages/Trust";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import WhoWeAre from "./pages/WhoWeAre";
import Applications from "./pages/Applications";
import Markets from "./pages/Markets";
import ApplicationsDetail from "./pages/ApplicationsDetail";
import Resources from "./pages/Resources";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/who-we-are" component={WhoWeAre} />
      <Route path="/applications" component={Applications} />
      <Route path="/applications-detail" component={ApplicationsDetail} />
      <Route path="/markets" component={Markets} />
      <Route path="/resources" component={Resources} />
      <Route path={"/products"} component={Products} />
      <Route path={"/about"} component={About} />
      <Route path={"/trust"} component={Trust} />
      <Route path={"/certifications"} component={Certifications} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
