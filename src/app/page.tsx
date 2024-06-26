"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}
      >
        Throw error
      </button>
    </main>
  );
}
