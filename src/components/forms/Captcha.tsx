import { useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useTheme } from "../../context/ThemeContext";
import { toastWarning } from "../../lib/toast";

type Props = {
  error?: string;
  onVerifyCaptcha: (token: string) => void;
  onExpireCaptcha: () => void;
};

const sitekey: string = import.meta.env.VITE_CAPTCHA_SITE_KEY || "DEFAULT_KEY";

export default function Captcha({
  onVerifyCaptcha,
  onExpireCaptcha,
  error,
}: Props) {
  const { dark } = useTheme();
  const captchaRef = useRef<HCaptcha>(null);

  const handleCaptchaExpired = () => {
    onExpireCaptcha();
    captchaRef.current?.resetCaptcha();
    toastWarning("Captcha expirado, por favor intente nuevamente.");
  };

  return (
    <div className="flex flex-col gap-1">
      <HCaptcha
        ref={captchaRef}
        theme={dark ? "dark" : "light"}
        sitekey={sitekey}
        onVerify={onVerifyCaptcha}
        onExpire={handleCaptchaExpired}
      />
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </div>
  );
}
