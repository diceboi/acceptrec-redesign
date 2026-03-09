"use client";

import { useState, useEffect } from "react";

/**
 * Renders a live Google rating fetched from /api/google-rating.
 * Falls back to the provided defaults if the API call fails.
 */
export function GoogleRating({ fallbackRating = 4.8, fallbackTotal = "950+" }) {
  const [rating, setRating] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/google-rating")
      .then((r) => r.json())
      .then((data) => {
        if (data.rating) setRating(data.rating.toFixed(1));
        if (data.total) setTotal(data.total.toLocaleString("en-GB") + "+");
      })
      .catch(() => {
        // silently fall back to defaults
      })
      .finally(() => setLoading(false));
  }, []);

  const displayRating = rating ?? (loading ? "…" : fallbackRating);
  const displayTotal = total ?? (loading ? "" : fallbackTotal);

  // Render filled/half stars based on rating
  const numericRating = parseFloat(rating ?? fallbackRating);
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i + 1 <= Math.round(numericRating);
    return filled ? "★" : "☆";
  }).join("");

  return { displayRating, displayTotal, stars, loading };
}
