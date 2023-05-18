import { LoadingSpinner } from "@/components/loadingspinner/LoadingSpinner";
import { $ } from "@/connect/axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export const LoginProcess = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const extension = searchParams.get("extension");

  if (!extension) {
    $.post(`/auth/code`, { code: code })
      .then((res) => {
        const accessToken = res.headers["authorization"];
        window.opener.localStorage.setItem("access-token", accessToken);

        if (window.opener) {
          window.opener.location.reload();
          window.close();
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "",
          text: "로그인에 실패했습니다!! 다시 시도해 주세요!!",
          confirmButtonText: "닫기",
        }).then(() => window.close());
      });
  }
  return (
    <div>
      <LoadingSpinner />
    </div>
  );
};
