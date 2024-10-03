"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  imageUrl: string
  name: string
  description: string
  price: string
  details: string
}

export default function Component({ imageUrl, name, description, price, details }: ProductCardProps = {
  imageUrl: "/placeholder.svg?height=200&width=200",
  name: "Product Name",
  description: "Short product description goes here.",
  price: "$99.99",
  details: "Detailed product information goes here. This can include features, specifications, and other relevant details about the product."
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Card className="w-full max-w-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => setIsDialogOpen(true)}>
        <div className="relative aspect-square">
          <Image
            src={imageUrl}
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="relative aspect-square">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 425px) 100vw, 425px"
              />
            </div>
            <p className="text-lg font-semibold">{price}</p>
            <p className="text-sm text-muted-foreground">{details}</p>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}