import React from 'react'
import * as echarts from 'echarts'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { TestimonialsItemProps } from '@/types/testimonials'

const Testimonials = ({
  title,
  description,
  testimonials,
}: {
  title:string
  description:string
  testimonials: TestimonialsItemProps[]
}) => {
  React.useEffect(() => {
    const chartDom = document.getElementById('participationChart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Participants', 'Events'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Participants',
            type: 'line',
            data: [5000, 7500, 12000, 15000, 18000, 22500],
            color: '#3b82f6',
          },
          {
            name: 'Events',
            type: 'line',
            data: [25, 35, 48, 53, 65, 78],
            color: '#10b981',
          },
        ],
      };

      myChart.setOption(option);

      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div className="lg:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="border-0 shadow-none">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                              &quot;{testimonial.text}&quot;
                            </p>
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.race}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Participation Trends</CardTitle>
          <CardDescription>Growth in our running community</CardDescription>
        </CardHeader>
        <CardContent>
          <div id="participationChart" className="h-[300px] w-full"></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Testimonials;
