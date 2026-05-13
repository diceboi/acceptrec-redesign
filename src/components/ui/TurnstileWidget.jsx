"use client";

import { Turnstile } from "@marsidev/react-turnstile";

export function TurnstileWidget({ onSuccess, onExpire, onError }) {
  const isDev = process.env.NODE_ENV === "development";
  const siteKey = isDev ? "1x00000000000000000000AA" : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <div className="flex justify-center my-4">
      <Turnstile
        siteKey={siteKey}
        onSuccess={onSuccess}
        onExpire={onExpire}
        onError={onError}
        options={{
          theme: "dark",
        }}
      />
    </div>
  );
}
