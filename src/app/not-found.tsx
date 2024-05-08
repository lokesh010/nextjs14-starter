import { Button, Result } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Link href={"/"}>
            <Button type="primary" key="console">
              Go Home
            </Button>
          </Link>
        }
      />
    </div>
  );
}
