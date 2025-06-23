import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa6';

const MedalsAndCertificates = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
        <CardTitle>Medals & Certificates</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
            {
                race: "Spring City Run 2025",
                date: "April 12, 2025",
                image:
                "https://readdy.ai/api/search-image?query=Shiny%2520gold%2520running%2520medal%2520with%2520blue%2520ribbon%252C%2520detailed%2520engraving%2520of%25205K%2520race%2520logo%252C%2520professional%2520product%2520photography%2520on%2520plain%2520background%252C%2520high%2520resolution%252C%2520studio%2520lighting&width=300&height=300&seq=27&orientation=squarish",
            },
            {
                race: "Winter Wonderland Race",
                date: "January 25, 2025",
                image:
                "https://readdy.ai/api/search-image?query=Shiny%2520silver%2520running%2520medal%2520with%2520red%2520ribbon%252C%2520detailed%2520engraving%2520of%252010K%2520race%2520logo%252C%2520professional%2520product%2520photography%2520on%2520plain%2520background%252C%2520high%2520resolution%252C%2520studio%2520lighting&width=300&height=300&seq=28&orientation=squarish",
            },
            {
                race: "New Year Resolution Run",
                date: "January 1, 2025",
                image:
                "https://readdy.ai/api/search-image?query=Shiny%2520bronze%2520running%2520medal%2520with%2520green%2520ribbon%252C%2520detailed%2520engraving%2520of%25205K%2520race%2520logo%252C%2520professional%2520product%2520photography%2520on%2520plain%2520background%252C%2520high%2520resolution%252C%2520studio%2520lighting&width=300&height=300&seq=29&orientation=squarish",
            },
            ].map((medal, index) => (
            <div
                key={index}
                className="flex-wrap border rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer"
            >
                <div className="h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                    src={medal.image}
                    alt={medal.race}
                    className="w-full h-full object-contain p-4"
                    width={300}
                    height={300}
                />
                </div>
                <div className="p-4">
                <h3 className="font-medium">{medal.race}</h3>
                <p className="text-sm text-gray-500">
                    {medal.date}
                </p>
                <div className="mt-3 flex items-center justify-start">
                    <Button
                    variant="outline"
                    size="sm"
                    className="!rounded-button whitespace-nowrap"
                    >
                    <FaDownload className='mr-1'/>{" "}
                    Certificate
                    </Button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </CardContent>
    </Card>
  )
}

export default MedalsAndCertificates
