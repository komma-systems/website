import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-black px-6 py-8 text-white sm:px-10">
      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="https://komma.systems" className="komma-title text-2xl text-white">
          KOMMA
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <Link href="/impressum" className="underline underline-offset-4 hover:text-white">
            Impressum
          </Link>
          <Link href="/datenschutz" className="underline underline-offset-4 hover:text-white">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  )
}
