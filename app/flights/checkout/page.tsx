"use client"

import { useMemo, useRef, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft, CreditCard, ShieldCheck, Plane, FileText, Upload, X, Plus, Minus, Check, Armchair,
} from "lucide-react"
import { NativeSelect } from "@/components/flights/fields"
import { useLanguage } from "@/components/language-provider"
import {
  Cabin, Currency, Flight, cabins, formatMoney, fmtField, getFlight, priceLeg, resolveAirport, parseDate,
} from "@/lib/flights"

type PaxType = "ADT" | "CHD" | "INF"

interface Passenger {
  type: PaxType; title: string; first: string; middle: string; last: string
  nationality: string; dob: string; gender: string; seat: string
  passportNo: string; passportExp: string; passportFile: string
  meal: string; wheelchair: boolean; notes: string; loyaltyAirline: string; loyaltyNo: string
}

const blankPassenger = (type: PaxType): Passenger => ({
  type, title: "", first: "", middle: "", last: "", nationality: "", dob: "", gender: "", seat: "",
  passportNo: "", passportExp: "", passportFile: "", meal: "No preference", wheelchair: false, notes: "",
  loyaltyAirline: "", loyaltyNo: "",
})

const titles = ["Mr", "Mrs", "Ms", "Miss", "Mstr", "Dr"]
const countries = [
  "Ethiopia", "United Arab Emirates", "Kenya", "Eritrea", "Djibouti", "Somalia", "Sudan", "South Sudan", "Uganda",
  "Egypt", "Saudi Arabia", "Qatar", "Turkey", "India", "China", "Thailand", "United Kingdom", "United States", "Canada", "Germany", "Other",
]
const dialCodes = ["+251", "+971", "+254", "+966", "+974", "+90", "+86", "+91", "+66", "+44", "+1"]
const meals = ["No preference", "Vegetarian", "Vegan", "Halal", "Kosher", "Gluten-free", "Child meal"]

const inputCls =
  "w-full h-12 px-4 rounded-xl border bg-white dark:bg-[#0A1C38] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/50 focus:border-[#C59B27] transition"
const borderOk = "border-slate-200 dark:border-slate-700"
const borderBad = "border-rose-400"

// `error` is a translation key (e.g. "err.required") so messages follow the language toggle.
function Field({ label, required, error, children, className = "" }: {
  label: string; required?: boolean; error?: string; children: React.ReactNode; className?: string
}) {
  const { t } = useLanguage()
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
        {label}{required && <span className="text-rose-500"> *</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-rose-500">{t(error)}</p>}
    </div>
  )
}

