import { useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useTheme } from "../../context/ThemeContext";
import { toastWarning } from "../../lib/toast";
import { RefreshCcw } from "lucide-react";

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

  const handleManualReset = () => {
    captchaRef.current?.resetCaptcha();
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-center relative">
        <HCaptcha
          ref={captchaRef}
          theme={dark ? "dark" : "light"}
          sitekey={sitekey}
          onVerify={onVerifyCaptcha}
          onExpire={handleCaptchaExpired}
        />
        <button
          title="Reiniciar Captcha"
          className="absolute text-sm items-center -top-3 -left-3 border dark:border-slate-600 border-gray-400 flex gap-1 bg-gray-200 dark:bg-slate-800 p-1 rounded hover:scale-105 active:scale-95 duration-200 dark:hover:text-slate-400 hover:text-slate-800"
          type="button"
          onClick={handleManualReset}
        >
          <RefreshCcw size={16} />
        </button>
      </div>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </div>
  );
}
