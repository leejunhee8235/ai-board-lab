import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { RoleGate } from "./components/RoleGate";

// Pages
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Posts } from "./pages/posts/Posts";
import { PostDetail } from "./pages/posts/PostDetail";
import { PostEdit } from "./pages/posts/PostEdit";
import { MyRecords } from "./pages/posts/MyRecords";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { AIAssistant } from "./pages/ai/AIAssistant";
import { CoachReview } from "./pages/coach/CoachReview";
import { Settings } from "./pages/settings/Settings";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <RoleGate allowedRoles={["STUDENT"]}>
            <Dashboard />
          </RoleGate>
        ),
      },
      { path: "posts", element: <Posts /> },
      {
        path: "posts/new",
        element: (
          <RoleGate allowedRoles={["STUDENT"]}>
            <PostEdit />
          </RoleGate>
        ),
      },
      { path: "posts/:id", element: <PostDetail /> },
      {
        path: "posts/:id/edit",
        element: (
          <RoleGate allowedRoles={["STUDENT"]}>
            <PostEdit />
          </RoleGate>
        ),
      },
      {
        path: "my-records",
        element: (
          <RoleGate allowedRoles={["STUDENT"]}>
            <MyRecords />
          </RoleGate>
        ),
      },
      {
        path: "portfolio",
        element: (
          <RoleGate allowedRoles={["STUDENT"]}>
            <Portfolio />
          </RoleGate>
        ),
      },
      {
        path: "ai-assistant",
        element: (
          <RoleGate allowedRoles={["STUDENT"]}>
            <AIAssistant />
          </RoleGate>
        ),
      },
      { path: "coach-review", element: <CoachReview /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
