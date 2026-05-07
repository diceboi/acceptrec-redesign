"use client";

import { Turnstile } from "@marsidev/react-turnstile";

export function TurnstileWidget({ onSuccess, onExpire, onError }) {
  return (
    <div className="flex justify-center my-4">
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
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
