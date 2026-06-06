
import { Link } from "react-router";
import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>JungleLog 계정으로 학습 기록을 관리합니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <p className="text-xs text-slate-400">실제 로그인과 JWT 발급은 백엔드 연결 후 구현 예정입니다.</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button asChild className="w-full">
          <Link to="/">mock 로그인</Link>
        </Button>
        <Link to="/signup" className="text-sm text-emerald-600 hover:underline">
          계정이 없다면 회원가입
        </Link>
      </CardFooter>
    </Card>
  );
}
