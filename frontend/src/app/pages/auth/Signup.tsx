
import { Link } from "react-router";
import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export function Signup() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
        <CardDescription>현재는 화면 구조만 확인하는 mock 회원가입입니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="이름" />
        <Input placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <p className="text-xs text-slate-400">실제 사용자 생성 API는 백엔드 연결 후 구현 예정입니다.</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button asChild className="w-full">
          <Link to="/">mock 가입 완료</Link>
        </Button>
        <Link to="/login" className="text-sm text-emerald-600 hover:underline">
          이미 계정이 있다면 로그인
        </Link>
      </CardFooter>
    </Card>
  );
}
