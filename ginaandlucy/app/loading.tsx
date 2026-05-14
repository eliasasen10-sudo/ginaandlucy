export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-border" />
          <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-[#ff3e8a] border-t-transparent animate-spin" />
        </div>
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    </div>
  )
}
