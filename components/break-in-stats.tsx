"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { AlertTriangle, TrendingUp, Clock, Home } from "lucide-react"

interface StatItemProps {
  value: number
  target: number
  label: string
  suffix?: string
  icon: React.ReactNode
}

function StatItem({ value, target, label, suffix = "", icon }: StatItemProps) {
  return (
    <div className="group relative bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-gray-200 transition-colors">{icon}</div>
        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
          {value.toLocaleString("de-DE")}
          {suffix}
        </div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{label}</p>
      </div>
    </div>
  )
}

export function BreakInStats() {
  const [einbrueche, setEinbrueche] = useState(0)
  const [schadenssumme, setSchadenssumme] = useState(0)
  const [aufklaerung, setAufklaerung] = useState(0)
  const [alle, setAlle] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const targetEinbrueche = 78436
  const targetSchadenssumme = 350
  const targetAufklaerung = 15.3
  const targetAlle = 6

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setEinbrueche(Math.floor(targetEinbrueche * easeOutQuart))
      setSchadenssumme(Math.floor(targetSchadenssumme * easeOutQuart))
      setAufklaerung(Math.floor(targetAufklaerung * 10 * easeOutQuart) / 10)
      setAlle(Math.floor(targetAlle * easeOutQuart))

      if (currentStep >= steps) {
        clearInterval(timer)
        setEinbrueche(targetEinbrueche)
        setSchadenssumme(targetSchadenssumme)
        setAufklaerung(targetAufklaerung)
        setAlle(targetAlle)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-20 bg-gray-50 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Einbruchzahlen in Deutschland
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Die Zahlen zeigen: Einbruchschutz bleibt entscheidend. Sichern Sie Ihr Zuhause mit professioneller
            Sicherheitstechnik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatItem
            value={einbrueche}
            target={targetEinbrueche}
            label="Wohnungseinbrüche (PKS 2024)"
            icon={<AlertTriangle className="h-8 w-8 text-red-600" />}
          />

          <StatItem
            value={schadenssumme}
            target={targetSchadenssumme}
            label="Mio. € Versicherungsschaden (GDV 2024)"
            suffix=" Mio. €"
            icon={<TrendingUp className="h-8 w-8 text-orange-600" />}
          />

          <StatItem
            value={aufklaerung}
            target={targetAufklaerung}
            label="Aufklärungsquote (PKS 2024)"
            suffix="%"
            icon={<Home className="h-8 w-8 text-yellow-600" />}
          />

          <StatItem
            value={alle}
            target={targetAlle}
            label="Alle X Minuten ein Einbruch"
            icon={<Clock className="h-8 w-8 text-amber-600" />}
          />
        </div>

        <div className="text-center mb-12">
          <p className="text-sm text-gray-500">Quellen: PKS 2024 (BKA) & GDV 2024. Werte gerundet.</p>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-10 border-2 border-gray-700 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">
            Schützen Sie sich jetzt – bevor es zu spät ist
          </h3>
          <p className="text-gray-600 mb-8 text-base md:text-lg text-center max-w-2xl mx-auto">
            Mit professioneller Sicherheitstechnik können Sie das Risiko eines Einbruchs drastisch reduzieren.
            Alarmanlagen schrecken bis zu 95% der Einbrecher ab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105 shadow-md"
            >
              Kostenlose Sicherheitsberatung
            </a>
            <a
              href="/leistungen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
