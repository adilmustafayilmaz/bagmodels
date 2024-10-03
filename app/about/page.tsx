import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
        <p className="text-xl text-muted-foreground">Innovating for a better tomorrow</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              Founded in 2010, our company has been at the forefront of technological innovation for over a decade. We started with a simple idea: to make technology more accessible and user-friendly for everyone.
            </p>
            <p>
              Today, we are proud to say that our products are used by millions of people around the world, helping them to connect, create, and achieve their goals.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/images/test2.jpeg"
              alt="Our company office"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <Card>
          <CardHeader>
            <CardTitle>Empowering Through Technology</CardTitle>
            <CardDescription>Our guiding principle in everything we do</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We believe that technology has the power to transform lives and businesses. Our mission is to create innovative, user-friendly solutions that empower individuals and organizations to reach their full potential.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
