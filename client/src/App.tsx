import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { AnalyticsEvents } from "@/lib/analytics";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { I18nProvider } from "./i18n";
import { EntitySeo } from "./components/Seo";

// The landing page is eager-loaded (no Suspense waterfall) for the best LCP —
// it's the most-visited route, so it ships in the entry chunk. Every other
// route is code-split into its own chunk so the initial download stays small,
// a real Core Web Vitals win on a marketing/B2B site where Google ranks on LCP.
import Home from "./pages/Home";
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Trust = lazy(() => import("./pages/Trust"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Contact = lazy(() => import("./pages/Contact"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const Applications = lazy(() => import("./pages/Applications"));
const Markets = lazy(() => import("./pages/Markets"));
const ApplicationsDetail = lazy(() => import("./pages/ApplicationsDetail"));
const Resources = lazy(() => import("./pages/Resources"));
const DynamicCommercialPage = lazy(() => import("./pages/DynamicCommercialPage"));
const CommercialHub = lazy(() => import("./pages/CommercialHub"));
const DownloadCenter = lazy(() => import("./pages/DownloadCenter"));
const Eeat = lazy(() => import("./pages/Eeat"));
const AppointMeeting = lazy(() => import("./pages/AppointMeeting"));
const RequestQuote = lazy(() => import("./pages/RequestQuote"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

function Router() {
  const [location] = useLocation();

  // SPA page views: wouter does client-side navigation, so GA never hears
  // about route changes on its own. Report every navigation as a page_view.
  useEffect(() => {
    AnalyticsEvents.pageView(location);
  }, [location]);

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
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
        <Route path="/appoint-meeting" component={AppointMeeting} />
        <Route path="/request-quote" component={RequestQuote} />
        <Route path="/money/:slug">
          {params => <DynamicCommercialPage kind="money" slug={params.slug!} />}
        </Route>
        <Route path="/industry/:slug">
          {params => (
            <DynamicCommercialPage kind="industry" slug={params.slug!} />
          )}
        </Route>
        <Route path="/application/:slug">
          {params => (
            <DynamicCommercialPage kind="application" slug={params.slug!} />
          )}
        </Route>
        <Route path="/export/:slug">
          {params => <DynamicCommercialPage kind="country" slug={params.slug!} />}
        </Route>
        <Route path="/guides/:slug">
          {params => <DynamicCommercialPage kind="guide" slug={params.slug!} />}
        </Route>
        <Route path="/silo/:slug">
          {params => (
            <DynamicCommercialPage kind="supporting" slug={params.slug!} />
          )}
        </Route>
        <Route path="/research/:slug">
          {params => (
            <DynamicCommercialPage kind="research" slug={params.slug!} />
          )}
        </Route>
        <Route path="/downloads/:slug">
          {params => <DownloadCenter slug={params.slug!} />}
        </Route>
        <Route path="/downloads">{() => <DownloadCenter />}</Route>
        <Route path="/research">
          {() => (
            <CommercialHub
              kind="research"
              title="Research Center — Donkey Milk Science"
              description="Technical studies on amino acid profile, lysozyme, freeze-drying, formulation compatibility and more."
            />
          )}
        </Route>
        <Route path="/why-us" component={Eeat} />
        <Route path="/money">
          {() => (
            <CommercialHub
              kind="money"
              title="Commercial Donkey Milk Powder Pages"
              description="Bulk donkey milk powder for manufacturers, private label, OEM, export and industrial supply."
            />
          )}
        </Route>
        <Route path="/industry">
          {() => (
            <CommercialHub
              kind="industry"
              title="Donkey Milk by Industry"
              description="How cosmetics, pharma, nutraceutical, research and private-label industries use donkey milk powder."
            />
          )}
        </Route>
        <Route path="/application">
          {() => (
            <CommercialHub
              kind="application"
              title="Donkey Milk Powder Applications"
              description="Donkey milk powder for soap, creams, serums, shampoos, nutraceutical capsules and more."
            />
          )}
        </Route>
        <Route path="/export">
          {() => (
            <CommercialHub
              kind="country"
              title="Donkey Milk Powder Export Markets"
              description="Export donkey milk powder to France, Italy, Germany, UAE, Japan and South Korea."
            />
          )}
        </Route>
        <Route path="/guides">
          {() => (
            <CommercialHub
              kind="guide"
              title="Donkey Milk Powder Guides"
              description="Manufacturing, storage, shelf life, import, COA, MSDS, packaging, freeze-drying and quality-control guides."
            />
          )}
        </Route>
        <Route path="/404" component={NotFound} />
        <Route path="/thank-you" component={ThankYou} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <I18nProvider>
        <ThemeProvider defaultTheme="light" switchable>
          <TooltipProvider>
            <Toaster />
            <EntitySeo />
            <Analytics />
            <SpeedInsights />
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
      </I18nProvider>
    </ErrorBoundary>
  );
}

export default App;
