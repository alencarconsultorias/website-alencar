'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"

type ToolItem = {
  name: string
  imageSrc: string
}

const TOOLS: ToolItem[] = [
  { name: "Google Workspace (Gemini e mais)", imageSrc: "/carousel/google.png" },
  { name: "Zendesk", imageSrc: "/carousel/zendesk.png" },
  { name: "Salesforce", imageSrc: "/carousel/salesforce.png" },
  { name: "Jira Software", imageSrc: "/carousel/jira.png" },
  { name: "Confluence", imageSrc: "/carousel/confluence.png" },
  { name: "VOIP PABX Twilio", imageSrc: "/carousel/twilio.png" },
  { name: "Produtos Microsoft", imageSrc: "/carousel/microsoft.png" },
  { name: "GitHub", imageSrc: "/carousel/github.png" },
  { name: "AWS", imageSrc: "/carousel/aws.png" },
]

export function SalesToolsCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    if (!api) return
    const intervalId = setInterval(() => {
      if (!isPausedRef.current) {
        api.scrollNext()
      }
    }, 2500)
    return () => clearInterval(intervalId)
  }, [api])

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
            setApi={setApi}
            onMouseEnter={() => { isPausedRef.current = true }}
            onMouseLeave={() => { isPausedRef.current = false }}
          >
            <CarouselContent className="-ml-2">
              {TOOLS.map((tool) => (
                <CarouselItem key={tool.name} className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="h-20 flex items-center justify-center rounded-md border bg-white/80 shadow-sm">
                    <div className="relative w-28 h-10">
                      <Image
                        src={tool.imageSrc}
                        alt={tool.name}
                        fill
                        sizes="112px"
                        className="object-contain"
                        priority={false}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}


