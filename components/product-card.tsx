"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductCardProps {
  images: string[]
  name: string
  description: string
  price: string
  details: string
}

export default function Component({ images, name, description, price, details }: ProductCardProps = {
  images: [
    "/placeholder.svg?height=400&width=400&text=Product+1",
    "/placeholder.svg?height=400&width=400&text=Product+2",
    "/placeholder.svg?height=400&width=400&text=Product+3",
    "/placeholder.svg?height=400&width=400&text=Product+4",
    "/placeholder.svg?height=400&width=400&text=Product+5"
  ],
  name: "Product Name",
  description: "Short product description goes here.",
  price: "$99.99",
  details: "Detailed product information goes here. This can include features, specifications, and other relevant details about the product."
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <>
      <Card className="w-full max-w-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => setIsDialogOpen(true)}>
        <div className="relative aspect-square">
          <Image
            src={images[0]}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[900px] h-[90vh] max-h-[900px] flex flex-col rounded-lg overflow-hidden">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-auto">
            <div className="relative h-[50vh] overflow-hidden" ref={emblaRef}>
              <div className="flex h-full">
                {images.map((src, index) => (
                  <div key={index} className="flex-[0_0_100%] h-full min-w-0 relative">
                    <Image
                      src={src}
                      alt={`${name} - Image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 900px) 100vw, 900px"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4 px-4">
              <Button variant="outline" size="icon" onClick={scrollPrev}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button variant="outline" size="icon" onClick={scrollNext}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
            <div className="px-4 py-6">
              <p className="text-2xl font-semibold mb-4">{price}</p>
              <p className="text-sm text-muted-foreground">{details}</p>
            </div>
          </div>
          <div className="flex justify-end mt-6 flex-shrink-0">
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}