
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProductImageCarousel(props: {images: string[]}) {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi} opts={{
      loop: true
    }} className="flex items-center gap-2 basis-1/2">
      <CarouselPrevious />
      <div className="space-y-2">
        <CarouselContent>
          {props.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <Card className="border-0">
                  <CardContent className="flex items-center justify-center p-2">
                    <img src={image} alt={image} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2">
          <span>{current}</span>
          <span>of</span>
          <span>{count}</span>
        </div>
      </div>
      <CarouselNext />
    </Carousel>
  )
}