function SeatModal({ taken, current, label, onPick, onClose }: {
  taken: string[]; current: string; label: string; onPick: (seat: string) => void; onClose: () => void
}) {
  const { t } = useLanguage()
  const letters = ["A", "B", "C", "D", "E", "F"]
  const rows = Array.from({ length: 24 }, (_, i) => i + 1)
  const unavailable = (r: number, c: number) => (r * 7 + c * 3) % 5 === 0
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={t("co.seatTitle")}>
      <div className="bg-white dark:bg-[#0D2245] rounded-3xl w-full max-w-sm max-h-[90vh] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 pt-6 pb-3">
          <div>
            <h3 className="font-sans font-bold text-lg text-[#0A1E3F] dark:text-white">{t("co.seatTitle")}</h3>
            <p className="text-xs text-slate-500">{t("co.seatSub", { label })}</p>
          </div>
          <button type="button" onClick={onClose} aria-label={t("co.close")} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><X className="w-5 h-5 text-slate-500" /></button>
        </div>
        <div className="flex items-center gap-4 px-6 pb-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600" />{t("co.seatFree")}</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-[#DFB75C]" />{t("co.seatSelected")}</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-slate-300 dark:bg-slate-600 opacity-50" />{t("co.seatTaken")}</span>
        </div>
        <div className="overflow-y-auto px-6 pb-4">
          <div className="grid grid-cols-[repeat(3,1fr)_1.2rem_repeat(3,1fr)] gap-1.5 justify-items-center">
            {["A", "B", "C", "", "D", "E", "F"].map((l, i) => <span key={i} className="text-[11px] font-semibold text-slate-400">{l}</span>)}
            {rows.map((r) => (
              <div key={r} className="contents">
                {letters.map((l, c) => {
                  const seat = `${r}${l}`
                  const off = unavailable(r, c) || taken.includes(seat)
                  const sel = current === seat
                  return (
                    <div key={seat} className="contents">
                      {c === 3 && <span className="text-[10px] text-slate-400 self-center">{r}</span>}
                      <button
                        type="button"
                        disabled={off}
                        aria-label={t("co.seatAria", { seat })}
                        aria-pressed={sel}
                        onClick={() => onPick(sel ? "" : seat)}
                        className={`w-full h-8 rounded-md text-[11px] font-semibold transition-colors ${
                          sel ? "bg-[#DFB75C] text-[#071326]"
                            : off ? "bg-slate-300 dark:bg-slate-600 opacity-40 cursor-not-allowed"
                            : "bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300 hover:border-[#C59B27]"
                        }`}
                      >{l}</button>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 pb-6 pt-2">
          <button type="button" onClick={onClose} className="w-full h-12 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-sm transition-colors">
            {current ? t("co.seatConfirm", { seat: current }) : t("co.seatSkip")}
          </button>
        </div>
      </div>
    </div>
  )
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-slate-100 dark:border-slate-800">
      <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-sans font-bold text-lg text-[#0A1E3F] dark:text-white">{title}</span>
        {open ? <Minus className="w-5 h-5 text-[#C59B27]" /> : <Plus className="w-5 h-5 text-[#C59B27]" />}
      </button>
      {open && <div className="pb-5">{children}</div>}
    </div>
  )
}

function PassengerCard({ index, p, errors, onChange, onSeat, contact, setContact }: {
  index: number
  p: Passenger
  errors: Record<string, string>
  onChange: (patch: Partial<Passenger>) => void
  onSeat: () => void
  contact: { email: string; code: string; phone: string }
  setContact: (c: { email: string; code: string; phone: string }) => void
}) {
  const { t } = useLanguage()
  const fileRef = useRef<HTMLInputElement>(null)
  const [fileError, setFileError] = useState("")
  const e = (k: string) => errors[`p${index}.${k}`]
  const cls = (k: string) => `${inputCls} ${e(k) ? borderBad : borderOk}`

  const onFile = (file?: File) => {
    if (!file) return
    if (!/^image\/(png|jpe?g)$/.test(file.type)) return setFileError("err.fileType")
    if (file.size > 5 * 1024 * 1024) return setFileError("err.fileSize")
    setFileError("")
    onChange({ passportFile: file.name })
  }

  return (
    <section className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-sm">
      <h2 className="font-sans font-bold text-2xl text-[#0A1E3F] dark:text-white mb-6">{t("co.passengerInfo", { n: index + 1, type: p.type })}</h2>

      <div className={`rounded-2xl border-2 border-dashed px-5 py-6 flex flex-col sm:flex-row sm:items-center gap-4 ${e("passportFile") || fileError ? "border-rose-300" : "border-slate-200 dark:border-slate-700"}`}>
        <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-[#DFB75C]/10 flex items-center justify-center shrink-0"><FileText className="w-6 h-6 text-[#C59B27]" /></div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-[#0A1E3F] dark:text-white">{t("co.uploadPassport")}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t("co.uploadHint")}</p>
          {p.passportFile ? (
            <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4" /><span className="truncate max-w-[16rem]">{p.passportFile}</span>
              <button type="button" onClick={() => onChange({ passportFile: "" })} aria-label={t("co.removeFile")} className="text-slate-400 hover:text-rose-500"><X className="w-4 h-4" /></button>
            </p>
          ) : (
            <p className="text-xs text-rose-500 mt-1">{e("passportFile") || fileError ? t(e("passportFile") || fileError) : <span className="text-slate-400">{t("co.requiredNote")}</span>}</p>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/png,image/jpeg" className="hidden" onChange={(ev) => { onFile(ev.target.files?.[0]); ev.target.value = "" }} />
        <button type="button" onClick={() => fileRef.current?.click()} className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl border border-[#C59B27] text-[#9E7B1C] dark:text-[#DFB75C] text-sm font-semibold hover:bg-amber-50 dark:hover:bg-[#DFB75C]/10 transition-colors shrink-0">
          <Upload className="w-4 h-4" />{t("co.chooseFile")}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-[7rem_1fr_1fr] gap-x-5 gap-y-5">
        <Field label={t("co.title")} required error={e("title")}>
          <NativeSelect variant="field" ariaLabel={t("co.title")} value={p.title} onChange={(v) => onChange({ title: v })} options={[{ value: "", label: "—" }, ...titles.map((x) => ({ value: x, label: t(`title.${x}`) }))]} className={`w-full ${e("title") ? "[&_select]:border-rose-400" : ""}`} />
        </Field>
        <Field label={t("co.firstName")} required error={e("first")}>
          <input className={cls("first")} value={p.first} onChange={(ev) => onChange({ first: ev.target.value })} placeholder={t("co.firstNamePh")} autoComplete="given-name" />
        </Field>
        <Field label={t("co.middleName")}>
          <input className={`${inputCls} ${borderOk}`} value={p.middle} onChange={(ev) => onChange({ middle: ev.target.value })} placeholder={t("co.middleNamePh")} />
        </Field>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
        <Field label={t("co.lastName")} required error={e("last")}>
          <input className={cls("last")} value={p.last} onChange={(ev) => onChange({ last: ev.target.value })} placeholder={t("co.lastNamePh")} autoComplete="family-name" />
        </Field>
        {index === 0 && (
          <Field label={t("co.email")} required error={errors.email}>
            <input type="email" className={`${inputCls} ${errors.email ? borderBad : borderOk}`} value={contact.email} onChange={(ev) => setContact({ ...contact, email: ev.target.value })} placeholder="you@example.com" autoComplete="email" />
          </Field>
        )}
        {index === 0 && (
          <Field label={t("co.phone")} required error={errors.phone}>
            <div className="flex gap-2">
              <NativeSelect variant="field" ariaLabel={t("co.countryCode")} value={contact.code} onChange={(v) => setContact({ ...contact, code: v })} options={dialCodes} className="w-28 shrink-0" />
              <input type="tel" className={`${inputCls} ${errors.phone ? borderBad : borderOk}`} value={contact.phone} onChange={(ev) => setContact({ ...contact, phone: ev.target.value.replace(/[^\d ]/g, "") })} placeholder="911 000 000" autoComplete="tel-national" />
            </div>
          </Field>
        )}
        <Field label={t("co.nationality")} required error={e("nationality")}>
          <NativeSelect variant="field" ariaLabel={t("co.nationality")} value={p.nationality} onChange={(v) => onChange({ nationality: v })} options={[{ value: "", label: t("co.selectNationality") }, ...countries.map((c) => ({ value: c, label: t(`country.${c}`) }))]} className={`w-full ${e("nationality") ? "[&_select]:border-rose-400" : ""}`} />
        </Field>
        <Field label={t("co.dob")} required error={e("dob")}>
          <input type="date" className={cls("dob")} value={p.dob} onChange={(ev) => onChange({ dob: ev.target.value })} autoComplete="bday" />
        </Field>
        <Field label={t("co.gender")} required error={e("gender")}>
          <NativeSelect variant="field" ariaLabel={t("co.gender")} value={p.gender} onChange={(v) => onChange({ gender: v })} options={[{ value: "", label: t("co.selectGender") }, { value: "Male", label: t("gender.Male") }, { value: "Female", label: t("gender.Female") }]} className={`w-full ${e("gender") ? "[&_select]:border-rose-400" : ""}`} />
        </Field>
      </div>

      {p.type !== "INF" && (
        <div className="mt-6">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("co.chooseSeat")}</p>
          <button type="button" onClick={onSeat} className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-[#0A1E3F] hover:bg-[#12305c] dark:bg-[#DFB75C] dark:hover:bg-[#C59B27] text-white dark:text-[#071326] text-xs font-bold tracking-wider uppercase transition-colors">
            <Armchair className="w-4 h-4" />{p.seat ? t("co.seatChange", { seat: p.seat }) : t("co.seatBtn")}
          </button>
        </div>
      )}

      <h3 className="font-sans font-bold text-2xl text-[#0A1E3F] dark:text-white mt-10 mb-4">{t("co.passportDetails")}</h3>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 px-5 sm:px-6 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-5">
          <Field label={t("co.passportNo")} required error={e("passportNo")}>
            <input className={cls("passportNo")} value={p.passportNo} onChange={(ev) => onChange({ passportNo: ev.target.value.toUpperCase() })} placeholder={t("co.passportNo")} autoComplete="off" />
          </Field>
          <Field label={t("co.passportExp")} required error={e("passportExp")}>
            <input type="date" className={cls("passportExp")} value={p.passportExp} onChange={(ev) => onChange({ passportExp: ev.target.value })} />
          </Field>
        </div>
        <Accordion title={t("co.specialRequests")}>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label={t("co.meal")}>
              <NativeSelect variant="field" ariaLabel={t("co.meal")} value={p.meal} onChange={(v) => onChange({ meal: v })} options={meals.map((m) => ({ value: m, label: t(`meal.${m}`) }))} className="w-full" />
            </Field>
            <label className="flex items-center gap-3 sm:mt-7 cursor-pointer">
              <input type="checkbox" checked={p.wheelchair} onChange={(ev) => onChange({ wheelchair: ev.target.checked })} className="w-4 h-4 accent-[#C59B27]" />
              <span className="text-sm text-slate-700 dark:text-slate-300">{t("co.wheelchair")}</span>
            </label>
            <Field label={t("co.otherRequests")} className="sm:col-span-2">
              <textarea rows={2} value={p.notes} onChange={(ev) => onChange({ notes: ev.target.value })} placeholder={t("co.otherPh")} className={`${inputCls} ${borderOk} h-auto py-3 resize-none`} />
            </Field>
          </div>
        </Accordion>
        <Accordion title={t("co.loyalty")}>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label={t("co.loyaltyProgramme")}>
              <input className={`${inputCls} ${borderOk}`} value={p.loyaltyAirline} onChange={(ev) => onChange({ loyaltyAirline: ev.target.value })} placeholder={t("co.loyaltyProgrammePh")} />
            </Field>
            <Field label={t("co.membership")}>
              <input className={`${inputCls} ${borderOk}`} value={p.loyaltyNo} onChange={(ev) => onChange({ loyaltyNo: ev.target.value })} placeholder={t("co.membership")} />
            </Field>
          </div>
        </Accordion>
      </div>
    </section>
  )
}

function Stepper({ step }: { step: 1 | 2 }) {
  const { t } = useLanguage()
  const items = [t("co.step.passengers"), t("co.step.payment")]
  return (
    <ol className="flex items-center gap-3 mb-8">
      {items.map((label, i) => {
        const n = i + 1
        const done = step > n
        const active = step === n
        return (
          <li key={i} className="flex items-center gap-3">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${done || active ? "bg-[#DFB75C] text-[#071326]" : "bg-slate-200 dark:bg-slate-700 text-slate-500"}`}>
              {done ? <Check className="w-4 h-4" /> : n}
            </span>
            <span className={`text-sm font-semibold ${active ? "text-[#0A1E3F] dark:text-white" : "text-slate-400"}`}>{label}</span>
            {i < items.length - 1 && <span className="w-10 sm:w-16 h-px bg-slate-300 dark:bg-slate-600" />}
          </li>
        )
      })}
    </ol>
  )
}

function LegSummary({ f, date, title }: { f: Flight; date: string; title: string }) {
  const { t } = useLanguage()
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-wider text-[#DFB75C] mb-1">{title}</p>
      <p className="font-bold text-lg">{f.from} - {f.to}</p>
      <p className="text-sm text-slate-300">{fmtField(date, t)}</p>
      <p className="text-sm text-slate-300">{f.depTime} - {f.arrTime}{f.nextDay && " (+1)"} · {f.flightNumber}</p>
    </div>
  )
}

function CheckoutContent() {
  const { t } = useLanguage()
  const sp = useSearchParams()
  const num = (k: string, d: number) => { const v = Number(sp.get(k)); return Number.isFinite(v) && sp.get(k) !== null ? v : d }
  const from = resolveAirport(`(${sp.get("from") ?? "ADD"})`)?.code ?? "ADD"
  const to = resolveAirport(`(${sp.get("to") ?? "DXB"})`)?.code ?? "DXB"
  const depart = sp.get("d") ?? "2026-10-09"
  const retDate = sp.get("r") ?? ""
  const cur: Currency = sp.get("cur") === "ETB" ? "ETB" : "USD"
  const cabinParam = sp.get("cabin") as Cabin
  const cabin: Cabin = cabins.includes(cabinParam) ? cabinParam : "Any"
  const adults = Math.min(Math.max(num("a", 1), 1), 9)
  const children = Math.min(Math.max(num("c", 0), 0), 8)
  const infants = Math.min(Math.max(num("i", 0), 0), adults)

  const outFlight = getFlight(sp.get("dep") ?? "et600", from, to) ?? getFlight("et600", from, to)!
  const retTpl = sp.get("ret")
  const retFlight = retTpl && retDate ? getFlight(retTpl, to, from) : undefined

  const price = useMemo(() => {
    const pax = { adults, children, infants }
    const legs = [priceLeg(outFlight, pax, cabin), ...(retFlight ? [priceLeg(retFlight, pax, cabin)] : [])]
    return legs.reduce((a, l) => ({ base: a.base + l.base, taxes: a.taxes + l.taxes, fee: a.fee + l.fee, total: a.total + l.total }), { base: 0, taxes: 0, fee: 0, total: 0 })
  }, [outFlight, retFlight, adults, children, infants, cabin])

  const [step, setStep] = useState<1 | 2>(1)
  const [passengers, setPassengers] = useState<Passenger[]>(() => [
    ...Array.from({ length: adults }, () => blankPassenger("ADT")),
    ...Array.from({ length: children }, () => blankPassenger("CHD")),
    ...Array.from({ length: infants }, () => blankPassenger("INF")),
  ])
  const [contact, setContact] = useState({ email: "", code: "+251", phone: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [seatFor, setSeatFor] = useState<number | null>(null)
  const [card, setCard] = useState({ number: "", expiry: "", cvc: "" })
  const [cardErrors, setCardErrors] = useState<Record<string, string>>({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const patch = (i: number, p: Partial<Passenger>) => setPassengers((ps) => ps.map((x, j) => (j === i ? { ...x, ...p } : x)))

  // Error values are translation keys, translated when displayed.
  const validatePassengers = () => {
    const er: Record<string, string> = {}
    const req = "err.required"
    passengers.forEach((p, i) => {
      if (!p.passportFile) er[`p${i}.passportFile`] = "err.passportImage"
      if (!p.title) er[`p${i}.title`] = req
      if (!p.first.trim()) er[`p${i}.first`] = req
      if (!p.last.trim()) er[`p${i}.last`] = req
      if (!p.nationality) er[`p${i}.nationality`] = req
      if (!p.dob) er[`p${i}.dob`] = req
      if (!p.gender) er[`p${i}.gender`] = req
      if (!p.passportNo.trim()) er[`p${i}.passportNo`] = req
      if (!p.passportExp) er[`p${i}.passportExp`] = req
      else if (retFlight ? p.passportExp < retDate : p.passportExp < depart) er[`p${i}.passportExp`] = "err.passportValid"
    })
    if (!/\S+@\S+\.\S+/.test(contact.email)) er.email = "err.email"
    if (contact.phone.replace(/\D/g, "").length < 6) er.phone = "err.phone"
    setErrors(er)
    return er
  }

  const goPayment = () => {
    const er = validatePassengers()
    if (Object.keys(er).length) {
      const first = Object.keys(er)[0]
      const idx = first.startsWith("p") ? Number(first.slice(1).split(".")[0]) : 0
      document.getElementById(`passenger-${idx}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    setStep(2)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePayment = (ev: React.FormEvent) => {
    ev.preventDefault()
    const er: Record<string, string> = {}
    if (card.number.replace(/\s/g, "").length < 13) er.number = "err.card"
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(card.expiry)) er.expiry = "err.expiry"
    if (card.cvc.length < 3) er.cvc = "err.cvc"
    setCardErrors(er)
    if (Object.keys(er).length) return
    setIsProcessing(true)
    setTimeout(() => { setIsProcessing(false); setIsSuccess(true) }, 2500)
  }

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white mb-4">{t("co.doneTitle")}</h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
          {t("co.doneText")} <strong>X8F9B2</strong>.
        </p>
        <Link href="/" className="inline-flex px-8 py-3 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold">{t("co.doneHome")}</Link>
      </div>
    )
  }

  const counts = [
    adults && t(adults === 1 ? "pax.adult" : "pax.adults", { n: adults }),
    children && t(children === 1 ? "pax.child" : "pax.children", { n: children }),
    infants && t(infants === 1 ? "pax.infant" : "pax.infants", { n: infants }),
  ].filter(Boolean).join(" · ")
  const dpValid = (d: string) => !Number.isNaN(parseDate(d).getTime())
  const everyone = adults + children + infants
  const stopsText = (f: Flight) => (f.stops === 0 ? t("flights.direct") : t("co.stopVia", { via: f.via ?? "" }))

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="flex-1 min-w-0 w-full">
        <Stepper step={step} />

        {step === 1 && (
          <div className="space-y-8">
            <section className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-sm">
              <h2 className="font-sans font-bold text-2xl text-[#0A1E3F] dark:text-white mb-5">{t("co.flightDetails")}</h2>
              <div className="space-y-5">
                {[{ f: outFlight, date: dpValid(depart) ? depart : "2026-10-09", label: t("co.outbound") }, ...(retFlight ? [{ f: retFlight, date: retDate, label: t("co.return") }] : [])].map(({ f, date, label }) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-slate-50 dark:bg-[#0A1C38] border border-slate-100 dark:border-slate-800 p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A1E3F] to-[#16335c] flex items-center justify-center text-[#DFB75C] font-bold shrink-0">{f.code}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#9E7B1C] dark:text-[#DFB75C]">{label} · {fmtField(date, t)}</p>
                      <p className="font-bold text-[#0A1E3F] dark:text-white">{f.depTime} {f.from} → {f.arrTime}{f.nextDay && " (+1)"} {f.to}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{t(`airline.${f.airline}`)} · {f.flightNumber} · {t("flights.duration", { h: Math.floor(f.durationMinutes / 60), m: f.durationMinutes % 60 })} · {stopsText(f)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/flights" className="inline-block mt-4 text-sm font-semibold text-[#9E7B1C] dark:text-[#DFB75C] hover:underline">{t("co.changeFlights")}</Link>
            </section>
            {passengers.map((p, i) => (
              <div key={i} id={`passenger-${i}`} className="scroll-mt-28">
                <PassengerCard
                  index={i}
                  p={p}
                  errors={errors}
                  onChange={(c) => patch(i, c)}
                  onSeat={() => setSeatFor(i)}
                  contact={contact}
                  setContact={setContact}
                />
              </div>
            ))}
            {Object.keys(errors).length > 0 && (
              <p role="alert" className="text-sm font-medium text-rose-500">{t("err.fix")}</p>
            )}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex justify-end">
              <button type="button" onClick={goPayment} className="h-14 px-12 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold shadow-lg shadow-[#C59B27]/25 hover:-translate-y-0.5 transition-all">
                {t("co.continue")}
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <section className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-sm">
            <h2 className="font-sans font-bold text-2xl text-[#0A1E3F] dark:text-white mb-6">{t("co.paymentMethod")}</h2>
            <div className="p-4 border-2 border-[#C59B27] bg-[#C59B27]/5 rounded-xl flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-[#C59B27]" />
                <span className="font-bold text-[#0A1E3F] dark:text-white">{t("co.card")}</span>
              </div>
              <div className="w-5 h-5 rounded-full border-[5px] border-[#C59B27]" />
            </div>
            <form onSubmit={handlePayment} className="space-y-5" noValidate>
              <Field label={t("co.cardNumber")} required error={cardErrors.number}>
                <input inputMode="numeric" autoComplete="cc-number" className={`${inputCls} ${cardErrors.number ? borderBad : borderOk}`} placeholder="0000 0000 0000 0000" value={card.number}
                  onChange={(ev) => setCard({ ...card, number: ev.target.value.replace(/\D/g, "").slice(0, 19).replace(/(.{4})/g, "$1 ").trim() })} />
              </Field>
              <div className="grid grid-cols-2 gap-5">
                <Field label={t("co.expiry")} required error={cardErrors.expiry}>
                  <input inputMode="numeric" autoComplete="cc-exp" className={`${inputCls} ${cardErrors.expiry ? borderBad : borderOk}`} placeholder="MM/YY" value={card.expiry}
                    onChange={(ev) => { const d = ev.target.value.replace(/\D/g, "").slice(0, 4); setCard({ ...card, expiry: d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d }) }} />
                </Field>
                <Field label={t("co.cvc")} required error={cardErrors.cvc}>
                  <input inputMode="numeric" autoComplete="cc-csc" className={`${inputCls} ${cardErrors.cvc ? borderBad : borderOk}`} placeholder="123" value={card.cvc}
                    onChange={(ev) => setCard({ ...card, cvc: ev.target.value.replace(/\D/g, "").slice(0, 4) })} />
                </Field>
              </div>
              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                <button type="button" onClick={() => setStep(1)} className="h-14 px-8 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold hover:border-[#C59B27] transition-colors">{t("co.backBtn")}</button>
                <button type="submit" disabled={isProcessing} className="flex-1 h-14 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] disabled:opacity-70 text-[#071326] font-bold text-lg shadow-lg shadow-[#DFB75C]/20 transition-colors">
                  {isProcessing ? t("co.processing") : t("co.pay", { amount: formatMoney(price.total, cur) })}
                </button>
              </div>
              <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4 text-green-600" /> {t("co.secure")}
              </p>
            </form>
          </section>
        )}
      </div>

      <aside className="w-full lg:w-[400px] shrink-0">
        <div className="bg-[#0A1E3F] rounded-3xl p-6 sm:p-7 shadow-xl text-white lg:sticky lg:top-28">
          <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#DFB75C] font-bold">{outFlight.code}</div>
            <div className="space-y-4 min-w-0">
              <LegSummary f={outFlight} date={dpValid(depart) ? depart : "2026-10-09"} title={t("co.outbound")} />
              {retFlight && <LegSummary f={retFlight} date={retDate} title={t("co.return")} />}
              <p className="text-xs text-slate-400 flex items-center gap-1.5"><Plane className="w-3.5 h-3.5" />{counts} · {t(`cabin.${cabin === "Any" ? "Economy" : cabin}`)}</p>
            </div>
          </div>

          <h2 className="font-sans font-bold text-xl mb-4">{t("co.priceDetail")}</h2>
          <div className="space-y-3 text-sm pb-5 mb-5 border-b border-white/10">
            <div className="flex justify-between"><span className="text-slate-300">{t("flights.fare", { pax: t(everyone === 1 ? "pax.traveler" : "pax.travelers", { n: everyone }) })}</span><span className="font-medium">{formatMoney(price.base, cur)}</span></div>
            <div className="flex justify-between"><span className="text-slate-300">{t("flights.taxes")}</span><span className="font-medium">{formatMoney(price.taxes, cur)}</span></div>
            <div className="flex justify-between"><span className="text-[#DFB75C]">{t("flights.serviceFee")}</span><span className="font-medium text-[#DFB75C]">{formatMoney(price.fee, cur)}</span></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">{t("flights.total")}</span>
            <span className="font-sans font-bold text-2xl text-[#DFB75C]">{formatMoney(price.total, cur)}</span>
          </div>
          <p className="text-right text-xs text-slate-400 mt-1">{t("co.includes")}</p>
        </div>
      </aside>

      {seatFor !== null && (
        <SeatModal
          label={t("co.passengerLabel", { n: seatFor + 1, type: passengers[seatFor].type })}
          current={passengers[seatFor].seat}
          taken={passengers.filter((_, j) => j !== seatFor).map((x) => x.seat).filter(Boolean)}
          onPick={(s) => patch(seatFor, { seat: s })}
          onClose={() => setSeatFor(null)}
        />
      )}
    </div>
  )
}

export default function CheckoutPage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#071326]">
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <CreditCard className="w-3.5 h-3.5" /><span>{t("co.badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">{t("co.heroTitle")}</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("co.heroDesc")}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link><span>/</span>
            <Link href="/flights" className="hover:text-[#DFB75C] transition-colors">{t("nav.flights")}</Link><span>/</span>
            <span className="text-[#DFB75C]">{t("co.breadcrumb")}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-10">
        <Link href="/flights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#9E7B1C] dark:text-[#DFB75C] hover:text-[#C59B27] mb-8">
          <ArrowLeft className="w-4 h-4" /> {t("co.back")}
        </Link>
        <Suspense fallback={<div className="text-center py-20 text-slate-500">{t("co.loading")}</div>}>
          <CheckoutContent />
        </Suspense>
      </div>
    </main>
  )
}
