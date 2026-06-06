import { Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  FileText, 
  BookOpen, 
  History, 
  MessageSquare, 
  Briefcase, 
  Bot, 
  Users, 
  Settings,
  Search,
  Bell,
  PenSquare
} from "lucide-react";
import { cn, Button, Badge } from "./ui";

const navItems = [
  { name: "대시보드", path: "/", icon: LayoutDashboard },
  { name: "전체 게시글", path: "/posts", icon: FileText },
  { name: "내 기록", path: "/my-logs", icon: BookOpen },
  { name: "프로젝트 회고", path: "/retrospectives", icon: History },
  { name: "면접 질문", path: "/interviews", icon: MessageSquare },
  { name: "포트폴리오 관리", path: "/portfolio", icon: Briefcase },
  { name: "AI 도우미", path: "/ai-helper", icon: Bot },
  { name: "코치 리뷰", path: "/coach", icon: Users },
  { name: "설정", path: "/settings", icon: Settings },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 z-10">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">JungleLog</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
                             (item.path !== "/" && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-emerald-50 text-emerald-700" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-emerald-600" : "text-gray-400")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
              K
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">김정글</p>
              <p className="text-xs text-gray-500 truncate">student@jungle.kr</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-10 px-8 flex items-center justify-between">
          <div className="flex-1 flex items-center max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="게시글, 태그, 동료 검색..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 ml-4">
            <Badge variant="primary" className="hidden sm:inline-flex">STUDENT</Badge>
            <Link to="/posts/new">
              <Button size="sm" className="gap-2">
                <PenSquare className="w-4 h-4" />
                새 글 쓰기
              </Button>
            </Link>
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
          <span className="text-white font-bold text-3xl">J</span>
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          JungleLog
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          크래프톤 정글 수강생을 위한 성장 기록 플랫폼
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}
