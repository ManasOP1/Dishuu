"use client";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-aurora absolute -top-1/2 left-1/4 h-[80vh] w-[60vw] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,107,157,0.45) 0%, transparent 70%)",
        }}
      />
      <div
        className="animate-aurora absolute top-1/3 -right-1/4 h-[70vh] w-[50vw] rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,20,147,0.25) 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animate-aurora absolute bottom-0 left-0 h-[50vh] w-[70vw] rounded-full opacity-25 blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.2) 0%, transparent 70%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
